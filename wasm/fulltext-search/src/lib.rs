#![allow(clippy::unused_unit)]

use once_cell::sync::Lazy;
use std::cmp::Reverse;
use wasm_bindgen::prelude::*;

mod filter;
mod storage;

use crate::filter::{Id, PostFilters, Score, XorfProxy};
use crate::storage::Storage;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

static FILTERS: Lazy<PostFilters> = Lazy::new(|| {
    let bytes = include_bytes!("../../../.generated/fulltext-search/storage");
    Storage::from_bytes(bytes).unwrap().filters
});

fn tokenize(query: &str) -> Vec<String> {
    query
        .to_lowercase()
        .split_whitespace()
        .filter(|token| !token.trim().is_empty())
        .map(String::from)
        .collect()
}

fn score(title: &str, search_terms: &[String], filter: &XorfProxy) -> usize {
    let tokens = tokenize(title);
    let title_score = search_terms
        .iter()
        .filter(|term| tokens.contains(term))
        .map(String::from)
        .count();
    // weight title more than content body
    title_score * 5 + filter.score(search_terms)
}

#[wasm_bindgen]
pub fn search(query: String, per_page: usize) -> JsValue {
    let terms = tokenize(&query);

    let mut matches: Vec<(&Id, usize)> = FILTERS
        .iter()
        .map(|(id, filter)| (id, score(&id.0, &terms, filter)))
        .filter(|(_id, score)| score > &0)
        .collect();

    matches.sort_by_key(|key| Reverse(key.1));

    let results: Vec<&Id> = matches
        .into_iter()
        .take(per_page)
        .map(|(id, _score)| id)
        .collect();

    JsValue::from_serde(&results).unwrap()
}

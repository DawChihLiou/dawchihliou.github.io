use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

fn tokenize(query: &str) -> Vec<String> {
    query
        .to_lowercase()
        .split_whitespace()
        .filter(|token| !token.trim().is_empty())
        .map(String::from)
        .collect()
}

/// weight title more than content body
fn score(title: String, search_terms: &Vec<String>) -> usize {
    let tokens = tokenize(&title);
    let score = search_terms
        .iter()
        .filter(|term| tokens.contains(&term))
        .map(String::from)
        .count();
    score * 3
}

#[wasm_bindgen]
pub fn search(query: String, per_page: usize) -> JsValue {
    let terms = tokenize(&query);

    JsValue::from_serde(&terms).unwrap()
}

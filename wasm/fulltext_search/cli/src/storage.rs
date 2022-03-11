use anyhow::Result;
use bincode::{deserialize, serialize, Result as BincodeResult};
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet};
use std::convert::From;
use std::fs;
use strip_markdown::strip_markdown;
use xorf::HashProxy;

use crate::filter::PostFilters;
use crate::post::{Id, Post};

#[derive(Serialize, Deserialize)]
pub struct Storage {
  pub filters: PostFilters,
}

impl From<PostFilters> for Storage {
  fn from(filters: PostFilters) -> Self {
    Storage { filters }
  }
}

impl Storage {
  pub fn to_bytes(&self) -> BincodeResult<Vec<u8>> {
    let encoded: Vec<u8> = serialize(&self)?;
    Ok(encoded)
  }

  pub fn from_bytes(bytes: &[u8]) -> BincodeResult<Self> {
    let decoded = deserialize(bytes)?;
    let storage = Storage { filters: decoded };
    Ok(storage)
  }
}

pub fn write(posts: Vec<Post>, path: String) -> Result<()> {
  let map = build_post_hashmap(posts);
  let filters = build_filters(map)?;
  let storage = Storage::from(filters);
  fs::write(path, storage.to_bytes()?)?;
  Ok(())
}

fn build_post_hashmap(posts: Vec<Post>) -> HashMap<Id, Option<String>> {
  let mut map: HashMap<Id, Option<String>> = HashMap::new();
  for p in posts {
    map.insert((p.title, p.url), p.body);
  }
  map
}

fn build_filters(post_map: HashMap<Id, Option<String>>) -> Result<PostFilters> {
  let tokenized_posts: HashMap<Id, Option<HashSet<String>>> = post_map
    .into_iter()
    .map(|(id, content)| (id, content.map(|body| tokenize(&body))))
    .collect();
  let mut filters = vec![];

  for (id, body_tokens) in tokenized_posts {
    let tokenized_title = tokenize(&id.0);
    let tokens: Vec<String> = if let Some(t) = body_tokens {
      t.union(&tokenized_title).cloned().collect()
    } else {
      tokenized_title.into_iter().collect()
    };
    let filter = HashProxy::from(&tokens);
    filters.push((id, filter));
  }

  Ok(filters)
}

fn tokenize(str: &str) -> HashSet<String> {
  strip_markdown(str)
    .split_whitespace()
    .filter(|word| !word.trim().is_empty())
    .map(str::to_lowercase)
    .collect()
}

#[cfg(test)]
mod test {
  use super::*;
  use xorf::Filter;

  #[test]
  fn test_build_filter() {
    let post = Post {
      title: String::from("This is a title. Don't care - A test title"),
      url: String::from("https://www.thisisaurl.io"),
      body: Some(String::from("Hello world!")),
    };
    let mut map = HashMap::new();
    map.insert((post.title, post.url), post.body);

    let filters = build_filters(map).unwrap();
    let (_id, filter) = filters.first().unwrap();

    assert!(!filter.contains(&String::from("")));

    assert!(filter.contains(&String::from("-")));
    assert!(filter.contains(&String::from("this")));
    assert!(filter.contains(&String::from("world!")));
    assert!(filter.contains(&String::from("don't")));
  }
}

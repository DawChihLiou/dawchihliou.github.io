use std::collections::hash_map::DefaultHasher;
use xorf::{Filter, HashProxy, Xor8};

use crate::post;

pub type XorfProxy = HashProxy<String, DefaultHasher, Xor8>;
pub type PostFilter = (post::Id, XorfProxy);
pub type PostFilters = Vec<PostFilter>;

pub trait Score {
  fn score(&self, terms: &[String]) -> usize;
}

impl Score for XorfProxy {
  fn score(&self, terms: &[String]) -> usize {
    terms.iter().filter(|term| self.contains(term)).count()
  }
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn test_score() {
    let keys: Vec<String> = ["a", "b", "c"].map(String::from).to_vec();
    let proxy = XorfProxy::from(&keys);

    for key in keys {
      assert!(proxy.contains(&key))
    }

    assert_eq!(proxy.score(&[]), 0);
    assert_eq!(proxy.score(&[String::from("a")]), 1);
    assert_eq!(
      proxy.score(&[String::from("a"), String::from("a"), String::from("b")]),
      3
    );
    assert_eq!(
      proxy.score(&[String::from("a"), String::from("b"), String::from("c")]),
      3
    );
    assert_eq!(
      proxy.score(&[String::from("a"), String::from("qwe"), String::from("d")]),
      1
    );
  }
}

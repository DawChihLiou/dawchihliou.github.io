use std::collections::hash_map::DefaultHasher;
use xorf::{Filter, HashProxy, Xor8};

type Title = String;
type Url = String;

pub type Id = (Title, Url);
pub type XorfProxy = HashProxy<String, DefaultHasher, Xor8>;
pub type PostFilter = (Id, XorfProxy);
pub type PostFilters = Vec<PostFilter>;

pub trait Score {
  fn score(&self, terms: &[String]) -> usize;
}

impl Score for XorfProxy {
  fn score(&self, terms: &[String]) -> usize {
    terms.iter().filter(|term| self.contains(term)).count()
  }
}

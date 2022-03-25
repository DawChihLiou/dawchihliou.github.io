use serde::{Deserialize, Serialize};
use serde_json::{from_str, Result};

type Title = String;
type Url = String;
type Body = String;

pub type Id = (Title, Url);

#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub struct Post {
  pub title: Title,
  pub url: Url,
  pub body: Option<Body>,
}

pub fn read(input: String) -> Result<Vec<Post>> {
  from_str(&input)
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn test_read() {
    let raw = "[{\"title\":\"this is a title\",\"url\":\"https://www.thisisaurl.io\",\"body\":\"Hello world!\"}]".to_owned();
    let expected = Post {
      title: "this is a title".to_owned(),
      url: "https://www.thisisaurl.io".to_owned(),
      body: Some("Hello world!".to_owned()),
    };
    let deserialized = read(raw);
    if let Ok(posts) = deserialized {
      for post in posts {
        assert_eq!(post, expected)
      }
    }
  }
}

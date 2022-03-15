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
    let raw = String::from("[{\"title\":\"this is a title\",\"url\":\"https://www.thisisaurl.io\",\"body\":\"Hello world!\"}]");
    let expected = Post {
      title: String::from("this is a title"),
      url: String::from("https://www.thisisaurl.io"),
      body: Some(String::from("Hello world!")),
    };
    let deserialized = read(raw);
    if let Ok(posts) = deserialized {
      for post in posts {
        assert_eq!(post, expected)
      }
    }
  }
}

use crate::filter::PostFilters;
use bincode::{deserialize, Result};
use serde::{Deserialize, Serialize};

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
  pub fn from_bytes(bytes: &[u8]) -> Result<Self> {
    let decoded = deserialize(bytes)?;
    let storage = Storage { filters: decoded };
    Ok(storage)
  }
}

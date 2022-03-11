use anyhow::{Context, Result};
use std::fs::read_to_string;

mod filter;
mod post;
mod storage;

fn main() -> Result<()> {
    let path = String::from("../../../.generated/tinysearch/index.json");
    let posts: Vec<post::Post> = post::read(
        read_to_string(&path).with_context(|| format!("directory {:?} not found", &path))?,
    )?;
    storage::write(posts, String::from("../storage"))?;

    Ok(())
}

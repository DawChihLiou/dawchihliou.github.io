use anyhow::{Context, Result};
use std::fs::read_to_string;
use std::process::{Command, Stdio};

mod filter;
mod post;
mod storage;

fn main() -> Result<()> {
    let path = String::from(".generated/fulltext-search/index.json");
    let posts: Vec<post::Post> = post::read(
        read_to_string(&path).with_context(|| format!("directory {:?} not found", &path))?,
    )?;
    storage::write(posts, String::from(".generated/fulltext-search/storage"))?;

    let mut pack_cmd = Command::new("wasm-pack");
    pack_cmd
        .arg("build")
        .arg("wasm/fulltext-search")
        .stderr(Stdio::inherit())
        .stdout(Stdio::inherit())
        .output()
        .with_context(|| format!("Failed to run {:?}", pack_cmd))?;

    let mut opt_cmd = Command::new("wasm-opt");
    opt_cmd
        .arg("-Oz")
        .arg("-o")
        .arg("wasm/fulltext-search/pkg/fulltext_search_core_bg.wasm")
        .arg("wasm/fulltext-search/pkg/fulltext_search_core_bg.wasm")
        .stderr(Stdio::inherit())
        .stdout(Stdio::inherit())
        .output()
        .with_context(|| format!("Failed to run {:?}", opt_cmd))?;

    println!("🦀 Profiling Wasm code size...");

    let mut twiggy_cmd = Command::new("twiggy");
    twiggy_cmd
        .arg("top")
        .arg("-n")
        .arg("20")
        .arg("wasm/fulltext-search/pkg/fulltext_search_core_bg.wasm")
        .stderr(Stdio::inherit())
        .stdout(Stdio::inherit())
        .output()
        .with_context(|| format!("Failed to run {:?}", twiggy_cmd))?;

    println!("🦀 All Done!");
    Ok(())
}

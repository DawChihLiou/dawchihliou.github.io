# Wasm Full Text Search

🦀 + 🕸 = ❤️

The Full Text Search in WebAssembly is aiming for minimizing bundle size and heavy computation on the client side.

It is implemented with [Xor Filter](https://arxiv.org/abs/1912.08258), a fast and memory efficient data structure for estimating the existence of an entity. The idea is to convert content in plain text into Xor Filters in build-time, and to ship the search function with the Xor Filters in WebAssembly.

_This wasm module implementation is inspired by Matthias Endler's [tinysearch](https://github.com/tinysearch/tinysearch)._

## Prerequisite

[Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

```bash
curl https://sh.rustup.rs -sSf | sh
```

`wasm-pack`

```bash
cargo install wasm-pack
```

`binaryen`

```bash
brew install binaryen
```

`twiggy`

```bash
cargo install twiggy
```

## Installation

At the project root, run

```bash
# execute script with Cargo
cargo run scripts/fulltext-search

# or npm
yarn fulltext-search
```

It will generate the WebAssembly and JavaScript glue code in `wasm/fulltext-search/pkg`.

## Tools

- [`wasm-pack`](https://rustwasm.github.io/docs/wasm-pack/introduction.html): build Wasm with Rust code.
- [`wasm-opt`](https://github.com/WebAssembly/binaryen): optimize code size.
- [Twiggy](https://rustwasm.github.io/twiggy/index.html): Code size profiler for Wasm.

## Further Reading

- [Shrinking `.wasm` Code Size](https://rustwasm.github.io/docs/book/reference/code-size.html)
- [A Tiny, Static, Full-Text Search Engine using Rust and WebAssembly](https://endler.dev/2019/tinysearch)
- [What is an XOR filter?](https://stackoverflow.com/questions/67527507/what-is-an-xor-filter)
- [Crate `xorf`](https://docs.rs/xorf/0.8.0/xorf/)
- [tinysearch](https://github.com/tinysearch/tinysearch)

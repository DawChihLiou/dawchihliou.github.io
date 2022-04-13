# Daw-Chih's Portfolio

This site is built with

- [Next.js](https://nextjs.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Icons](https://react-icons.github.io/react-icons/)
- [MDX](https://mdxjs.com/)
- [Prism themes](https://github.com/PrismJS/prism-themes)
- [Contentlayer](https://www.contentlayer.dev)
- [unified](https://github.com/unifiedjs/unified)
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

The Hero design is inspired by [Vercel](https://vercel.com/).

## Versions

- v1: [Source code](https://github.com/DawChihLiou/dawchihliou.github.io/tree/archive/1.0)
- v2: [Source code](https://github.com/DawChihLiou/dawchihliou.github.io/tree/v2.4.3) ([Web Archive](https://web.archive.org/web/20220207143307/https://dawchihliou.github.io/))
- v3: [Source code](https://github.com/DawChihLiou/dawchihliou.github.io/tree/3.0.0) ([Live](https://dawchihliou.github.io))

## Getting Started

First, install the dependencies

```bash
yarn
```

and run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Wasm Full Text Search

🦀 + 🕸 = ❤️

The Full Text Search in WebAssembly is aiming for minimizing bundle size and heavy computation on the client side. Make sure Cargo and the following tools are installed.

[Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

```bash
curl https://sh.rustup.rs -sSf | sh
```

[`wasm-pack`](https://rustwasm.github.io/docs/wasm-pack/introduction.html)

```bash
cargo install wasm-pack
```

[`binaryen`](https://github.com/WebAssembly/binaryen)

```bash
brew install binaryen
```

[Twiggy](https://rustwasm.github.io/twiggy/index.html)

```bash
cargo install twiggy
```

### Building `wasm/fulltext-search`

At the project root, run

```bash
# execute script with Cargo
cargo run scripts/fulltext-search

# or npm
yarn fulltext-search
```

It will generate the WebAssembly and JavaScript glue code in `wasm/fulltext-search/pkg`.

To lint the script, run

```bash
cargo clippy
```

More information about Clippy, please check out [its repository](https://github.com/rust-lang/rust-clippy).

## Available Scripts

#### `yarn dev`

to start development server

#### `yarn start`

to start production server

#### `yarn build`

to generate production build. The built assets will be in under `/.next` directory.

#### `yarn export`

to export the app to static HTML, which can be run standalone without the need of a Node.js server.

#### `yarn deploy`

to deploy the static app from `yarn export` to github pages. The deployment is triggered by merging into `gh-pages` branch.

#### `yarn fulltext-search`

to generate `fulltext-search` WebAssembly module.

#### `yarn test`

to run unit testing with [Jest](https://jestjs.io). To run unit tests in CI, run `yarn test:ci`.

#### `yarn test:e2e`

to run end-to-end testing with [Playwright](https://playwright.dev). To run unit tests in CI, run `yarn test:e2e:ci`.

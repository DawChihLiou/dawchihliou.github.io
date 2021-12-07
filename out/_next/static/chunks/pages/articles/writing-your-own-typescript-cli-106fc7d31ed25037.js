;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    3905: function (a, b, c) {
      'use strict'
      c.d(b, {
        kt: function () {
          return m
        },
      })
      var d = c(7294)
      function e(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        )
      }
      function f() {
        return (f =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      function g(a, b) {
        var c = Object.keys(a)
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a)
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable
            })),
            c.push.apply(c, d)
        }
        return c
      }
      function h(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {}
          b % 2
            ? g(Object(c), !0).forEach(function (b) {
                e(a, b, c[b])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
            : g(Object(c)).forEach(function (b) {
                Object.defineProperty(
                  a,
                  b,
                  Object.getOwnPropertyDescriptor(c, b)
                )
              })
        }
        return a
      }
      var i = d.createContext({}),
        j = function (a) {
          var b = d.useContext(i),
            c = b
          return a && (c = 'function' == typeof a ? a(b) : h(h({}, b), a)), c
        },
        k = {
          inlineCode: 'code',
          wrapper: function (a) {
            var b = a.children
            return d.createElement(d.Fragment, {}, b)
          },
        },
        l = d.forwardRef(function (a, b) {
          var c = a.components,
            e = a.mdxType,
            f = a.originalType,
            g = a.parentName,
            i = (function (a, b) {
              if (null == a) return {}
              var c,
                d,
                e = (function (a, b) {
                  if (null == a) return {}
                  var c,
                    d,
                    e = {},
                    f = Object.keys(a)
                  for (d = 0; d < f.length; d++)
                    (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
                  return e
                })(a, b)
              if (Object.getOwnPropertySymbols) {
                var f = Object.getOwnPropertySymbols(a)
                for (d = 0; d < f.length; d++)
                  (c = f[d]),
                    !(b.indexOf(c) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(a, c) &&
                      (e[c] = a[c])
              }
              return e
            })(a, ['components', 'mdxType', 'originalType', 'parentName']),
            l = j(c),
            m = e,
            n = l[''.concat(g, '.').concat(m)] || l[m] || k[m] || f
          return c
            ? d.createElement(n, h(h({ ref: b }, i), {}, { components: c }))
            : d.createElement(n, h({ ref: b }, i))
        })
      function m(a, b) {
        var c = arguments,
          e = b && b.mdxType
        if ('string' == typeof a || e) {
          var f = c.length,
            g = new Array(f)
          g[0] = l
          var h = {}
          for (var i in b) hasOwnProperty.call(b, i) && (h[i] = b[i])
          ;(h.originalType = a),
            (h.mdxType = 'string' == typeof a ? a : e),
            (g[1] = h)
          for (var j = 2; j < f; j++) g[j] = c[j]
          return d.createElement.apply(null, g)
        }
        return d.createElement.apply(null, c)
      }
      l.displayName = 'MDXCreateElement'
    },
    8305: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/writing-your-own-typescript-cli',
        function () {
          return c(5772)
        },
      ])
    },
    6089: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return l
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(9008),
        f = c(7747),
        g = c.n(f),
        h = c(5699),
        i = c(9754),
        j = c.n(i)
      function k() {
        return (0, d.jsxs)('article', {
          className: j().wrap,
          children: [
            (0, d.jsx)('img', {
              src: '/optimized/portrait-sm.png',
              alt: 'Daw-Chih Liou',
              className: j().avatar,
              loading: 'lazy',
            }),
            (0, d.jsxs)('div', {
              children: [
                (0, d.jsx)('a', {
                  href: h.Z.home,
                  className: j().author,
                  children: (0, d.jsx)('span', { children: 'Daw-Chih Liou' }),
                }),
                (0, d.jsx)('p', { children: h.Z.description }),
              ],
            }),
          ],
        })
      }
      function l(a) {
        var b = a.children,
          c = a.title,
          f = a.description,
          i = a.url,
          j = a.cover,
          l = a.coverWidth,
          m = a.coverHeight,
          n = a.hideAuthor
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(e.default, {
              children: [
                (0, d.jsx)('title', { children: c }),
                (0, d.jsx)('meta', { name: 'description', content: f }),
                (0, d.jsx)('meta', { property: 'og:title', content: c }),
                (0, d.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, d.jsx)('meta', {
                  property: 'og:url',
                  content: void 0 === i ? '' : i,
                }),
                (0, d.jsx)('meta', { property: 'og:description', content: f }),
                (0, d.jsx)('meta', {
                  property: 'og:image',
                  content: ''.concat(h.Z.home).concat(void 0 === j ? '' : j),
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:width',
                  content: void 0 === l ? '' : l,
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:height',
                  content: void 0 === m ? '' : m,
                }),
                (0, d.jsx)('meta', { property: 'og:image:alt', content: f }),
              ],
            }),
            (0, d.jsx)('article', {
              children: (0, d.jsx)('div', {
                className: g().container,
                children: (0, d.jsxs)('div', {
                  className: g().wrap,
                  children: [b, !n && (0, d.jsx)(k, {})],
                }),
              }),
            }),
          ],
        })
      }
    },
    5772: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          meta: function () {
            return f
          },
          default: function () {
            return i
          },
        }),
        c(7294)
      var d = c(3905),
        e = c(6089),
        f = {
          title: 'Writing Your Own TypeScript CLI',
          description:
            "Writing CLIs feels like a super power💯 You can write one too! I'll show you how to develop a CLI with TypeScript step by step and demonstrate how you can apply your CLI in CD/CI pipelines. We're going to uncover the power of Google Lighthouse and many more amazing npm packages!",
          url: '/articles/writing-your-own-typescript-cli',
          cover: 'optimized/writing-your-own-cli.png',
          category: 'TypeScript',
          coverWidth: '1411',
          coverHeight: '682',
        },
        g = { meta: f },
        h = function (a) {
          var b = a.children
          return (0, d.kt)(
            e.Z,
            {
              title: f.title,
              description: f.description,
              cover: f.cover,
              url: f.url,
              coverWidth: f.coverWidth,
              coverHeight: f.coverHeight,
            },
            b
          )
        }
      function i(a) {
        var b = a.components,
          c = (function (a, b) {
            if (null == a) return {}
            var c,
              d,
              e = (function (a, b) {
                if (null == a) return {}
                var c,
                  d,
                  e = {},
                  f = Object.keys(a)
                for (d = 0; d < f.length; d++)
                  (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
                return e
              })(a, b)
            if (Object.getOwnPropertySymbols) {
              var f = Object.getOwnPropertySymbols(a)
              for (d = 0; d < f.length; d++)
                (c = f[d]),
                  !(b.indexOf(c) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(a, c) &&
                    (e[c] = a[c])
            }
            return e
          })(a, ['components'])
        return (0, d.kt)(
          h,
          Object.assign({}, g, c, { components: b, mdxType: 'MDXLayout' }),
          (0, d.kt)(
            'h1',
            Object.assign({}, { id: 'writing-your-own-typescript-cli' }),
            'Writing Your Own TypeScript CLI'
          ),
          (0, d.kt)('img', {
            src: '/optimized/writing-your-own-cli.webp',
            alt: 'Portfolio snapshot',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)('h2', Object.assign({}, { id: 'tldr' }), 'TL;DR'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🍳 You can write a CLI with ease. It's simpler than you might think:)"
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🗼 We'll write a CLI together to generate a Lighthouse performance report."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🔦 You'll see how to configure TypeScript, ESLint, and Prettier."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "📚 You'll see how to use some awesome libraries like ",
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://github.com/chalk/chalk' }
                ),
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'chalk')
              ),
              ' and ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://github.com/tj/commander.js' }
                ),
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'commander')
              ),
              '.'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🧑‍🔬 You'll see how to spawn multiple processes."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🚀 You'll see how to use your CLI in GitHub Actions."
            )
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'Writing CLIs feels like a super power, and you can write one too💯'
          ),
          (0, d.kt)(
            'p',
            null,
            "I'll show you how to develop a CLI with TypeScript step by step and demonstrate how you can apply your CLI in CD/CI pipelines."
          ),
          (0, d.kt)('p', null, 'This article covers three major topics:'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: '#configuring-tooling' }
                ),
                'Setting up A TypeScript Project with ESLint and Prettier'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: '#writing-a-cli-to-run-lighthouse' }
                ),
                'Writing a CLI to Run Lighthouse in Multiple Process'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: '#using-the-cli-in-github-actions' }
                ),
                'Using the CLI in Action with GitHub Actions'
              )
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Feel free to jump to the parts that you're interested in."
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'real-world-use-case' }),
            'Real-world Use Case'
          ),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://developers.google.com/web/tools/lighthouse/' }
              ),
              'Lighthouse'
            ),
            " is one of the most popular dev tools to gain insight to webpage performances.\nIt offers a CLI and node module so we can run it programmatically.\nHowever, you'll notice the Lighthouse scores vary if you run it multiple times on the same webpage.\nThat's because there's a known ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developers.google.com/web/tools/lighthouse/variability',
                }
              ),
              'variability'
            ),
            ".\nThere're many factors that plays into the Lighthouse variability.\nOne of the recommanded strategies to deal with variance is to run Lighthouse multiple times."
          ),
          (0, d.kt)(
            'p',
            null,
            "We'll be working on a CLI to implement this strategy in this article. The implementation will cover:"
          ),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'Running multiple Lighthouse analyses'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'Aggregating data and calculating the median scores'
            )
          ),
          (0, d.kt)('p', null, "I hope you're excited!"),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'This article will discuss one of the scripts in 🌈🌈🌈 ',
            (0, d.kt)(
              'strong',
              { parentName: 'p' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'strong' },
                  { href: 'https://github.com/DawChihLiou/dx-scripts' }
                ),
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'dx-scripts')
              )
            ),
            '🌈🌈🌈'
          ),
          (0, d.kt)(
            'p',
            null,
            "It's available on ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/package/dx-scripts' }
              ),
              'npm'
            ),
            '.\nI recently wrote the first script in the library and there are more to come!\nFeel free to install it and try it in your development workflow. Please give it a ⭐️ on ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/DawChihLiou/dx-scripts' }
              ),
              'GitHub'
            ),
            ' if the scripts are useful:)'
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'peaking-the-projects-file-structure' }),
            "Peaking The Project's File Structure"
          ),
          (0, d.kt)(
            'p',
            null,
            'This is how the file structure will look like after configuring the tooling.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              'my-script\n├── .eslintrc.js\n├── .prettierrc.json\n├── package.json\n├── tsconfig.json\n├── bin\n└── src\n    ├── utils.ts\n    └── index.ts\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'The source files are located in the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/src'),
            " directory.\nWe'll compile them and output ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.js'),
            ' files in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory.'
          ),
          (0, d.kt)(
            'p',
            null,
            'The ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            " directory will be the entry point of the command when your users are using the CLI.\nYou'll learn how to configure it in a bit."
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'configuring-tooling' }),
            'Configuring Tooling'
          ),
          (0, d.kt)(
            'p',
            null,
            "We'll be using ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://yarnpkg.com/' }
              ),
              'Yarn'
            ),
            ' as our package manager for this project.\nFeel free to use ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/' }
              ),
              'npm'
            ),
            ' if you prefer.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's initiate the project. We'll create a directory called ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'my-script'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'mkdir'
              ),
              ' my-script ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token builtin class-name' }
                ),
                'cd'
              ),
              ' my-script\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "At the project root, let's create a ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ' with Yarn:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' init\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'configuring-typescript' }),
            'Configuring TypeScript'
          ),
          (0, d.kt)(
            'p',
            null,
            'To install ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://www.typescriptlang.org/' }
              ),
              'TypeSciript'
            ),
            ' and the types for ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://nodejs.org/en/' }
              ),
              'NodeJS'
            ),
            ', run:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev typescript @types/node\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Now we are ready to configure TypeScript in the project.\nWe can initiate a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'tsconfig.json'),
            ' with ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'tsc'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ npx tsc --init\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In order to compile the TypeScript code and output the result to the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory, we need to specify it in the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'compilerOptions'),
            ' in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'tsconfig.json'),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// tsconfig.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' "compilerOptions": {\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "outDir": "./bin"\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   /* rest of the default options */\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)('p', null, "That's it! Let's test it."),
          (0, d.kt)(
            'p',
            null,
            'At the project root, run the following command to create an ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'index.ts'),
            ' file in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/src'),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'mkdir'
              ),
              ' src ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'touch'
              ),
              ' src/index.ts\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'index.ts'),
            ", we'll put a simple ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'console.log'),
            ' and run the TypeScript compiler to see if the compiled files are in the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// src/index.ts'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token console class-name' }
                ),
                'console'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'log'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'Hello from my-script👋'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, 'Then run:'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# compile `/src`'
              ),
              '\n$ npx tsc\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'You should see an ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'index.js'),
            ' file in the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's execute the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory from the project root,'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ node bin\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# Hello from my-script 👋'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'configuring-eslint' }),
            'Configuring ESLint'
          ),
          (0, d.kt)(
            'p',
            null,
            'Now we ready for ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://eslint.org/' }
              ),
              'ESLint'
            ),
            '. We can go ahead and install it:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev eslint\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "ESLint is a very powerful linter.\nIt doesn't come with TypeScript support so we'll install a ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/typescript-eslint/typescript-eslint/tree/6e159ee7cf8ef2028792cb8ee636cf6143fa967f/packages/parser',
                }
              ),
              'TypeScript parser'
            ),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'We also installed the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/typescript-eslint/typescript-eslint/tree/6e159ee7cf8ef2028792cb8ee636cf6143fa967f/packages/eslint-plugin',
                }
              ),
              (0, d.kt)(
                'inlineCode',
                { parentName: 'a' },
                '@typescript-eslint/eslint-plugin'
              )
            ),
            ".\nThis is because we'll need it to extend the ESLint rules for TypeScript-specific features."
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's configure eslint in the project. We'll create a ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.eslintrc.js'),
            ' at the project root:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'touch'
              ),
              ' .eslintrc.js\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Inside ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.eslintrc.js'),
            ', we can configure eslint as following:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-js' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-js' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// .eslintrc.js'
              ),
              '\n\nmodule',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token property-access' }
                ),
                'exports'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  parser',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'@typescript-eslint/parser'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'@typescript-eslint'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'extends'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'plugin:@typescript-eslint/recommended'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'To understand the configuration a little more, we first used ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              '@typescript-eslint/parser'
            ),
            " to enable ESLint's ability to understand TypeScript syntax.\nThen we applied ",
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              '@typescript-eslint/eslint-plugin'
            ),
            ' plugin to extend the rules.\nFinally we enabled all the recommanded rules form ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              '@typescript-eslint/eslint-plugin'
            ),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're interested in learning more about the configuration, you can checkout the ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#usage',
                }
              ),
              'official doc'
            ),
            ' for more details.'
          ),
          (0, d.kt)(
            'p',
            null,
            'We can now add a linting script to ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// package.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' "scripts": {\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "lint": "eslint \'**/*.{js,ts}\' --fix",\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)('p', null, 'To run the script:'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' lint\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'configuring-prettier' }),
            'Configuring Prettier'
          ),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://prettier.io/' }
              ),
              'Prettier'
            ),
            " is a very powerful formatter.\nIt comes with a set of rules to format our code.\nSometimes the rules can conflict with ESLint rules so I'll show you how to configure them."
          ),
          (0, d.kt)(
            'p',
            null,
            'First install Prettier and create a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.prettierrc.json'),
            ' file at the project root to hold the configuration,'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev --exact prettier ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'touch'
              ),
              ' .prettierrc.json\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'You can edit ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.prettierrc.json'),
            ' and add your custom rules.\nYou can find ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://prettier.io/docs/en/options.html' }
              ),
              'the options in the official doc'
            ),
            '.'
          ),
          (0, d.kt)('p', null, "Here's an example:"),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-json' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-json' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// .prettierrc.json'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  trailingComma',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              " 'all'",
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  singleQuote',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'true'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              ';\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Prettier provides handy integration with ESLint.\nWe'll follow the ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/prettier/eslint-plugin-prettier#recommended-configuration',
                }
              ),
              'recommened configuration'
            ),
            ' from the official doc.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev eslint-config-prettier eslint-plugin-prettier\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "We'll add the plugin at the last position in the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'extensions'),
            ' array.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// .eslintrc.js\n\nmodule.exports = {\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' extends: [\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "   'plugin:@typescript-eslint/recommended',\n"
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "    'plugin:prettier/recommended',\n"
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' ],\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "It's very important that Prettier is the last extension.\nBy applying last, it disables all formatting-related ESLint rules so the conflicts will fall back to Prettier."
          ),
          (0, d.kt)(
            'p',
            null,
            'We can now add a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'prettier'),
            ' script to ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// package.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' "scripts": {\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "prettier": "prettier --write ."\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)('p', null, 'To run the script:'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' prettier\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'configuring-packagejson' }),
            'Configuring ',
            (0, d.kt)('inlineCode', { parentName: 'h3' }, 'package.json')
          ),
          (0, d.kt)(
            'p',
            null,
            'We are almost ready with our configuration.\nThe only thing missing is a way to execute the project the way you would execute a command.\nInstead of executing the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' with ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'node'),
            ', we want to be able to call the command directly:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# instead of "node bin", we want to call the command by its name like this:'
              ),
              '\n$ my-script\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'How do we do that? First we need to add a ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/Shebang_(Unix)' }
              ),
              'Shebang'
            ),
            ' on the top of our ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'src/index.ts'),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' #!/usr/bin/env node\n'
                )
              ),
              "\nconsole.log('Hello from my-script👋')\n"
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'The Shebang is to inform Unix-like operating systems that this is NodeJS executable.\nSo we can call the script directly without specifying ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'node'),
            '.'
          ),
          (0, d.kt)('p', null, "Let's compile again,"),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ npx tsc\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "There's another thing we need before it all works. We need to assign the executable right to the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'bin/index.js'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'chmod'
              ),
              ' u+x ./bin/index.js\n'
            )
          ),
          (0, d.kt)('p', null, "Let's give it a go:"),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# execute directly'
              ),
              '\n$ ./bin/index.js\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# Hello from my-script👋'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Nice, we are almost there.\nThe last thing is to create a symlink between the command and the executable.\nFirst, we need to specify the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'bin'),
            ' property in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ' and point the command to the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'bin/index.js'),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// package.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  "bin": {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "my-script": "./bin/index.js"\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Second, create a symlink with Yarn at the project root:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'link'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# You can always unlink: "yarn unlink my-script"'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, "Let's see if it works🤩"),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ my-script\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# Hello from my-script👋'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, 'It works🎉🎉🎉'),
          (0, d.kt)(
            'p',
            null,
            "Just to make the development easier, we'll add a couple of scripts in ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// package.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' "scripts": {\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "build": "tsc && yarn chmod",\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    "chmod": "chmod u+x ./bin/index.js",\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Now we can run ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'yarn build'),
            ' to compile and automatically assign the executable right to the entry file.'
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'writing-a-cli-to-run-lighthouse' }),
            'Writing a CLI to Run Lighthouse'
          ),
          (0, d.kt)(
            'p',
            null,
            "It's time to implement our core logic.\nWe'll explore a few handy npm packages to help us write the CLI and we'll dive into the magic of Lighthouse."
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'coloring-consolelog-with-chalk' }),
            'Coloring ',
            (0, d.kt)('inlineCode', { parentName: 'h3' }, 'console.log'),
            ' with ',
            (0, d.kt)('inlineCode', { parentName: 'h3' }, 'chalk')
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' chalk\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/chalk/chalk' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'chalk')
            ),
            ' gives colors to your ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'console.log'),
            '. For example:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// src/index.ts'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'import'
              ),
              ' chalk ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'from'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'chalk'"
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token console class-name' }
                ),
                'console'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'log'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'chalk',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'green'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'Hello from my-script👋'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Now run ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              'yarn build && my-script'
            ),
            ' at your project root and see the log.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's use ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'chalk'),
            ' in a more meaningful way.\n',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://web.dev/performance-scoring/#color-coding' }
              ),
              'Lighthouse performane scores are color coded'
            ),
            '.\nWe can write a utility function that shows the display value with a color based on the performance score.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// src/utils.ts'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'import'
              ),
              ' chalk ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'from'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'chalk'"
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * Coloring display value based on Lighthouse score.\n *\n * - 0 to 0.49 (red): Poor\n * - 0.5 to 0.89 (orange): Needs Improvement\n * - 0.9 to 1 (green): Good\n */'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'export'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'function'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'draw'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'score',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token builtin' }
                ),
                'number'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token builtin' }
                ),
                'number'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'if'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'score ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.9'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' score ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '1'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              ' chalk',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'green'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token template-string' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  'value',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  ' (Good)'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'if'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'score ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.5'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' score ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.9'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              ' chalk',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'yellow'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token template-string' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  'value',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  ' (Needs Improvement)'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              ' chalk',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'red'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token template-string' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  'value',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  ' (Poor)'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Use it in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'src/index.ts'),
            ' and try log something with ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'draw()'),
            ' to see the result.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// src/index.ts'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'import'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' draw ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'from'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'./utils'"
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token console class-name' }
                ),
                'console'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'log'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token template-string' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  'Perf score is '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token function' }
                    ),
                    'draw'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '('
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token number' }
                    ),
                    '0.64'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    ','
                  ),
                  ' ',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token number' }
                    ),
                    '64'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    ')'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'designing-a-command-with-commander' }),
            'Designing A Command with ',
            (0, d.kt)('inlineCode', { parentName: 'h3' }, 'commander')
          ),
          (0, d.kt)(
            'p',
            null,
            'To make our CLI interative, we need to be able to read user inputs and parse them.\n',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/tj/commander.js' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'commander')
            ),
            ' is a descriptive way of defining a interface.\nWe can implement our interface in a very clean and documentary fashion.'
          ),
          (0, d.kt)(
            'p',
            null,
            'How do we want the users to interact with the CLI is to simply pass a URL for Lighthouse to run.\nWe also want to pass in an option to specify how many times Lighthouse should run on the URL.\nLike this:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# without an option'
              ),
              '\n$ my-script https://dawchihliou.github.io/\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# with an option'
              ),
              '\n$ my-script https://dawchihliou.github.io/ --iteration',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '3'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's see how quickly we can implement our design with ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'commander'),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' commander\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's clear the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'src/index.ts'),
            ' and start fresh:'
          ),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'src/index.ts')
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              '#',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '/'
              ),
              'usr',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '/'
              ),
              'bin',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '/'
              ),
              'env node\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'import'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token maybe-class-name' }
                ),
                'Command'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'from'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'commander'"
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'async'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'function'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' program ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'new'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token maybe-class-name' }
                  ),
                  'Command'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n  program\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'argument'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'<url>'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'Lighthouse will run the analysis on the URL.'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'option'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'-i, --iteration <type>'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'How many times Lighthouse should run the analysis per URL'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'5'"
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'parse'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' url ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' program',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token property-access' }
                ),
                'args'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' options ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' program',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'opts'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token console class-name' }
                ),
                'console'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token method function property-access' }
                ),
                'log'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token template-string' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  'url: '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  'url',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token string' }
                  ),
                  ', iteration: '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token interpolation' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '${'
                  ),
                  'options',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '.'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token property-access' }
                    ),
                    'iteration'
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      {
                        className:
                          'token interpolation-punctuation punctuation',
                      }
                    ),
                    '}'
                  )
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token template-punctuation string' }
                  ),
                  '`'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'We first instantiated a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Command'),
            ' and we used the instance ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'program'),
            ' to define:'
          ),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'an ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://github.com/tj/commander.js#command-arguments',
                  }
                ),
                (0, d.kt)(
                  'inlineCode',
                  { parentName: 'a' },
                  'required argument'
                )
              ),
              ': we gave it a name ',
              (0, d.kt)('inlineCode', { parentName: 'li' }, 'url'),
              ' and a description'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'an ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://github.com/tj/commander.js#options' }
                ),
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'option')
              ),
              ': we gave it a short flag and a long flag, a description, and a default value'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'To consume the argument and option, we first parse the command and log the variables.'
          ),
          (0, d.kt)(
            'p',
            null,
            'Now we can run the command and observe the log.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' build\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# without an option'
              ),
              '\n$ my-script https://dawchihliou.github.io/\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# url: https://dawchihliou.github.io/, iteration: 5'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# with an option'
              ),
              '\n$ my-script https://dawchihliou.github.io/ --iteration',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '3'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# or'
              ),
              '\n$ my-script https://dawchihliou.github.io/ -i ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '3'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# url: https://dawchihliou.github.io/, iteration: 3'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Very cool right?!\nAnother cool feature is that ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'commander'),
            ' automatically generates a ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/tj/commander.js#automated-help' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'help')
            ),
            ' to print the help information.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ my-script --help\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign(
              {},
              {
                id:
                  'running-multiple-lighthouse-analyses-in-separate-os-processes',
              }
            ),
            'Running Multiple Lighthouse Analyses in Separate OS Processes'
          ),
          (0, d.kt)(
            'p',
            null,
            "We learned how to parse user inputs in the previous section. It's time to dive into the core of the CLI."
          ),
          (0, d.kt)(
            'p',
            null,
            'The recommandation for running multiple Lighthouse is to run them in ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/GoogleChrome/lighthouse/issues/7187',
                }
              ),
              'separate processes'
            ),
            ' to remove the risk of interference.\n',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/moxystudio/node-cross-spawn' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'cross-spawn')
            ),
            ' is a cross platform solution for spawning processes.\nWe will use it to synchronously spawn new processes to run Lighthouse.'
          ),
          (0, d.kt)(
            'p',
            null,
            'To install ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'cross-spawn'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' cross-spawn\n$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev @types/cross-spawn\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's edit ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'src/index.ts'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              "import { Command } from 'commander'\n",
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  " import spawn from 'cross-spawn'\n"
                )
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  " const lighthouse = require.resolve('lighthouse/lighthouse-cli')\n"
                )
              ),
              '\nasync function run() {\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' // ...\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token deleted-sign deleted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix deleted' }
                  ),
                  '-'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  console.log(`url: ${url}, iteration: ${options.iteration}`)\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  console.log(\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    `🗼 Running Lighthouse for ${url}. It will take a while, please wait...`\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  )\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  const results = []\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  for (let i = 0; i < options.iterations; i++) {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    const { status, stdout } = spawn.sync(\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '      process.execPath, [\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '      lighthouse,\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '      url,\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "      '--output=json',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "      '--chromeFlags=--headless',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "      '--only-categories=performance',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    ])\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    if (status !== 0) {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '      continue\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    }\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    results.push(JSON.parse(stdout.toString()))\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  }\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In the code, we spawn new processes multiple times based on user input.\nIn each process, we ran Lighthouse performance analysis with headless Chrome and collect the the JSON data.\nThe ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'result'),
            ' variable will hold an array of indipendent performance data in string.\nThe next step is to aggregate the data and calculate the most reliable performance scores.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you implement the code above, you'll see a linting error about ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'require'),
            '.\n',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'require.resolve'),
            " resolves the path to a module instead of the module itself.\nIn this article, we'll allow the ",
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              '@typescript-eslint/no-var-requires'
            ),
            ' rule in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '.eslintrc.js'),
            ' to compile.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// .eslintrc.js\n\nmodule.exports = {\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  rules: {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '    // allow require\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "    '@typescript-eslint/no-var-requires': 0,\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  },\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'calculating-reliable-lighthouse-scores' }),
            'Calculating Reliable Lighthouse Scores'
          ),
          (0, d.kt)(
            'p',
            null,
            'One strategy is to aggregate the reports by calculating the median.\nLighthouse provide a internal functionality ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/lib/median-run.js',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'computeMedianRun')
            ),
            ".\nLet's use it"
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// src/index.ts\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  " // For simplicity, we use require here because lighthouse doesn't provide type declaration.\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' const {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   computeMedianRun,\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  " } = require('lighthouse/lighthouse-core/lib/median-run.js')\n"
                )
              ),
              '\nasync function run() {\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token unchanged' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix unchanged' }
                  ),
                  ' '
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  ' // ...\n'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   const median = computeMedianRun(results)\n'
                )
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "   console.log(`\\n${chalk.green('✔')} Report is ready for ${median.finalUrl}`)\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   console.log(\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '     `🗼 Median performance score: ${draw(\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '       median.categories.performance.score,\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '       median.categories.performance.score * 100\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '     )}`\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   )\n'
                )
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   [\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'first-contentful-paint',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'interactive',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'speed-index',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'total-blocking-time',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'largest-contentful-paint',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  "     'cumulative-layout-shift',\n"
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   ].map((matrix) => {\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '     const { title, displayValue, score } = median.audits[matrix]\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '     console.log(`🗼 Median ${title}: ${draw(score, displayValue)}`)\n'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '   })\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Under the hood, ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'computeMedianRun'),
            " returns the score that's closest to the median of the First Contentful Paint and the median of the Time to Interactive.\nIt's because they represent the earliest and the latest moments in the page initialization lifecycle.\nIt's a more reliable way to determine the median than the naive appoach by finding the median from a single measurement."
          ),
          (0, d.kt)('p', null, 'Now try the command again and see the result!'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' build ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&&'
              ),
              ' my-script https://dawchihliou.github.io --iteration',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '3'
              ),
              '\n'
            )
          ),
          (0, d.kt)('img', {
            src: '/optimized/command-line.webp',
            alt: 'Screenshot of my-script final output',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)('p', null, 'Walla🎉'),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'using-the-cli-in-github-actions' }),
            'Using the CLI in GitHub Actions'
          ),
          (0, d.kt)(
            'p',
            null,
            "Our implementation is done.\nLet's use the CLI in an automated workflow so we can banchmark the performacne in a CD/CI pipeline."
          ),
          (0, d.kt)(
            'p',
            null,
            "First, let's publish the package on npm (hypothetically)."
          ),
          (0, d.kt)(
            'p',
            null,
            'I published a npm package ',
            (0, d.kt)(
              'strong',
              { parentName: 'p' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'strong' },
                  { href: 'https://github.com/DawChihLiou/dx-scripts/' }
                ),
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'dx-scripts')
              )
            ),
            ' that includes the production-ready version of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'my-script'),
            '.\nWe will write the GitHub Actions workflow with ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'dx-scripts'),
            ' to illustrate.'
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'publishing-on-npm-an-example' }),
            'Publishing on npm (an example)'
          ),
          (0, d.kt)(
            'p',
            null,
            "We'll add a ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'files'),
            ' property in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ' to publish the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/bin'),
            ' directory.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-diff' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-diff' }
              ),
              '// package.json\n\n{\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token inserted-sign inserted' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token prefix inserted' }
                  ),
                  '+'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token line' }
                  ),
                  '  "files": ["bin"],\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)('p', null, 'Then simply run:'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' publish\n'
            )
          ),
          (0, d.kt)('p', null, 'Now the package is on npm (hypothetically)!'),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'writing-a-workflow' }),
            'Writing A Workflow'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's discuss the workflow. We want the workflow to:"
          ),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "run on a pull request when there's an update"
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'run the Lighthouse performance analysis against a feature branch preview URL'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'notify the pull request with the analysis report'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "So after the workflow is successfully completed, you'll see a comment from GitHub Action Bot with your Lighthouse scores."
          ),
          (0, d.kt)(
            'p',
            null,
            "To focus on the application of our CLI, I'll hardcode the feature branch preview URL in the workflow."
          ),
          (0, d.kt)(
            'p',
            null,
            'In your application repository, install ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'dx-scripts'),
            ':'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              '$ ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'yarn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'add'
              ),
              ' --dev dx-scripts\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Add a ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              'lighthouse-dev-ci.yaml'
            ),
            ' to your GitHub workflows directory:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-yaml' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-yaml' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# .github/workflows/lighthouse-dev-ci.yaml'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Lighthouse CI\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'on'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' pull_request\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'jobs'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'lighthouse'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'runs-on'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' ubuntu',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'latest\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'env'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# You can subsitude the harcoded preview url with your preview url'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'preview_url'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' https',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '//dawchihliou.github.io/\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'steps'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'uses'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' actions/checkout@v2\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'uses'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' actions/setup',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'node@v1\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'with'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'node-version'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'16.x'"
              ),
              '\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Install dependencies\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' yarn\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# You can add your steps here to create a preview'
              ),
              '\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Run Lighthouse\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'id'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' lighthouse\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'shell'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' bash\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '|'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token scalar string' }
                ),
                "\n          lighthouse=$(npx dx-scripts lighthouse $preview_url)\n          lighthouse=\"${lighthouse//'%'/'%25'}\"\n          lighthouse=\"${lighthouse//$'\\n'/'%0A'}\"\n          lighthouse=\"${lighthouse//$'\\r'/'%0D'}\"\n          echo \"::set-output name=lighthouse_report::$lighthouse\""
              ),
              '\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Notify PR\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'uses'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' wow',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'actions/auto',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'comment@v1\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'with'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'GITHUB_TOKEN'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' $',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' secrets.GITHUB_TOKEN ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'pullRequestSynchronize'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '|'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token scalar string' }
                ),
                '\n            👋 @{{ author }},'
              ),
              '\n\n            Here is your Lighthouse performance overview🎉\n\n            ```\n            $',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' steps.lighthouse.outputs.lighthouse_report ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n            ```\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In the "Run Lighthouse" step, we ran the ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              'dx-script lighthouse'
            ),
            ' CLI, substiude the special characters in order to print multi-line output, and we set the output in a variable ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'lighthouse_report'),
            '.\nIn the "Notify PR" step, we wrote a comment with the ouput from the "Run Lighthouse" step and use the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/marketplace/actions/auto-comment' }
              ),
              (0, d.kt)(
                'inlineCode',
                { parentName: 'a' },
                'wow-actions/auto-comment'
              ),
              ' '
            ),
            ' action to post the comment.'
          ),
          (0, d.kt)('img', {
            src: '/optimized/pr-comment.webp',
            alt: 'Screenshot of a PR comment posted from the Lighthouse CI',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            "That's it! What a journey‍.\nIt's amazing that you followed all the way through."
          ),
          (0, d.kt)('h2', Object.assign({}, { id: 'to-sum-up' }), 'To Sum up'),
          (0, d.kt)(
            'p',
            null,
            "Writing a CLI is not too hard, right?😎\nLet's have a look at all the things we've covered:"
          ),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)('li', { parentName: 'ul' }, 'configuring TypeScript'),
            (0, d.kt)('li', { parentName: 'ul' }, 'configuring ESLing'),
            (0, d.kt)('li', { parentName: 'ul' }, 'configuring Prettier'),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'executing your command locally'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'coloring logs with ',
              (0, d.kt)('inlineCode', { parentName: 'li' }, 'chalk')
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'defining your command with ',
              (0, d.kt)('inlineCode', { parentName: 'li' }, 'commander')
            ),
            (0, d.kt)('li', { parentName: 'ul' }, 'spawning processes'),
            (0, d.kt)('li', { parentName: 'ul' }, 'executing Lighthouse CLI'),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "using Lighthouse's internal library to calculate median performance scores"
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'publish your command as a npm package'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'applying your command to a GitHub Action workflow'
            )
          ),
          (0, d.kt)('p', null, 'Now the super power is yours too🚀'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'Here you have it! I hope you find it useful. Thanks for reading through🙌'
          ),
          (0, d.kt)(
            'p',
            null,
            "Please share this article so that more people who're looking for inspirations can see it."
          ),
          (0, d.kt)(
            'p',
            null,
            'Feel free to connect with me on ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://twitter.com/dawchihliou' }
              ),
              'twitter'
            ),
            '!'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're interested in reading more about image optimization to boost your performance score, take a look at my previous article ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: '/articles/use-webp-for-better-ux' }
              ),
              '"Using WebP for Better User Experience"'
            ),
            '.\nThere we discussed one of the modern image formats that greatly reduces the size of your images without sacrificing quality.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're wondering how to test Redux Observable, I wrote an ariticle ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://itnext.io/better-marble-test-70c7676a1e2' }
              ),
              '"Writing Better Marble Tests for Redux Observable and TypeScript"'
            ),
            " just for you.\nIt's a comprehensive guide to walk you through the thought process."
          ),
          (0, d.kt)(
            'p',
            null,
            'If you’re a fan of functional programming, check out ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
                }
              ),
              'this article that I wrote about Transducers'
            ),
            '.\nIt’s a step by step reasoning on writing a transducer and it touches on key ideas about functional programming.'
          ),
          (0, d.kt)('p', null, 'Happy coding!')
        )
      }
      i.isMDXComponent = !0
    },
    7747: function (a) {
      a.exports = {
        container: 'Article_container__q__L3',
        wrap: 'Article_wrap__LZypL',
      }
    },
    9754: function (a) {
      a.exports = { wrap: 'Author_wrap__s8DeE', avatar: 'Author_avatar__j6KIn' }
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      return a((a.s = 8305))
    }),
      (_N_E = a.O())
  },
])

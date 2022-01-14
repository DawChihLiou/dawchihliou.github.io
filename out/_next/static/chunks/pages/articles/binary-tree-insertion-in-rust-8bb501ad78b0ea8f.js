;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
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
    6568: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/binary-tree-insertion-in-rust',
        function () {
          return c(1352)
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
    1352: function (a, b, c) {
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
          title: 'Binary Tree Insertion in Rust',
          description:
            "I was struggling with Rust's ownership when implementing a Binary Tree so I re-read about it. After taking my time understanding it and refactoring, I finally made a breakthrough😎 I'm very excited to share with you the awesome features in Rust I came across. You'll see interesting concepts like smart pointers and ownership.",
          url: '/articles/binary-tree-insertion-in-rust',
          cover: 'optimized/indexing-strings-in-rust.png',
          category: 'Rust',
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
            Object.assign({}, { id: 'binary-tree-insertion-in-rust' }),
            'Binary Tree Insertion in Rust'
          ),
          (0, d.kt)('img', {
            src: '/optimized/rust-binary-tree-insertion.webp',
            alt: 'Hero image for Binary Tree Insertion in Rust',
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
              "🌳 We'll implement a Binary Tree together."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🧑‍🌾 We'll discuss a couple of ways to insert a node in a Binary Tree."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🧑‍🔬 We'll discuss Rust's ownership in action."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "✨ We'll touch on more features and syntax in Rust."
            )
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            "I was struggling hard with Rust's ownership when implementing a Binary Tree so I pivoted and re-read about it.\nAfter taking my time understanding it and refactoring my code, I finally made a breakthrough😎\nI'm very excited to share with you the awesome features in Rust I came across.\nYou'll see interesting concepts like smart pointers and ownership."
          ),
          (0, d.kt)('p', null, "Let's get it!"),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'data-structure' }),
            'Data Structure'
          ),
          (0, d.kt)(
            'p',
            null,
            'A ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/Binary_tree' }
              ),
              'Binary Tree'
            ),
            ' data structure look like this:'
          ),
          (0, d.kt)('img', {
            src: '/optimized/rust-binary-tree-insertion-tree.webp',
            alt: 'Binary tree data structure visualization',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            'Each node has no more than two child nodes. We refer them as ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' child and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            ' child.\nWe can translate the description into Rust code like this:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'struct'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token type-definition class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                'pub'
              ),
              ' value',
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
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' left',
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
                  { className: 'token class-name' }
                ),
                'Option'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' right',
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
                  { className: 'token class-name' }
                ),
                'Option'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
            'The ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            ' struct holds a value with the generic type ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '.\nWe use ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/std/option/' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'Option'),
              ' enum'
            ),
            ' to represent that the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            ' child are both optional.'
          ),
          (0, d.kt)(
            'p',
            null,
            'A ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Option<T>'),
            ' is either a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Some'),
            ' that contains a value of the type ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'T'),
            ', or a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'None'),
            " that represents it doesn't.\nBecause we are using ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Option'),
            ' to express whether a value is either something or nothing, the Rust compiler can check if we handle all the cases ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html?highlight=option#the-option-enum-and-its-advantages-over-null-values',
                }
              ),
              'to prevent bugs'
            ),
            '.\nComparing to JavaScript where we use ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'null')
            ),
            ' value to express the same concept, ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Option'),
            ' encourages me to handle use cases upfront and it saves me a lot of trouble in runtime.'
          ),
          (0, d.kt)(
            'p',
            null,
            'The ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/book/ch15-01-box.html' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'Box')
            ),
            ' is one of the smart pointers.\nIt saves an address that points to a data in memory.\n',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Box'),
            ' helps us to create a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            " struct with an unknown size, so that we can grow the Binary Tree by inserting nodes without thinking ahead how many nodes we'll have when creating the tree."
          ),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'http://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/the-stack-and-the-heap.html',
                }
              ),
              'Memory management'
            ),
            ' is one of the reason Rust is so performing and interesting to learn.'
          ),
          (0, d.kt)('h2', Object.assign({}, { id: 'insertion' }), 'Insertion'),
          (0, d.kt)(
            'p',
            null,
            "Before inserting a new Binary Tree node, we need to create an root. Let's implement it:"
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'impl'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'value',
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
                  { className: 'token class-name' }
                ),
                'T'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
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
              '\n            value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            left',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            right',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
            'The ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'new'),
            ' ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/book/ch05-03-method-syntax.html#associated-functions',
                }
              ),
              'associated function'
            ),
            ' takes the value of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'T'),
            ' and return a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            ' that holds the value and no child nodes.'
          ),
          (0, d.kt)(
            'p',
            null,
            'Now that we can use ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree::new'),
            ' to create a root node, we can think about how to insert child nodes.\nIntuitively, it would be great if we can insert left or right child node by calling methods on the root node instance. Like this:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n  ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
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
              '\n  ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
            'Luckily, I found an ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://endler.dev/2017/boxes-and-trees/' }
              ),
              'great article'
            ),
            ' from my friend at trivago, ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://twitter.com/matthiasendler' }
              ),
              'Matthias'
            ),
            ', explaining exactly how to implement it.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'impl'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'value',
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
                  { className: 'token class-name' }
                ),
                'T'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
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
              '\n            value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            left',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            right',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'left'
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
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' node',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'right'
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
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' node',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
            "Now let's write some tests to make sure the associated functions work:"
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[cfg(test)]'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mod'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token module-declaration namespace' }
                ),
                'tests'
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
                'use'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'super'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'create_new_tree'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert_left'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
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
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right',
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
                  { className: 'token class-name' }
                ),
                'None'
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
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert_right'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
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
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left',
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
                  { className: 'token class-name' }
                ),
                'None'
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
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
          (0, d.kt)('p', null, '🥳'),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'breadth-first-insertion' }),
            'Breadth-First Insertion'
          ),
          (0, d.kt)(
            'p',
            null,
            'The insertion methods are very flexible and we can easily create a tree in just a few lines:'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n            ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n            ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
          (0, d.kt)('p', null, 'The code creates a Binary Tree like this:'),
          (0, d.kt)('img', {
            src: '/optimized/rust-binary-tree-insertion-tree-3.webp',
            alt: 'A simple Binary Tree example',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)('p', null, 'It got me thinking.'),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'If I just want to create a ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'p' },
                  {
                    href:
                      'https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees',
                  }
                ),
                'balanced Binary Tree'
              ),
              ' without any other requirements, can I insert a node and the tree finds the next available spot for me?'
            )
          ),
          (0, d.kt)('p', null, 'Something like this:'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' root ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\nroot',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\nroot',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '3'
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
                ';'
              ),
              '\nroot',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '4'
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
                ';'
              ),
              '\nroot',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '5'
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
                ';'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'and it creates the same tree structure as we saw above.'
          ),
          (0, d.kt)(
            'p',
            null,
            'We can achieve it by traverse the tree in the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/Breadth-first_search' }
              ),
              'breadth-first'
            ),
            ' fashion and insert a node as soon as we found an absent child node.'
          ),
          (0, d.kt)(
            'p',
            null,
            'The easiest way to implement a breath-first traversal is with a ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)',
                }
              ),
              'Queue'
            ),
            '.\nRust has a ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/std/collections/struct.VecDeque.html',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'VecDequeue')
            ),
            ' in the standard library we can use.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert'
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
                  { className: 'token operator' }
                ),
                '&'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' new_value',
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
                  { className: 'token class-name' }
                ),
                'T'
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
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' queue',
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
                  { className: 'token class-name' }
                ),
                'VecDeque'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
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
                  { className: 'token class-name' }
                ),
                'VecDeque'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n    queue',
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
                  { className: 'token function' }
                ),
                'push_front'
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
                  { className: 'token keyword' }
                ),
                'self'
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
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'loop'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
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
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'ref'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' left',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'ref'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' right',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '..'
              ),
              '\n        ',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' queue',
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
                  { className: 'token function' }
                ),
                'pop_back'
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
                  { className: 'token function' }
                ),
                'unwrap'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'match'
              ),
              ' left ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                queue',
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
                  { className: 'token function' }
                ),
                'push_front'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                ';'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'None'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              'left ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_value',
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
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'match'
              ),
              ' right ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                queue',
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
                  { className: 'token function' }
                ),
                'push_front'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                ';'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'None'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              'right ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_value',
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
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
            "The algorithm is to force the loop to visit sibling nodes first, from left to right, before visiting the next layer of child nodes.\nIn each iteration, we'll check if either the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' or ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            " child is absent.\nIf we found one, that's the next available spot for the new node."
          ),
          (0, d.kt)(
            'p',
            null,
            "It's a rather straightforward algorithm but ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://www.reddit.com/r/rust/comments/ry34vr/problem_with_implementing_binary_tree_insertion/',
                }
              ),
              'I struggled to get it right'
            ),
            ".\nThe problem was that I didn't understand ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html',
                }
              ),
              'ownership in Rust'
            ),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's go through the ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'insert'),
            ' method together.'
          ),
          (0, d.kt)(
            'p',
            null,
            'First thing we want to decide is how do we want to use the first argument ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'self'),
            '.\n',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'self'),
            ' is referring to the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            ' instance the method is called on.\nWhat we need from ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'self'),
            ' is to be able to mutate the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            ' child node so that we can insert a new node.\nSimply passing in a mutable reference ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '&mut self'),
            " will do the job because the method don't need to take ownership of ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'self'),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            'For the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'VecDeque'),
            ' item data type, we can use the same data type as ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'self'),
            ' to store mutable references of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            'When popping the queue inside the loop, we want to use a mutable reference to ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            ' because we want to insert the new node.'
          ),
          (0, d.kt)(
            'p',
            null,
            'When inserting the new node, we ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/book/ch15-02-deref.html' }
              ),
              'dereference'
            ),
            ' the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'left'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'right'),
            ' to allow the new node assignment, like this: ',
            (0, d.kt)(
              'inlineCode',
              { parentName: 'p' },
              '*left = Some(Box::new(BinaryTree::new(new_value)))'
            ),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            'It took me some time to figure out how to borrow or move the data in the method.\nOnce I got it, it make so much sense!'
          ),
          (0, d.kt)('p', null, "Let's write some tests for it🧑‍🔬"),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert'
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
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n    tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n    tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '3'
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
                ';'
              ),
              '\n    tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '4'
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
                ';'
              ),
              '\n    tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '5'
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
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n        tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n            ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n            ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
              '\n    ',
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
                ';'
              ),
              '\n\n    tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '6'
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
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n        tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n            ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n            ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '6'
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
            "If we run the tests, you'll see a error message like this:"
          ),
          (0, d.kt)('img', {
            src: '/optimized/error-partial-equal.webp',
            alt: 'Test aborted because of the Copy Trait is not implemented',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            "It's because the trees couldn't compare with each other.\nWe can fix it by adding ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/std/cmp/trait.PartialEq.html',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'PartialEq')
            ),
            ' trait to the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            ' struct.'
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
                  ' #[derive(PartialEq)]\n'
                )
              ),
              'pub struct BinaryTree<T> {\n',
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
                  '   pub value: T,\n'
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
                  '   pub left: Option<Box<BinaryTree<T>>>,\n'
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
                  '   pub right: Option<Box<BinaryTree<T>>>,\n'
                )
              ),
              '}\n'
            )
          ),
          (0, d.kt)('p', null, '🥳'),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'converting-array-into-binary-tree' }),
            'Converting Array into Binary Tree'
          ),
          (0, d.kt)(
            'p',
            null,
            'Now that we have an automatic insertion with the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'insert'),
            ' method, we can consider creating a balanced tree in a more convenient way.\nFor example, I want to have something similar to ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/std/vec/struct.Vec.html#examples',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'Vec::from')
            ),
            ': an associated function ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree::from'),
            ' that takes in an array and returns a balanced ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree'),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's write a test to visualize the use case better:"
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'create_new_tree_with_from'
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
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// `BinaryTree::from` takes in a reference of an array because borrowing is sufficient'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'from'
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
                  { className: 'token operator' }
                ),
                '&'
              ),
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
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '2'
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
                  { className: 'token number' }
                ),
                '3'
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
                  { className: 'token number' }
                ),
                '4'
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
                  { className: 'token number' }
                ),
                '5'
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
                  { className: 'token number' }
                ),
                '6'
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
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n        tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n            ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                    ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n            ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '6'
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
            'To implement ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'BinaryTree::from'),
            ', we can simply iterate through the array and using the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'insert'),
            ' method to create the tree structure.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'impl'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'from'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_values',
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
                  { className: 'token operator' }
                ),
                '&'
              ),
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
                  { className: 'token class-name' }
                ),
                'T'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
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
              'first',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' rest',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' new_values',
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
                  { className: 'token function' }
                ),
                'split_first'
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
                  { className: 'token function' }
                ),
                'unwrap'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' root',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token operator' }
                ),
                '*'
              ),
              'first',
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
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'for'
              ),
              ' value ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'in'
              ),
              ' rest ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            root',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token operator' }
                ),
                '*'
              ),
              'value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n        root\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
            'In the function, we created a root node from the first array element and then insert the rest element in the tree one by one.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you try to test it, you'll see an error message like this:"
          ),
          (0, d.kt)('img', {
            src: '/optimized/error-copy-trait.webp',
            alt: 'Test aborted because of the Copy Trait is not implemented',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            'We can fix it by specifying the type ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'T'),
            ' implements the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/std/marker/trait.Copy.html' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'Copy')
            ),
            ' trait.'
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
                  ' impl<T> BinaryTree<T> {\n'
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
                  ' impl<T> BinaryTree<T>\n'
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
                  ' where\n'
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
                  '     T: Copy,\n'
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
                  ' {\n'
                )
              )
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'The reason is that the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'insert'),
            ' method actually take ownership over ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'new_value'),
            '.\nIn order to keep the program memory save, the compiler didn\'t allow us to "move" the array elements into the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'insert'),
            ' method because the array might be referenced in other parts of the program.\nSo what we can do is to pass in a copy (duplicate) of an array element.'
          ),
          (0, d.kt)('p', null, 'Now it should work!'),
          (0, d.kt)(
            'p',
            null,
            "That's it! The full implementation of our Binary Tree assertion is here⬇️"
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-rust' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-rust' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[derive(Debug, PartialEq)]'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'struct'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token type-definition class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                'pub'
              ),
              ' value',
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
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' left',
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
                  { className: 'token class-name' }
                ),
                'Option'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' right',
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
                  { className: 'token class-name' }
                ),
                'Option'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'impl'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'where'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
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
                  { className: 'token class-name' }
                ),
                'Copy'
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
                '{'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '/// Create a new Binary Tree node.'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'value',
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
                  { className: 'token class-name' }
                ),
                'T'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
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
              '\n            value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            left',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            right',
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
                  { className: 'token class-name' }
                ),
                'None'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '/// Create a balanced tree from an array reference.'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'from'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_values',
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
                  { className: 'token operator' }
                ),
                '&'
              ),
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
                  { className: 'token class-name' }
                ),
                'T'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
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
              'first',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' rest',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' new_values',
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
                  { className: 'token function' }
                ),
                'split_first'
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
                  { className: 'token function' }
                ),
                'unwrap'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' root',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token operator' }
                ),
                '*'
              ),
              'first',
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
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'for'
              ),
              ' value ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'in'
              ),
              ' rest ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            root',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token operator' }
                ),
                '*'
              ),
              'value',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n        root\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '/// Insert a tree node in the next available branch with breadth first traversal.'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert'
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
                  { className: 'token operator' }
                ),
                '&'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' new_value',
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
                  { className: 'token class-name' }
                ),
                'T'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' queue',
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
                  { className: 'token class-name' }
                ),
                'VecDeque'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '&'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>>'
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
                  { className: 'token class-name' }
                ),
                'VecDeque'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        queue',
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
                  { className: 'token function' }
                ),
                'push_front'
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
                  { className: 'token keyword' }
                ),
                'self'
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
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'loop'
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
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'ref'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' left',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'ref'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' right',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '..'
              ),
              '\n            ',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' queue',
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
                  { className: 'token function' }
                ),
                'pop_back'
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
                  { className: 'token function' }
                ),
                'unwrap'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'match'
              ),
              ' left ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                    queue',
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
                  { className: 'token function' }
                ),
                'push_front'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'None'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              'left ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_value',
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
                ';'
              ),
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'match'
              ),
              ' right ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                    queue',
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
                  { className: 'token function' }
                ),
                'push_front'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'None'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '=>'
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
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              'right ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'new_value',
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
                ';'
              ),
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '/// Insert a left child node.'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'left'
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
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' node',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '/// Insert a right child node.'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '///'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'pub'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'right'
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
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' node',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'T'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '>'
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
                '->'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'Self'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right ',
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
                  { className: 'token class-name' }
                ),
                'Some'
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
                  { className: 'token class-name' }
                ),
                'Box'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'self'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
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
                  { className: 'token attribute attr-name' }
                ),
                '#[cfg(test)]'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mod'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token module-declaration namespace' }
                ),
                'tests'
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
                'use'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'super'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '*'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'create_new_tree'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert_left'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
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
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right',
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
                  { className: 'token class-name' }
                ),
                'None'
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
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert_right'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
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
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'Some'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
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
                  { className: 'token operator' }
                ),
                '='
              ),
              ' tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'right ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'node',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'value',
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '.'
              ),
              'left',
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
                  { className: 'token class-name' }
                ),
                'None'
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
                ';'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'insert'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'mut'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n        tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '2'
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
                ';'
              ),
              '\n        tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '3'
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
                ';'
              ),
              '\n        tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '4'
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
                ';'
              ),
              '\n        tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '5'
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
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n            tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n                ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
              '\n        ',
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
                ';'
              ),
              '\n\n        tree',
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
                  { className: 'token function' }
                ),
                'insert'
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
                  { className: 'token number' }
                ),
                '6'
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
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n            tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n                ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '6'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n        ',
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
                '}'
              ),
              '\n\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token attribute attr-name' }
                ),
                '#[test]'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'create_new_tree_from'
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
              '\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' tree ',
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'from'
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
                  { className: 'token operator' }
                ),
                '&'
              ),
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
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '2'
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
                  { className: 'token number' }
                ),
                '3'
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
                  { className: 'token number' }
                ),
                '4'
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
                  { className: 'token number' }
                ),
                '5'
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
                  { className: 'token number' }
                ),
                '6'
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
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token macro property' }
                ),
                'assert_eq!'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n            tree',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n            ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
              '\n                ',
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
                  { className: 'token function' }
                ),
                'left'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              '\n                    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '2'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '4'
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
              '\n                        ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '5'
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
              '\n                ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n                ',
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
                  { className: 'token function' }
                ),
                'right'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '3'
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
                '.'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'left'
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
                  { className: 'token class-name' }
                ),
                'BinaryTree'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '::'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'new'
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
                  { className: 'token number' }
                ),
                '6'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n        ',
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
                '}'
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
          (0, d.kt)('h2', Object.assign({}, { id: 'reference' }), 'Reference'),
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
                  { href: 'https://en.wikipedia.org/wiki/Binary_tree' }
                ),
                'Binary Tree'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees',
                  }
                ),
                'Balanced Binary Tree'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://en.wikipedia.org/wiki/Breadth-first_search' }
                ),
                'Breadth-First Search'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)',
                  }
                ),
                'Queue'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://doc.rust-lang.org/std/option/' }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'Option'),
                ' Type'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://doc.rust-lang.org/book/ch15-01-box.html' }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'Box'),
                ' Pointer'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/std/collections/struct.VecDeque.html',
                  }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'VecDequeue')
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/std/cmp/trait.PartialEq.html',
                  }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'PartialEq'),
                ' Trait'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/std/marker/trait.Copy.html',
                  }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'Copy'),
                ' Trait'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/std/vec/struct.Vec.html#examples',
                  }
                ),
                'Rust ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'Vec::from')
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/book/ch05-03-method-syntax.html#associated-functions',
                  }
                ),
                'Rust Associated Function'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html',
                  }
                ),
                'Rust Ownership'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
                  }
                ),
                'JavaSCript ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'null')
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'http://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/the-stack-and-the-heap.html',
                  }
                ),
                'The Stack and the Heap'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://endler.dev/2017/boxes-and-trees/' }
                ),
                'Of Boxes and Trees - Smart Pointers in Rust'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://www.reddit.com/r/rust/comments/ry34vr/problem_with_implementing_binary_tree_insertion/',
                  }
                ),
                'Problem with Implementing Binary Tree Insertion'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html?highlight=option#the-option-enum-and-its-advantages-over-null-values',
                  }
                ),
                'The Option Enum and Its Advantages Over Null Values'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://doc.rust-lang.org/book/ch15-02-deref.html' }
                ),
                'Treating Smart Pointers Like Regular References with the Deref Trait'
              )
            )
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            '💬 Comments on ',
            (0, d.kt)(
              'a',
              Object.assign({ parentName: 'p' }, { href: '' }),
              'Reddit'
            ),
            '.'
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'Here you have it! Thanks for reading through🙌'
          ),
          (0, d.kt)(
            'p',
            null,
            'If you find it useful, please share this article to help more people in their engineering journey.'
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
            "If you're interested in Unicode in Rust and JavaScript, I wrote an article ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: '/articles/indexing-strings-in-rust-and-typescript' }
              ),
              '"Indexing Strings in Rust and TypeScript: A Case Study of String"'
            ),
            '.\nThere we discussed how Rust and JavaScript handle strings with a classic algorithm.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're interested in writing a CLI with TypeScript and implementing a real-world CLI application with Google Lighthouse integration, check out my previous article ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: '/articles/writing-your-own-typescript-cli' }
              ),
              '"Writing Your Own TypeScript CLI"'
            ),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're wondering how to test Redux Observable, I wrote an article ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://itnext.io/better-marble-test-70c7676a1e2' }
              ),
              '"Writing Better Marble Tests for Redux Observable andTypeScript"'
            ),
            " just for you.\nIt's a comprehensive guide to walk you through the thought process."
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
      return a((a.s = 6568))
    }),
      (_N_E = a.O())
  },
])

;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [89],
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
    6991: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/indexing-strings-in-rust-and-typescript',
        function () {
          return c(9550)
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
    9550: function (a, b, c) {
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
          title:
            'Indexing Strings in Rust and TypeScript: A Case Study of String',
          description:
            "Text is essential in programming languages. String is the Rust's and JavaScript's definition to process text in written languages around the world. Through the simple concept of string indexing, we'll discuss how Rust and JavaScript process strings and how they handle the nuances in strings such as grapheme, or even emojis.",
          url: '/articles/indexing-strings-in-rust-and-typescript',
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
            Object.assign(
              {},
              {
                id:
                  'indexing-strings-in-rust-and-typescript-a-case-study-of-string',
              }
            ),
            'Indexing Strings in Rust and TypeScript: A Case Study of String'
          ),
          (0, d.kt)('img', {
            src: '/optimized/indexing-strings-in-rust.webp',
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
              '🪢 Accessing characters in strings with index is not compilable in Rust.'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🎸 We'll discuss how Rust think about strings."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🤖 We'll discuss how JavaScript handles strings."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "🧑‍🔬 We'll compare a classic algorithm ",
              (0, d.kt)('inlineCode', { parentName: 'li' }, 'is_palindrome'),
              ' in Rust and TypeScript.'
            )
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            "Text is essential in programming languages.\nString is the Rust's and JavaScript's definition to process text in written languages around the world.\nThrough the simple concept of string indexing, we'll discuss how Rust and JavaScript process strings and how they handle the nuances in strings such as grapheme, or even emojis."
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's use a classic algorithm ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'is_palindrome'),
            ' to introduce the concept of string indexing.'
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'is_palindrome-in-rust' }),
            (0, d.kt)('inlineCode', { parentName: 'h2' }, 'is_palindrome'),
            ' in Rust'
          ),
          (0, d.kt)(
            'p',
            null,
            'A ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/Palindrome' }
              ),
              'palindrome'
            ),
            ', in a very general way of explaining it, is a string that reads the same forward and backward.\n"',
            (0, d.kt)('strong', { parentName: 'p' }, 'Ana'),
            '" is a palindrome, "',
            (0, d.kt)(
              'strong',
              { parentName: 'p' },
              'A dog! A panic in a pagoda!'
            ),
            '" is a palindrome, or even "',
            (0, d.kt)('strong', { parentName: 'p' }, '02/02/2020'),
            '" is a palindrome.'
          ),
          (0, d.kt)(
            'p',
            null,
            'For the purpose of this article, we\'ll use a more narrowed definition to keep the algorithm simple.\nA palindrome here is defined as a "continuous sequence of lowercase ASCII characters without whitespace".'
          ),
          (0, d.kt)(
            'p',
            null,
            'One intuitive approach would be using two pointers.\nOne starts from the beginning of the given string moving toward the end, and the other from the end toward the beginning.\nWhile moving the pointers, compare the pointing characters.\nThe given string is a palindrome if all the comparisons are equal. Like this:'
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
                  { className: 'token comment' }
                ),
                "// ❌ It won't compile"
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
                'is_palindrome'
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
                'str'
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
                'String'
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
                'bool'
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
                  { className: 'token comment' }
                ),
                '//        lp       rp'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '//        |        |'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '//        v →    ← v'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// str = "aabbccbbaa"'
              ),
              '\n  ',
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
              ' lp ',
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
                  { className: 'token number' }
                ),
                '0'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ';'
              ),
              '\n  ',
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
              ' rp ',
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
                'str'
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
                'len'
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
                  { className: 'token operator' }
                ),
                '-'
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
                ';'
              ),
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'while'
              ),
              ' lp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              ' rp ',
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
                'if'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'str'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              'lp',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '!='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'str'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              'rp',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
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
                '// ^^^^^^^ `String` cannot be indexed by `usize`'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
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
              '\n    lp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '+='
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
                ';'
              ),
              '\n    rp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '-='
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
                ';'
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
                  { className: 'token boolean' }
                ),
                'true'
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
            "If you try to compile the program, you'll notice that the Rust compiler won't let us access characters by index.\nIt's a very interesting constraint because many languages like JavaScript, Go, and Python offer the feature."
          ),
          (0, d.kt)(
            'p',
            null,
            'As we dig a little deeper, there are some string methods from the standard library like ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/stable/std/string/struct.String.html#method.chars',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'chars()')
            ),
            ' to access the characters in a string.\n',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'chars()'),
            ' returns an iterator over the ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'char'),
            "s of a string slice. So we'll have to iterate through a string slice to access characters by index.\nLike this:"
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
                'let'
              ),
              ' left ',
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
                'str'
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
                'as_str'
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
                'chars'
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
                'nth'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'lp',
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
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'The simple task of accessing a character in a string has the time complexity of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'O(n)'),
            ' instead of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'O(1)'),
            '.'
          ),
          (0, d.kt)('p', null, 'Why is that?'),
          (0, d.kt)(
            'h2',
            Object.assign(
              {},
              { id: 'rusts-strings-are-in-unicode-and-utf-8-encoded' }
            ),
            "Rust's Strings Are in Unicode And UTF-8 Encoded"
          ),
          (0, d.kt)(
            'p',
            null,
            'We can find the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/book/ch08-02-strings.html#internal-representation',
                }
              ),
              'internal representaion'
            ),
            " of Rust's String from the ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/book/' }
              ),
              'official Rust book'
            ),
            '.'
          ),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'A String is a wrapper over a Vec<u8',
              '>',
              '.'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'For strings in ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/ASCII' }
              ),
              'ASCII'
            ),
            ', each character is represented by 1 byte encoded in ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/UTF-8' }
              ),
              'UTF-8'
            ),
            '.\nHowever, for strings in other written languages, like ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/book/ch08-02-strings.html#bytes-and-scalar-values-and-grapheme-clusters-oh-my',
                }
              ),
              '"नमस्ते" in the Devanagari script'
            ),
            ' from the Rust book,\neach character is encoded in UTF-8 with multiple ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://en.wikipedia.org/wiki/Unicode' }
              ),
              'Unicode'
            ),
            ' value (code unit).'
          ),
          (0, d.kt)('p', null, 'So in the Rust book, it says:'),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'Indexing into a string is often a bad idea because it’s not clear what the return type of the string-indexing operation should be: a byte value, a character, a grapheme cluster, or a string slice.'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "It's one of the reasons why the Rust compiler does not allows the direct access to characters in strings.\nI really recommend you to read more about it in the ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/book/ch08-02-strings.html' }
              ),
              'Rust book'
            ),
            ".\nIt's very easy to read and insightful👏."
          ),
          (0, d.kt)(
            'h3',
            Object.assign({}, { id: 'correcting-is_palindrome' }),
            'Correcting ',
            (0, d.kt)('inlineCode', { parentName: 'h3' }, 'is_palindrome')
          ),
          (0, d.kt)(
            'p',
            null,
            'We can iterate over ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/stable/std/string/struct.String.html#method.bytes',
                }
              ),
              'bytes'
            ),
            " and compare the first half of the string with the reversed second half.\nIt's a palindrome if they were equal:"
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
                  { className: 'token comment' }
                ),
                '// ✅'
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
                'is_palindrome'
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
                'str'
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
                'String'
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
                'bool'
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
              ' half ',
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
                'str'
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
                'len'
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
                  { className: 'token operator' }
                ),
                '/'
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
                ';'
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
              ' forward ',
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
                'str'
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
                'bytes'
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
                'take'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'half',
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
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' backward ',
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
                'str'
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
                'bytes'
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
                'rev'
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
                'take'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'half',
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
              '\n\n    forward',
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
                'eq'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'backward',
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
                'main'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'is_palindrome'
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
                'String'
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
                  { className: 'token string' }
                ),
                '""'
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
                ','
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'is_palindrome'
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
                'String'
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
                  { className: 'token string' }
                ),
                '"aabbccbbaa"'
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
                ','
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'is_palindrome'
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
                'String'
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
                  { className: 'token string' }
                ),
                '"aabbccbbab"'
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
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
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
          (0, d.kt)('p', null, 'The time and space complexity:'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(n) time, where n is the length of the string.'
            ),
            (0, d.kt)('li', { parentName: 'ul' }, 'O(1) space.')
          ),
          (0, d.kt)(
            'p',
            null,
            'The space complexity is ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'O(1)'),
            ' because each iterator creates a pointer and a counter.'
          ),
          (0, d.kt)(
            'p',
            null,
            'Another approach would be using the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://doc.rust-lang.org/std/iter/trait.DoubleEndedIterator.html',
                }
              ),
              'DoubleEndedIterator'
            ),
            ' trait and combining the forward and backward iterators with ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://doc.rust-lang.org/std/iter/fn.zip.html' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'zip()')
            ),
            ':'
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
                'fn'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function-definition function' }
                ),
                'is_palindrome'
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
                'str'
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
                'String'
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
                'bool'
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
              ' chars ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' string',
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
                'bytes'
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
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'while'
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
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'front',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' back',
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
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' chars',
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
                'next'
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
                'zip'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'chars',
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
                'next_back'
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
                'if'
              ),
              ' front ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '!='
              ),
              ' back ',
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
                'return'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
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
              '\n    ',
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
                  { className: 'token boolean' }
                ),
                'true'
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
          (0, d.kt)('p', null, 'The time and space complexity:'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(n) time, where n is the length of the string.'
            ),
            (0, d.kt)('li', { parentName: 'ul' }, 'O(1) space.')
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
                    'https://www.reddit.com/r/programming/comments/rr9dlw/indexing_strings_in_rust_and_typescript_a_case/',
                }
              ),
              'This approach is suggested on Reddit'
            ),
            '.\nThanks a lot!'
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'ispalindrome-in-typescript' }),
            (0, d.kt)('inlineCode', { parentName: 'h2' }, 'isPalindrome'),
            ' in TypeScript'
          ),
          (0, d.kt)(
            'p',
            null,
            "JavaScript allows string index. So we can actually translate the two pointer algorithm that didn't compile in rust."
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
                '/*\n *  lp       rp\n *  |        |\n *  v →    ← v\n * "aabbccbbaa"\n */'
              ),
              '\n',
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
                'isPalindrome'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'str',
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
                'string'
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
                'boolean'
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
                'let'
              ),
              ' lp ',
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
                  { className: 'token number' }
                ),
                '0'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'let'
              ),
              ' rp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' str',
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
                'length'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '-'
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
              '\n\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'while'
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
              'lp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '<'
              ),
              ' rp',
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
              'str',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              'lp',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '!=='
              ),
              ' str',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              'rp',
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
                '{'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
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
              '\n    lp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '+='
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
              '\n    rp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '-='
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
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'return'
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
                'isPalindrome'
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
                "''"
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
                  { className: 'token comment' }
                ),
                '// true'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'isPalindrome'
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
                "'aabbccbbaa'"
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
                  { className: 'token comment' }
                ),
                '// true'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'isPalindrome'
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
                "'aabbccbbab'"
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
                  { className: 'token comment' }
                ),
                '// false'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, 'The time and space complexity are:'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(n) time, where n is the length of the string'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(1) space. Constant space for the two pointers.'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Or just compare the string forward and backward:'
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
                'isPalindrome'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'str',
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
                'string'
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
                'boolean'
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
                'return'
              ),
              ' str ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' str',
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
                'split'
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
                "''"
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
                  { className: 'token method function property-access' }
                ),
                'reverse'
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
                  { className: 'token method function property-access' }
                ),
                'join'
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
                "''"
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
          (0, d.kt)('p', null, 'The time and space complexity:'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(n) time, where n is the length of the input string'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'O(n) space, where n is the length of the input string'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "It's fairly easy in JavaScript. Does it mean that JavaScript treat strings differently than Rust does?"
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'javascript-strings-are-utf-16-encoded' }),
            'JavaScript Strings are UTF-16 encoded'
          ),
          (0, d.kt)(
            'p',
            null,
            'We can find the definition of string primitive value in ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://tc39.es/ecma262/#sec-terms-and-definitions-string-value',
                }
              ),
              'ECMAScript Standard'
            ),
            ':'
          ),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'primitive value that is a finite ordered sequence of zero or more 16-bit unsigned integer values'
            )
          ),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'A String value is a member of the String type. Each integer value in the sequence usually represents a single 16-bit unit of UTF-16 text.'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "In other word, each JavaScript character is represented in Unicode with two bytes and it's encoded in UTF-16."
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's have a look at some examples. We can use one or two code units to create a character:"
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
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' s1',
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
                'string'
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
                  { className: 'token string' }
                ),
                "'\\u00E1'"
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// \xe1'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' s2',
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
                'string'
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
                  { className: 'token string' }
                ),
                "'\\u0061\\u0301'"
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// \xe1'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Both ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's1'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's2'),
            ' makes up a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '\xe1'),
            '. If we check the length of both strings:'
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
              's1',
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
                'length'
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
                  { className: 'token comment' }
                ),
                '// 1'
              ),
              '\n',
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
              's2',
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
                'length'
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
                  { className: 'token comment' }
                ),
                '// 2'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "The lengths are different even though they both are representing the same character.\nLet's look inside the string with string indexing to find out what are elements in the strings:"
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
              's1',
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
                '0'
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
                  { className: 'token comment' }
                ),
                '// \xe1'
              ),
              '\n',
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
              's1',
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
                  { className: 'token comment' }
                ),
                '// undefined'
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
              's2',
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
                '0'
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
                  { className: 'token comment' }
                ),
                '// a'
              ),
              '\n',
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
              's2',
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
                  { className: 'token comment' }
                ),
                '//  ́'
              ),
              '\n',
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
              's2',
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
                '2'
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
                  { className: 'token comment' }
                ),
                '//  undefined'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'We can see that ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's2'),
            ' is composed with two independent elements, ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'a'),
            ' and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, ' ́'),
            '.'
          ),
          (0, d.kt)(
            'p',
            null,
            "Just by seeing the same character can be represented differently, it's obvious that string indexing in JavaScript is not reliable either."
          ),
          (0, d.kt)('p', null, "Let's check for equality:"),
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
              's1 ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' s2',
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
                  { className: 'token comment' }
                ),
                '// false 🧐'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'To make it even more interesting, there is another way to compose the character ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '\xe1'),
            ':'
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
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' s3',
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
                'string'
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
                  { className: 'token string' }
                ),
                "'a\\u0301'"
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// \xe1'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's3'),
            ', we substitute the code unit ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '\\u0061'),
            ' with its representing character ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'a'),
            ".\nLet's run some checks:"
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
              's3',
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
                'length'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '==='
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
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// true'
              ),
              '\n',
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
              's2 ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' s3',
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
                  { className: 'token comment' }
                ),
                '// true 🧐'
              ),
              '\n',
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
              's1 ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' s3',
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
                  { className: 'token comment' }
                ),
                '// false'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'So far what we see is that there are multiple code unit compositions to represent the same character.\nThe equality is defined by the code unit compositions.'
          ),
          (0, d.kt)(
            'p',
            null,
            'It can be highly inconvenient so JavaScript introduced a string method ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'normalize()')
            ),
            " to return the Unicode Normalization Form of a given string.\nLet's try it with ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's1'),
            ', ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's2'),
            ', and ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 's3'),
            ':'
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
              's1',
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
                'normalize'
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
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' s2',
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
                'normalize'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// true'
              ),
              '\n',
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
              's1',
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
                'normalize'
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
                  { className: 'token operator' }
                ),
                '==='
              ),
              ' s3',
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
                'normalize'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// true'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "Let's peek inside the normalized forms of ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '\xe1'),
            ':'
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
                '// `escape` is deprecated.'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'escape'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              's1',
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
                'normalize'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                "// '%E1'"
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'escape'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              's2',
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
                'normalize'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                "// '%E1'"
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'escape'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              's3',
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
                'normalize'
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
                ')'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                "// '%E1'"
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Note that ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape',
                }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'escape()')
            ),
            ' is been removed from the ECMAScript standard.'
          ),
          (0, d.kt)(
            'p',
            null,
            'Thanks to the normalization, handling strings is more predictable now.'
          ),
          (0, d.kt)(
            'p',
            null,
            'JavaScript actually provides an official ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API',
                }
              ),
              'Encoding API'
            ),
            '.\nWe can use ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder',
                }
              ),
              'TextEncoder'
            ),
            ' and ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder',
                }
              ),
              'TextDecoder'
            ),
            ' to handle string encoding and decoding.'
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
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' encoder ',
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
                  'TextEncoder'
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
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' decoder ',
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
                  'TextDecoder'
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
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' bytes ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' encoder',
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
                'encode'
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
                "'\\u0061\\u0301'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\ndecoder',
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
                'decode'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              'bytes',
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
                  { className: 'token comment' }
                ),
                "// '\xe1'"
              ),
              '\n'
            )
          ),
          (0, d.kt)('h2', Object.assign({}, { id: 'to-sum-up' }), 'To Sum up'),
          (0, d.kt)(
            'p',
            null,
            'String is complicated. Rust offers a robust system to handle strings and a strict complier to encourage us to think about string handling upfront.\nOn the other hand, JavaScript provides convenient APIs to handle simple use cases like ASCII.\nUnder the hood, they both implement Unicode standard and encoding to support written languages internationally.'
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
                  { href: 'https://en.wikipedia.org/wiki/ASCII' }
                ),
                'ASCII'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://en.wikipedia.org/wiki/Unicode' }
                ),
                'Unicode'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://en.wikipedia.org/wiki/UTF-8' }
                ),
                'UTF-8'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://en.wikipedia.org/wiki/UTF-16' }
                ),
                'UTF-16'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://en.wikipedia.org/wiki/Palindrome' }
                ),
                'Palindrome'
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://doc.rust-lang.org/book/' }
                ),
                'The Rust Programming Language'
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
                      'https://doc.rust-lang.org/book/ch08-02-strings.html#internal-representation',
                  }
                ),
                "Rust's String Internal Representation"
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
                      'https://doc.rust-lang.org/stable/std/string/struct.String.html#method.chars',
                  }
                ),
                'Rust String method ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'chars()')
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
                      'https://doc.rust-lang.org/stable/std/string/struct.String.html#method.bytes',
                  }
                ),
                'Rust String method ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'bytes()')
              )
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://doc.rust-lang.org/std/iter/fn.zip.html' }
                ),
                'Rust String method ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'zip()')
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
                      'https://doc.rust-lang.org/std/iter/trait.DoubleEndedIterator.html',
                  }
                ),
                'Rust String Trait ',
                (0, d.kt)(
                  'inlineCode',
                  { parentName: 'a' },
                  'DoubleEndedIterator'
                )
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
                      'https://tc39.es/ecma262/#sec-terms-and-definitions-string-value',
                  }
                ),
                'ECMAScript 2022 Language Specification'
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
                      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize',
                  }
                ),
                'JavaScript ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'normalize()')
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
                      'https://developer.mozlla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape',
                  }
                ),
                'JavaScript ',
                (0, d.kt)('inlineCode', { parentName: 'a' }, 'escape()')
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
                      'https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API',
                  }
                ),
                'JavaScript Encoding API'
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
                      'https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder',
                  }
                ),
                'JavaScript TextEncoder'
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
                      'https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder',
                  }
                ),
                'JavaScript TextDecoder'
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
                      'https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/',
                  }
                ),
                'What every JavaScript developer should know about Unicode'
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
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://www.reddit.com/r/rust/comments/rrc0gg/indexing_strings_in_rust_and_typescript_a_case/',
                }
              ),
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
            "If you're interested in reading more about image optimization to boost your performance score, take a look at ",
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
            "If you're wondering how to test Redux Observable, I wrote an article ",
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
      return a((a.s = 6991))
    }),
      (_N_E = a.O())
  },
])

;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [773],
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
    4012: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/helloworld',
        function () {
          return c(6806)
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
    6806: function (a, b, c) {
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
          title: 'Hello World☀️',
          description:
            "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
          url: '/articles/helloworld',
          cover: '/optimized/portrait.png',
          category: 'Welcome',
          coverWidth: '384',
          coverHeight: '384',
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
            Object.assign({}, { id: 'hello-world️' }),
            'Hello World☀️'
          ),
          (0, d.kt)(
            'p',
            null,
            'Thank you so much for being interested in my articles!'
          ),
          (0, d.kt)(
            'p',
            null,
            "I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned! More articles are coming."
          ),
          (0, d.kt)('p', null, 'Stay tuned!')
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
      return a((a.s = 4012))
    }),
      (_N_E = a.O())
  },
])

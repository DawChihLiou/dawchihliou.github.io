;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [991],
  {
    7144: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/now',
        function () {
          return c(9811)
        },
      ])
    },
    1208: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return h
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(1664)
      function f(a, b, c) {
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
      function g(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {},
            d = Object.keys(c)
          'function' == typeof Object.getOwnPropertySymbols &&
            (d = d.concat(
              Object.getOwnPropertySymbols(c).filter(function (a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
              })
            )),
            d.forEach(function (b) {
              f(a, b, c[b])
            })
        }
        return a
      }
      function h(a) {
        var b = a.href
        return b && (b.startsWith('/') || b.startsWith('#'))
          ? (0, d.jsx)(e.default, {
              href: b,
              children: (0, d.jsx)('a', g({}, a, { children: a.children })),
            })
          : (0, d.jsx)(
              'a',
              g({ target: '_blank', rel: 'noopener noreferrer' }, a, {
                children: a.children,
              })
            )
      }
    },
    420: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return d
        },
      })
      var d = { a: c(1208).Z }
    },
    3295: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return i
        },
      })
      var d = c(5893),
        e = c(7294),
        f = c(9008),
        g = c(1163),
        h = c(2985)
      function i(a) {
        var b = a.children,
          c = a.title,
          i = a.description,
          j = a.url,
          k = a.image,
          l = a.imageWidth,
          m = a.imageHeight,
          n = a.publishedAt,
          o = (0, g.useRouter)(),
          p = (0, e.useMemo)(
            function () {
              return n ? new Date(n).toISOString() : new Date().toISOString()
            },
            [n]
          )
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(f.default, {
              children: [
                (0, d.jsx)('title', { children: c }),
                (0, d.jsx)('meta', { name: 'description', content: i }),
                (0, d.jsx)('meta', {
                  name: 'robots',
                  content: 'follow, index',
                }),
                (0, d.jsx)('link', {
                  rel: 'canonical',
                  href: ''.concat(h.Z.home).concat(o.asPath),
                }),
                (0, d.jsx)('meta', { itemProp: 'name', content: c }),
                (0, d.jsx)('meta', { itemProp: 'description', content: i }),
                (0, d.jsx)('meta', { itemProp: 'image', content: k }),
                (0, d.jsx)('meta', { property: 'og:title', content: c }),
                (0, d.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, d.jsx)('meta', { property: 'og:url', content: j }),
                (0, d.jsx)('meta', { property: 'og:description', content: i }),
                (0, d.jsx)('meta', { property: 'og:image', content: k }),
                (0, d.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, d.jsx)('meta', { property: 'og:image:width', content: l }),
                (0, d.jsx)('meta', { property: 'og:image:height', content: m }),
                (0, d.jsx)('meta', { property: 'og:image:alt', content: i }),
                (0, d.jsx)('meta', {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                }),
                (0, d.jsx)('meta', {
                  name: 'twitter:site',
                  content: '@dawchihliou',
                }),
                (0, d.jsx)('meta', {
                  name: 'twitter:creator',
                  content: '@dawchihliou',
                }),
                (0, d.jsx)('meta', { name: 'twitter:title', content: c }),
                (0, d.jsx)('meta', { name: 'twitter:description', content: i }),
                (0, d.jsx)('meta', { name: 'twitter:image', content: k }),
                (0, d.jsx)('meta', {
                  property: 'article:published_time',
                  content: p,
                }),
                (0, d.jsx)('meta', {
                  property: 'article:section',
                  content: 'Article Section',
                }),
                (0, d.jsx)('meta', {
                  property: 'article:tag',
                  content: 'Article Tag',
                }),
              ],
            }),
            b,
          ],
        })
      }
    },
    9811: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          __N_SSG: function () {
            return k
          },
          default: function () {
            return l
          },
        })
      var d = c(5893)
      c(7294)
      var e = c(544),
        f = c(420),
        g = c(3295),
        h = c(2985),
        i = c(6944),
        j = c.n(i),
        k = !0
      function l(a) {
        var b = a.meta,
          c = (0, e.z)(b.body.code)
        return (0, d.jsx)(g.Z, {
          title: "Daw-Chih's ".concat(b.title),
          description: b.description,
          url: ''.concat(h.Z.home, '/').concat(b.slug),
          image: b.cover,
          imageWidth: b.coverWidth,
          imageHeight: b.coverHeight,
          children: (0, d.jsx)('main', {
            className: j().main,
            children: (0, d.jsxs)('article', {
              className: j().article,
              children: [
                (0, d.jsx)('h1', { children: b.title }),
                (0, d.jsx)(c, { components: f.Z }),
              ],
            }),
          }),
        })
      }
    },
    6944: function (a) {
      a.exports = { main: 'Now_main__vu_tz', article: 'Now_article__DX6t0' }
    },
    1163: function (a, b, c) {
      a.exports = c(387)
    },
    544: function (a, b, c) {
      'use strict'
      var d
      c.d(b, {
        z: function () {
          return i
        },
      })
      var e = c(7294),
        f = c(5893),
        g = c(3935)
      const h = (a, b = {}) => {
          const h = {
              React: e,
              ReactDOM: g,
              _jsx_runtime: d || (d = c.t(f, 2)),
              ...b,
            },
            i = new Function(...Object.keys(h), a)
          return i(...Object.values(h))
        },
        i = (a, b = {}) => e.useMemo(() => h(a, b), [a, b])
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      return a((a.s = 7144))
    }),
      (_N_E = a.O())
  },
])

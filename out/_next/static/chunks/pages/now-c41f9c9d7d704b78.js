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
    420: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return i
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(1664),
        f = c(5675)
      function g(a, b, c) {
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
      function h(a) {
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
              g(a, b, c[b])
            })
        }
        return a
      }
      var i = {
        Image: function (a) {
          return (0, d.jsx)(f.default, h({ alt: a.alt }, a))
        },
        a: function (a) {
          var b = a.href
          return b && (b.startsWith('/') || b.startsWith('#'))
            ? (0, d.jsx)(e.default, {
                href: b,
                children: (0, d.jsx)('a', h({}, a, { children: a.children })),
              })
            : (0, d.jsx)(
                'a',
                h({ target: '_blank', rel: 'noopener noreferrer' }, a, {
                  children: a.children,
                })
              )
        },
      }
    },
    3295: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return f
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(9008)
      function f(a) {
        var b = a.children,
          c = a.title,
          f = a.description,
          g = a.url,
          h = a.image,
          i = a.imageWidth,
          j = a.imageHeight
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(e.default, {
              children: [
                (0, d.jsx)('title', { children: c }),
                (0, d.jsx)('meta', { name: 'description', content: f }),
                (0, d.jsx)('meta', { property: 'og:title', content: c }),
                (0, d.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, d.jsx)('meta', { property: 'og:url', content: g }),
                (0, d.jsx)('meta', { property: 'og:description', content: f }),
                (0, d.jsx)('meta', { property: 'og:image', content: h }),
                (0, d.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, d.jsx)('meta', { property: 'og:image:width', content: i }),
                (0, d.jsx)('meta', { property: 'og:image:height', content: j }),
                (0, d.jsx)('meta', { property: 'og:image:alt', content: f }),
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
        h = c(5699),
        i = c(6944),
        j = c.n(i),
        k = !0
      function l(a) {
        var b = a.now,
          c = (0, e.z)(b.body.code)
        return (0, d.jsx)(g.Z, {
          title: b.title,
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
  },
  function (a) {
    a.O(0, [484, 774, 888, 179], function () {
      return a((a.s = 7144))
    }),
      (_N_E = a.O())
  },
])

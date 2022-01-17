;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [850],
  {
    5158: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/[slug]',
        function () {
          return c(2041)
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
    2041: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          __N_SSG: function () {
            return q
          },
          default: function () {
            return r
          },
        })
      var d = c(5893)
      c(7294)
      var e = c(544),
        f = c(420),
        g = c(5675),
        h = c(7747),
        i = c.n(h),
        j = c(5699),
        k = c(9754),
        l = c.n(k)
      function m() {
        return (0, d.jsxs)('article', {
          className: l().wrap,
          children: [
            (0, d.jsx)('img', {
              src: '/optimized/portrait-sm.png',
              alt: 'Daw-Chih Liou',
              className: l().avatar,
              loading: 'lazy',
            }),
            (0, d.jsxs)('div', {
              children: [
                (0, d.jsx)('a', {
                  href: j.Z.home,
                  className: l().author,
                  children: (0, d.jsx)('span', { children: 'Daw-Chih Liou' }),
                }),
                (0, d.jsx)('p', { children: j.Z.description }),
              ],
            }),
          ],
        })
      }
      var n = c(3295)
      function o(a) {
        var b = a.children,
          c = a.title,
          e = a.description,
          f = a.publishedAt,
          h = a.slug,
          k = a.cover,
          l = void 0 === k ? '' : k,
          o = a.coverWidth,
          p = a.coverHeight,
          q = a.readingTime,
          r = a.hideAuthor
        return (0, d.jsx)(n.Z, {
          title: c,
          description: e,
          url: 'https://dawchihliou.github.io/articles/'.concat(
            void 0 === h ? '' : h
          ),
          image: ''.concat(j.Z.home).concat(l),
          imageWidth: o,
          imageHeight: p,
          children: (0, d.jsx)('article', {
            children: (0, d.jsx)('div', {
              className: i().container,
              children: (0, d.jsxs)('div', {
                className: i().wrap,
                children: [
                  (0, d.jsx)('h1', { children: c }),
                  (0, d.jsxs)('div', {
                    className: i().info,
                    children: [
                      (0, d.jsxs)('div', {
                        className: i().author,
                        children: [
                          (0, d.jsx)(g.default, {
                            alt: 'Daw-Chih Liou',
                            src: '/optimized/portrait-sm.webp',
                            width: '24',
                            height: '24',
                          }),
                          (0, d.jsx)('p', { children: 'Daw-Chih Liou' }),
                        ],
                      }),
                      (0, d.jsxs)('p', {
                        children: [f, q ? ' \xb7 '.concat(q.text) : ''],
                      }),
                    ],
                  }),
                  (0, d.jsx)(g.default, {
                    alt: c,
                    width: 1400,
                    height: p,
                    src: l,
                  }),
                  (0, d.jsx)('div', {
                    className: 'article-content',
                    children: b,
                  }),
                  !r && (0, d.jsx)(m, {}),
                ],
              }),
            }),
          }),
        })
      }
      function p(a, b, c) {
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
      var q = !0
      function r(a) {
        var b = a.post,
          c = (0, e.z)(b.body.code)
        return (0, d.jsx)(
          o,
          (function (a) {
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
                  p(a, b, c[b])
                })
            }
            return a
          })({}, b, { children: (0, d.jsx)(c, { components: f.Z }) })
        )
      }
    },
    7747: function (a) {
      a.exports = {
        container: 'Article_container__q__L3',
        wrap: 'Article_wrap__LZypL',
        info: 'Article_info__bOKys',
        author: 'Article_author__grS8U',
      }
    },
    9754: function (a) {
      a.exports = { wrap: 'Author_wrap__s8DeE', avatar: 'Author_avatar__j6KIn' }
    },
  },
  function (a) {
    a.O(0, [484, 774, 888, 179], function () {
      return a((a.s = 5158))
    }),
      (_N_E = a.O())
  },
])

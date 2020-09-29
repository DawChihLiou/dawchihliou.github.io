_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    '4cT7': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return u
        })
      var r = n('wx14'),
        a = n('Ff2n'),
        o = n('q1tI'),
        c = n.n(o),
        i = n('7ljp'),
        p = (c.a.createElement, {})
      function u(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components'])
        return Object(i.b)(
          'wrapper',
          Object(r.a)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
          Object(i.b)('h1', { id: 'now' }, 'Now'),
          Object(i.b)(
            'p',
            null,
            "It's inspired by ",
            Object(i.b)(
              'a',
              Object(r.a)(
                { parentName: 'p' },
                { href: 'https://nownownow.com/about' }
              ),
              'nownownow.com'
            ),
            '. ',
            Object(i.b)('inlineCode', { parentName: 'p' }, '/now'),
            " page is all about what I'm up to ",
            Object(i.b)('strong', { parentName: 'p' }, 'now'),
            '.'
          ),
          Object(i.b)(
            'p',
            null,
            '\ud83d\udc68\u200d\ud83d\udcbb Software Engineer at ',
            Object(i.b)(
              'a',
              Object(r.a)({ parentName: 'p' }, { href: 'http://trivago.com/' }),
              'trivago'
            )
          ),
          Object(i.b)(
            'p',
            null,
            "\ud83c\udf31 I'm learning ",
            Object(i.b)(
              'a',
              Object(r.a)(
                { parentName: 'p' },
                {
                  href:
                    'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/',
                }
              ),
              'CDN'
            ),
            ' and ',
            Object(i.b)(
              'a',
              Object(r.a)(
                { parentName: 'p' },
                {
                  href:
                    'https://developer.akamai.com/akamai-edgeworkers-overview',
                }
              ),
              'Akamai EdgeWorkers'
            ),
            ". It's been fun!"
          ),
          Object(i.b)(
            'p',
            null,
            "\ud83c\udfa8 I'm building this personal portfolio!"
          ),
          Object(i.b)(
            'p',
            null,
            "\ud83d\udc9a I'm trying out plant-based diet."
          ),
          Object(i.b)(
            'p',
            null,
            '\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f I started lifting weight again! Making baby steps.'
          ),
          Object(i.b)(
            'p',
            null,
            "\u270f\ufe0f I'm learning to write thoughts down with ",
            Object(i.b)(
              'a',
              Object(r.a)(
                { parentName: 'p' },
                { href: 'https://www.mindmapping.com/' }
              ),
              'Mind Map'
            )
          ),
          Object(i.b)('br', null),
          Object(i.b)(
            'span',
            null,
            'Last updated on',
            ' ',
            new Date().toLocaleDateString('en-EN', {
              weekday: 'short',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            '.'
          )
        )
      }
      u.isMDXComponent = !0
    },
    '7ljp': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      }),
        n.d(t, 'b', function () {
          return O
        })
      var r = n('q1tI'),
        a = n.n(r)
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                o(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function p(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      var u = a.a.createContext({}),
        l = function (e) {
          var t = a.a.useContext(u),
            n = t
          return e && (n = 'function' === typeof e ? e(t) : i(i({}, t), e)), n
        },
        b = function (e) {
          var t = l(e.components)
          return a.a.createElement(u.Provider, { value: t }, e.children)
        },
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return a.a.createElement(a.a.Fragment, {}, t)
          },
        },
        s = a.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            c = e.parentName,
            u = p(e, ['components', 'mdxType', 'originalType', 'parentName']),
            b = l(n),
            s = r,
            O = b[''.concat(c, '.').concat(s)] || b[s] || f[s] || o
          return n
            ? a.a.createElement(O, i(i({ ref: t }, u), {}, { components: n }))
            : a.a.createElement(O, i({ ref: t }, u))
        })
      function O(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' === typeof e || r) {
          var o = n.length,
            c = new Array(o)
          c[0] = s
          var i = {}
          for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p])
          ;(i.originalType = e),
            (i.mdxType = 'string' === typeof e ? e : r),
            (c[1] = i)
          for (var u = 2; u < o; u++) c[u] = n[u]
          return a.a.createElement.apply(null, c)
        }
        return a.a.createElement.apply(null, n)
      }
      s.displayName = 'MDXCreateElement'
    },
    Ff2n: function (e, t, n) {
      'use strict'
      function r(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    Qetd: function (e, t, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(e.exports = r), (e.exports.default = e.exports)
    },
    wx14: function (e, t, n) {
      'use strict'
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    zmQw: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/now',
        function () {
          return n('4cT7')
        },
      ])
    },
  },
  [['zmQw', 0, 1]],
])

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    '7ljp': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return y
        })
      var r = n('q1tI'),
        o = n.n(r)
      function c(e, t, n) {
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
      function a(e, t) {
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
            ? a(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function u(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              c = Object.keys(e)
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      var l = o.a.createContext({}),
        p = function (e) {
          var t = o.a.useContext(l),
            n = t
          return e && (n = 'function' === typeof e ? e(t) : i(i({}, t), e)), n
        },
        f = function (e) {
          var t = p(e.components)
          return o.a.createElement(l.Provider, { value: t }, e.children)
        },
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.a.createElement(o.a.Fragment, {}, t)
          },
        },
        b = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            c = e.originalType,
            a = e.parentName,
            l = u(e, ['components', 'mdxType', 'originalType', 'parentName']),
            f = p(n),
            b = r,
            y = f[''.concat(a, '.').concat(b)] || f[b] || s[b] || c
          return n
            ? o.a.createElement(y, i(i({ ref: t }, l), {}, { components: n }))
            : o.a.createElement(y, i({ ref: t }, l))
        })
      function y(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' === typeof e || r) {
          var c = n.length,
            a = new Array(c)
          a[0] = b
          var i = {}
          for (var u in t) hasOwnProperty.call(t, u) && (i[u] = t[u])
          ;(i.originalType = e),
            (i.mdxType = 'string' === typeof e ? e : r),
            (a[1] = i)
          for (var l = 2; l < c; l++) a[l] = n[l]
          return o.a.createElement.apply(null, a)
        }
        return o.a.createElement.apply(null, n)
      }
      b.displayName = 'MDXCreateElement'
    },
    Ff2n: function (e, t, n) {
      'use strict'
      function r(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              c = Object.keys(e)
            for (r = 0; r < c.length; r++)
              (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    PFWJ: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/helloworld',
        function () {
          return n('YL1O')
        },
      ])
    },
    Qetd: function (e, t, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(e.exports = r), (e.exports.default = e.exports)
    },
    YL1O: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return l
        })
      var r = n('wx14'),
        o = n('Ff2n'),
        c = n('q1tI'),
        a = n.n(c),
        i = n('7ljp'),
        u = (a.a.createElement, {})
      function l(e) {
        var t = e.components,
          n = Object(o.a)(e, ['components'])
        return Object(i.b)(
          'wrapper',
          Object(r.a)({}, u, n, { components: t, mdxType: 'MDXLayout' }),
          Object(i.b)(
            'h2',
            { id: 'hello-world\ufe0f' },
            'Hello World\u2600\ufe0f'
          ),
          Object(i.b)(
            'p',
            null,
            'Thank you so much for being interested in my articles!'
          ),
          Object(i.b)(
            'p',
            null,
            "I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned! More articles are coming."
          ),
          Object(i.b)('p', null, 'Stay tuned!')
        )
      }
      l.isMDXComponent = !0
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
  },
  [['PFWJ', 0, 1]],
])

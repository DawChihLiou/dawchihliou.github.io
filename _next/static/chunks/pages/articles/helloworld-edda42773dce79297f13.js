_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    '7ljp': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var r = n('q1tI'),
        o = n.n(r)
      function a(e, t, n) {
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
                a(e, t, n[t])
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
      function l(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      var u = o.a.createContext({}),
        p = function (e) {
          var t = o.a.useContext(u),
            n = t
          return e && (n = 'function' === typeof e ? e(t) : i(i({}, t), e)), n
        },
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.a.createElement(o.a.Fragment, {}, t)
          },
        },
        s = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = p(n),
            y = r,
            b = s[''.concat(c, '.').concat(y)] || s[y] || f[y] || a
          return n
            ? o.a.createElement(b, i(i({ ref: t }, u), {}, { components: n }))
            : o.a.createElement(b, i({ ref: t }, u))
        })
      function y(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' === typeof e || r) {
          var a = n.length,
            c = new Array(a)
          c[0] = s
          var i = {}
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l])
          ;(i.originalType = e),
            (i.mdxType = 'string' === typeof e ? e : r),
            (c[1] = i)
          for (var u = 2; u < a; u++) c[u] = n[u]
          return o.a.createElement.apply(null, c)
        }
        return o.a.createElement.apply(null, n)
      }
      s.displayName = 'MDXCreateElement'
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
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
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
          return u
        })
      var r = n('wx14'),
        o = n('Ff2n'),
        a = n('q1tI'),
        c = n.n(a),
        i = n('7ljp'),
        l = (c.a.createElement, {})
      function u(e) {
        var t = e.components,
          n = Object(o.a)(e, ['components'])
        return Object(i.a)(
          'wrapper',
          Object(r.a)({}, l, n, { components: t, mdxType: 'MDXLayout' }),
          Object(i.a)(
            'h2',
            { id: 'hello-world\ufe0f' },
            'Hello World\u2600\ufe0f'
          ),
          Object(i.a)(
            'p',
            null,
            'Thank you so much for being interested in my articles!'
          ),
          Object(i.a)(
            'p',
            null,
            "I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned! More articles are coming."
          ),
          Object(i.a)('p', null, 'Stay tuned!')
        )
      }
      u.isMDXComponent = !0
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

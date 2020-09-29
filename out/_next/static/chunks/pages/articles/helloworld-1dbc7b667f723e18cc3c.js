_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    '7ljp': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      }),
        r.d(t, 'b', function () {
          return y
        })
      var n = r('q1tI'),
        o = r.n(n)
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function c(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                a(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function l(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]))
        }
        return o
      }
      var u = o.a.createContext({}),
        p = function (e) {
          var t = o.a.useContext(u),
            r = t
          return e && (r = 'function' === typeof e ? e(t) : i(i({}, t), e)), r
        },
        f = function (e) {
          var t = p(e.components)
          return o.a.createElement(u.Provider, { value: t }, e.children)
        },
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.a.createElement(o.a.Fragment, {}, t)
          },
        },
        b = o.a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            f = p(r),
            b = n,
            y = f[''.concat(c, '.').concat(b)] || f[b] || s[b] || a
          return r
            ? o.a.createElement(y, i(i({ ref: t }, u), {}, { components: r }))
            : o.a.createElement(y, i({ ref: t }, u))
        })
      function y(e, t) {
        var r = arguments,
          n = t && t.mdxType
        if ('string' === typeof e || n) {
          var a = r.length,
            c = new Array(a)
          c[0] = b
          var i = {}
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l])
          ;(i.originalType = e),
            (i.mdxType = 'string' === typeof e ? e : n),
            (c[1] = i)
          for (var u = 2; u < a; u++) c[u] = r[u]
          return o.a.createElement.apply(null, c)
        }
        return o.a.createElement.apply(null, r)
      }
      b.displayName = 'MDXCreateElement'
    },
    PFWJ: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/helloworld',
        function () {
          return r('YL1O')
        },
      ])
    },
    Qetd: function (e, t, r) {
      'use strict'
      var n = Object.assign.bind(Object)
      ;(e.exports = n), (e.exports.default = e.exports)
    },
    YL1O: function (e, t, r) {
      'use strict'
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }).apply(this, arguments)
      }
      function o(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]))
        }
        return o
      }
      r.r(t),
        r.d(t, 'default', function () {
          return u
        })
      var a = r('q1tI'),
        c = r.n(a),
        i = r('7ljp'),
        l = (c.a.createElement, {})
      function u(e) {
        var t = e.components,
          r = o(e, ['components'])
        return Object(i.b)(
          'wrapper',
          n({}, l, r, { components: t, mdxType: 'MDXLayout' }),
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
      u.isMDXComponent = !0
    },
  },
  [['PFWJ', 0, 1]],
])

;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext))
        })
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        a = n('lwAK')
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a
        return n || (o && i)
      }
    },
    '2JHi': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r = n('q1tI'),
        o = n.n(r),
        a = n('8Kt/'),
        i = n.n(a),
        u = n('UKBM'),
        c = n.n(u),
        s = n('PZRn'),
        p = n('JRT3'),
        f = n.n(p),
        l = o.a.createElement
      function d() {
        return l(
          'article',
          { className: f.a.wrap },
          l('img', {
            src: '/optimized/portrait-sm.png',
            alt: 'Daw-Chih Liou',
            className: f.a.avatar,
            loading: 'lazy',
          }),
          l(
            'div',
            null,
            l(
              'a',
              { href: s.a.home, className: f.a.author },
              l('span', null, 'Daw-Chih Liou')
            ),
            l(
              'p',
              null,
              'Daw-Chih is a software engineer, UX advocate, and mentor who is dedicated to Web engineering. He is passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.'
            )
          )
        )
      }
      var m = o.a.createElement
      function h(e) {
        var t = e.children,
          n = e.title,
          r = e.description,
          a = e.url,
          u = void 0 === a ? '' : a,
          p = e.cover,
          f = void 0 === p ? '' : p,
          l = e.coverWidth,
          h = void 0 === l ? '' : l,
          y = e.coverHeight,
          g = void 0 === y ? '' : y,
          v = e.hideAuthor
        return m(
          o.a.Fragment,
          null,
          m(
            i.a,
            null,
            m('title', null, n),
            m('meta', { name: 'description', content: r }),
            m('meta', { property: 'og:title', content: n }),
            m('meta', { property: 'og:type', content: 'website' }),
            m('meta', { property: 'og:url', content: u }),
            m('meta', { property: 'og:description', content: r }),
            m('meta', {
              property: 'og:image',
              content: ''.concat(s.a.home).concat(f),
            }),
            m('meta', { property: 'og:image:type', content: 'image/png' }),
            m('meta', { property: 'og:image:width', content: h }),
            m('meta', { property: 'og:image:height', content: g }),
            m('meta', { property: 'og:image:alt', content: r })
          ),
          m(
            'article',
            null,
            m(
              'div',
              { className: c.a.container },
              m('div', { className: c.a.wrap }, t, !v && m(d, null))
            )
          )
        )
      }
    },
    '7W2i': function (e, t, n) {
      var r = n('SksO')
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t)
      }
    },
    '7ljp': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
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
      function i(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function c(e, t) {
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
      var s = o.a.createContext({}),
        p = function (e) {
          var t = o.a.useContext(s),
            n = t
          return e && (n = 'function' === typeof e ? e(t) : u(u({}, t), e)), n
        },
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.a.createElement(o.a.Fragment, {}, t)
          },
        },
        l = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            i = e.parentName,
            s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            l = p(n),
            d = r,
            m = l[''.concat(i, '.').concat(d)] || l[d] || f[d] || a
          return n
            ? o.a.createElement(m, u(u({ ref: t }, s), {}, { components: n }))
            : o.a.createElement(m, u({ ref: t }, s))
        })
      function d(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' === typeof e || r) {
          var a = n.length,
            i = new Array(a)
          i[0] = l
          var u = {}
          for (var c in t) hasOwnProperty.call(t, c) && (u[c] = t[c])
          ;(u.originalType = e),
            (u.mdxType = 'string' === typeof e ? e : r),
            (i[1] = u)
          for (var s = 2; s < a; s++) i[s] = n[s]
          return o.a.createElement.apply(null, i)
        }
        return o.a.createElement.apply(null, n)
      }
      l.displayName = 'MDXCreateElement'
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('lSNA')
      ;(t.__esModule = !0), (t.defaultHead = p), (t.default = void 0)
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        a = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        i = n('lwAK'),
        u = n('FYa8'),
        c = n('/0+H')
      function s() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        )
      }
      function f(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var l = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(p(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (o) {
                var a = !0
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var i = o.key.slice(o.key.indexOf('$') + 1)
                  e.has(i) ? (a = !1) : e.add(i)
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type)
                    break
                  case 'meta':
                    for (var u = 0, c = l.length; u < c; u++) {
                      var s = l[u]
                      if (o.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (a = !1) : n.add(s)
                        else {
                          var p = o.props[s],
                            f = r[s] || new Set()
                          f.has(p) ? (a = !1) : (f.add(p), (r[s] = f))
                        }
                    }
                }
                return a
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return o.default.cloneElement(e, { key: n })
          })
      }
      function m(e) {
        var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext)
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: d,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(n),
          },
          t
        )
      }
      m.rewind = function () {}
      var h = m
      t.default = h
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
    },
    FYa8: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.HeadManagerContext = o
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
    Ijbi: function (e, t, n) {
      var r = n('WkPL')
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
      }
    },
    JRT3: function (e, t, n) {
      e.exports = { wrap: 'Author_wrap__3t5nz', avatar: 'Author_avatar__1t106' }
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          n(t)
        )
      }
      e.exports = n
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
    },
    PZRn: function (e, t, n) {
      'use strict'
      t.a = {
        linkedin: 'https://www.linkedin.com/in/dawchihliou/',
        medium: 'https://medium.com/@dawchihliou',
        twitter: 'https://twitter.com/dawchihliou',
        github: 'https://github.com/DawChihLiou',
        home: 'https://dawchihliou.github.io/',
        heroImage: 'https://dawchihliou.github.io/optimized/social-media.png',
        description:
          'Daw-Chih is a software engineer, UX advocate, and mentor who is dedicated to Web engineering. His background in Human Centered Computing has led him to work with startups and public companies across North America, Asia, and Europe. He is passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.',
      }
    },
    Qetd: function (e, t, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(e.exports = r), (e.exports.default = e.exports)
    },
    RIqP: function (e, t, n) {
      var r = n('Ijbi'),
        o = n('EbDI'),
        a = n('ZhPi'),
        i = n('Bnag')
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i()
      }
    },
    SksO: function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          n(t, r)
        )
      }
      e.exports = n
    },
    UKBM: function (e, t, n) {
      e.exports = {
        container: 'Article_container__1QUG1',
        wrap: 'Article_wrap__3hYbD',
      }
    },
    W8MJ: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
      }
    },
    WkPL: function (e, t) {
      e.exports = function (e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('RIqP'),
        o = n('lwsE'),
        a = n('W8MJ'),
        i = (n('PJYZ'), n('7W2i')),
        u = n('a1gu'),
        c = n('Nsbk')
      function s(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = c(e)
          if (t) {
            var o = c(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var p = n('q1tI'),
        f = (function (e) {
          i(n, e)
          var t = s(n)
          function n(e) {
            var a
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  )
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            )
          }
          return (
            a(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.default = f
    },
    ZhPi: function (e, t, n) {
      var r = n('WkPL')
      e.exports = function (e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          )
        }
      }
    },
    a1gu: function (e, t, n) {
      var r = n('cDf5'),
        o = n('PJYZ')
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t
      }
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e
              })
            : (e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
          n(t)
        )
      }
      e.exports = n
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
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
    },
    lwAK: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.AmpStateContext = o
    },
    lwsE: function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
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
])

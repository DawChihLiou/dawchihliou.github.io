;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [2],
  {
    '/0+H': function (t, e, n) {
      'use strict'
      ;(e.__esModule = !0),
        (e.isInAmpMode = i),
        (e.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext))
        })
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        a = n('lwAK')
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          r = t.hybrid,
          o = void 0 !== r && r,
          a = t.hasQuery,
          i = void 0 !== a && a
        return n || (o && i)
      }
    },
    '7W2i': function (t, e, n) {
      var r = n('SksO')
      t.exports = function (t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && r(t, e)
      }
    },
    '8Kt/': function (t, e, n) {
      'use strict'
      n('lSNA')
      ;(e.__esModule = !0), (e.defaultHead = l), (e.default = void 0)
      var r,
        o = (function (t) {
          if (t && t.__esModule) return t
          if (null === t || ('object' !== typeof t && 'function' !== typeof t))
            return { default: t }
          var e = s()
          if (e && e.has(t)) return e.get(t)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var o in t)
            if (Object.prototype.hasOwnProperty.call(t, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(t, o) : null
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = t[o])
            }
          ;(n.default = t), e && e.set(t, n)
          return n
        })(n('q1tI')),
        a = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        i = n('lwAK'),
        u = n('FYa8'),
        c = n('/0+H')
      function s() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (s = function () {
            return t
          }),
          t
        )
      }
      function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [o.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          t ||
            e.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          e
        )
      }
      function f(t, e) {
        return 'string' === typeof e || 'number' === typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return 'string' === typeof e || 'number' === typeof e
                  ? t
                  : t.concat(e)
              },
              [])
            )
          : t.concat(e)
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function p(t, e) {
        return t
          .reduce(function (t, e) {
            var n = o.default.Children.toArray(e.props.children)
            return t.concat(n)
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(e.inAmpMode))
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
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
                  t.has(i) ? (a = !1) : t.add(i)
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    e.has(o.type) ? (a = !1) : e.add(o.type)
                    break
                  case 'meta':
                    for (var u = 0, c = d.length; u < c; u++) {
                      var s = d[u]
                      if (o.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (a = !1) : n.add(s)
                        else {
                          var l = o.props[s],
                            f = r[s] || new Set()
                          f.has(l) ? (a = !1) : (f.add(l), (r[s] = f))
                        }
                    }
                }
                return a
              }
            })()
          )
          .reverse()
          .map(function (t, e) {
            var n = t.key || e
            return o.default.cloneElement(t, { key: n })
          })
      }
      function h(t) {
        var e = t.children,
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(u.HeadManagerContext)
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(n),
          },
          e
        )
      }
      h.rewind = function () {}
      var y = h
      e.default = y
    },
    Bnag: function (t, e) {
      t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    EbDI: function (t, e) {
      t.exports = function (t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t)
      }
    },
    FYa8: function (t, e, n) {
      'use strict'
      var r
      ;(e.__esModule = !0), (e.HeadManagerContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      e.HeadManagerContext = o
    },
    Ijbi: function (t, e, n) {
      var r = n('WkPL')
      t.exports = function (t) {
        if (Array.isArray(t)) return r(t)
      }
    },
    Lnxd: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return s
      })
      var r = n('q1tI'),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = r.createContext && r.createContext(o),
        i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
              return t
            }).apply(this, arguments)
        },
        u = function (t, e) {
          var n = {}
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r])
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
          }
          return n
        }
      function c(t) {
        return (
          t &&
          t.map(function (t, e) {
            return r.createElement(t.tag, i({ key: e }, t.attr), c(t.child))
          })
        )
      }
      function s(t) {
        return function (e) {
          return r.createElement(l, i({ attr: i({}, t.attr) }, e), c(t.child))
        }
      }
      function l(t) {
        var e = function (e) {
          var n,
            o = t.size || e.size || '1em'
          e.className && (n = e.className),
            t.className && (n = (n ? n + ' ' : '') + t.className)
          var a = t.attr,
            c = t.title,
            s = u(t, ['attr', 'title'])
          return r.createElement(
            'svg',
            i(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '0',
              },
              e.attr,
              a,
              s,
              {
                className: n,
                style: i({ color: t.color || e.color }, e.style, t.style),
                height: o,
                width: o,
                xmlns: 'http://www.w3.org/2000/svg',
              }
            ),
            c && r.createElement('title', null, c),
            t.children
          )
        }
        return void 0 !== a
          ? r.createElement(a.Consumer, null, function (t) {
              return e(t)
            })
          : e(o)
      }
    },
    Nsbk: function (t, e) {
      function n(e) {
        return (
          (t.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          n(e)
        )
      }
      t.exports = n
    },
    PJYZ: function (t, e) {
      t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }
    },
    PZRn: function (t, e, n) {
      'use strict'
      e.a = {
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
    Qetd: function (t, e, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(t.exports = r), (t.exports.default = t.exports)
    },
    RIqP: function (t, e, n) {
      var r = n('Ijbi'),
        o = n('EbDI'),
        a = n('ZhPi'),
        i = n('Bnag')
      t.exports = function (t) {
        return r(t) || o(t) || a(t) || i()
      }
    },
    SksO: function (t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          n(e, r)
        )
      }
      t.exports = n
    },
    Tgqd: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return o
      }),
        n.d(e, 'b', function () {
          return a
        }),
        n.d(e, 'c', function () {
          return i
        }),
        n.d(e, 'd', function () {
          return u
        }),
        n.d(e, 'e', function () {
          return c
        }),
        n.d(e, 'f', function () {
          return s
        }),
        n.d(e, 'g', function () {
          return l
        }),
        n.d(e, 'h', function () {
          return f
        }),
        n.d(e, 'i', function () {
          return d
        })
      var r = n('Lnxd')
      function o(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '5', r: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '22', x2: '12', y2: '8' } },
            { tag: 'path', attr: { d: 'M5 12H2a10 10 0 0 0 20 0h-3' } },
          ],
        })(t)
      }
      function a(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '8', r: '7' } },
            {
              tag: 'polyline',
              attr: { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' },
            },
          ],
        })(t)
      }
      function i(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '3', y1: '12', x2: '21', y2: '12' } },
            { tag: 'line', attr: { x1: '3', y1: '6', x2: '21', y2: '6' } },
            { tag: 'line', attr: { x1: '3', y1: '18', x2: '21', y2: '18' } },
          ],
        })(t)
      }
      function u(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' },
            },
          ],
        })(t)
      }
      function c(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'path', attr: { d: 'M4 11a9 9 0 0 1 9 9' } },
            { tag: 'path', attr: { d: 'M4 4a16 16 0 0 1 16 16' } },
            { tag: 'circle', attr: { cx: '5', cy: '19', r: '1' } },
          ],
        })(t)
      }
      function s(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '10' } },
            { tag: 'path', attr: { d: 'M8 14s1.5 2 4 2 4-2 4-2' } },
            { tag: 'line', attr: { x1: '9', y1: '9', x2: '9.01', y2: '9' } },
            { tag: 'line', attr: { x1: '15', y1: '9', x2: '15.01', y2: '9' } },
          ],
        })(t)
      }
      function l(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '5' } },
            { tag: 'line', attr: { x1: '12', y1: '1', x2: '12', y2: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '21', x2: '12', y2: '23' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' },
            },
            { tag: 'line', attr: { x1: '1', y1: '12', x2: '3', y2: '12' } },
            { tag: 'line', attr: { x1: '21', y1: '12', x2: '23', y2: '12' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' },
            },
          ],
        })(t)
      }
      function f(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'rect',
              attr: {
                x: '1',
                y: '5',
                width: '22',
                height: '14',
                rx: '7',
                ry: '7',
              },
            },
            { tag: 'circle', attr: { cx: '8', cy: '12', r: '3' } },
          ],
        })(t)
      }
      function d(t) {
        return Object(r.a)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '18', y1: '6', x2: '6', y2: '18' } },
            { tag: 'line', attr: { x1: '6', y1: '6', x2: '18', y2: '18' } },
          ],
        })(t)
      }
    },
    W8MJ: function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      t.exports = function (t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
      }
    },
    WkPL: function (t, e) {
      t.exports = function (t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
    },
    Xuae: function (t, e, n) {
      'use strict'
      var r = n('RIqP'),
        o = n('lwsE'),
        a = n('W8MJ'),
        i = (n('PJYZ'), n('7W2i')),
        u = n('a1gu'),
        c = n('Nsbk')
      function s(t) {
        var e = (function () {
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
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = c(t)
          if (e) {
            var o = c(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return u(this, n)
        }
      }
      ;(e.__esModule = !0), (e.default = void 0)
      var l = n('q1tI'),
        f = (function (t) {
          i(n, t)
          var e = s(n)
          function n(t) {
            var a
            return (
              o(this, n),
              ((a = e.call(this, t))._hasHeadManager = void 0),
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
        })(l.Component)
      e.default = f
    },
    ZhPi: function (t, e, n) {
      var r = n('WkPL')
      t.exports = function (t, e) {
        if (t) {
          if ('string' === typeof t) return r(t, e)
          var n = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          )
        }
      }
    },
    a1gu: function (t, e, n) {
      var r = n('cDf5'),
        o = n('PJYZ')
      t.exports = function (t, e) {
        return !e || ('object' !== r(e) && 'function' !== typeof e) ? o(t) : e
      }
    },
    cDf5: function (t, e) {
      function n(e) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (t.exports = n = function (t) {
                return typeof t
              })
            : (t.exports = n = function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              }),
          n(e)
        )
      }
      t.exports = n
    },
    g4pe: function (t, e, n) {
      t.exports = n('8Kt/')
    },
    lSNA: function (t, e) {
      t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        )
      }
    },
    lwAK: function (t, e, n) {
      'use strict'
      var r
      ;(e.__esModule = !0), (e.AmpStateContext = void 0)
      var o = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      e.AmpStateContext = o
    },
    lwsE: function (t, e) {
      t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
    },
  },
])

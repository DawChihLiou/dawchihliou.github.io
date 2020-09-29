_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    0: function (e, t, r) {
      r('74v/'), (e.exports = r('nOHt'))
    },
    '6HWB': function (e, t, r) {
      e.exports = {
        footer: 'Footer_footer__31YtZ',
        wrap: 'Footer_wrap__2j7om',
        contact: 'Footer_contact__2PXqp',
        resources: 'Footer_resources__Xjxum',
        sitemap: 'Footer_sitemap__2FrpO',
        emoji: 'Footer_emoji__3ECxd',
        copyright: 'Footer_copyright__PzPTf',
      }
    },
    '74v/': function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r('cha2')
        },
      ])
    },
    '7ljp': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return p
      }),
        r.d(t, 'b', function () {
          return m
        })
      var n = r('q1tI'),
        a = r.n(n)
      function o(e, t, r) {
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
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                o(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function i(e, t) {
        if (null == e) return {}
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              a = {},
              o = Object.keys(e)
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]))
        }
        return a
      }
      var u = a.a.createContext({}),
        f = function (e) {
          var t = a.a.useContext(u),
            r = t
          return e && (r = 'function' === typeof e ? e(t) : l(l({}, t), e)), r
        },
        p = function (e) {
          var t = f(e.components)
          return a.a.createElement(u.Provider, { value: t }, e.children)
        },
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return a.a.createElement(a.a.Fragment, {}, t)
          },
        },
        d = a.a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            u = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = f(r),
            d = n,
            m = p[''.concat(s, '.').concat(d)] || p[d] || c[d] || o
          return r
            ? a.a.createElement(m, l(l({ ref: t }, u), {}, { components: r }))
            : a.a.createElement(m, l({ ref: t }, u))
        })
      function m(e, t) {
        var r = arguments,
          n = t && t.mdxType
        if ('string' === typeof e || n) {
          var o = r.length,
            s = new Array(o)
          s[0] = d
          var l = {}
          for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i])
          ;(l.originalType = e),
            (l.mdxType = 'string' === typeof e ? e : n),
            (s[1] = l)
          for (var u = 2; u < o; u++) s[u] = r[u]
          return a.a.createElement.apply(null, s)
        }
        return a.a.createElement.apply(null, r)
      }
      d.displayName = 'MDXCreateElement'
    },
    '9d8Q': function (e, t, r) {},
    A8Jr: function (e, t, r) {},
    ACjt: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        o = function (e, t, r) {
          for (var n = !0; n; ) {
            var a = e,
              o = t,
              s = r
            ;(n = !1), null === a && (a = Function.prototype)
            var l = Object.getOwnPropertyDescriptor(a, o)
            if (void 0 !== l) {
              if ('value' in l) return l.value
              var i = l.get
              if (void 0 === i) return
              return i.call(s)
            }
            var u = Object.getPrototypeOf(a)
            if (null === u) return
            ;(e = u), (t = o), (r = s), (n = !0), (l = u = void 0)
          }
        }
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      var i = r('q1tI'),
        u = s(i),
        f = s(r('17x9')),
        p = (function (e) {
          function t() {
            l(this, t),
              o(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments
              )
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, e),
            a(t, [
              {
                key: 'getCrossStyle',
                value: function (e) {
                  return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform:
                      'before' === e ? 'rotate(45deg)' : 'rotate(-45deg)',
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this
                  if (this.props.customIcon) {
                    var r = {
                      className: (
                        'bm-cross ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: n(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmCross
                      ),
                    }
                    e = u.default.cloneElement(this.props.customIcon, r)
                  } else
                    e = u.default.createElement(
                      'span',
                      {
                        style: {
                          position: 'absolute',
                          top: '6px',
                          right: '14px',
                        },
                      },
                      ['before', 'after'].map(function (e, r) {
                        return u.default.createElement('span', {
                          key: r,
                          className: (
                            'bm-cross ' + t.props.crossClassName
                          ).trim(),
                          style: n(
                            {},
                            t.getCrossStyle(e),
                            t.props.styles.bmCross
                          ),
                        })
                      })
                    )
                  return u.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-cross-button ' + this.props.className
                      ).trim(),
                      style: n(
                        {},
                        {
                          position: 'absolute',
                          width: 24,
                          height: 24,
                          right: 8,
                          top: 8,
                        },
                        this.props.styles.bmCrossButton
                      ),
                    },
                    e,
                    u.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                        tabIndex: this.props.tabIndex,
                      },
                      'Close Menu'
                    )
                  )
                },
              },
            ]),
            t
          )
        })(i.Component)
      ;(t.default = p),
        (p.propTypes = {
          crossClassName: f.default.string,
          customIcon: f.default.element,
          styles: f.default.object,
          tabIndex: f.default.number,
        }),
        (p.defaultProps = {
          crossClassName: '',
          className: '',
          styles: {},
          tabIndex: 0,
        }),
        (e.exports = t.default)
    },
    Evcy: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        pageWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transformOrigin: r ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (e) {
          return { perspective: '1500px', overflow: e ? '' : 'hidden' }
        },
      })),
        (e.exports = t.default)
    },
    Oy5z: function (e, t, r) {
      e.exports = { header: 'Nav_header__1vWQM' }
    },
    TTcj: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({})), (e.exports = t.default)
    },
    UVcU: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      ;(t.default = {
        overlay: function (e) {
          return {
            position: 'fixed',
            zIndex: 1e3,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: e ? 1 : 0,
            MozTransform: e ? '' : 'translate3d(100%, 0, 0)',
            MsTransform: e ? '' : 'translate3d(100%, 0, 0)',
            OTransform: e ? '' : 'translate3d(100%, 0, 0)',
            WebkitTransform: e ? '' : 'translate3d(100%, 0, 0)',
            transform: e ? '' : 'translate3d(100%, 0, 0)',
            transition: e ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
          }
        },
        menuWrap: function (e, t, r) {
          return {
            position: 'fixed',
            right: r ? 0 : 'inherit',
            zIndex: 1100,
            width: t,
            height: '100%',
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transform: e
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transition: 'all 0.5s',
          }
        },
        menu: function () {
          return { height: '100%', boxSizing: 'border-box', overflow: 'auto' }
        },
        itemList: function () {
          return { height: '100%' }
        },
        item: function () {
          return { display: 'block' }
        },
      }),
        (e.exports = t.default)
    },
    'W/CG': function (e, t, r) {
      'use strict'
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = n(r('Z3iW')),
        o = n(r('vH+l')),
        s = r('jre8'),
        l = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function (e) {
              var t = 0,
                r = this.pathOpen.split(';'),
                n = r.length,
                a = window.mina
              !(function o() {
                t > n - 1 ||
                  (e.animate(
                    { path: r[t] },
                    0 === t ? 400 : 500,
                    0 === t ? a.easein : a.elastic,
                    function () {
                      o()
                    }
                  ),
                  t++)
              })()
            },
          },
          morphShape: function (e, t, r) {
            return {
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: r ? 'inherit' : 0,
              left: r ? 0 : 'inherit',
              MozTransform: r ? 'rotateY(180deg)' : 'rotateY(0deg)',
              MsTransform: r ? 'rotateY(180deg)' : 'rotateY(0deg)',
              OTransform: r ? 'rotateY(180deg)' : 'rotateY(0deg)',
              WebkitTransform: r ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transform: r ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }
          },
          menuWrap: function (e, t, r) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: e ? 'transform 0.4s 0s' : 'transform 0.4s',
            }
          },
          menu: function (e, t, r) {
            var n = (0, s.pxToNum)(t) - 140
            return {
              position: 'fixed',
              MozTransform: e
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              MsTransform: e
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              OTransform: e
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              WebkitTransform: e
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transform: e
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transition: e
                ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
          item: function (e, t, r, n) {
            var a = (0, s.pxToNum)(t) - 140
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: e
                ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
          closeButton: function (e, t, r) {
            var n = (0, s.pxToNum)(t) - 140
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transition: e
                ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
        }
      ;(t.default = (0, o.default)(l)), (e.exports = t.default)
    },
    YFqc: function (e, t, r) {
      e.exports = r('cTJO')
    },
    Z3iW: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e = void 0
          try {
            e = r('QczR')
          } finally {
            return e
          }
        }),
        (e.exports = t.default)
    },
    cO3x: function (e, t, r) {
      'use strict'
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = n(r('Z3iW')),
        o = n(r('vH+l')),
        s = r('jre8'),
        l = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function (e) {
              e.animate({ path: this.pathOpen }, 400, window.mina.easeinout)
            },
          },
          morphShape: function (e, t, r) {
            return {
              position: 'absolute',
              width: 120,
              height: '100%',
              right: r ? 'inherit' : 0,
              left: r ? 0 : 'inherit',
              MozTransform: r ? 'rotateY(180deg)' : '',
              MsTransform: r ? 'rotateY(180deg)' : '',
              OTransform: r ? 'rotateY(180deg)' : '',
              WebkitTransform: r ? 'rotateY(180deg)' : '',
              transform: r ? 'rotateY(180deg)' : '',
            }
          },
          menuWrap: function (e, t, r) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s',
            }
          },
          menu: function (e, t, r) {
            return {
              position: 'fixed',
              right: r ? 0 : 'inherit',
              width: (0, s.pxToNum)(t) - 120,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible',
            }
          },
          itemList: function (e, t, r) {
            if (r)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto',
              }
          },
          pageWrap: function (e, t, r) {
            return {
              MozTransform: e
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: e
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: e
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: e
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: e
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: e ? 'all 0.3s' : 'all 0.3s 0.1s',
            }
          },
          outerContainer: function (e) {
            return { overflow: e ? '' : 'hidden' }
          },
        }
      ;(t.default = (0, o.default)(l)), (e.exports = t.default)
    },
    cTJO: function (e, t, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o,
        s = a(r('q1tI')),
        l = r('elyg'),
        i = r('nOHt'),
        u = new Map(),
        f = window.IntersectionObserver,
        p = {}
      var c = function (e, t) {
        var r =
          o ||
          (f
            ? (o = new f(
                function (e) {
                  e.forEach(function (e) {
                    if (u.has(e.target)) {
                      var t = u.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), u.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        return r
          ? (r.observe(e),
            u.set(e, t),
            function () {
              try {
                r.unobserve(e)
              } catch (t) {
                console.error(t)
              }
              u.delete(e)
            })
          : function () {}
      }
      function d(e, t, r, n) {
        ;(0, l.isLocalURL)(t) &&
          (e.prefetch(t, r, n).catch(function (e) {
            0
          }),
          (p[t + '%' + r] = !0))
      }
      var m = function (e) {
        var t = !1 !== e.prefetch,
          r = s.default.useState(),
          a = n(r, 2),
          o = a[0],
          u = a[1],
          m = (0, i.useRouter)(),
          h = (m && m.pathname) || '/',
          v = s.default.useMemo(
            function () {
              var t = (0, l.resolveHref)(h, e.href)
              return { href: t, as: e.as ? (0, l.resolveHref)(h, e.as) : t }
            },
            [h, e.href, e.as]
          ),
          y = v.href,
          g = v.as
        s.default.useEffect(
          function () {
            if (
              t &&
              f &&
              o &&
              o.tagName &&
              (0, l.isLocalURL)(y) &&
              !p[y + '%' + g]
            )
              return c(o, function () {
                d(m, y, g)
              })
          },
          [t, o, y, g, m]
        )
        var b = e.children,
          O = e.replace,
          x = e.shallow,
          w = e.scroll
        'string' === typeof b && (b = s.default.createElement('a', null, b))
        var T = s.Children.only(b),
          C = {
            ref: function (e) {
              e && u(e),
                T &&
                  'object' === typeof T &&
                  T.ref &&
                  ('function' === typeof T.ref
                    ? T.ref(e)
                    : 'object' === typeof T.ref && (T.ref.current = e))
            },
            onClick: function (e) {
              T.props &&
                'function' === typeof T.props.onClick &&
                T.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, t, r, n, a, o, s) {
                    ;('A' !== e.currentTarget.nodeName ||
                      (!(function (e) {
                        var t = e.currentTarget.target
                        return (
                          (t && '_self' !== t) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        )
                      })(e) &&
                        (0, l.isLocalURL)(r))) &&
                      (e.preventDefault(),
                      null == s && (s = n.indexOf('#') < 0),
                      t[a ? 'replace' : 'push'](r, n, { shallow: o }).then(
                        function (e) {
                          e &&
                            s &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, m, y, g, O, x, w)
            },
          }
        return (
          t &&
            (C.onMouseEnter = function (e) {
              ;(0, l.isLocalURL)(y) &&
                (T.props &&
                  'function' === typeof T.props.onMouseEnter &&
                  T.props.onMouseEnter(e),
                d(m, y, g, { priority: !0 }))
            }),
          (e.passHref || ('a' === T.type && !('href' in T.props))) &&
            (C.href = (0, l.addBasePath)(g)),
          s.default.cloneElement(T, C)
        )
      }
      t.default = m
    },
    cha2: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('q1tI'),
        a = r.n(n),
        o = (r('9d8Q'), r('jBpo'), r('zPlV'), r('8Kt/')),
        s = r.n(o),
        l = r('YFqc'),
        i = r.n(l),
        u = r('6HWB'),
        f = r.n(u),
        p = r('PZRn'),
        c = 'https://nextjs.org/',
        d = 'https://github.com/css-modules/css-modules',
        m = 'https://react-icons.github.io/react-icons/',
        h = 'https://mdxjs.com/',
        v = a.a.createElement
      function y() {
        return v(
          'footer',
          { className: f.a.footer },
          v(
            'div',
            { className: f.a.wrap },
            v(
              'div',
              { className: f.a.resources },
              v(
                'p',
                null,
                v(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: f.a.emoji,
                  },
                  '\ud83d\udc9a'
                ),
                'This site is built with'
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: c, target: '_blank', rel: 'noreferrer' },
                  'Next.js'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: d, target: '_blank', rel: 'noreferrer' },
                  'CSS Modules'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: m, target: '_blank', rel: 'noreferrer' },
                  'React Icons'
                )
              ),
              v(
                'p',
                null,
                v('a', { href: h, target: '_blank', rel: 'noreferrer' }, 'MDX')
              )
            ),
            v(
              'div',
              { className: f.a.contact },
              v(
                'p',
                null,
                v(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: f.a.emoji,
                  },
                  '\ud83e\udd84'
                ),
                'Where to find me'
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: p.a.linkedin, target: '_blank', rel: 'noreferrer' },
                  'Linkedin'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: p.a.github, target: '_blank', rel: 'noreferrer' },
                  'GitHub'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: p.a.medium, target: '_blank', rel: 'noreferrer' },
                  'Medium'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: p.a.twitter, target: '_blank', rel: 'noreferrer' },
                  'Twitter'
                )
              )
            ),
            v(
              'div',
              { className: f.a.sitemap },
              v(
                'p',
                null,
                v(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: f.a.emoji,
                  },
                  '\ud83d\uddfa'
                ),
                'Sitemap'
              ),
              v(i.a, { href: '/' }, 'Home'),
              v(i.a, { href: '/now' }, 'Now'),
              v(i.a, { href: '/articles' }, 'Articles')
            )
          ),
          v(
            'div',
            { className: f.a.copyright },
            '\xa9 ',
            new Date().getFullYear(),
            ' ',
            v(
              'a',
              { href: p.a.github, target: '_blank', rel: 'noreferrer' },
              'Daw-Chih Liou'
            )
          )
        )
      }
      var g = r('mFT6'),
        b = r('Tgqd'),
        O = r('Oy5z'),
        x = r.n(O),
        w = a.a.createElement
      function T() {
        return w(
          'header',
          { className: x.a.header },
          w(
            g.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: w(b.c, null),
              customCrossIcon: w(b.e, null),
              disableAutoFocus: !0,
            },
            w('a', { href: '/' }, 'Home'),
            w('a', { href: '/now' }, 'Now'),
            w('a', { href: '/articles' }, 'Articles')
          )
        )
      }
      var C = r('7ljp'),
        _ = (r('A8Jr'), a.a.createElement),
        M = {
          wrapper: function (e) {
            return _(
              'div',
              {
                style: {
                  minHeight: '100vh',
                  width: '100%',
                  padding: '4rem 1rem 3rem',
                  margin: '0 auto',
                },
              },
              _(
                'div',
                {
                  style: { width: '100%', maxWidth: '720px', margin: '0 auto' },
                },
                e.children
              )
            )
          },
        }
      t.default = function (e) {
        var t = e.Component,
          r = e.pageProps
        return _(
          a.a.Fragment,
          null,
          _(
            s.a,
            null,
            _('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            _('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon-32x32.png',
            }),
            _('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png',
            }),
            _('link', { rel: 'manifest', href: '/site.webmanifest' }),
            _('link', {
              rel: 'mask-icon',
              href: '/safari-pinned-tab.svg',
              color: '#007cf0',
            }),
            _('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            _('meta', { name: 'theme-color', content: '#ffff' })
          ),
          _(
            'div',
            { id: 'outer-container' },
            _(T, null),
            _(
              'div',
              { id: 'page-wrap' },
              _(C.a, { components: M }, _(t, r)),
              _(y, null)
            )
          )
        )
      }
    },
    fk6S: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })()
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var s = r('q1tI'),
        l = o(s),
        i = o(r('17x9')),
        u = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (function (e, t, r) {
                for (var n = !0; n; ) {
                  var a = e,
                    o = t,
                    s = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(a, o)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var i = l.get
                    if (void 0 === i) return
                    return i.call(s)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = o), (r = s), (n = !0), (l = u = void 0)
                }
              })(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
                this,
                e
              ),
              (this.state = { hover: !1 })
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, e),
            a(t, [
              {
                key: 'getLineStyle',
                value: function (e) {
                  return n(
                    {
                      position: 'absolute',
                      height: '20%',
                      left: 0,
                      right: 0,
                      top: 2 * e * 20 + '%',
                      opacity: this.state.hover ? 0.6 : 1,
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = void 0
                  if (this.props.customIcon) {
                    var r = {
                      className: (
                        'bm-icon ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: n(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmIcon
                      ),
                    }
                    t = l.default.cloneElement(this.props.customIcon, r)
                  } else
                    t = l.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function (t) {
                        return l.default.createElement('span', {
                          key: t,
                          className: (
                            'bm-burger-bars ' +
                            e.props.barClassName +
                            ' ' +
                            (e.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: n(
                            {},
                            e.getLineStyle(t),
                            e.props.styles.bmBurgerBars
                          ),
                        })
                      })
                    )
                  return l.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-burger-button ' + this.props.className
                      ).trim(),
                      style: n(
                        { zIndex: 1e3 },
                        this.props.styles.bmBurgerButton
                      ),
                    },
                    t,
                    l.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        onMouseOver: function () {
                          e.setState({ hover: !0 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !0 })
                        },
                        onMouseOut: function () {
                          e.setState({ hover: !1 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !1 })
                        },
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                      },
                      'Open Menu'
                    )
                  )
                },
              },
            ]),
            t
          )
        })(s.Component)
      ;(t.default = u),
        (u.propTypes = {
          barClassName: i.default.string,
          customIcon: i.default.element,
          styles: i.default.object,
        }),
        (u.defaultProps = { barClassName: '', className: '', styles: {} }),
        (e.exports = t.default)
    },
    gTop: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        pageWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: e
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: e ? '' : 'hidden',
          }
        },
        outerContainer: function (e) {
          return { perspective: '1500px', overflow: e ? '' : 'hidden' }
        },
      })),
        (e.exports = t.default)
    },
    jBpo: function (e, t, r) {},
    jre8: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.pxToNum = function (e) {
        return parseInt(e.slice(0, -2), 10)
      }
    },
    mFT6: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          slide: r('TTcj'),
          stack: r('t6xC'),
          elastic: r('cO3x'),
          bubble: r('W/CG'),
          push: r('qB0F'),
          pushRotate: r('Evcy'),
          scaleDown: r('rBsx'),
          scaleRotate: r('gTop'),
          fallDown: r('xoUs'),
          reveal: r('tOh8'),
        }),
        (e.exports = t.default)
    },
    'oRA+': function (e, t, r) {
      var n
      !(function (r) {
        var a,
          o,
          s = 'hasOwnProperty',
          l = /[\.\/]/,
          i = /\s*,\s*/,
          u = function (e, t) {
            return e - t
          },
          f = { n: {} },
          p = function () {
            for (var e = 0, t = this.length; e < t; e++)
              if ('undefined' != typeof this[e]) return this[e]
          },
          c = function () {
            for (var e = this.length; --e; )
              if ('undefined' != typeof this[e]) return this[e]
          },
          d = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function (e) {
              return e instanceof Array || '[object Array]' == d.call(e)
            },
          v = function (e, t) {
            var r,
              n = o,
              s = Array.prototype.slice.call(arguments, 2),
              l = v.listeners(e),
              i = 0,
              f = [],
              d = {},
              m = [],
              h = a
            ;(m.firstDefined = p), (m.lastDefined = c), (a = e), (o = 0)
            for (var y = 0, g = l.length; y < g; y++)
              'zIndex' in l[y] &&
                (f.push(l[y].zIndex),
                l[y].zIndex < 0 && (d[l[y].zIndex] = l[y]))
            for (f.sort(u); f[i] < 0; )
              if (((r = d[f[i++]]), m.push(r.apply(t, s)), o)) return (o = n), m
            for (y = 0; y < g; y++)
              if ('zIndex' in (r = l[y]))
                if (r.zIndex == f[i]) {
                  if ((m.push(r.apply(t, s)), o)) break
                  do {
                    if (((r = d[f[++i]]) && m.push(r.apply(t, s)), o)) break
                  } while (r)
                } else d[r.zIndex] = r
              else if ((m.push(r.apply(t, s)), o)) break
            return (o = n), (a = h), m
          }
        ;(v._events = f),
          (v.listeners = function (e) {
            var t,
              r,
              n,
              a,
              o,
              s,
              i,
              u,
              p = h(e) ? e : e.split(l),
              c = f,
              d = [c],
              m = []
            for (a = 0, o = p.length; a < o; a++) {
              for (u = [], s = 0, i = d.length; s < i; s++)
                for (r = [(c = d[s].n)[p[a]], c['*']], n = 2; n--; )
                  (t = r[n]) && (u.push(t), (m = m.concat(t.f || [])))
              d = u
            }
            return m
          }),
          (v.separator = function (e) {
            e
              ? ((e =
                  '[' + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (l = new RegExp(e)))
              : (l = /[\.\/]/)
          }),
          (v.on = function (e, t) {
            if ('function' != typeof t) return function () {}
            for (
              var r = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(i),
                n = 0,
                a = r.length;
              n < a;
              n++
            )
              !(function (e) {
                for (
                  var r,
                    n = h(e) ? e : m(e).split(l),
                    a = f,
                    o = 0,
                    s = n.length;
                  o < s;
                  o++
                )
                  a =
                    ((a = a.n).hasOwnProperty(n[o]) && a[n[o]]) ||
                    (a[n[o]] = { n: {} })
                for (a.f = a.f || [], o = 0, s = a.f.length; o < s; o++)
                  if (a.f[o] == t) {
                    r = !0
                    break
                  }
                !r && a.f.push(t)
              })(r[n])
            return function (e) {
              ;+e == +e && (t.zIndex = +e)
            }
          }),
          (v.f = function (e) {
            var t = [].slice.call(arguments, 1)
            return function () {
              v.apply(
                null,
                [e, null].concat(t).concat([].slice.call(arguments, 0))
              )
            }
          }),
          (v.stop = function () {
            o = 1
          }),
          (v.nt = function (e) {
            var t = h(a) ? a.join('.') : a
            return e
              ? new RegExp('(?:\\.|\\/|^)' + e + '(?:\\.|\\/|$)').test(t)
              : t
          }),
          (v.nts = function () {
            return h(a) ? a : a.split(l)
          }),
          (v.off = v.unbind = function (e, t) {
            if (e) {
              var r = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(i)
              if (r.length > 1)
                for (var n = 0, a = r.length; n < a; n++) v.off(r[n], t)
              else {
                r = h(e) ? e : m(e).split(l)
                var o,
                  u,
                  p,
                  c,
                  d,
                  y = [f],
                  g = []
                for (n = 0, a = r.length; n < a; n++)
                  for (c = 0; c < y.length; c += p.length - 2) {
                    if (((p = [c, 1]), (o = y[c].n), '*' != r[n]))
                      o[r[n]] &&
                        (p.push(o[r[n]]), g.unshift({ n: o, name: r[n] }))
                    else
                      for (u in o)
                        o[s](u) && (p.push(o[u]), g.unshift({ n: o, name: u }))
                    y.splice.apply(y, p)
                  }
                for (n = 0, a = y.length; n < a; n++)
                  for (o = y[n]; o.n; ) {
                    if (t) {
                      if (o.f) {
                        for (c = 0, d = o.f.length; c < d; c++)
                          if (o.f[c] == t) {
                            o.f.splice(c, 1)
                            break
                          }
                        !o.f.length && delete o.f
                      }
                      for (u in o.n)
                        if (o.n[s](u) && o.n[u].f) {
                          var b = o.n[u].f
                          for (c = 0, d = b.length; c < d; c++)
                            if (b[c] == t) {
                              b.splice(c, 1)
                              break
                            }
                          !b.length && delete o.n[u].f
                        }
                    } else
                      for (u in (delete o.f, o.n))
                        o.n[s](u) && o.n[u].f && delete o.n[u].f
                    o = o.n
                  }
                e: for (n = 0, a = g.length; n < a; n++) {
                  for (u in (o = g[n]).n[o.name].f) continue e
                  for (u in o.n[o.name].n) continue e
                  delete o.n[o.name]
                }
              }
            } else v._events = f = { n: {} }
          }),
          (v.once = function (e, t) {
            var r = function () {
              return v.off(e, r), t.apply(this, arguments)
            }
            return v.on(e, r)
          }),
          (v.version = '0.5.4'),
          (v.toString = function () {
            return 'You are running Eve 0.5.4'
          }),
          (r.eve = v),
          e.exports
            ? (e.exports = v)
            : void 0 ===
                (n = function () {
                  return v
                }.apply(t, [])) || (e.exports = n)
      })('undefined' != typeof window ? window : this)
    },
    qB0F: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        pageWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (e) {
          return { overflow: e ? '' : 'hidden' }
        },
      })),
        (e.exports = t.default)
    },
    rBsx: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        pageWrap: function (e, t) {
          return {
            MozTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            MsTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            OTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            WebkitTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            transform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function () {
          return { perspective: '1500px' }
        },
      })),
        (e.exports = t.default)
    },
    t6xC: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        menuWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transform: e
              ? ''
              : r
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
        item: function (e, t, r, n) {
          return {
            MozTransform: e ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            MsTransform: e ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            OTransform: e ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            WebkitTransform: e ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            transform: e ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
      })),
        (e.exports = t.default)
    },
    tOh8: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        menuWrap: function (e, t, r) {
          return {
            visibility: e ? 'visible' : 'hidden',
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: 1e3,
          }
        },
        overlay: function (e, t, r) {
          return {
            zIndex: 1400,
            MozTransform: e
              ? r
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? r
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? r
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? r
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? r
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: e ? 'visible' : 'hidden',
          }
        },
        pageWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative',
          }
        },
        burgerIcon: function (e, t, r) {
          return {
            MozTransform: e
              ? r
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? r
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? r
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? r
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? r
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300,
          }
        },
        outerContainer: function (e) {
          return { overflow: e ? '' : 'hidden' }
        },
      })),
        (e.exports = t.default)
    },
    'vH+l': function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })()
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var s = r('q1tI'),
        l = o(s),
        i = o(r('i8i4')),
        u = o(r('17x9')),
        f = o(r('UVcU')),
        p = o(r('fk6S')),
        c = o(r('ACjt'))
      ;(t.default = function (e) {
        var t = (function (t) {
          function r(t) {
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              (function (e, t, r) {
                for (var n = !0; n; ) {
                  var a = e,
                    o = t,
                    s = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(a, o)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var i = l.get
                    if (void 0 === i) return
                    return i.call(s)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = o), (r = s), (n = !0), (l = u = void 0)
                }
              })(Object.getPrototypeOf(r.prototype), 'constructor', this).call(
                this,
                t
              ),
              (this.state = { isOpen: !1 }),
              !e)
            )
              throw new Error('No styles supplied')
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(r, t),
            a(r, [
              {
                key: 'toggleMenu',
                value: function () {
                  var e = this,
                    t =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    r = t.isOpen,
                    n = t.noStateChange,
                    a = {
                      isOpen: 'undefined' !== typeof r ? r : !this.state.isOpen,
                    }
                  this.applyWrapperStyles(),
                    this.setState(a, function () {
                      if (
                        (!n && e.props.onStateChange(a),
                        !e.props.disableAutoFocus)
                      )
                        if (a.isOpen) {
                          var t = document.querySelector('.bm-item')
                          t && t.focus()
                        } else
                          document.activeElement
                            ? document.activeElement.blur()
                            : document.body.blur()
                      e.timeoutId && clearTimeout(e.timeoutId),
                        (e.timeoutId = setTimeout(function () {
                          ;(e.timeoutId = null),
                            a.isOpen || e.applyWrapperStyles(!1)
                        }, 500))
                    })
                },
              },
              {
                key: 'open',
                value: function () {
                  'function' === typeof this.props.onOpen
                    ? this.props.onOpen()
                    : this.toggleMenu()
                },
              },
              {
                key: 'close',
                value: function () {
                  'function' === typeof this.props.onClose
                    ? this.props.onClose()
                    : this.toggleMenu()
                },
              },
              {
                key: 'overlayClick',
                value: function () {
                  !0 === this.props.disableOverlayClick ||
                    ('function' === typeof this.props.disableOverlayClick &&
                      this.props.disableOverlayClick()) ||
                    this.close()
                },
              },
              {
                key: 'applyWrapperStyles',
                value: function () {
                  var t =
                      arguments.length <= 0 ||
                      void 0 === arguments[0] ||
                      arguments[0],
                    r = function (e, r) {
                      return e.classList[t ? 'add' : 'remove'](r)
                    }
                  this.props.htmlClassName &&
                    r(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      r(
                        document.querySelector('body'),
                        this.props.bodyClassName
                      ),
                    e.pageWrap &&
                      this.props.pageWrapId &&
                      this.handleExternalWrapper(
                        this.props.pageWrapId,
                        e.pageWrap,
                        t
                      ),
                    e.outerContainer &&
                      this.props.outerContainerId &&
                      this.handleExternalWrapper(
                        this.props.outerContainerId,
                        e.outerContainer,
                        t
                      )
                },
              },
              {
                key: 'handleExternalWrapper',
                value: function (e, t, r) {
                  var n = document.getElementById(e)
                  if (n) {
                    var a = this.getStyle(t)
                    for (var o in a)
                      a.hasOwnProperty(o) && (n.style[o] = r ? a[o] : '')
                    var s = function (e) {
                      return (e.style['overflow-x'] = r ? 'hidden' : '')
                    }
                    this.props.htmlClassName ||
                      s(document.querySelector('html')),
                      this.props.bodyClassName ||
                        s(document.querySelector('body'))
                  } else console.error("Element with ID '" + e + "' not found")
                },
              },
              {
                key: 'getStyles',
                value: function (t, r, a) {
                  var o =
                      'bm' + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
                    s = f.default[t] ? this.getStyle(f.default[t]) : {}
                  return (
                    e[t] && (s = n({}, s, this.getStyle(e[t], r + 1))),
                    this.props.styles[o] &&
                      (s = n({}, s, this.props.styles[o])),
                    a && (s = n({}, s, a)),
                    this.props.noTransition && delete s.transition,
                    s
                  )
                },
              },
              {
                key: 'getStyle',
                value: function (e, t) {
                  var r = this.props.width,
                    n = 'string' !== typeof r ? r + 'px' : r
                  return e(this.state.isOpen, n, this.props.right, t)
                },
              },
              {
                key: 'listenForClose',
                value: function (e) {
                  ;(e = e || window.event),
                    this.props.disableCloseOnEsc ||
                      !this.state.isOpen ||
                      ('Escape' !== e.key && 27 !== e.keyCode) ||
                      this.close()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.customOnKeyDown
                    ? (window.onkeydown = this.props.customOnKeyDown)
                    : (window.onkeydown = this.listenForClose.bind(this)),
                    this.props.isOpen &&
                      this.toggleMenu({ isOpen: !0, noStateChange: !0 })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(window.onkeydown = null),
                    this.applyWrapperStyles(!1),
                    this.timeoutId && clearTimeout(this.timeoutId)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var r = this
                  'undefined' !== typeof this.props.isOpen &&
                  this.props.isOpen !== this.state.isOpen &&
                  this.props.isOpen !== t.isOpen
                    ? this.toggleMenu()
                    : e.svg &&
                      (function () {
                        var t = i.default.findDOMNode(r, 'bm-morph-shape'),
                          n = e.svg.lib(t).select('path')
                        r.state.isOpen
                          ? e.svg.animate(n)
                          : setTimeout(function () {
                              n.attr('d', e.svg.pathInitial)
                            }, 300)
                      })()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this
                  return l.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      l.default.createElement('div', {
                        className: (
                          'bm-overlay ' + this.props.overlayClassName
                        ).trim(),
                        onClick: function () {
                          return t.overlayClick()
                        },
                        style: this.getStyles('overlay'),
                      }),
                    l.default.createElement(
                      'div',
                      {
                        id: this.props.id,
                        className: (
                          'bm-menu-wrap ' + this.props.className
                        ).trim(),
                        style: this.getStyles('menuWrap'),
                      },
                      e.svg &&
                        l.default.createElement(
                          'div',
                          {
                            className: (
                              'bm-morph-shape ' + this.props.morphShapeClassName
                            ).trim(),
                            style: this.getStyles('morphShape'),
                          },
                          l.default.createElement(
                            'svg',
                            {
                              width: '100%',
                              height: '100%',
                              viewBox: '0 0 100 800',
                              preserveAspectRatio: 'none',
                            },
                            l.default.createElement('path', {
                              d: e.svg.pathInitial,
                            })
                          )
                        ),
                      l.default.createElement(
                        'div',
                        {
                          className: (
                            'bm-menu ' + this.props.menuClassName
                          ).trim(),
                          style: this.getStyles('menu'),
                        },
                        l.default.createElement(
                          'nav',
                          {
                            className: (
                              'bm-item-list ' + this.props.itemListClassName
                            ).trim(),
                            style: this.getStyles('itemList'),
                          },
                          l.default.Children.map(this.props.children, function (
                            e,
                            r
                          ) {
                            if (e) {
                              var n = {
                                key: r,
                                className: [
                                  'bm-item',
                                  t.props.itemClassName,
                                  e.props.className,
                                ]
                                  .filter(function (e) {
                                    return !!e
                                  })
                                  .join(' '),
                                style: t.getStyles('item', r, e.props.style),
                                tabIndex: t.state.isOpen ? 0 : -1,
                              }
                              return l.default.cloneElement(e, n)
                            }
                          })
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        l.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          l.default.createElement(c.default, {
                            onClick: function () {
                              return t.close()
                            },
                            styles: this.props.styles,
                            customIcon: this.props.customCrossIcon,
                            className: this.props.crossButtonClassName,
                            crossClassName: this.props.crossClassName,
                            tabIndex: this.state.isOpen ? 0 : -1,
                          })
                        )
                    ),
                    !1 !== this.props.customBurgerIcon &&
                      l.default.createElement(
                        'div',
                        { style: this.getStyles('burgerIcon') },
                        l.default.createElement(p.default, {
                          onClick: function () {
                            return t.open()
                          },
                          styles: this.props.styles,
                          customIcon: this.props.customBurgerIcon,
                          className: this.props.burgerButtonClassName,
                          barClassName: this.props.burgerBarClassName,
                          onIconStateChange: this.props.onIconStateChange,
                        })
                      )
                  )
                },
              },
            ]),
            r
          )
        })(s.Component)
        return (
          (t.propTypes = {
            bodyClassName: u.default.string,
            burgerBarClassName: u.default.string,
            burgerButtonClassName: u.default.string,
            className: u.default.string,
            crossButtonClassName: u.default.string,
            crossClassName: u.default.string,
            customBurgerIcon: u.default.oneOfType([
              u.default.element,
              u.default.oneOf([!1]),
            ]),
            customCrossIcon: u.default.oneOfType([
              u.default.element,
              u.default.oneOf([!1]),
            ]),
            customOnKeyDown: u.default.func,
            disableAutoFocus: u.default.bool,
            disableCloseOnEsc: u.default.bool,
            disableOverlayClick: u.default.oneOfType([
              u.default.bool,
              u.default.func,
            ]),
            htmlClassName: u.default.string,
            id: u.default.string,
            isOpen: u.default.bool,
            itemClassName: u.default.string,
            itemListClassName: u.default.string,
            menuClassName: u.default.string,
            morphShapeClassName: u.default.string,
            noOverlay: u.default.bool,
            noTransition: u.default.bool,
            onClose: u.default.func,
            onIconHoverChange: u.default.func,
            onOpen: u.default.func,
            onStateChange: u.default.func,
            outerContainerId:
              e && e.outerContainer
                ? u.default.string.isRequired
                : u.default.string,
            overlayClassName: u.default.string,
            pageWrapId:
              e && e.pageWrap ? u.default.string.isRequired : u.default.string,
            right: u.default.bool,
            styles: u.default.object,
            width: u.default.oneOfType([u.default.number, u.default.string]),
          }),
          (t.defaultProps = {
            bodyClassName: '',
            burgerBarClassName: '',
            burgerButtonClassName: '',
            className: '',
            crossButtonClassName: '',
            crossClassName: '',
            disableAutoFocus: !1,
            disableCloseOnEsc: !1,
            htmlClassName: '',
            id: '',
            itemClassName: '',
            itemListClassName: '',
            menuClassName: '',
            morphShapeClassName: '',
            noOverlay: !1,
            noTransition: !1,
            onStateChange: function () {},
            outerContainerId: '',
            overlayClassName: '',
            pageWrapId: '',
            styles: {},
            width: 300,
            onIconHoverChange: function () {},
          }),
          t
        )
      }),
        (e.exports = t.default)
    },
    xoUs: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, o.default)({
        menuWrap: function (e) {
          return {
            MozTransform: e ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: e ? '' : 'translate3d(0, -100%, 0)',
            OTransform: e ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: e ? '' : 'translate3d(0, -100%, 0)',
            transform: e ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out',
          }
        },
        pageWrap: function (e, t, r) {
          return {
            MozTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : r
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (e) {
          return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: e ? '' : 'hidden',
          }
        },
      })),
        (e.exports = t.default)
    },
    zPlV: function (e, t, r) {},
  },
  [[0, 0, 1, 5, 2, 3]],
])

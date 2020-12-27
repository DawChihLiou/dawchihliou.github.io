_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'))
    },
    '6HWB': function (e, t, n) {
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
    '74v/': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2')
        },
      ])
    },
    '9d8Q': function (e, t, n) {},
    ACjt: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        s = function (e, t, n) {
          for (var r = !0; r; ) {
            var a = e,
              s = t,
              o = n
            ;(r = !1), null === a && (a = Function.prototype)
            var i = Object.getOwnPropertyDescriptor(a, s)
            if (void 0 !== i) {
              if ('value' in i) return i.value
              var l = i.get
              if (void 0 === l) return
              return l.call(o)
            }
            var u = Object.getPrototypeOf(a)
            if (null === u) return
            ;(e = u), (t = s), (n = o), (r = !0), (i = u = void 0)
          }
        }
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      var l = n('q1tI'),
        u = o(l),
        c = o(n('17x9')),
        f = (function (e) {
          function t() {
            i(this, t),
              s(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
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
                    var n = {
                      className: (
                        'bm-cross ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: r(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmCross
                      ),
                    }
                    e = u.default.cloneElement(this.props.customIcon, n)
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
                      ['before', 'after'].map(function (e, n) {
                        return u.default.createElement('span', {
                          key: n,
                          className: (
                            'bm-cross ' + t.props.crossClassName
                          ).trim(),
                          style: r(
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
                      style: r(
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
        })(l.Component)
      ;(t.default = f),
        (f.propTypes = {
          crossClassName: c.default.string,
          customIcon: c.default.element,
          styles: c.default.object,
          tabIndex: c.default.number,
        }),
        (f.defaultProps = {
          crossClassName: '',
          className: '',
          styles: {},
          tabIndex: 0,
        }),
        (e.exports = t.default)
    },
    Evcy: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transformOrigin: n ? '100% 50%' : '0% 50%',
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
    Oy5z: function (e, t, n) {
      e.exports = {
        links: 'Nav_links__pBs4o',
        iconLink: 'Nav_iconLink__5yqmB',
        profile: 'Nav_profile__2ag4y',
      }
    },
    RBUq: function (e, t, n) {},
    TTcj: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({})), (e.exports = t.default)
    },
    UVcU: function (e, t, n) {
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
        menuWrap: function (e, t, n) {
          return {
            position: 'fixed',
            right: n ? 0 : 'inherit',
            zIndex: 1100,
            width: t,
            height: '100%',
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transform: e
              ? ''
              : n
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
    'W/CG': function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(n('Z3iW')),
        s = r(n('vH+l')),
        o = n('jre8'),
        i = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function (e) {
              var t = 0,
                n = this.pathOpen.split(';'),
                r = n.length,
                a = window.mina
              !(function s() {
                t > r - 1 ||
                  (e.animate(
                    { path: n[t] },
                    0 === t ? 400 : 500,
                    0 === t ? a.easein : a.elastic,
                    function () {
                      s()
                    }
                  ),
                  t++)
              })()
            },
          },
          morphShape: function (e, t, n) {
            return {
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: n ? 'inherit' : 0,
              left: n ? 0 : 'inherit',
              MozTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              MsTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              OTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              WebkitTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }
          },
          menuWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: e ? 'transform 0.4s 0s' : 'transform 0.4s',
            }
          },
          menu: function (e, t, n) {
            var r = (0, o.pxToNum)(t) - 140
            return {
              position: 'fixed',
              MozTransform: e
                ? ''
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              MsTransform: e
                ? ''
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              OTransform: e
                ? ''
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              WebkitTransform: e
                ? ''
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              transform: e
                ? ''
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              transition: e
                ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
          item: function (e, t, n, r) {
            var a = (0, o.pxToNum)(t) - 140
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: e
                ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
          closeButton: function (e, t, n) {
            var r = (0, o.pxToNum)(t) - 140
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(' + r + ', 0, 0)'
                : 'translate3d(-' + r + ', 0, 0)',
              transition: e
                ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: e ? 1 : 0,
            }
          },
        }
      ;(t.default = (0, s.default)(i)), (e.exports = t.default)
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    Z3iW: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e = void 0
          try {
            e = n('QczR')
          } finally {
            return e
          }
        }),
        (e.exports = t.default)
    },
    asrx: function (e, t, n) {},
    cO3x: function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(n('Z3iW')),
        s = r(n('vH+l')),
        o = n('jre8'),
        i = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function (e) {
              e.animate({ path: this.pathOpen }, 400, window.mina.easeinout)
            },
          },
          morphShape: function (e, t, n) {
            return {
              position: 'absolute',
              width: 120,
              height: '100%',
              right: n ? 'inherit' : 0,
              left: n ? 0 : 'inherit',
              MozTransform: n ? 'rotateY(180deg)' : '',
              MsTransform: n ? 'rotateY(180deg)' : '',
              OTransform: n ? 'rotateY(180deg)' : '',
              WebkitTransform: n ? 'rotateY(180deg)' : '',
              transform: n ? 'rotateY(180deg)' : '',
            }
          },
          menuWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s',
            }
          },
          menu: function (e, t, n) {
            return {
              position: 'fixed',
              right: n ? 0 : 'inherit',
              width: (0, o.pxToNum)(t) - 120,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible',
            }
          },
          itemList: function (e, t, n) {
            if (n)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto',
              }
          },
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: e ? 'all 0.3s' : 'all 0.3s 0.1s',
            }
          },
          outerContainer: function (e) {
            return { overflow: e ? '' : 'hidden' }
          },
        }
      ;(t.default = (0, s.default)(i)), (e.exports = t.default)
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        a = n('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var s = a(n('q1tI')),
        o = n('elyg'),
        i = n('nOHt'),
        l = n('vNVm'),
        u = {}
      function c(e, t, n, r) {
        if ((0, o.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a =
            r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          u[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, i.useRouter)(),
          a = (n && n.pathname) || '/',
          f = s.default.useMemo(
            function () {
              var t = (0, o.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                s = n[0],
                i = n[1]
              return {
                href: s,
                as: e.as ? (0, o.resolveHref)(a, e.as) : i || s,
              }
            },
            [a, e.href, e.as]
          ),
          p = f.href,
          d = f.as,
          m = e.children,
          h = e.replace,
          v = e.shallow,
          b = e.scroll,
          g = e.locale
        'string' === typeof m && (m = s.default.createElement('a', null, m))
        var y = s.Children.only(m),
          x = y && 'object' === typeof y && y.ref,
          O = (0, l.useIntersection)({ rootMargin: '200px' }),
          C = r(O, 2),
          E = C[0],
          _ = C[1],
          k = s.default.useCallback(
            function (e) {
              E(e),
                x &&
                  ('function' === typeof x
                    ? x(e)
                    : 'object' === typeof x && (x.current = e))
            },
            [x, E]
          )
        ;(0, s.useEffect)(
          function () {
            var e = _ && t && (0, o.isLocalURL)(p),
              r = 'undefined' !== typeof g ? g : n && n.locale,
              a = u[p + '%' + d + (r ? '%' + r : '')]
            e && !a && c(n, p, d, { locale: r })
          },
          [d, p, _, g, t, n]
        )
        var w = {
          ref: k,
          onClick: function (e) {
            y.props &&
              'function' === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, s, i, l) {
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
                      (0, o.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == i && (i = r.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](n, r, {
                      shallow: s,
                      locale: l,
                    }).then(function (e) {
                      e && i && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, n, p, d, h, v, b, g)
          },
          onMouseEnter: function (e) {
            ;(0, o.isLocalURL)(p) &&
              (y.props &&
                'function' === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              c(n, p, d, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === y.type && !('href' in y.props))) &&
            (w.href = (0, o.addBasePath)(
              (0, o.addLocale)(
                d,
                'undefined' !== typeof g ? g : n && n.locale,
                n && n.defaultLocale
              )
            )),
          s.default.cloneElement(y, w)
        )
      }
      t.default = f
    },
    cha2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        a = n.n(r),
        s = (n('9d8Q'), n('jBpo'), n('zPlV'), n('asrx'), n('RBUq'), n('g4pe')),
        o = n.n(s),
        i = n('YFqc'),
        l = n.n(i),
        u = n('6HWB'),
        c = n.n(u),
        f = n('PZRn'),
        p = 'https://nextjs.org/',
        d = 'https://github.com/css-modules/css-modules',
        m = 'https://react-icons.github.io/react-icons/',
        h = 'https://mdxjs.com/',
        v = n('Tgqd'),
        b = a.a.createElement
      function g() {
        return b(
          'footer',
          { className: c.a.footer },
          b(
            'div',
            { className: c.a.wrap },
            b(
              'div',
              { className: c.a.resources },
              b(
                'p',
                null,
                b(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: c.a.emoji,
                  },
                  '\ud83d\udc9a'
                ),
                'This site is built with'
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: p, target: '_blank', rel: 'noreferrer' },
                  'Next.js'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: d, target: '_blank', rel: 'noreferrer' },
                  'CSS Modules'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: m, target: '_blank', rel: 'noreferrer' },
                  'React Icons'
                )
              ),
              b(
                'p',
                null,
                b('a', { href: h, target: '_blank', rel: 'noreferrer' }, 'MDX')
              )
            ),
            b(
              'div',
              { className: c.a.contact },
              b(
                'p',
                null,
                b(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: c.a.emoji,
                  },
                  '\ud83e\udd84'
                ),
                'Where to find me'
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: f.a.linkedin, target: '_blank', rel: 'noreferrer' },
                  'Linkedin'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: f.a.github, target: '_blank', rel: 'noreferrer' },
                  'GitHub'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: f.a.medium, target: '_blank', rel: 'noreferrer' },
                  'Medium'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: f.a.twitter, target: '_blank', rel: 'noreferrer' },
                  'Twitter'
                )
              )
            ),
            b(
              'div',
              { className: c.a.sitemap },
              b(
                'p',
                null,
                b(
                  'span',
                  {
                    role: 'img',
                    'aria-label': 'build with love',
                    className: c.a.emoji,
                  },
                  '\ud83d\uddfa'
                ),
                'Sitemap'
              ),
              b(l.a, { href: '/' }, 'Home'),
              b(l.a, { href: '/now' }, 'Now'),
              b(l.a, { href: '/articles' }, 'Articles'),
              b(
                l.a,
                { href: '/rss.xml' },
                b(
                  'a',
                  { href: '/#' },
                  'RSS Feed to The Articles ',
                  b(v.e, null)
                )
              )
            )
          ),
          b(
            'div',
            { className: c.a.copyright },
            '\xa9 ',
            new Date().getFullYear(),
            ' ',
            b(
              'a',
              { href: f.a.github, target: '_blank', rel: 'noreferrer' },
              'Daw-Chih Liou'
            )
          )
        )
      }
      var y = n('mFT6'),
        x = n('Oy5z'),
        O = n.n(x),
        C = n('iNdW'),
        E = n('zLVn'),
        _ = n('wx14')
      function k(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t)
      }
      n('17x9')
      var w = a.a.createContext(null)
      function N(e, t) {
        var n = Object.create(null)
        return (
          e &&
            r.Children.map(e, function (e) {
              return e
            }).forEach(function (e) {
              n[e.key] = (function (e) {
                return t && Object(r.isValidElement)(e) ? t(e) : e
              })(e)
            }),
          n
        )
      }
      function T(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
      }
      function M(e, t, n) {
        var a = N(e.children),
          s = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n]
            }
            ;(e = e || {}), (t = t || {})
            var r,
              a = Object.create(null),
              s = []
            for (var o in e)
              o in t ? s.length && ((a[o] = s), (s = [])) : s.push(o)
            var i = {}
            for (var l in t) {
              if (a[l])
                for (r = 0; r < a[l].length; r++) {
                  var u = a[l][r]
                  i[a[l][r]] = n(u)
                }
              i[l] = n(l)
            }
            for (r = 0; r < s.length; r++) i[s[r]] = n(s[r])
            return i
          })(t, a)
        return (
          Object.keys(s).forEach(function (o) {
            var i = s[o]
            if (Object(r.isValidElement)(i)) {
              var l = o in t,
                u = o in a,
                c = t[o],
                f = Object(r.isValidElement)(c) && !c.props.in
              !u || (l && !f)
                ? u || !l || f
                  ? u &&
                    l &&
                    Object(r.isValidElement)(c) &&
                    (s[o] = Object(r.cloneElement)(i, {
                      onExited: n.bind(null, i),
                      in: c.props.in,
                      exit: T(i, 'exit', e),
                      enter: T(i, 'enter', e),
                    }))
                  : (s[o] = Object(r.cloneElement)(i, { in: !1 }))
                : (s[o] = Object(r.cloneElement)(i, {
                    onExited: n.bind(null, i),
                    in: !0,
                    exit: T(i, 'exit', e),
                    enter: T(i, 'enter', e),
                  }))
            }
          }),
          s
        )
      }
      var S =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t]
            })
          },
        j = (function (e) {
          function t(t, n) {
            var r,
              a = (r = e.call(this, t, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return e
                })(r)
              )
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: a,
                firstRender: !0,
              }),
              r
            )
          }
          k(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function () {
              ;(this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } })
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n,
                a,
                s = t.children,
                o = t.handleExited
              return {
                children: t.firstRender
                  ? ((n = e),
                    (a = o),
                    N(n.children, function (e) {
                      return Object(r.cloneElement)(e, {
                        onExited: a.bind(null, e),
                        in: !0,
                        appear: T(e, 'appear', n),
                        enter: T(e, 'enter', n),
                        exit: T(e, 'exit', n),
                      })
                    }))
                  : M(e, s, o),
                firstRender: !1,
              }
            }),
            (n.handleExited = function (e, t) {
              var n = N(this.props.children)
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = Object(_.a)({}, t.children)
                    return delete n[e.key], { children: n }
                  }))
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                r = Object(E.a)(e, ['component', 'childFactory']),
                s = this.state.contextValue,
                o = S(this.state.children).map(n)
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === t
                  ? a.a.createElement(w.Provider, { value: s }, o)
                  : a.a.createElement(
                      w.Provider,
                      { value: s },
                      a.a.createElement(t, r, o)
                    )
              )
            }),
            t
          )
        })(a.a.Component)
      ;(j.propTypes = {}),
        (j.defaultProps = {
          component: 'div',
          childFactory: function (e) {
            return e
          },
        })
      var I = j
      function z(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      var P = n('i8i4'),
        W = n.n(P),
        L = !1,
        D = 'unmounted',
        Y = 'exited',
        R = 'entering',
        B = 'entered',
        H = 'exiting',
        A = (function (e) {
          function t(t, n) {
            var r
            r = e.call(this, t, n) || this
            var a,
              s = n && !n.isMounting ? t.enter : t.appear
            return (
              (r.appearStatus = null),
              t.in
                ? s
                  ? ((a = Y), (r.appearStatus = R))
                  : (a = B)
                : (a = t.unmountOnExit || t.mountOnEnter ? D : Y),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            )
          }
          k(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === D ? { status: Y } : null
            })
          var n = t.prototype
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus)
            }),
            (n.componentDidUpdate = function (e) {
              var t = null
              if (e !== this.props) {
                var n = this.state.status
                this.props.in
                  ? n !== R && n !== B && (t = R)
                  : (n !== R && n !== B) || (t = H)
              }
              this.updateStatus(!1, t)
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback()
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout
              return (
                (e = t = n = r),
                null != r &&
                  'number' !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              )
            }),
            (n.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    t === R ? this.performEnter(e) : this.performExit())
                  : this.props.unmountOnExit &&
                    this.state.status === Y &&
                    this.setState({ status: D })
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [W.a.findDOMNode(this), r],
                s = a[0],
                o = a[1],
                i = this.getTimeouts(),
                l = r ? i.appear : i.enter
              ;(!e && !n) || L
                ? this.safeSetState({ status: B }, function () {
                    t.props.onEntered(s)
                  })
                : (this.props.onEnter(s, o),
                  this.safeSetState({ status: R }, function () {
                    t.props.onEntering(s, o),
                      t.onTransitionEnd(l, function () {
                        t.safeSetState({ status: B }, function () {
                          t.props.onEntered(s, o)
                        })
                      })
                  }))
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : W.a.findDOMNode(this)
              t && !L
                ? (this.props.onExit(r),
                  this.safeSetState({ status: H }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: Y }, function () {
                          e.props.onExited(r)
                        })
                      })
                  }))
                : this.safeSetState({ status: Y }, function () {
                    e.props.onExited(r)
                  })
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null))
            }),
            (n.safeSetState = function (e, t) {
              ;(t = this.setNextCallback(t)), this.setState(e, t)
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r))
                }),
                (this.nextCallback.cancel = function () {
                  n = !1
                }),
                this.nextCallback
              )
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t)
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : W.a.findDOMNode(this),
                r = null == e && !this.props.addEndListener
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    s = a[0],
                    o = a[1]
                  this.props.addEndListener(s, o)
                }
                null != e && setTimeout(this.nextCallback, e)
              } else setTimeout(this.nextCallback, 0)
            }),
            (n.render = function () {
              var e = this.state.status
              if (e === D) return null
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  Object(E.a)(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]))
              return a.a.createElement(
                w.Provider,
                { value: null },
                'function' === typeof n
                  ? n(e, r)
                  : a.a.cloneElement(a.a.Children.only(n), r)
              )
            }),
            t
          )
        })(a.a.Component)
      function F() {}
      ;(A.contextType = w),
        (A.propTypes = {}),
        (A.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: F,
          onEntering: F,
          onEntered: F,
          onExit: F,
          onExiting: F,
          onExited: F,
        }),
        (A.UNMOUNTED = D),
        (A.EXITED = Y),
        (A.ENTERING = R),
        (A.ENTERED = B),
        (A.EXITING = H)
      var q = A,
        V = function (e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' === typeof n.className
                  ? (n.className = z(n.className, r))
                  : n.setAttribute(
                      'class',
                      z((n.className && n.className.baseVal) || '', r)
                    ))
              )
              var n, r
            })
          )
        },
        U = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a]
            return (
              ((t =
                e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {},
              }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  s = r[1]
                t.removeClasses(a, 'exit'),
                  t.addClass(a, s ? 'appear' : 'enter', 'base'),
                  t.props.onEnter && t.props.onEnter(e, n)
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  s = r[1] ? 'appear' : 'enter'
                t.addClass(a, s, 'active'),
                  t.props.onEntering && t.props.onEntering(e, n)
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  s = r[1] ? 'appear' : 'enter'
                t.removeClasses(a, s),
                  t.addClass(a, s, 'done'),
                  t.props.onEntered && t.props.onEntered(e, n)
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0]
                t.removeClasses(n, 'appear'),
                  t.removeClasses(n, 'enter'),
                  t.addClass(n, 'exit', 'base'),
                  t.props.onExit && t.props.onExit(e)
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0]
                t.addClass(n, 'exit', 'active'),
                  t.props.onExiting && t.props.onExiting(e)
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0]
                t.removeClasses(n, 'exit'),
                  t.addClass(n, 'exit', 'done'),
                  t.props.onExited && t.props.onExited(e)
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = 'string' === typeof n,
                  a = r ? '' + (r && n ? n + '-' : '') + e : n[e]
                return {
                  baseClassName: a,
                  activeClassName: r ? a + '-active' : n[e + 'Active'],
                  doneClassName: r ? a + '-done' : n[e + 'Done'],
                }
              }),
              t
            )
          }
          k(t, e)
          var n = t.prototype
          return (
            (n.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + 'ClassName'],
                a = this.getClassNames('enter').doneClassName
              'appear' === t && 'done' === n && a && (r += ' ' + a),
                'active' === n && e && e.scrollTop,
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(' ').forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        ' ' +
                                        (e.className.baseVal || e.className) +
                                        ' '
                                      ).indexOf(' ' + t + ' ')
                              })(n, r) ||
                              ('string' === typeof n.className
                                ? (n.className = n.className + ' ' + r)
                                : n.setAttribute(
                                    'class',
                                    ((n.className && n.className.baseVal) ||
                                      '') +
                                      ' ' +
                                      r
                                  )))
                        )
                        var n, r
                      })
                  })(e, r))
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                a = n.active,
                s = n.done
              ;(this.appliedClasses[t] = {}),
                r && V(e, r),
                a && V(e, a),
                s && V(e, s)
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, Object(E.a)(e, ['classNames']))
              return a.a.createElement(
                q,
                Object(_.a)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              )
            }),
            t
          )
        })(a.a.Component)
      ;(U.defaultProps = { classNames: '' }), (U.propTypes = {})
      var K = U,
        G = n('q4db'),
        X = n.n(G),
        J = a.a.createElement,
        Z = Object(r.createContext)(null),
        $ = function (e) {
          var t = e.children
          Object(r.useEffect)(function () {
            var e = window.matchMedia('(prefers-color-scheme: dark)'),
              t = function () {
                var t = document.querySelector('body'),
                  n = window.localStorage.getItem('__color-scheme__'),
                  r = e.matches
                null === n &&
                  (r ? t.classList.add('dark') : t.classList.remove('dark'))
              }
            return (
              void 0 === e.addEventListener
                ? e.addListener(t)
                : e.addEventListener('change', t),
              function () {
                void 0 === e.removeEventListener
                  ? e.removeListener(t)
                  : e.removeEventListener('change', t)
              }
            )
          }, [])
          var n = Object(r.useState)(null),
            a = n[0],
            s = n[1]
          return (
            Object(r.useEffect)(
              function () {
                if (null === a) {
                  var e = window.localStorage.getItem('__color-scheme__')
                  s(null === e ? 'auto' : e)
                } else
                  'auto' === a
                    ? window.localStorage.removeItem('__color-scheme__')
                    : window.localStorage.setItem('__color-scheme__', a)
                var t = document.querySelector('body')
                'auto' === a
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? t.classList.add('dark')
                    : t.classList.remove('dark')
                  : 'light' === a
                  ? t.classList.remove('dark')
                  : t.classList.add('dark')
              },
              [a]
            ),
            J(
              Z.Provider,
              {
                value: {
                  scheme: a,
                  setScheme: function (e) {
                    return function () {
                      s(e)
                    }
                  },
                },
              },
              t
            )
          )
        },
        Q = a.a.createElement,
        ee = function (e) {
          var t = e.showLabel,
            n = Object(r.useContext)(Z),
            a = n.scheme,
            s = n.setScheme
          return Q(
            'div',
            {
              className: X.a.container,
              onClick: function () {
                s('light' === a ? 'dark' : 'dark' === a ? 'auto' : 'light')()
              },
            },
            Q(
              'div',
              { className: X.a.wrap },
              Q(
                I,
                { component: null },
                'auto' === a &&
                  Q(
                    K,
                    {
                      timeout: 250,
                      classNames: {
                        enter: X.a['button-enter'],
                        enterActive: X.a['button-enter-active'],
                        exit: X.a['button-exit'],
                        exitActive: X.a['button-exit-active'],
                      },
                    },
                    Q(v.h, { className: X.a.button })
                  ),
                'light' === a &&
                  Q(
                    K,
                    {
                      timeout: 250,
                      classNames: {
                        enter: X.a['button-enter'],
                        enterActive: X.a['button-enter-active'],
                        exit: X.a['button-exit'],
                        exitActive: X.a['button-exit-active'],
                      },
                    },
                    Q(v.g, { className: X.a.button })
                  ),
                'dark' === a &&
                  Q(
                    K,
                    {
                      timeout: 250,
                      classNames: {
                        enter: X.a['button-enter'],
                        enterActive: X.a['button-enter-active'],
                        exit: X.a['button-exit'],
                        exitActive: X.a['button-exit-active'],
                      },
                    },
                    Q(v.d, { className: X.a.button })
                  )
              )
            ),
            t && 'light' === a && Q('span', null, 'Light scheme'),
            t && 'dark' === a && Q('span', null, 'Dark scheme'),
            t && 'auto' === a && Q('span', null, 'Sync with OS scheme')
          )
        },
        te = a.a.createElement
      function ne() {
        var e = Object(r.useState)(!1),
          t = e[0],
          n = e[1],
          a = function () {
            return n(!1)
          }
        return te(
          'header',
          { className: O.a.header },
          te(
            y.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: te(v.c, null),
              customCrossIcon: te(v.i, null),
              disableAutoFocus: !0,
              isOpen: t,
              onStateChange: function (e) {
                var t = e.isOpen
                return n(t)
              },
            },
            te(
              'section',
              null,
              te(
                'div',
                { className: O.a.links },
                te(l.a, { href: '/' }, te('span', { onClick: a }, 'Home')),
                te(l.a, { href: '/now' }, te('span', { onClick: a }, 'Now')),
                te(
                  l.a,
                  { href: '/articles' },
                  te('span', { onClick: a }, 'Articles')
                )
              )
            ),
            te(
              'section',
              null,
              te(
                'div',
                { className: O.a.profile },
                te(
                  'a',
                  {
                    href: f.a.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Linkedin profile",
                    className: O.a.iconLink,
                  },
                  te(C.b, null)
                ),
                te(
                  'a',
                  {
                    href: f.a.github,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's GitHub profile",
                    className: O.a.iconLink,
                  },
                  te(C.a, null)
                ),
                te(
                  'a',
                  {
                    href: f.a.medium,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Medium profile",
                    className: O.a.iconLink,
                  },
                  te(C.c, null)
                ),
                te(
                  'a',
                  {
                    href: f.a.twitter,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Twitter",
                    className: O.a.iconLink,
                  },
                  te(C.d, null)
                )
              )
            ),
            te(
              'section',
              null,
              te('div', { className: O.a.darkmode }, te(ee, { showLabel: !0 }))
            )
          )
        )
      }
      var re = n('ukKl'),
        ae = n.n(re),
        se = a.a.createElement,
        oe = function () {
          return se(
            'div',
            { className: ae.a.menubar },
            se(ee, null),
            se(
              'a',
              { href: f.a.github, target: '_blank', rel: 'noreferrer' },
              se(C.a, { size: '1.5em' })
            )
          )
        },
        ie = a.a.createElement
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps
        return ie(
          $,
          null,
          ie(
            o.a,
            null,
            ie('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            ie('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '32x32',
              href: '/favicon.svg',
            }),
            ie('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '16x16',
              href: '/favicon.svg',
            }),
            ie('link', {
              rel: 'mask-icon',
              href: '/favicon.svg',
              color: '#ffffff',
            }),
            ie('link', { rel: 'manifest', href: '/site.webmanifest' }),
            ie('title', null, 'Daw-Chih liou'),
            ie('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            ie('meta', { charSet: 'utf-8' }),
            ie('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            ie('meta', { name: 'theme-color', content: '#ffff' }),
            ie('meta', {
              name: 'description',
              content: "Daw-Chih Liou's portfolio. ".concat(f.a.description),
            })
          ),
          ie(
            'div',
            { id: 'outer-container' },
            ie(ne, null),
            ie(oe, null),
            ie('div', { id: 'page-wrap' }, ie(t, n), ie(g, null))
          )
        )
      }
    },
    fk6S: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var o = n('q1tI'),
        i = s(o),
        l = s(n('17x9')),
        u = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (function (e, t, n) {
                for (var r = !0; r; ) {
                  var a = e,
                    s = t,
                    o = n
                  ;(r = !1), null === a && (a = Function.prototype)
                  var i = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== i) {
                    if ('value' in i) return i.value
                    var l = i.get
                    if (void 0 === l) return
                    return l.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = s), (n = o), (r = !0), (i = u = void 0)
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
                  return r(
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
                    var n = {
                      className: (
                        'bm-icon ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: r(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmIcon
                      ),
                    }
                    t = i.default.cloneElement(this.props.customIcon, n)
                  } else
                    t = i.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function (t) {
                        return i.default.createElement('span', {
                          key: t,
                          className: (
                            'bm-burger-bars ' +
                            e.props.barClassName +
                            ' ' +
                            (e.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: r(
                            {},
                            e.getLineStyle(t),
                            e.props.styles.bmBurgerBars
                          ),
                        })
                      })
                    )
                  return i.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-burger-button ' + this.props.className
                      ).trim(),
                      style: r(
                        { zIndex: 1e3 },
                        this.props.styles.bmBurgerButton
                      ),
                    },
                    t,
                    i.default.createElement(
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
        })(o.Component)
      ;(t.default = u),
        (u.propTypes = {
          barClassName: l.default.string,
          customIcon: l.default.element,
          styles: l.default.object,
        }),
        (u.defaultProps = { barClassName: '', className: '', styles: {} }),
        (e.exports = t.default)
    },
    gTop: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: e
              ? ''
              : n
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
    jBpo: function (e, t, n) {},
    jre8: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.pxToNum = function (e) {
        return parseInt(e.slice(0, -2), 10)
      }
    },
    mFT6: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          slide: n('TTcj'),
          stack: n('t6xC'),
          elastic: n('cO3x'),
          bubble: n('W/CG'),
          push: n('qB0F'),
          pushRotate: n('Evcy'),
          scaleDown: n('rBsx'),
          scaleRotate: n('gTop'),
          fallDown: n('xoUs'),
          reveal: n('tOh8'),
        }),
        (e.exports = t.default)
    },
    'oRA+': function (e, t, n) {
      var r
      !(function (n) {
        var a,
          s,
          o = '0.5.4',
          i = 'hasOwnProperty',
          l = /[\.\/]/,
          u = /\s*,\s*/,
          c = function (e, t) {
            return e - t
          },
          f = { n: {} },
          p = function () {
            for (var e = 0, t = this.length; e < t; e++)
              if ('undefined' != typeof this[e]) return this[e]
          },
          d = function () {
            for (var e = this.length; --e; )
              if ('undefined' != typeof this[e]) return this[e]
          },
          m = Object.prototype.toString,
          h = String,
          v =
            Array.isArray ||
            function (e) {
              return e instanceof Array || '[object Array]' == m.call(e)
            },
          b = function (e, t) {
            var n,
              r = s,
              o = Array.prototype.slice.call(arguments, 2),
              i = b.listeners(e),
              l = 0,
              u = [],
              f = {},
              m = [],
              h = a
            ;(m.firstDefined = p), (m.lastDefined = d), (a = e), (s = 0)
            for (var v = 0, g = i.length; v < g; v++)
              'zIndex' in i[v] &&
                (u.push(i[v].zIndex),
                i[v].zIndex < 0 && (f[i[v].zIndex] = i[v]))
            for (u.sort(c); u[l] < 0; )
              if (((n = f[u[l++]]), m.push(n.apply(t, o)), s)) return (s = r), m
            for (v = 0; v < g; v++)
              if ('zIndex' in (n = i[v]))
                if (n.zIndex == u[l]) {
                  if ((m.push(n.apply(t, o)), s)) break
                  do {
                    if (((n = f[u[++l]]) && m.push(n.apply(t, o)), s)) break
                  } while (n)
                } else f[n.zIndex] = n
              else if ((m.push(n.apply(t, o)), s)) break
            return (s = r), (a = h), m
          }
        ;(b._events = f),
          (b.listeners = function (e) {
            var t,
              n,
              r,
              a,
              s,
              o,
              i,
              u,
              c = v(e) ? e : e.split(l),
              p = f,
              d = [p],
              m = []
            for (a = 0, s = c.length; a < s; a++) {
              for (u = [], o = 0, i = d.length; o < i; o++)
                for (n = [(p = d[o].n)[c[a]], p['*']], r = 2; r--; )
                  (t = n[r]) && (u.push(t), (m = m.concat(t.f || [])))
              d = u
            }
            return m
          }),
          (b.separator = function (e) {
            e
              ? ((e =
                  '[' + (e = h(e).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (l = new RegExp(e)))
              : (l = /[\.\/]/)
          }),
          (b.on = function (e, t) {
            if ('function' != typeof t) return function () {}
            for (
              var n = v(e) ? (v(e[0]) ? e : [e]) : h(e).split(u),
                r = 0,
                a = n.length;
              r < a;
              r++
            )
              !(function (e) {
                for (
                  var n,
                    r = v(e) ? e : h(e).split(l),
                    a = f,
                    s = 0,
                    o = r.length;
                  s < o;
                  s++
                )
                  a =
                    ((a = a.n).hasOwnProperty(r[s]) && a[r[s]]) ||
                    (a[r[s]] = { n: {} })
                for (a.f = a.f || [], s = 0, o = a.f.length; s < o; s++)
                  if (a.f[s] == t) {
                    n = !0
                    break
                  }
                !n && a.f.push(t)
              })(n[r])
            return function (e) {
              ;+e == +e && (t.zIndex = +e)
            }
          }),
          (b.f = function (e) {
            var t = [].slice.call(arguments, 1)
            return function () {
              b.apply(
                null,
                [e, null].concat(t).concat([].slice.call(arguments, 0))
              )
            }
          }),
          (b.stop = function () {
            s = 1
          }),
          (b.nt = function (e) {
            var t = v(a) ? a.join('.') : a
            return e
              ? new RegExp('(?:\\.|\\/|^)' + e + '(?:\\.|\\/|$)').test(t)
              : t
          }),
          (b.nts = function () {
            return v(a) ? a : a.split(l)
          }),
          (b.off = b.unbind = function (e, t) {
            if (e) {
              var n = v(e) ? (v(e[0]) ? e : [e]) : h(e).split(u)
              if (n.length > 1)
                for (var r = 0, a = n.length; r < a; r++) b.off(n[r], t)
              else {
                n = v(e) ? e : h(e).split(l)
                var s,
                  o,
                  c,
                  p,
                  d,
                  m = [f],
                  g = []
                for (r = 0, a = n.length; r < a; r++)
                  for (p = 0; p < m.length; p += c.length - 2) {
                    if (((c = [p, 1]), (s = m[p].n), '*' != n[r]))
                      s[n[r]] &&
                        (c.push(s[n[r]]), g.unshift({ n: s, name: n[r] }))
                    else
                      for (o in s)
                        s[i](o) && (c.push(s[o]), g.unshift({ n: s, name: o }))
                    m.splice.apply(m, c)
                  }
                for (r = 0, a = m.length; r < a; r++)
                  for (s = m[r]; s.n; ) {
                    if (t) {
                      if (s.f) {
                        for (p = 0, d = s.f.length; p < d; p++)
                          if (s.f[p] == t) {
                            s.f.splice(p, 1)
                            break
                          }
                        !s.f.length && delete s.f
                      }
                      for (o in s.n)
                        if (s.n[i](o) && s.n[o].f) {
                          var y = s.n[o].f
                          for (p = 0, d = y.length; p < d; p++)
                            if (y[p] == t) {
                              y.splice(p, 1)
                              break
                            }
                          !y.length && delete s.n[o].f
                        }
                    } else
                      for (o in (delete s.f, s.n))
                        s.n[i](o) && s.n[o].f && delete s.n[o].f
                    s = s.n
                  }
                e: for (r = 0, a = g.length; r < a; r++) {
                  for (o in (s = g[r]).n[s.name].f) continue e
                  for (o in s.n[s.name].n) continue e
                  delete s.n[s.name]
                }
              }
            } else b._events = f = { n: {} }
          }),
          (b.once = function (e, t) {
            var n = function () {
              return b.off(e, n), t.apply(this, arguments)
            }
            return b.on(e, n)
          }),
          (b.version = o),
          (b.toString = function () {
            return 'You are running Eve 0.5.4'
          }),
          (n.eve = b),
          e.exports
            ? (e.exports = b)
            : void 0 ===
                (r = function () {
                  return b
                }.apply(t, [])) || (e.exports = r)
      })('undefined' != typeof window ? window : this)
    },
    q4db: function (e, t, n) {
      e.exports = {
        container: 'DarkmodeSwitch_container__3usna',
        wrap: 'DarkmodeSwitch_wrap__3FU3Y',
        button: 'DarkmodeSwitch_button__1qwe8',
        'button-enter': 'DarkmodeSwitch_button-enter__1VHtN',
        'button-enter-active': 'DarkmodeSwitch_button-enter-active__1VNem',
        'button-exit': 'DarkmodeSwitch_button-exit__3dksi',
        'button-exit-active': 'DarkmodeSwitch_button-exit-active__-G-Si',
      }
    },
    qB0F: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
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
    rBsx: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
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
    t6xC: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
        menuWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
        item: function (e, t, n, r) {
          return {
            MozTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            MsTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            OTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            WebkitTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            transform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
      })),
        (e.exports = t.default)
    },
    tOh8: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
        menuWrap: function (e, t, n) {
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
        overlay: function (e, t, n) {
          return {
            zIndex: 1400,
            MozTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: e ? 'visible' : 'hidden',
          }
        },
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative',
          }
        },
        burgerIcon: function (e, t, n) {
          return {
            MozTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? n
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
    ukKl: function (e, t, n) {
      e.exports = { menubar: 'Menubar_menubar__2eIly' }
    },
    'vH+l': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var o = n('q1tI'),
        i = s(o),
        l = s(n('i8i4')),
        u = s(n('17x9')),
        c = s(n('UVcU')),
        f = s(n('fk6S')),
        p = s(n('ACjt'))
      ;(t.default = function (e) {
        var t = (function (t) {
          function n(t) {
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, n),
              (function (e, t, n) {
                for (var r = !0; r; ) {
                  var a = e,
                    s = t,
                    o = n
                  ;(r = !1), null === a && (a = Function.prototype)
                  var i = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== i) {
                    if ('value' in i) return i.value
                    var l = i.get
                    if (void 0 === l) return
                    return l.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = s), (n = o), (r = !0), (i = u = void 0)
                }
              })(Object.getPrototypeOf(n.prototype), 'constructor', this).call(
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
            })(n, t),
            a(n, [
              {
                key: 'toggleMenu',
                value: function () {
                  var e = this,
                    t =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    n = t.isOpen,
                    r = t.noStateChange,
                    a = {
                      isOpen: 'undefined' !== typeof n ? n : !this.state.isOpen,
                    }
                  this.applyWrapperStyles(),
                    this.setState(a, function () {
                      if (
                        (!r && e.props.onStateChange(a),
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
                    n = function (e, n) {
                      return e.classList[t ? 'add' : 'remove'](n)
                    }
                  this.props.htmlClassName &&
                    n(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      n(
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
                value: function (e, t, n) {
                  var r = document.getElementById(e)
                  if (r) {
                    var a = this.getStyle(t)
                    for (var s in a)
                      a.hasOwnProperty(s) && (r.style[s] = n ? a[s] : '')
                    var o = function (e) {
                      return (e.style['overflow-x'] = n ? 'hidden' : '')
                    }
                    this.props.htmlClassName ||
                      o(document.querySelector('html')),
                      this.props.bodyClassName ||
                        o(document.querySelector('body'))
                  } else console.error("Element with ID '" + e + "' not found")
                },
              },
              {
                key: 'getStyles',
                value: function (t, n, a) {
                  var s =
                      'bm' + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
                    o = c.default[t] ? this.getStyle(c.default[t]) : {}
                  return (
                    e[t] && (o = r({}, o, this.getStyle(e[t], n + 1))),
                    this.props.styles[s] &&
                      (o = r({}, o, this.props.styles[s])),
                    a && (o = r({}, o, a)),
                    this.props.noTransition && delete o.transition,
                    o
                  )
                },
              },
              {
                key: 'getStyle',
                value: function (e, t) {
                  var n = this.props.width,
                    r = 'string' !== typeof n ? n + 'px' : n
                  return e(this.state.isOpen, r, this.props.right, t)
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
                  var n = this
                  'undefined' !== typeof this.props.isOpen &&
                  this.props.isOpen !== this.state.isOpen &&
                  this.props.isOpen !== t.isOpen
                    ? this.toggleMenu()
                    : e.svg &&
                      (function () {
                        var t = l.default.findDOMNode(n, 'bm-morph-shape'),
                          r = e.svg.lib(t).select('path')
                        n.state.isOpen
                          ? e.svg.animate(r)
                          : setTimeout(function () {
                              r.attr('d', e.svg.pathInitial)
                            }, 300)
                      })()
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this
                  return i.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      i.default.createElement('div', {
                        className: (
                          'bm-overlay ' + this.props.overlayClassName
                        ).trim(),
                        onClick: function () {
                          return t.overlayClick()
                        },
                        style: this.getStyles('overlay'),
                      }),
                    i.default.createElement(
                      'div',
                      {
                        id: this.props.id,
                        className: (
                          'bm-menu-wrap ' + this.props.className
                        ).trim(),
                        style: this.getStyles('menuWrap'),
                      },
                      e.svg &&
                        i.default.createElement(
                          'div',
                          {
                            className: (
                              'bm-morph-shape ' + this.props.morphShapeClassName
                            ).trim(),
                            style: this.getStyles('morphShape'),
                          },
                          i.default.createElement(
                            'svg',
                            {
                              width: '100%',
                              height: '100%',
                              viewBox: '0 0 100 800',
                              preserveAspectRatio: 'none',
                            },
                            i.default.createElement('path', {
                              d: e.svg.pathInitial,
                            })
                          )
                        ),
                      i.default.createElement(
                        'div',
                        {
                          className: (
                            'bm-menu ' + this.props.menuClassName
                          ).trim(),
                          style: this.getStyles('menu'),
                        },
                        i.default.createElement(
                          'nav',
                          {
                            className: (
                              'bm-item-list ' + this.props.itemListClassName
                            ).trim(),
                            style: this.getStyles('itemList'),
                          },
                          i.default.Children.map(this.props.children, function (
                            e,
                            n
                          ) {
                            if (e) {
                              var r = {
                                key: n,
                                className: [
                                  'bm-item',
                                  t.props.itemClassName,
                                  e.props.className,
                                ]
                                  .filter(function (e) {
                                    return !!e
                                  })
                                  .join(' '),
                                style: t.getStyles('item', n, e.props.style),
                                tabIndex: t.state.isOpen ? 0 : -1,
                              }
                              return i.default.cloneElement(e, r)
                            }
                          })
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        i.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          i.default.createElement(p.default, {
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
                      i.default.createElement(
                        'div',
                        { style: this.getStyles('burgerIcon') },
                        i.default.createElement(f.default, {
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
            n
          )
        })(o.Component)
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
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        a = n('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            a = (0, s.useRef)(),
            u = (0, s.useState)(!1),
            c = r(u, 2),
            f = c[0],
            p = c[1],
            d = (0, s.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = l.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return (
                              l.set(
                                t,
                                (n = { id: t, observer: a, elements: r })
                              ),
                              n
                            )
                          })(n),
                          a = r.id,
                          s = r.observer,
                          o = r.elements
                        return (
                          o.set(e, t),
                          s.observe(e),
                          function () {
                            s.unobserve(e),
                              0 === o.size && (s.disconnect(), l.delete(a))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && p(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [n, t, f]
            )
          return (
            (0, s.useEffect)(
              function () {
                i ||
                  f ||
                  (0, o.default)(function () {
                    return p(!0)
                  })
              },
              [f]
            ),
            [d, f]
          )
        })
      var s = n('q1tI'),
        o = a(n('0G5g')),
        i = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
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
    xoUs: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        a = n('vH+l'),
        s = (r = a) && r.__esModule ? r : { default: r }
      ;(t.default = (0, s.default)({
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
        pageWrap: function (e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
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
    zLVn: function (e, t, n) {
      'use strict'
      function r(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = {},
          s = Object.keys(e)
        for (r = 0; r < s.length; r++)
          (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    zPlV: function (e, t, n) {},
  },
  [[0, 0, 1, 5, 6, 2, 4]],
])

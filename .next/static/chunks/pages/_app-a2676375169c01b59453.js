_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    0: function (t, e, r) {
      r('74v/'), (t.exports = r('nOHt'))
    },
    '6HWB': function (t, e, r) {
      t.exports = {
        footer: 'Footer_footer__31YtZ',
        wrap: 'Footer_wrap__2j7om',
        contact: 'Footer_contact__2PXqp',
        resources: 'Footer_resources__Xjxum',
        sitemap: 'Footer_sitemap__2FrpO',
        emoji: 'Footer_emoji__3ECxd',
        copyright: 'Footer_copyright__PzPTf',
      }
    },
    '74v/': function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r('cha2')
        },
      ])
    },
    '9d8Q': function (t, e, r) {},
    ACjt: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          },
        a = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        })(),
        s = function (t, e, r) {
          for (var n = !0; n; ) {
            var a = t,
              s = e,
              o = r
            ;(n = !1), null === a && (a = Function.prototype)
            var l = Object.getOwnPropertyDescriptor(a, s)
            if (void 0 !== l) {
              if ('value' in l) return l.value
              var i = l.get
              if (void 0 === i) return
              return i.call(o)
            }
            var u = Object.getPrototypeOf(a)
            if (null === u) return
            ;(t = u), (e = s), (r = o), (n = !0), (l = u = void 0)
          }
        }
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      var i = r('q1tI'),
        u = o(i),
        f = o(r('17x9')),
        p = (function (t) {
          function e() {
            l(this, e),
              s(Object.getPrototypeOf(e.prototype), 'constructor', this).apply(
                this,
                arguments
              )
          }
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e))
            })(e, t),
            a(e, [
              {
                key: 'getCrossStyle',
                value: function (t) {
                  return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform:
                      'before' === t ? 'rotate(45deg)' : 'rotate(-45deg)',
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var t,
                    e = this
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
                    t = u.default.cloneElement(this.props.customIcon, r)
                  } else
                    t = u.default.createElement(
                      'span',
                      {
                        style: {
                          position: 'absolute',
                          top: '6px',
                          right: '14px',
                        },
                      },
                      ['before', 'after'].map(function (t, r) {
                        return u.default.createElement('span', {
                          key: r,
                          className: (
                            'bm-cross ' + e.props.crossClassName
                          ).trim(),
                          style: n(
                            {},
                            e.getCrossStyle(t),
                            e.props.styles.bmCross
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
                    t,
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
            e
          )
        })(i.Component)
      ;(e.default = p),
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
        (t.exports = e.default)
    },
    Evcy: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        pageWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + e + ', 0, 0) rotateY(-15deg)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + e + ', 0, 0) rotateY(-15deg)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + e + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + e + ', 0, 0) rotateY(-15deg)',
            transform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + e + ', 0, 0) rotateY(-15deg)',
            transformOrigin: r ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (t) {
          return { perspective: '1500px', overflow: t ? '' : 'hidden' }
        },
      })),
        (t.exports = e.default)
    },
    Oy5z: function (t, e, r) {
      t.exports = { header: 'Nav_header__1vWQM' }
    },
    TTcj: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({})), (t.exports = e.default)
    },
    UVcU: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      ;(e.default = {
        overlay: function (t) {
          return {
            position: 'fixed',
            zIndex: 1e3,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: t ? 1 : 0,
            MozTransform: t ? '' : 'translate3d(100%, 0, 0)',
            MsTransform: t ? '' : 'translate3d(100%, 0, 0)',
            OTransform: t ? '' : 'translate3d(100%, 0, 0)',
            WebkitTransform: t ? '' : 'translate3d(100%, 0, 0)',
            transform: t ? '' : 'translate3d(100%, 0, 0)',
            transition: t ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
          }
        },
        menuWrap: function (t, e, r) {
          return {
            position: 'fixed',
            right: r ? 0 : 'inherit',
            zIndex: 1100,
            width: e,
            height: '100%',
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transform: t
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
        (t.exports = e.default)
    },
    'W/CG': function (t, e, r) {
      'use strict'
      function n(t) {
        return t && t.__esModule ? t : { default: t }
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a = n(r('Z3iW')),
        s = n(r('vH+l')),
        o = r('jre8'),
        l = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function (t) {
              var e = 0,
                r = this.pathOpen.split(';'),
                n = r.length,
                a = window.mina
              !(function s() {
                e > n - 1 ||
                  (t.animate(
                    { path: r[e] },
                    0 === e ? 400 : 500,
                    0 === e ? a.easein : a.elastic,
                    function () {
                      s()
                    }
                  ),
                  e++)
              })()
            },
          },
          morphShape: function (t, e, r) {
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
          menuWrap: function (t, e, r) {
            return {
              MozTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: t ? 'transform 0.4s 0s' : 'transform 0.4s',
            }
          },
          menu: function (t, e, r) {
            var n = (0, o.pxToNum)(e) - 140
            return {
              position: 'fixed',
              MozTransform: t
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              MsTransform: t
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              OTransform: t
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              WebkitTransform: t
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transform: t
                ? ''
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transition: t
                ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: t ? 1 : 0,
            }
          },
          item: function (t, e, r, n) {
            var a = (0, o.pxToNum)(e) - 140
            return {
              MozTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: t
                ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: t ? 1 : 0,
            }
          },
          closeButton: function (t, e, r) {
            var n = (0, o.pxToNum)(e) - 140
            return {
              MozTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              MsTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              OTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              WebkitTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(' + n + ', 0, 0)'
                : 'translate3d(-' + n + ', 0, 0)',
              transition: t
                ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: t ? 1 : 0,
            }
          },
        }
      ;(e.default = (0, s.default)(l)), (t.exports = e.default)
    },
    YFqc: function (t, e, r) {
      t.exports = r('cTJO')
    },
    Z3iW: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function () {
          var t = void 0
          try {
            t = r('QczR')
          } finally {
            return t
          }
        }),
        (t.exports = e.default)
    },
    cO3x: function (t, e, r) {
      'use strict'
      function n(t) {
        return t && t.__esModule ? t : { default: t }
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var a = n(r('Z3iW')),
        s = n(r('vH+l')),
        o = r('jre8'),
        l = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function (t) {
              t.animate({ path: this.pathOpen }, 400, window.mina.easeinout)
            },
          },
          morphShape: function (t, e, r) {
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
          menuWrap: function (t, e, r) {
            return {
              MozTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: t
                ? 'translate3d(0, 0, 0)'
                : r
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s',
            }
          },
          menu: function (t, e, r) {
            return {
              position: 'fixed',
              right: r ? 0 : 'inherit',
              width: (0, o.pxToNum)(e) - 120,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible',
            }
          },
          itemList: function (t, e, r) {
            if (r)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto',
              }
          },
          pageWrap: function (t, e, r) {
            return {
              MozTransform: t
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: t
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: t
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: t
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: t
                ? ''
                : r
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: t ? 'all 0.3s' : 'all 0.3s 0.1s',
            }
          },
          outerContainer: function (t) {
            return { overflow: t ? '' : 'hidden' }
          },
        }
      ;(e.default = (0, s.default)(l)), (t.exports = e.default)
    },
    cTJO: function (t, e, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('284h')
      ;(e.__esModule = !0), (e.default = void 0)
      var s,
        o = a(r('q1tI')),
        l = r('elyg'),
        i = r('nOHt'),
        u = new Map(),
        f = window.IntersectionObserver,
        p = {}
      var d = function (t, e) {
        var r =
          s ||
          (f
            ? (s = new f(
                function (t) {
                  t.forEach(function (t) {
                    if (u.has(t.target)) {
                      var e = u.get(t.target)
                      ;(t.isIntersecting || t.intersectionRatio > 0) &&
                        (s.unobserve(t.target), u.delete(t.target), e())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        return r
          ? (r.observe(t),
            u.set(t, e),
            function () {
              try {
                r.unobserve(t)
              } catch (e) {
                console.error(e)
              }
              u.delete(t)
            })
          : function () {}
      }
      function c(t, e, r, n) {
        ;(0, l.isLocalURL)(e) &&
          (t.prefetch(e, r, n).catch(function (t) {
            0
          }),
          (p[e + '%' + r] = !0))
      }
      var m = function (t) {
        var e = !1 !== t.prefetch,
          r = o.default.useState(),
          a = n(r, 2),
          s = a[0],
          u = a[1],
          m = (0, i.useRouter)(),
          h = (m && m.pathname) || '/',
          v = o.default.useMemo(
            function () {
              var e = (0, l.resolveHref)(h, t.href)
              return { href: e, as: t.as ? (0, l.resolveHref)(h, t.as) : e }
            },
            [h, t.href, t.as]
          ),
          g = v.href,
          b = v.as
        o.default.useEffect(
          function () {
            if (
              e &&
              f &&
              s &&
              s.tagName &&
              (0, l.isLocalURL)(g) &&
              !p[g + '%' + b]
            )
              return d(s, function () {
                c(m, g, b)
              })
          },
          [e, s, g, b, m]
        )
        var y = t.children,
          O = t.replace,
          x = t.shallow,
          T = t.scroll
        'string' === typeof y && (y = o.default.createElement('a', null, y))
        var C = o.Children.only(y),
          w = {
            ref: function (t) {
              t && u(t),
                C &&
                  'object' === typeof C &&
                  C.ref &&
                  ('function' === typeof C.ref
                    ? C.ref(t)
                    : 'object' === typeof C.ref && (C.ref.current = t))
            },
            onClick: function (t) {
              C.props &&
                'function' === typeof C.props.onClick &&
                C.props.onClick(t),
                t.defaultPrevented ||
                  (function (t, e, r, n, a, s, o) {
                    ;('A' !== t.currentTarget.nodeName ||
                      (!(function (t) {
                        var e = t.currentTarget.target
                        return (
                          (e && '_self' !== e) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        )
                      })(t) &&
                        (0, l.isLocalURL)(r))) &&
                      (t.preventDefault(),
                      null == o && (o = n.indexOf('#') < 0),
                      e[a ? 'replace' : 'push'](r, n, { shallow: s }).then(
                        function (t) {
                          t &&
                            o &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(t, m, g, b, O, x, T)
            },
          }
        return (
          e &&
            (w.onMouseEnter = function (t) {
              ;(0, l.isLocalURL)(g) &&
                (C.props &&
                  'function' === typeof C.props.onMouseEnter &&
                  C.props.onMouseEnter(t),
                c(m, g, b, { priority: !0 }))
            }),
          (t.passHref || ('a' === C.type && !('href' in C.props))) &&
            (w.href = (0, l.addBasePath)(b)),
          o.default.cloneElement(C, w)
        )
      }
      e.default = m
    },
    cha2: function (t, e, r) {
      'use strict'
      r.r(e)
      var n = r('q1tI'),
        a = r.n(n),
        s = (r('9d8Q'), r('jBpo'), r('zPlV'), r('8Kt/')),
        o = r.n(s),
        l = r('YFqc'),
        i = r.n(l),
        u = r('6HWB'),
        f = r.n(u),
        p = r('PZRn'),
        d = 'https://nextjs.org/',
        c = 'https://github.com/css-modules/css-modules',
        m = 'https://react-icons.github.io/react-icons/',
        h = 'https://github.com/rexxars/react-markdown',
        v = a.a.createElement
      function g() {
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
                  { href: d, target: '_blank', rel: 'noreferrer' },
                  'Next.js'
                )
              ),
              v(
                'p',
                null,
                v(
                  'a',
                  { href: c, target: '_blank', rel: 'noreferrer' },
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
                v(
                  'a',
                  { href: h, target: '_blank', rel: 'noreferrer' },
                  'react-markdown'
                )
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
              v(i.a, { href: '/publications' }, 'Publications')
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
      var b = r('mFT6'),
        y = r('Tgqd'),
        O = r('Oy5z'),
        x = r.n(O),
        T = a.a.createElement
      function C() {
        return T(
          'header',
          { className: x.a.header },
          T(
            b.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: T(y.c, null),
              customCrossIcon: T(y.e, null),
            },
            T(i.a, { href: '/' }, 'Home'),
            T(i.a, { href: '/now' }, 'Now'),
            T(i.a, { href: '/publications' }, 'Publications')
          )
        )
      }
      var w = a.a.createElement
      e.default = function (t) {
        var e = t.Component,
          r = t.pageProps
        return w(
          a.a.Fragment,
          null,
          w(
            o.a,
            null,
            w('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            w('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon-32x32.png',
            }),
            w('link', {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png',
            }),
            w('link', { rel: 'manifest', href: '/site.webmanifest' }),
            w('link', {
              rel: 'mask-icon',
              href: '/safari-pinned-tab.svg',
              color: '#007cf0',
            }),
            w('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            w('meta', { name: 'theme-color', content: '#ffff' })
          ),
          w(
            'div',
            { id: 'outer-container' },
            w(C, null),
            w('div', { id: 'page-wrap' }, w(e, r), w(g, null))
          )
        )
      }
    },
    fk6S: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          },
        a = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        })()
      function s(t) {
        return t && t.__esModule ? t : { default: t }
      }
      var o = r('q1tI'),
        l = s(o),
        i = s(r('17x9')),
        u = (function (t) {
          function e(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (function (t, e, r) {
                for (var n = !0; n; ) {
                  var a = t,
                    s = e,
                    o = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var i = l.get
                    if (void 0 === i) return
                    return i.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(t = u), (e = s), (r = o), (n = !0), (l = u = void 0)
                }
              })(Object.getPrototypeOf(e.prototype), 'constructor', this).call(
                this,
                t
              ),
              (this.state = { hover: !1 })
          }
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e))
            })(e, t),
            a(e, [
              {
                key: 'getLineStyle',
                value: function (t) {
                  return n(
                    {
                      position: 'absolute',
                      height: '20%',
                      left: 0,
                      right: 0,
                      top: 2 * t * 20 + '%',
                      opacity: this.state.hover ? 0.6 : 1,
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = void 0
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
                    e = l.default.cloneElement(this.props.customIcon, r)
                  } else
                    e = l.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function (e) {
                        return l.default.createElement('span', {
                          key: e,
                          className: (
                            'bm-burger-bars ' +
                            t.props.barClassName +
                            ' ' +
                            (t.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: n(
                            {},
                            t.getLineStyle(e),
                            t.props.styles.bmBurgerBars
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
                    e,
                    l.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        onMouseOver: function () {
                          t.setState({ hover: !0 }),
                            t.props.onIconHoverChange &&
                              t.props.onIconHoverChange({ isMouseIn: !0 })
                        },
                        onMouseOut: function () {
                          t.setState({ hover: !1 }),
                            t.props.onIconHoverChange &&
                              t.props.onIconHoverChange({ isMouseIn: !1 })
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
            e
          )
        })(o.Component)
      ;(e.default = u),
        (u.propTypes = {
          barClassName: i.default.string,
          customIcon: i.default.element,
          styles: i.default.object,
        }),
        (u.defaultProps = { barClassName: '', className: '', styles: {} }),
        (t.exports = e.default)
    },
    gTop: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        pageWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: t
              ? ''
              : r
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: t ? '' : 'hidden',
          }
        },
        outerContainer: function (t) {
          return { perspective: '1500px', overflow: t ? '' : 'hidden' }
        },
      })),
        (t.exports = e.default)
    },
    jBpo: function (t, e, r) {},
    jre8: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      e.pxToNum = function (t) {
        return parseInt(t.slice(0, -2), 10)
      }
    },
    mFT6: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = {
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
        (t.exports = e.default)
    },
    'oRA+': function (t, e, r) {
      var n
      !(function (r) {
        var a,
          s,
          o = 'hasOwnProperty',
          l = /[\.\/]/,
          i = /\s*,\s*/,
          u = function (t, e) {
            return t - e
          },
          f = { n: {} },
          p = function () {
            for (var t = 0, e = this.length; t < e; t++)
              if ('undefined' != typeof this[t]) return this[t]
          },
          d = function () {
            for (var t = this.length; --t; )
              if ('undefined' != typeof this[t]) return this[t]
          },
          c = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function (t) {
              return t instanceof Array || '[object Array]' == c.call(t)
            },
          v = function (t, e) {
            var r,
              n = s,
              o = Array.prototype.slice.call(arguments, 2),
              l = v.listeners(t),
              i = 0,
              f = [],
              c = {},
              m = [],
              h = a
            ;(m.firstDefined = p), (m.lastDefined = d), (a = t), (s = 0)
            for (var g = 0, b = l.length; g < b; g++)
              'zIndex' in l[g] &&
                (f.push(l[g].zIndex),
                l[g].zIndex < 0 && (c[l[g].zIndex] = l[g]))
            for (f.sort(u); f[i] < 0; )
              if (((r = c[f[i++]]), m.push(r.apply(e, o)), s)) return (s = n), m
            for (g = 0; g < b; g++)
              if ('zIndex' in (r = l[g]))
                if (r.zIndex == f[i]) {
                  if ((m.push(r.apply(e, o)), s)) break
                  do {
                    if (((r = c[f[++i]]) && m.push(r.apply(e, o)), s)) break
                  } while (r)
                } else c[r.zIndex] = r
              else if ((m.push(r.apply(e, o)), s)) break
            return (s = n), (a = h), m
          }
        ;(v._events = f),
          (v.listeners = function (t) {
            var e,
              r,
              n,
              a,
              s,
              o,
              i,
              u,
              p = h(t) ? t : t.split(l),
              d = f,
              c = [d],
              m = []
            for (a = 0, s = p.length; a < s; a++) {
              for (u = [], o = 0, i = c.length; o < i; o++)
                for (r = [(d = c[o].n)[p[a]], d['*']], n = 2; n--; )
                  (e = r[n]) && (u.push(e), (m = m.concat(e.f || [])))
              c = u
            }
            return m
          }),
          (v.separator = function (t) {
            t
              ? ((t =
                  '[' + (t = m(t).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (l = new RegExp(t)))
              : (l = /[\.\/]/)
          }),
          (v.on = function (t, e) {
            if ('function' != typeof e) return function () {}
            for (
              var r = h(t) ? (h(t[0]) ? t : [t]) : m(t).split(i),
                n = 0,
                a = r.length;
              n < a;
              n++
            )
              !(function (t) {
                for (
                  var r,
                    n = h(t) ? t : m(t).split(l),
                    a = f,
                    s = 0,
                    o = n.length;
                  s < o;
                  s++
                )
                  a =
                    ((a = a.n).hasOwnProperty(n[s]) && a[n[s]]) ||
                    (a[n[s]] = { n: {} })
                for (a.f = a.f || [], s = 0, o = a.f.length; s < o; s++)
                  if (a.f[s] == e) {
                    r = !0
                    break
                  }
                !r && a.f.push(e)
              })(r[n])
            return function (t) {
              ;+t == +t && (e.zIndex = +t)
            }
          }),
          (v.f = function (t) {
            var e = [].slice.call(arguments, 1)
            return function () {
              v.apply(
                null,
                [t, null].concat(e).concat([].slice.call(arguments, 0))
              )
            }
          }),
          (v.stop = function () {
            s = 1
          }),
          (v.nt = function (t) {
            var e = h(a) ? a.join('.') : a
            return t
              ? new RegExp('(?:\\.|\\/|^)' + t + '(?:\\.|\\/|$)').test(e)
              : e
          }),
          (v.nts = function () {
            return h(a) ? a : a.split(l)
          }),
          (v.off = v.unbind = function (t, e) {
            if (t) {
              var r = h(t) ? (h(t[0]) ? t : [t]) : m(t).split(i)
              if (r.length > 1)
                for (var n = 0, a = r.length; n < a; n++) v.off(r[n], e)
              else {
                r = h(t) ? t : m(t).split(l)
                var s,
                  u,
                  p,
                  d,
                  c,
                  g = [f],
                  b = []
                for (n = 0, a = r.length; n < a; n++)
                  for (d = 0; d < g.length; d += p.length - 2) {
                    if (((p = [d, 1]), (s = g[d].n), '*' != r[n]))
                      s[r[n]] &&
                        (p.push(s[r[n]]), b.unshift({ n: s, name: r[n] }))
                    else
                      for (u in s)
                        s[o](u) && (p.push(s[u]), b.unshift({ n: s, name: u }))
                    g.splice.apply(g, p)
                  }
                for (n = 0, a = g.length; n < a; n++)
                  for (s = g[n]; s.n; ) {
                    if (e) {
                      if (s.f) {
                        for (d = 0, c = s.f.length; d < c; d++)
                          if (s.f[d] == e) {
                            s.f.splice(d, 1)
                            break
                          }
                        !s.f.length && delete s.f
                      }
                      for (u in s.n)
                        if (s.n[o](u) && s.n[u].f) {
                          var y = s.n[u].f
                          for (d = 0, c = y.length; d < c; d++)
                            if (y[d] == e) {
                              y.splice(d, 1)
                              break
                            }
                          !y.length && delete s.n[u].f
                        }
                    } else
                      for (u in (delete s.f, s.n))
                        s.n[o](u) && s.n[u].f && delete s.n[u].f
                    s = s.n
                  }
                t: for (n = 0, a = b.length; n < a; n++) {
                  for (u in (s = b[n]).n[s.name].f) continue t
                  for (u in s.n[s.name].n) continue t
                  delete s.n[s.name]
                }
              }
            } else v._events = f = { n: {} }
          }),
          (v.once = function (t, e) {
            var r = function () {
              return v.off(t, r), e.apply(this, arguments)
            }
            return v.on(t, r)
          }),
          (v.version = '0.5.4'),
          (v.toString = function () {
            return 'You are running Eve 0.5.4'
          }),
          (r.eve = v),
          t.exports
            ? (t.exports = v)
            : void 0 ===
                (n = function () {
                  return v
                }.apply(e, [])) || (t.exports = n)
      })('undefined' != typeof window ? window : this)
    },
    qB0F: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        pageWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (t) {
          return { overflow: t ? '' : 'hidden' }
        },
      })),
        (t.exports = e.default)
    },
    rBsx: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        pageWrap: function (t, e) {
          return {
            MozTransform: t ? '' : 'translate3d(0, 0, -' + e + ')',
            MsTransform: t ? '' : 'translate3d(0, 0, -' + e + ')',
            OTransform: t ? '' : 'translate3d(0, 0, -' + e + ')',
            WebkitTransform: t ? '' : 'translate3d(0, 0, -' + e + ')',
            transform: t ? '' : 'translate3d(0, 0, -' + e + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function () {
          return { perspective: '1500px' }
        },
      })),
        (t.exports = e.default)
    },
    t6xC: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        menuWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(-' + e + ', 0, 0)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(-' + e + ', 0, 0)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(-' + e + ', 0, 0)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(-' + e + ', 0, 0)',
            transform: t
              ? ''
              : r
              ? 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(-' + e + ', 0, 0)',
            transition: t
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
        item: function (t, e, r, n) {
          return {
            MozTransform: t ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            MsTransform: t ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            OTransform: t ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            WebkitTransform: t ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            transform: t ? '' : 'translate3d(0, ' + 500 * n + 'px, 0)',
            transition: t
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
      })),
        (t.exports = e.default)
    },
    tOh8: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        menuWrap: function (t, e, r) {
          return {
            visibility: t ? 'visible' : 'hidden',
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: 1e3,
          }
        },
        overlay: function (t, e, r) {
          return {
            zIndex: 1400,
            MozTransform: t
              ? r
                ? 'translate3d(-' + e + ', 0, 0)'
                : 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: t
              ? r
                ? 'translate3d(-' + e + ', 0, 0)'
                : 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: t
              ? r
                ? 'translate3d(-' + e + ', 0, 0)'
                : 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: t
              ? r
                ? 'translate3d(-' + e + ', 0, 0)'
                : 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: t
              ? r
                ? 'translate3d(-' + e + ', 0, 0)'
                : 'translate3d(' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: t ? 'visible' : 'hidden',
          }
        },
        pageWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative',
          }
        },
        burgerIcon: function (t, e, r) {
          return {
            MozTransform: t
              ? r
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: t
              ? r
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: t
              ? r
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: t
              ? r
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: t
              ? r
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300,
          }
        },
        outerContainer: function (t) {
          return { overflow: t ? '' : 'hidden' }
        },
      })),
        (t.exports = e.default)
    },
    'vH+l': function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          },
        a = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
          }
          return function (e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        })()
      function s(t) {
        return t && t.__esModule ? t : { default: t }
      }
      var o = r('q1tI'),
        l = s(o),
        i = s(r('i8i4')),
        u = s(r('17x9')),
        f = s(r('UVcU')),
        p = s(r('fk6S')),
        d = s(r('ACjt'))
      ;(e.default = function (t) {
        var e = (function (e) {
          function r(e) {
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              (function (t, e, r) {
                for (var n = !0; n; ) {
                  var a = t,
                    s = e,
                    o = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var i = l.get
                    if (void 0 === i) return
                    return i.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(t = u), (e = s), (r = o), (n = !0), (l = u = void 0)
                }
              })(Object.getPrototypeOf(r.prototype), 'constructor', this).call(
                this,
                e
              ),
              (this.state = { isOpen: !1 }),
              !t)
            )
              throw new Error('No styles supplied')
          }
          return (
            (function (t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e))
            })(r, e),
            a(r, [
              {
                key: 'toggleMenu',
                value: function () {
                  var t = this,
                    e =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    r = e.isOpen,
                    n = e.noStateChange,
                    a = {
                      isOpen: 'undefined' !== typeof r ? r : !this.state.isOpen,
                    }
                  this.applyWrapperStyles(),
                    this.setState(a, function () {
                      if (
                        (!n && t.props.onStateChange(a),
                        !t.props.disableAutoFocus)
                      )
                        if (a.isOpen) {
                          var e = document.querySelector('.bm-item')
                          e && e.focus()
                        } else
                          document.activeElement
                            ? document.activeElement.blur()
                            : document.body.blur()
                      t.timeoutId && clearTimeout(t.timeoutId),
                        (t.timeoutId = setTimeout(function () {
                          ;(t.timeoutId = null),
                            a.isOpen || t.applyWrapperStyles(!1)
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
                  var e =
                      arguments.length <= 0 ||
                      void 0 === arguments[0] ||
                      arguments[0],
                    r = function (t, r) {
                      return t.classList[e ? 'add' : 'remove'](r)
                    }
                  this.props.htmlClassName &&
                    r(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      r(
                        document.querySelector('body'),
                        this.props.bodyClassName
                      ),
                    t.pageWrap &&
                      this.props.pageWrapId &&
                      this.handleExternalWrapper(
                        this.props.pageWrapId,
                        t.pageWrap,
                        e
                      ),
                    t.outerContainer &&
                      this.props.outerContainerId &&
                      this.handleExternalWrapper(
                        this.props.outerContainerId,
                        t.outerContainer,
                        e
                      )
                },
              },
              {
                key: 'handleExternalWrapper',
                value: function (t, e, r) {
                  var n = document.getElementById(t)
                  if (n) {
                    var a = this.getStyle(e)
                    for (var s in a)
                      a.hasOwnProperty(s) && (n.style[s] = r ? a[s] : '')
                    var o = function (t) {
                      return (t.style['overflow-x'] = r ? 'hidden' : '')
                    }
                    this.props.htmlClassName ||
                      o(document.querySelector('html')),
                      this.props.bodyClassName ||
                        o(document.querySelector('body'))
                  } else console.error("Element with ID '" + t + "' not found")
                },
              },
              {
                key: 'getStyles',
                value: function (e, r, a) {
                  var s =
                      'bm' + e.replace(e.charAt(0), e.charAt(0).toUpperCase()),
                    o = f.default[e] ? this.getStyle(f.default[e]) : {}
                  return (
                    t[e] && (o = n({}, o, this.getStyle(t[e], r + 1))),
                    this.props.styles[s] &&
                      (o = n({}, o, this.props.styles[s])),
                    a && (o = n({}, o, a)),
                    this.props.noTransition && delete o.transition,
                    o
                  )
                },
              },
              {
                key: 'getStyle',
                value: function (t, e) {
                  var r = this.props.width,
                    n = 'string' !== typeof r ? r + 'px' : r
                  return t(this.state.isOpen, n, this.props.right, e)
                },
              },
              {
                key: 'listenForClose',
                value: function (t) {
                  ;(t = t || window.event),
                    this.props.disableCloseOnEsc ||
                      !this.state.isOpen ||
                      ('Escape' !== t.key && 27 !== t.keyCode) ||
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
                value: function (e) {
                  var r = this
                  'undefined' !== typeof this.props.isOpen &&
                  this.props.isOpen !== this.state.isOpen &&
                  this.props.isOpen !== e.isOpen
                    ? this.toggleMenu()
                    : t.svg &&
                      (function () {
                        var e = i.default.findDOMNode(r, 'bm-morph-shape'),
                          n = t.svg.lib(e).select('path')
                        r.state.isOpen
                          ? t.svg.animate(n)
                          : setTimeout(function () {
                              n.attr('d', t.svg.pathInitial)
                            }, 300)
                      })()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this
                  return l.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      l.default.createElement('div', {
                        className: (
                          'bm-overlay ' + this.props.overlayClassName
                        ).trim(),
                        onClick: function () {
                          return e.overlayClick()
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
                      t.svg &&
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
                              d: t.svg.pathInitial,
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
                            t,
                            r
                          ) {
                            if (t) {
                              var n = {
                                key: r,
                                className: [
                                  'bm-item',
                                  e.props.itemClassName,
                                  t.props.className,
                                ]
                                  .filter(function (t) {
                                    return !!t
                                  })
                                  .join(' '),
                                style: e.getStyles('item', r, t.props.style),
                                tabIndex: e.state.isOpen ? 0 : -1,
                              }
                              return l.default.cloneElement(t, n)
                            }
                          })
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        l.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          l.default.createElement(d.default, {
                            onClick: function () {
                              return e.close()
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
                            return e.open()
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
        })(o.Component)
        return (
          (e.propTypes = {
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
              t && t.outerContainer
                ? u.default.string.isRequired
                : u.default.string,
            overlayClassName: u.default.string,
            pageWrapId:
              t && t.pageWrap ? u.default.string.isRequired : u.default.string,
            right: u.default.bool,
            styles: u.default.object,
            width: u.default.oneOfType([u.default.number, u.default.string]),
          }),
          (e.defaultProps = {
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
          e
        )
      }),
        (t.exports = e.default)
    },
    xoUs: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, s.default)({
        menuWrap: function (t) {
          return {
            MozTransform: t ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: t ? '' : 'translate3d(0, -100%, 0)',
            OTransform: t ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: t ? '' : 'translate3d(0, -100%, 0)',
            transform: t ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out',
          }
        },
        pageWrap: function (t, e, r) {
          return {
            MozTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            MsTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            OTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            WebkitTransform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transform: t
              ? ''
              : r
              ? 'translate3d(-' + e + ', 0, 0)'
              : 'translate3d(' + e + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (t) {
          return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: t ? '' : 'hidden',
          }
        },
      })),
        (t.exports = e.default)
    },
    zPlV: function (t, e, r) {},
  },
  [[0, 0, 1, 5, 2, 3]],
])

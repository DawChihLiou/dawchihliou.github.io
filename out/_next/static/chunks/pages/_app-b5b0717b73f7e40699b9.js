_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
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
    A8Jr: function (t, e, r) {},
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
        o = function (t, e, r) {
          for (var n = !0; n; ) {
            var a = t,
              o = e,
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
            ;(t = u), (e = o), (r = s), (n = !0), (l = u = void 0)
          }
        }
      function s(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      var i = r('q1tI'),
        u = s(i),
        f = s(r('17x9')),
        p = (function (t) {
          function e() {
            l(this, e),
              o(Object.getPrototypeOf(e.prototype), 'constructor', this).apply(
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({})), (t.exports = e.default)
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
        o = n(r('vH+l')),
        s = r('jre8'),
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
              !(function o() {
                e > n - 1 ||
                  (t.animate(
                    { path: r[e] },
                    0 === e ? 400 : 500,
                    0 === e ? a.easein : a.elastic,
                    function () {
                      o()
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
            var n = (0, s.pxToNum)(e) - 140
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
            var a = (0, s.pxToNum)(e) - 140
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
            var n = (0, s.pxToNum)(e) - 140
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
      ;(e.default = (0, o.default)(l)), (t.exports = e.default)
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
        o = n(r('vH+l')),
        s = r('jre8'),
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
              width: (0, s.pxToNum)(e) - 120,
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
      ;(e.default = (0, o.default)(l)), (t.exports = e.default)
    },
    cTJO: function (t, e, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('284h')
      ;(e.__esModule = !0), (e.default = void 0)
      var o,
        s = a(r('q1tI')),
        l = r('elyg'),
        i = r('nOHt'),
        u = new Map(),
        f = window.IntersectionObserver,
        p = {}
      var c = function (t, e) {
        var r =
          o ||
          (f
            ? (o = new f(
                function (t) {
                  t.forEach(function (t) {
                    if (u.has(t.target)) {
                      var e = u.get(t.target)
                      ;(t.isIntersecting || t.intersectionRatio > 0) &&
                        (o.unobserve(t.target), u.delete(t.target), e())
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
      function d(t, e, r, n) {
        ;(0, l.isLocalURL)(e) &&
          (t.prefetch(e, r, n).catch(function (t) {
            0
          }),
          (p[e + '%' + r] = !0))
      }
      var m = function (t) {
        var e = !1 !== t.prefetch,
          r = s.default.useState(),
          a = n(r, 2),
          o = a[0],
          u = a[1],
          m = (0, i.useRouter)(),
          h = (m && m.pathname) || '/',
          g = s.default.useMemo(
            function () {
              var e = (0, l.resolveHref)(h, t.href)
              return { href: e, as: t.as ? (0, l.resolveHref)(h, t.as) : e }
            },
            [h, t.href, t.as]
          ),
          v = g.href,
          y = g.as
        s.default.useEffect(
          function () {
            if (
              e &&
              f &&
              o &&
              o.tagName &&
              (0, l.isLocalURL)(v) &&
              !p[v + '%' + y]
            )
              return c(o, function () {
                d(m, v, y)
              })
          },
          [e, o, v, y, m]
        )
        var b = t.children,
          O = t.replace,
          T = t.shallow,
          w = t.scroll
        'string' === typeof b && (b = s.default.createElement('a', null, b))
        var x = s.Children.only(b),
          C = {
            ref: function (t) {
              t && u(t),
                x &&
                  'object' === typeof x &&
                  x.ref &&
                  ('function' === typeof x.ref
                    ? x.ref(t)
                    : 'object' === typeof x.ref && (x.ref.current = t))
            },
            onClick: function (t) {
              x.props &&
                'function' === typeof x.props.onClick &&
                x.props.onClick(t),
                t.defaultPrevented ||
                  (function (t, e, r, n, a, o, s) {
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
                      null == s && (s = n.indexOf('#') < 0),
                      e[a ? 'replace' : 'push'](r, n, { shallow: o }).then(
                        function (t) {
                          t &&
                            s &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(t, m, v, y, O, T, w)
            },
          }
        return (
          e &&
            (C.onMouseEnter = function (t) {
              ;(0, l.isLocalURL)(v) &&
                (x.props &&
                  'function' === typeof x.props.onMouseEnter &&
                  x.props.onMouseEnter(t),
                d(m, v, y, { priority: !0 }))
            }),
          (t.passHref || ('a' === x.type && !('href' in x.props))) &&
            (C.href = (0, l.addBasePath)(y)),
          s.default.cloneElement(x, C)
        )
      }
      e.default = m
    },
    cha2: function (t, e, r) {
      'use strict'
      r.r(e)
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
        g = r('Tgqd'),
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
              v(i.a, { href: '/articles' }, 'Articles'),
              v(
                i.a,
                { href: '/rss.xml' },
                v(
                  'a',
                  { href: '/#' },
                  'RSS Feed to The Articles ',
                  v(g.d, null)
                )
              )
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
        O = r('Oy5z'),
        T = r.n(O),
        w = a.a.createElement
      function x() {
        return w(
          'header',
          { className: T.a.header },
          w(
            b.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: w(g.c, null),
              customCrossIcon: w(g.f, null),
              disableAutoFocus: !0,
            },
            w('a', { href: '/' }, 'Home'),
            w('a', { href: '/now' }, 'Now'),
            w('a', { href: '/articles' }, 'Articles')
          )
        )
      }
      r('A8Jr')
      var C = a.a.createElement
      e.default = function (t) {
        var e = t.Component,
          r = t.pageProps
        return C(
          a.a.Fragment,
          null,
          C(
            s.a,
            null,
            C('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            C('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '32x32',
              href: '/favicon.svg',
            }),
            C('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '16x16',
              href: '/favicon.svg',
            }),
            C('link', {
              rel: 'mask-icon',
              href: '/favicon.svg',
              color: '#ffffff',
            }),
            C('link', { rel: 'manifest', href: '/site.webmanifest' }),
            C('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            C('meta', { charSet: 'utf-8' }),
            C('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            C('meta', { name: 'theme-color', content: '#ffff' }),
            C('meta', {
              name: 'description',
              content: "Daw-Chih Liou's portfolio. ".concat(p.a.description),
            }),
            C('meta', {
              property: 'og:title',
              content: "Daw-Chih Liou's Portfolio",
            }),
            C('meta', { property: 'og:type', content: 'website' }),
            C('meta', { property: 'og:url', content: p.a.home }),
            C('meta', { property: 'og:description', content: p.a.description }),
            C('meta', { property: 'og:image', content: p.a.heroImage }),
            C('meta', { property: 'og:image:type', content: 'image/png' }),
            C('meta', { property: 'og:image:width', content: '1411' }),
            C('meta', { property: 'og:image:height', content: '682' }),
            C('meta', { property: 'og:image:alt', content: p.a.description })
          ),
          C(
            'div',
            { id: 'outer-container' },
            C(x, null),
            C('div', { id: 'page-wrap' }, C(e, r), C(y, null))
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
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      var s = r('q1tI'),
        l = o(s),
        i = o(r('17x9')),
        u = (function (t) {
          function e(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (function (t, e, r) {
                for (var n = !0; n; ) {
                  var a = t,
                    o = e,
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
                  ;(t = u), (e = o), (r = s), (n = !0), (l = u = void 0)
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
        })(s.Component)
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
          o,
          s = 'hasOwnProperty',
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
          c = function () {
            for (var t = this.length; --t; )
              if ('undefined' != typeof this[t]) return this[t]
          },
          d = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function (t) {
              return t instanceof Array || '[object Array]' == d.call(t)
            },
          g = function (t, e) {
            var r,
              n = o,
              s = Array.prototype.slice.call(arguments, 2),
              l = g.listeners(t),
              i = 0,
              f = [],
              d = {},
              m = [],
              h = a
            ;(m.firstDefined = p), (m.lastDefined = c), (a = t), (o = 0)
            for (var v = 0, y = l.length; v < y; v++)
              'zIndex' in l[v] &&
                (f.push(l[v].zIndex),
                l[v].zIndex < 0 && (d[l[v].zIndex] = l[v]))
            for (f.sort(u); f[i] < 0; )
              if (((r = d[f[i++]]), m.push(r.apply(e, s)), o)) return (o = n), m
            for (v = 0; v < y; v++)
              if ('zIndex' in (r = l[v]))
                if (r.zIndex == f[i]) {
                  if ((m.push(r.apply(e, s)), o)) break
                  do {
                    if (((r = d[f[++i]]) && m.push(r.apply(e, s)), o)) break
                  } while (r)
                } else d[r.zIndex] = r
              else if ((m.push(r.apply(e, s)), o)) break
            return (o = n), (a = h), m
          }
        ;(g._events = f),
          (g.listeners = function (t) {
            var e,
              r,
              n,
              a,
              o,
              s,
              i,
              u,
              p = h(t) ? t : t.split(l),
              c = f,
              d = [c],
              m = []
            for (a = 0, o = p.length; a < o; a++) {
              for (u = [], s = 0, i = d.length; s < i; s++)
                for (r = [(c = d[s].n)[p[a]], c['*']], n = 2; n--; )
                  (e = r[n]) && (u.push(e), (m = m.concat(e.f || [])))
              d = u
            }
            return m
          }),
          (g.separator = function (t) {
            t
              ? ((t =
                  '[' + (t = m(t).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (l = new RegExp(t)))
              : (l = /[\.\/]/)
          }),
          (g.on = function (t, e) {
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
                    o = 0,
                    s = n.length;
                  o < s;
                  o++
                )
                  a =
                    ((a = a.n).hasOwnProperty(n[o]) && a[n[o]]) ||
                    (a[n[o]] = { n: {} })
                for (a.f = a.f || [], o = 0, s = a.f.length; o < s; o++)
                  if (a.f[o] == e) {
                    r = !0
                    break
                  }
                !r && a.f.push(e)
              })(r[n])
            return function (t) {
              ;+t == +t && (e.zIndex = +t)
            }
          }),
          (g.f = function (t) {
            var e = [].slice.call(arguments, 1)
            return function () {
              g.apply(
                null,
                [t, null].concat(e).concat([].slice.call(arguments, 0))
              )
            }
          }),
          (g.stop = function () {
            o = 1
          }),
          (g.nt = function (t) {
            var e = h(a) ? a.join('.') : a
            return t
              ? new RegExp('(?:\\.|\\/|^)' + t + '(?:\\.|\\/|$)').test(e)
              : e
          }),
          (g.nts = function () {
            return h(a) ? a : a.split(l)
          }),
          (g.off = g.unbind = function (t, e) {
            if (t) {
              var r = h(t) ? (h(t[0]) ? t : [t]) : m(t).split(i)
              if (r.length > 1)
                for (var n = 0, a = r.length; n < a; n++) g.off(r[n], e)
              else {
                r = h(t) ? t : m(t).split(l)
                var o,
                  u,
                  p,
                  c,
                  d,
                  v = [f],
                  y = []
                for (n = 0, a = r.length; n < a; n++)
                  for (c = 0; c < v.length; c += p.length - 2) {
                    if (((p = [c, 1]), (o = v[c].n), '*' != r[n]))
                      o[r[n]] &&
                        (p.push(o[r[n]]), y.unshift({ n: o, name: r[n] }))
                    else
                      for (u in o)
                        o[s](u) && (p.push(o[u]), y.unshift({ n: o, name: u }))
                    v.splice.apply(v, p)
                  }
                for (n = 0, a = v.length; n < a; n++)
                  for (o = v[n]; o.n; ) {
                    if (e) {
                      if (o.f) {
                        for (c = 0, d = o.f.length; c < d; c++)
                          if (o.f[c] == e) {
                            o.f.splice(c, 1)
                            break
                          }
                        !o.f.length && delete o.f
                      }
                      for (u in o.n)
                        if (o.n[s](u) && o.n[u].f) {
                          var b = o.n[u].f
                          for (c = 0, d = b.length; c < d; c++)
                            if (b[c] == e) {
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
                t: for (n = 0, a = y.length; n < a; n++) {
                  for (u in (o = y[n]).n[o.name].f) continue t
                  for (u in o.n[o.name].n) continue t
                  delete o.n[o.name]
                }
              }
            } else g._events = f = { n: {} }
          }),
          (g.once = function (t, e) {
            var r = function () {
              return g.off(t, r), e.apply(this, arguments)
            }
            return g.on(t, r)
          }),
          (g.version = '0.5.4'),
          (g.toString = function () {
            return 'You are running Eve 0.5.4'
          }),
          (r.eve = g),
          t.exports
            ? (t.exports = g)
            : void 0 ===
                (n = function () {
                  return g
                }.apply(e, [])) || (t.exports = n)
      })('undefined' != typeof window ? window : this)
    },
    qB0F: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      var s = r('q1tI'),
        l = o(s),
        i = o(r('i8i4')),
        u = o(r('17x9')),
        f = o(r('UVcU')),
        p = o(r('fk6S')),
        c = o(r('ACjt'))
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
                    o = e,
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
                  ;(t = u), (e = o), (r = s), (n = !0), (l = u = void 0)
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
                    for (var o in a)
                      a.hasOwnProperty(o) && (n.style[o] = r ? a[o] : '')
                    var s = function (t) {
                      return (t.style['overflow-x'] = r ? 'hidden' : '')
                    }
                    this.props.htmlClassName ||
                      s(document.querySelector('html')),
                      this.props.bodyClassName ||
                        s(document.querySelector('body'))
                  } else console.error("Element with ID '" + t + "' not found")
                },
              },
              {
                key: 'getStyles',
                value: function (e, r, a) {
                  var o =
                      'bm' + e.replace(e.charAt(0), e.charAt(0).toUpperCase()),
                    s = f.default[e] ? this.getStyle(f.default[e]) : {}
                  return (
                    t[e] && (s = n({}, s, this.getStyle(t[e], r + 1))),
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
                          l.default.createElement(c.default, {
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
        })(s.Component)
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
        o = (n = a) && n.__esModule ? n : { default: n }
      ;(e.default = (0, o.default)({
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
  [[0, 0, 1, 6, 2, 4]],
])

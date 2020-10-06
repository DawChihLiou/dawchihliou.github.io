_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
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
        s = function (e, t, r) {
          for (var n = !0; n; ) {
            var a = e,
              s = t,
              o = r
            ;(n = !1), null === a && (a = Function.prototype)
            var i = Object.getOwnPropertyDescriptor(a, s)
            if (void 0 !== i) {
              if ('value' in i) return i.value
              var l = i.get
              if (void 0 === l) return
              return l.call(o)
            }
            var u = Object.getPrototypeOf(a)
            if (null === u) return
            ;(e = u), (t = s), (r = o), (n = !0), (i = u = void 0)
          }
        }
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      var l = r('q1tI'),
        u = o(l),
        f = o(r('17x9')),
        d = (function (e) {
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
        })(l.Component)
      ;(t.default = d),
        (d.propTypes = {
          crossClassName: f.default.string,
          customIcon: f.default.element,
          styles: f.default.object,
          tabIndex: f.default.number,
        }),
        (d.defaultProps = {
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
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({
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
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({})), (e.exports = t.default)
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
        s = n(r('vH+l')),
        o = r('jre8'),
        i = {
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
              !(function s() {
                t > n - 1 ||
                  (e.animate(
                    { path: r[t] },
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
            var n = (0, o.pxToNum)(t) - 140
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
            var a = (0, o.pxToNum)(t) - 140
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
            var n = (0, o.pxToNum)(t) - 140
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
      ;(t.default = (0, s.default)(i)), (e.exports = t.default)
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
        s = n(r('vH+l')),
        o = r('jre8'),
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
              width: (0, o.pxToNum)(t) - 120,
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
      ;(t.default = (0, s.default)(i)), (e.exports = t.default)
    },
    cTJO: function (e, t, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var s,
        o = a(r('q1tI')),
        i = r('elyg'),
        l = r('nOHt'),
        u = new Map(),
        f = window.IntersectionObserver,
        d = {}
      var p = function (e, t) {
        var r =
          s ||
          (f
            ? (s = new f(
                function (e) {
                  e.forEach(function (e) {
                    if (u.has(e.target)) {
                      var t = u.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (s.unobserve(e.target), u.delete(e.target), t())
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
      function c(e, t, r, n) {
        ;(0, i.isLocalURL)(t) &&
          (e.prefetch(t, r, n).catch(function (e) {
            0
          }),
          (d[t + '%' + r] = !0))
      }
      var m = function (e) {
        var t = !1 !== e.prefetch,
          r = o.default.useState(),
          a = n(r, 2),
          s = a[0],
          u = a[1],
          m = (0, l.useRouter)(),
          h = (m && m.pathname) || '/',
          v = o.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(h, e.href)
              return { href: t, as: e.as ? (0, i.resolveHref)(h, e.as) : t }
            },
            [h, e.href, e.as]
          ),
          g = v.href,
          b = v.as
        o.default.useEffect(
          function () {
            if (
              t &&
              f &&
              s &&
              s.tagName &&
              (0, i.isLocalURL)(g) &&
              !d[g + '%' + b]
            )
              return p(s, function () {
                c(m, g, b)
              })
          },
          [t, s, g, b, m]
        )
        var y = e.children,
          O = e.replace,
          w = e.shallow,
          C = e.scroll
        'string' === typeof y && (y = o.default.createElement('a', null, y))
        var T = o.Children.only(y),
          x = {
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
                  (function (e, t, r, n, a, s, o) {
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
                        (0, i.isLocalURL)(r))) &&
                      (e.preventDefault(),
                      null == o && (o = n.indexOf('#') < 0),
                      t[a ? 'replace' : 'push'](r, n, { shallow: s }).then(
                        function (e) {
                          e &&
                            o &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, m, g, b, O, w, C)
            },
          }
        return (
          t &&
            (x.onMouseEnter = function (e) {
              ;(0, i.isLocalURL)(g) &&
                (T.props &&
                  'function' === typeof T.props.onMouseEnter &&
                  T.props.onMouseEnter(e),
                c(m, g, b, { priority: !0 }))
            }),
          (e.passHref || ('a' === T.type && !('href' in T.props))) &&
            (x.href = (0, i.addBasePath)(b)),
          o.default.cloneElement(T, x)
        )
      }
      t.default = m
    },
    cha2: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('q1tI'),
        a = r.n(n),
        s = (r('9d8Q'), r('jBpo'), r('zPlV'), r('8Kt/')),
        o = r.n(s),
        i = r('YFqc'),
        l = r.n(i),
        u = r('6HWB'),
        f = r.n(u),
        d = r('PZRn'),
        p = 'https://nextjs.org/',
        c = 'https://github.com/css-modules/css-modules',
        m = 'https://react-icons.github.io/react-icons/',
        h = 'https://mdxjs.com/',
        v = r('Tgqd'),
        g = a.a.createElement
      function b() {
        return g(
          'footer',
          { className: f.a.footer },
          g(
            'div',
            { className: f.a.wrap },
            g(
              'div',
              { className: f.a.resources },
              g(
                'p',
                null,
                g(
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
              g(
                'p',
                null,
                g(
                  'a',
                  { href: p, target: '_blank', rel: 'noreferrer' },
                  'Next.js'
                )
              ),
              g(
                'p',
                null,
                g(
                  'a',
                  { href: c, target: '_blank', rel: 'noreferrer' },
                  'CSS Modules'
                )
              ),
              g(
                'p',
                null,
                g(
                  'a',
                  { href: m, target: '_blank', rel: 'noreferrer' },
                  'React Icons'
                )
              ),
              g(
                'p',
                null,
                g('a', { href: h, target: '_blank', rel: 'noreferrer' }, 'MDX')
              )
            ),
            g(
              'div',
              { className: f.a.contact },
              g(
                'p',
                null,
                g(
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
              g(
                'p',
                null,
                g(
                  'a',
                  { href: d.a.linkedin, target: '_blank', rel: 'noreferrer' },
                  'Linkedin'
                )
              ),
              g(
                'p',
                null,
                g(
                  'a',
                  { href: d.a.github, target: '_blank', rel: 'noreferrer' },
                  'GitHub'
                )
              ),
              g(
                'p',
                null,
                g(
                  'a',
                  { href: d.a.medium, target: '_blank', rel: 'noreferrer' },
                  'Medium'
                )
              ),
              g(
                'p',
                null,
                g(
                  'a',
                  { href: d.a.twitter, target: '_blank', rel: 'noreferrer' },
                  'Twitter'
                )
              )
            ),
            g(
              'div',
              { className: f.a.sitemap },
              g(
                'p',
                null,
                g(
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
              g(l.a, { href: '/' }, 'Home'),
              g(l.a, { href: '/now' }, 'Now'),
              g(l.a, { href: '/articles' }, 'Articles'),
              g(
                l.a,
                { href: '/rss.xml' },
                g(
                  'a',
                  { href: '/#' },
                  'RSS Feed to The Articles ',
                  g(v.d, null)
                )
              )
            )
          ),
          g(
            'div',
            { className: f.a.copyright },
            '\xa9 ',
            new Date().getFullYear(),
            ' ',
            g(
              'a',
              { href: d.a.github, target: '_blank', rel: 'noreferrer' },
              'Daw-Chih Liou'
            )
          )
        )
      }
      var y = r('mFT6'),
        O = r('Oy5z'),
        w = r.n(O),
        C = a.a.createElement
      function T() {
        return C(
          'header',
          { className: w.a.header },
          C(
            y.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: C(v.c, null),
              customCrossIcon: C(v.f, null),
              disableAutoFocus: !0,
            },
            C('a', { href: '/' }, 'Home'),
            C('a', { href: '/now' }, 'Now'),
            C('a', { href: '/articles' }, 'Articles')
          )
        )
      }
      r('A8Jr')
      var x = a.a.createElement
      t.default = function (e) {
        var t = e.Component,
          r = e.pageProps
        return x(
          a.a.Fragment,
          null,
          x(
            o.a,
            null,
            x('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            x('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '32x32',
              href: '/favicon.svg',
            }),
            x('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '16x16',
              href: '/favicon.svg',
            }),
            x('link', {
              rel: 'mask-icon',
              href: '/favicon.svg',
              color: '#ffffff',
            }),
            x('link', { rel: 'manifest', href: '/site.webmanifest' }),
            x('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            x('meta', { charSet: 'utf-8' }),
            x('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            x('meta', { name: 'theme-color', content: '#ffff' }),
            x('meta', {
              name: 'description',
              content:
                "Daw-Chih Liou's portfolio. Daw-Chih is a software engineer, UX advocate, and mentor who is dedicated to Web engineering. His background in Human Centered Computing has led him to work with startups and public companies across North America, Asia, and Europe. He is passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.",
            })
          ),
          x(
            'div',
            { id: 'outer-container' },
            x(T, null),
            x('div', { id: 'page-wrap' }, x(t, r), x(b, null))
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
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var o = r('q1tI'),
        i = s(o),
        l = s(r('17x9')),
        u = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              (function (e, t, r) {
                for (var n = !0; n; ) {
                  var a = e,
                    s = t,
                    o = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var i = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== i) {
                    if ('value' in i) return i.value
                    var l = i.get
                    if (void 0 === l) return
                    return l.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = s), (r = o), (n = !0), (i = u = void 0)
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
                    t = i.default.cloneElement(this.props.customIcon, r)
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
                          style: n(
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
                      style: n(
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
    gTop: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({
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
          s,
          o = 'hasOwnProperty',
          i = /[\.\/]/,
          l = /\s*,\s*/,
          u = function (e, t) {
            return e - t
          },
          f = { n: {} },
          d = function () {
            for (var e = 0, t = this.length; e < t; e++)
              if ('undefined' != typeof this[e]) return this[e]
          },
          p = function () {
            for (var e = this.length; --e; )
              if ('undefined' != typeof this[e]) return this[e]
          },
          c = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function (e) {
              return e instanceof Array || '[object Array]' == c.call(e)
            },
          v = function (e, t) {
            var r,
              n = s,
              o = Array.prototype.slice.call(arguments, 2),
              i = v.listeners(e),
              l = 0,
              f = [],
              c = {},
              m = [],
              h = a
            ;(m.firstDefined = d), (m.lastDefined = p), (a = e), (s = 0)
            for (var g = 0, b = i.length; g < b; g++)
              'zIndex' in i[g] &&
                (f.push(i[g].zIndex),
                i[g].zIndex < 0 && (c[i[g].zIndex] = i[g]))
            for (f.sort(u); f[l] < 0; )
              if (((r = c[f[l++]]), m.push(r.apply(t, o)), s)) return (s = n), m
            for (g = 0; g < b; g++)
              if ('zIndex' in (r = i[g]))
                if (r.zIndex == f[l]) {
                  if ((m.push(r.apply(t, o)), s)) break
                  do {
                    if (((r = c[f[++l]]) && m.push(r.apply(t, o)), s)) break
                  } while (r)
                } else c[r.zIndex] = r
              else if ((m.push(r.apply(t, o)), s)) break
            return (s = n), (a = h), m
          }
        ;(v._events = f),
          (v.listeners = function (e) {
            var t,
              r,
              n,
              a,
              s,
              o,
              l,
              u,
              d = h(e) ? e : e.split(i),
              p = f,
              c = [p],
              m = []
            for (a = 0, s = d.length; a < s; a++) {
              for (u = [], o = 0, l = c.length; o < l; o++)
                for (r = [(p = c[o].n)[d[a]], p['*']], n = 2; n--; )
                  (t = r[n]) && (u.push(t), (m = m.concat(t.f || [])))
              c = u
            }
            return m
          }),
          (v.separator = function (e) {
            e
              ? ((e =
                  '[' + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (i = new RegExp(e)))
              : (i = /[\.\/]/)
          }),
          (v.on = function (e, t) {
            if ('function' != typeof t) return function () {}
            for (
              var r = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l),
                n = 0,
                a = r.length;
              n < a;
              n++
            )
              !(function (e) {
                for (
                  var r,
                    n = h(e) ? e : m(e).split(i),
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
                  if (a.f[s] == t) {
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
            s = 1
          }),
          (v.nt = function (e) {
            var t = h(a) ? a.join('.') : a
            return e
              ? new RegExp('(?:\\.|\\/|^)' + e + '(?:\\.|\\/|$)').test(t)
              : t
          }),
          (v.nts = function () {
            return h(a) ? a : a.split(i)
          }),
          (v.off = v.unbind = function (e, t) {
            if (e) {
              var r = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l)
              if (r.length > 1)
                for (var n = 0, a = r.length; n < a; n++) v.off(r[n], t)
              else {
                r = h(e) ? e : m(e).split(i)
                var s,
                  u,
                  d,
                  p,
                  c,
                  g = [f],
                  b = []
                for (n = 0, a = r.length; n < a; n++)
                  for (p = 0; p < g.length; p += d.length - 2) {
                    if (((d = [p, 1]), (s = g[p].n), '*' != r[n]))
                      s[r[n]] &&
                        (d.push(s[r[n]]), b.unshift({ n: s, name: r[n] }))
                    else
                      for (u in s)
                        s[o](u) && (d.push(s[u]), b.unshift({ n: s, name: u }))
                    g.splice.apply(g, d)
                  }
                for (n = 0, a = g.length; n < a; n++)
                  for (s = g[n]; s.n; ) {
                    if (t) {
                      if (s.f) {
                        for (p = 0, c = s.f.length; p < c; p++)
                          if (s.f[p] == t) {
                            s.f.splice(p, 1)
                            break
                          }
                        !s.f.length && delete s.f
                      }
                      for (u in s.n)
                        if (s.n[o](u) && s.n[u].f) {
                          var y = s.n[u].f
                          for (p = 0, c = y.length; p < c; p++)
                            if (y[p] == t) {
                              y.splice(p, 1)
                              break
                            }
                          !y.length && delete s.n[u].f
                        }
                    } else
                      for (u in (delete s.f, s.n))
                        s.n[o](u) && s.n[u].f && delete s.n[u].f
                    s = s.n
                  }
                e: for (n = 0, a = b.length; n < a; n++) {
                  for (u in (s = b[n]).n[s.name].f) continue e
                  for (u in s.n[s.name].n) continue e
                  delete s.n[s.name]
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
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({
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
        s = (n = a) && n.__esModule ? n : { default: n }
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
    t6xC: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({
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
        s = (n = a) && n.__esModule ? n : { default: n }
      ;(t.default = (0, s.default)({
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
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var o = r('q1tI'),
        i = s(o),
        l = s(r('i8i4')),
        u = s(r('17x9')),
        f = s(r('UVcU')),
        d = s(r('fk6S')),
        p = s(r('ACjt'))
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
                    s = t,
                    o = r
                  ;(n = !1), null === a && (a = Function.prototype)
                  var i = Object.getOwnPropertyDescriptor(a, s)
                  if (void 0 !== i) {
                    if ('value' in i) return i.value
                    var l = i.get
                    if (void 0 === l) return
                    return l.call(o)
                  }
                  var u = Object.getPrototypeOf(a)
                  if (null === u) return
                  ;(e = u), (t = s), (r = o), (n = !0), (i = u = void 0)
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
                    for (var s in a)
                      a.hasOwnProperty(s) && (n.style[s] = r ? a[s] : '')
                    var o = function (e) {
                      return (e.style['overflow-x'] = r ? 'hidden' : '')
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
                value: function (t, r, a) {
                  var s =
                      'bm' + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
                    o = f.default[t] ? this.getStyle(f.default[t]) : {}
                  return (
                    e[t] && (o = n({}, o, this.getStyle(e[t], r + 1))),
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
                        var t = l.default.findDOMNode(r, 'bm-morph-shape'),
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
                              return i.default.cloneElement(e, n)
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
                        i.default.createElement(d.default, {
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
    xoUs: function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        a = r('vH+l'),
        s = (n = a) && n.__esModule ? n : { default: n }
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
  [[0, 0, 1, 6, 2, 3]],
])

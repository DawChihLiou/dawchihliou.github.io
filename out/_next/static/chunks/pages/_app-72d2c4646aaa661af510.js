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
        header: 'Nav_header__1vWQM',
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
      var s,
        o = a(n('q1tI')),
        i = n('elyg'),
        l = n('nOHt'),
        u = new Map(),
        c = window.IntersectionObserver,
        f = {}
      var d = function (e, t) {
        var n =
          s ||
          (c
            ? (s = new c(
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
        return n
          ? (n.observe(e),
            u.set(e, t),
            function () {
              try {
                n.unobserve(e)
              } catch (t) {
                console.error(t)
              }
              u.delete(e)
            })
          : function () {}
      }
      function p(e, t, n, r) {
        ;(0, i.isLocalURL)(t) &&
          (e.prefetch(t, n, r).catch(function (e) {
            0
          }),
          (f[t + '%' + n] = !0))
      }
      var m = function (e) {
        var t = !1 !== e.prefetch,
          n = o.default.useState(),
          a = r(n, 2),
          s = a[0],
          u = a[1],
          m = (0, l.useRouter)(),
          h = (m && m.pathname) || '/',
          v = o.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(h, e.href, !0),
                n = r(t, 2),
                a = n[0],
                s = n[1]
              return {
                href: a,
                as: e.as ? (0, i.resolveHref)(h, e.as) : s || a,
              }
            },
            [h, e.href, e.as]
          ),
          b = v.href,
          g = v.as
        o.default.useEffect(
          function () {
            if (
              t &&
              c &&
              s &&
              s.tagName &&
              (0, i.isLocalURL)(b) &&
              !f[b + '%' + g]
            )
              return d(s, function () {
                p(m, b, g)
              })
          },
          [t, s, b, g, m]
        )
        var y = e.children,
          x = e.replace,
          O = e.shallow,
          C = e.scroll
        'string' === typeof y && (y = o.default.createElement('a', null, y))
        var E = o.Children.only(y),
          _ = {
            ref: function (e) {
              e && u(e),
                E &&
                  'object' === typeof E &&
                  E.ref &&
                  ('function' === typeof E.ref
                    ? E.ref(e)
                    : 'object' === typeof E.ref && (E.ref.current = e))
            },
            onClick: function (e) {
              E.props &&
                'function' === typeof E.props.onClick &&
                E.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, t, n, r, a, s, o) {
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
                        (0, i.isLocalURL)(n))) &&
                      (e.preventDefault(),
                      null == o && (o = r.indexOf('#') < 0),
                      t[a ? 'replace' : 'push'](n, r, { shallow: s }).then(
                        function (e) {
                          e &&
                            o &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, m, b, g, x, O, C)
            },
          }
        return (
          t &&
            (_.onMouseEnter = function (e) {
              ;(0, i.isLocalURL)(b) &&
                (E.props &&
                  'function' === typeof E.props.onMouseEnter &&
                  E.props.onMouseEnter(e),
                p(m, b, g, { priority: !0 }))
            }),
          (e.passHref || ('a' === E.type && !('href' in E.props))) &&
            (_.href = (0, i.addBasePath)(g)),
          o.default.cloneElement(E, _)
        )
      }
      t.default = m
    },
    cha2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        a = n.n(r),
        s = (n('9d8Q'), n('jBpo'), n('zPlV'), n('asrx'), n('RBUq'), n('8Kt/')),
        o = n.n(s),
        i = n('YFqc'),
        l = n.n(i),
        u = n('6HWB'),
        c = n.n(u),
        f = n('PZRn'),
        d = 'https://nextjs.org/',
        p = 'https://github.com/css-modules/css-modules',
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
                  { href: d, target: '_blank', rel: 'noreferrer' },
                  'Next.js'
                )
              ),
              b(
                'p',
                null,
                b(
                  'a',
                  { href: p, target: '_blank', rel: 'noreferrer' },
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
        E = a.a.createElement
      function _() {
        return E(
          'header',
          { className: O.a.header },
          E(
            y.push,
            {
              pageWrapId: 'page-wrap',
              outerContainerId: 'outer-container',
              customBurgerIcon: E(v.c, null),
              customCrossIcon: E(v.i, null),
              disableAutoFocus: !0,
            },
            E(
              'section',
              null,
              E('a', { href: '/' }, 'Home'),
              E('a', { href: '/now' }, 'Now'),
              E('a', { href: '/articles' }, 'Articles')
            ),
            E(
              'section',
              null,
              E(
                'div',
                { className: O.a.profile },
                E(
                  'a',
                  {
                    href: f.a.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Linkedin profile",
                    className: O.a.iconLink,
                  },
                  E(C.b, null)
                ),
                E(
                  'a',
                  {
                    href: f.a.github,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's GitHub profile",
                    className: O.a.iconLink,
                  },
                  E(C.a, null)
                ),
                E(
                  'a',
                  {
                    href: f.a.medium,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Medium profile",
                    className: O.a.iconLink,
                  },
                  E(C.c, null)
                ),
                E(
                  'a',
                  {
                    href: f.a.twitter,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Twitter",
                    className: O.a.iconLink,
                  },
                  E(C.d, null)
                )
              )
            )
          )
        )
      }
      var w = n('ukKl'),
        k = n.n(w)
      function N(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = {},
          s = Object.keys(e)
        for (r = 0; r < s.length; r++)
          (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      function T() {
        return (T =
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
      function M(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t)
      }
      n('17x9')
      var S = a.a.createContext(null)
      function j(e, t) {
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
      function I(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
      }
      function z(e, t, n) {
        var a = j(e.children),
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
                      exit: I(i, 'exit', e),
                      enter: I(i, 'enter', e),
                    }))
                  : (s[o] = Object(r.cloneElement)(i, { in: !1 }))
                : (s[o] = Object(r.cloneElement)(i, {
                    onExited: n.bind(null, i),
                    in: !0,
                    exit: I(i, 'exit', e),
                    enter: I(i, 'enter', e),
                  }))
            }
          }),
          s
        )
      }
      var P =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t]
            })
          },
        W = (function (e) {
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
          M(t, e)
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
                    j(n.children, function (e) {
                      return Object(r.cloneElement)(e, {
                        onExited: a.bind(null, e),
                        in: !0,
                        appear: I(e, 'appear', n),
                        enter: I(e, 'enter', n),
                        exit: I(e, 'exit', n),
                      })
                    }))
                  : z(e, s, o),
                firstRender: !1,
              }
            }),
            (n.handleExited = function (e, t) {
              var n = j(this.props.children)
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = T({}, t.children)
                    return delete n[e.key], { children: n }
                  }))
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                r = N(e, ['component', 'childFactory']),
                s = this.state.contextValue,
                o = P(this.state.children).map(n)
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === t
                  ? a.a.createElement(S.Provider, { value: s }, o)
                  : a.a.createElement(
                      S.Provider,
                      { value: s },
                      a.a.createElement(t, r, o)
                    )
              )
            }),
            t
          )
        })(a.a.Component)
      ;(W.propTypes = {}),
        (W.defaultProps = {
          component: 'div',
          childFactory: function (e) {
            return e
          },
        })
      var L = W
      function D(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      var Y = n('i8i4'),
        H = n.n(Y),
        A = !1,
        B = (function (e) {
          function t(t, n) {
            var r
            r = e.call(this, t, n) || this
            var a,
              s = n && !n.isMounting ? t.enter : t.appear
            return (
              (r.appearStatus = null),
              t.in
                ? s
                  ? ((a = 'exited'), (r.appearStatus = 'entering'))
                  : (a = 'entered')
                : (a =
                    t.unmountOnExit || t.mountOnEnter ? 'unmounted' : 'exited'),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            )
          }
          M(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && 'unmounted' === t.status
                ? { status: 'exited' }
                : null
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
                  ? 'entering' !== n && 'entered' !== n && (t = 'entering')
                  : ('entering' !== n && 'entered' !== n) || (t = 'exiting')
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
                    'entering' === t
                      ? this.performEnter(e)
                      : this.performExit())
                  : this.props.unmountOnExit &&
                    'exited' === this.state.status &&
                    this.setState({ status: 'unmounted' })
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [H.a.findDOMNode(this), r],
                s = a[0],
                o = a[1],
                i = this.getTimeouts(),
                l = r ? i.appear : i.enter
              ;(!e && !n) || A
                ? this.safeSetState({ status: 'entered' }, function () {
                    t.props.onEntered(s)
                  })
                : (this.props.onEnter(s, o),
                  this.safeSetState({ status: 'entering' }, function () {
                    t.props.onEntering(s, o),
                      t.onTransitionEnd(l, function () {
                        t.safeSetState({ status: 'entered' }, function () {
                          t.props.onEntered(s, o)
                        })
                      })
                  }))
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : H.a.findDOMNode(this)
              t && !A
                ? (this.props.onExit(r),
                  this.safeSetState({ status: 'exiting' }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: 'exited' }, function () {
                          e.props.onExited(r)
                        })
                      })
                  }))
                : this.safeSetState({ status: 'exited' }, function () {
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
                  : H.a.findDOMNode(this),
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
              if ('unmounted' === e) return null
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
                  N(t, [
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
                S.Provider,
                { value: null },
                'function' === typeof n
                  ? n(e, r)
                  : a.a.cloneElement(a.a.Children.only(n), r)
              )
            }),
            t
          )
        })(a.a.Component)
      function R() {}
      ;(B.contextType = S),
        (B.propTypes = {}),
        (B.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: R,
          onEntering: R,
          onEntered: R,
          onExit: R,
          onExiting: R,
          onExited: R,
        }),
        (B.UNMOUNTED = 'unmounted'),
        (B.EXITED = 'exited'),
        (B.ENTERING = 'entering'),
        (B.ENTERED = 'entered'),
        (B.EXITING = 'exiting')
      var F = B,
        q = function (e, t) {
          return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' === typeof n.className
                  ? (n.className = D(n.className, r))
                  : n.setAttribute(
                      'class',
                      D((n.className && n.className.baseVal) || '', r)
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
          M(t, e)
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
                r && q(e, r),
                a && q(e, a),
                s && q(e, s)
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, N(e, ['classNames']))
              return a.a.createElement(
                F,
                T({}, t, {
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
      var V = U,
        K = n('q4db'),
        G = n.n(K),
        X = a.a.createElement,
        J = function () {
          var e = Object(r.useState)(null),
            t = e[0],
            n = e[1],
            a = Object(r.useCallback)(function (e) {
              return function () {
                n(e)
              }
            }, [])
          return (
            Object(r.useEffect)(
              function () {
                if (null === t) {
                  var e = window.localStorage.getItem('__color-scheme__')
                  n(null === e ? 'auto' : e)
                } else
                  'auto' === t
                    ? window.localStorage.removeItem('__color-scheme__')
                    : window.localStorage.setItem('__color-scheme__', t)
                var r = document.querySelector('body')
                'auto' === t
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? r.classList.add('dark')
                    : r.classList.remove('dark')
                  : 'light' === t
                  ? r.classList.remove('dark')
                  : r.classList.add('dark')
              },
              [t]
            ),
            Object(r.useEffect)(function () {
              var e = window.matchMedia('(prefers-color-scheme: dark)'),
                t = function () {
                  var e = document.querySelector('body'),
                    t = window.localStorage.getItem('__color-scheme__'),
                    n = window.matchMedia('(prefers-color-scheme: dark)')
                      .matches
                  null === t &&
                    (n ? e.classList.add('dark') : e.classList.remove('dark'))
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
            }, []),
            X(
              'div',
              { className: G.a.wrap },
              X(
                L,
                { component: null },
                'auto' === t &&
                  X(
                    V,
                    {
                      timeout: 250,
                      classNames: {
                        enter: G.a['button-enter'],
                        enterActive: G.a['button-enter-active'],
                        exit: G.a['button-exit'],
                        exitActive: G.a['button-exit-active'],
                      },
                    },
                    X(v.h, { onClick: a('light'), className: G.a.button })
                  ),
                'light' === t &&
                  X(
                    V,
                    {
                      timeout: 250,
                      classNames: {
                        enter: G.a['button-enter'],
                        enterActive: G.a['button-enter-active'],
                        exit: G.a['button-exit'],
                        exitActive: G.a['button-exit-active'],
                      },
                    },
                    X(v.g, { onClick: a('dark'), className: G.a.button })
                  ),
                'dark' === t &&
                  X(
                    V,
                    {
                      timeout: 250,
                      classNames: {
                        enter: G.a['button-enter'],
                        enterActive: G.a['button-enter-active'],
                        exit: G.a['button-exit'],
                        exitActive: G.a['button-exit-active'],
                      },
                    },
                    X(v.d, { onClick: a('auto'), className: G.a.button })
                  )
              )
            )
          )
        },
        Z = a.a.createElement,
        Q = function () {
          return Z(
            'div',
            { className: k.a.menubar },
            Z(J, null),
            Z(
              'a',
              { href: f.a.github, target: '_blank', rel: 'noreferrer' },
              Z(C.a, { size: '1.5em' })
            )
          )
        },
        $ = a.a.createElement
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps
        return $(
          a.a.Fragment,
          null,
          $(
            o.a,
            null,
            $('link', {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            }),
            $('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '32x32',
              href: '/favicon.svg',
            }),
            $('link', {
              rel: 'icon',
              type: 'image/svg',
              sizes: '16x16',
              href: '/favicon.svg',
            }),
            $('link', {
              rel: 'mask-icon',
              href: '/favicon.svg',
              color: '#ffffff',
            }),
            $('link', { rel: 'manifest', href: '/site.webmanifest' }),
            $('title', null, 'Daw-Chih liou'),
            $('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            $('meta', { charSet: 'utf-8' }),
            $('meta', { name: 'msapplication-TileColor', content: '#007cf0' }),
            $('meta', { name: 'theme-color', content: '#ffff' }),
            $('meta', {
              name: 'description',
              content: "Daw-Chih Liou's portfolio. ".concat(f.a.description),
            })
          ),
          $(
            'div',
            { id: 'outer-container' },
            $(_, null),
            $(Q, null),
            $('div', { id: 'page-wrap' }, $(t, n), $(g, null))
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
          o = 'hasOwnProperty',
          i = /[\.\/]/,
          l = /\s*,\s*/,
          u = function (e, t) {
            return e - t
          },
          c = { n: {} },
          f = function () {
            for (var e = 0, t = this.length; e < t; e++)
              if ('undefined' != typeof this[e]) return this[e]
          },
          d = function () {
            for (var e = this.length; --e; )
              if ('undefined' != typeof this[e]) return this[e]
          },
          p = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function (e) {
              return e instanceof Array || '[object Array]' == p.call(e)
            },
          v = function (e, t) {
            var n,
              r = s,
              o = Array.prototype.slice.call(arguments, 2),
              i = v.listeners(e),
              l = 0,
              c = [],
              p = {},
              m = [],
              h = a
            ;(m.firstDefined = f), (m.lastDefined = d), (a = e), (s = 0)
            for (var b = 0, g = i.length; b < g; b++)
              'zIndex' in i[b] &&
                (c.push(i[b].zIndex),
                i[b].zIndex < 0 && (p[i[b].zIndex] = i[b]))
            for (c.sort(u); c[l] < 0; )
              if (((n = p[c[l++]]), m.push(n.apply(t, o)), s)) return (s = r), m
            for (b = 0; b < g; b++)
              if ('zIndex' in (n = i[b]))
                if (n.zIndex == c[l]) {
                  if ((m.push(n.apply(t, o)), s)) break
                  do {
                    if (((n = p[c[++l]]) && m.push(n.apply(t, o)), s)) break
                  } while (n)
                } else p[n.zIndex] = n
              else if ((m.push(n.apply(t, o)), s)) break
            return (s = r), (a = h), m
          }
        ;(v._events = c),
          (v.listeners = function (e) {
            var t,
              n,
              r,
              a,
              s,
              o,
              l,
              u,
              f = h(e) ? e : e.split(i),
              d = c,
              p = [d],
              m = []
            for (a = 0, s = f.length; a < s; a++) {
              for (u = [], o = 0, l = p.length; o < l; o++)
                for (n = [(d = p[o].n)[f[a]], d['*']], r = 2; r--; )
                  (t = n[r]) && (u.push(t), (m = m.concat(t.f || [])))
              p = u
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
              var n = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l),
                r = 0,
                a = n.length;
              r < a;
              r++
            )
              !(function (e) {
                for (
                  var n,
                    r = h(e) ? e : m(e).split(i),
                    a = c,
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
              var n = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l)
              if (n.length > 1)
                for (var r = 0, a = n.length; r < a; r++) v.off(n[r], t)
              else {
                n = h(e) ? e : m(e).split(i)
                var s,
                  u,
                  f,
                  d,
                  p,
                  b = [c],
                  g = []
                for (r = 0, a = n.length; r < a; r++)
                  for (d = 0; d < b.length; d += f.length - 2) {
                    if (((f = [d, 1]), (s = b[d].n), '*' != n[r]))
                      s[n[r]] &&
                        (f.push(s[n[r]]), g.unshift({ n: s, name: n[r] }))
                    else
                      for (u in s)
                        s[o](u) && (f.push(s[u]), g.unshift({ n: s, name: u }))
                    b.splice.apply(b, f)
                  }
                for (r = 0, a = b.length; r < a; r++)
                  for (s = b[r]; s.n; ) {
                    if (t) {
                      if (s.f) {
                        for (d = 0, p = s.f.length; d < p; d++)
                          if (s.f[d] == t) {
                            s.f.splice(d, 1)
                            break
                          }
                        !s.f.length && delete s.f
                      }
                      for (u in s.n)
                        if (s.n[o](u) && s.n[u].f) {
                          var y = s.n[u].f
                          for (d = 0, p = y.length; d < p; d++)
                            if (y[d] == t) {
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
                e: for (r = 0, a = g.length; r < a; r++) {
                  for (u in (s = g[r]).n[s.name].f) continue e
                  for (u in s.n[s.name].n) continue e
                  delete s.n[s.name]
                }
              }
            } else v._events = c = { n: {} }
          }),
          (v.once = function (e, t) {
            var n = function () {
              return v.off(e, n), t.apply(this, arguments)
            }
            return v.on(e, n)
          }),
          (v.version = '0.5.4'),
          (v.toString = function () {
            return 'You are running Eve 0.5.4'
          }),
          (n.eve = v),
          e.exports
            ? (e.exports = v)
            : void 0 ===
                (r = function () {
                  return v
                }.apply(t, [])) || (e.exports = r)
      })('undefined' != typeof window ? window : this)
    },
    q4db: function (e, t, n) {
      e.exports = {
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
        d = s(n('ACjt'))
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
                          i.default.createElement(d.default, {
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
    zPlV: function (e, t, n) {},
  },
  [[0, 0, 1, 5, 6, 2, 4]],
])

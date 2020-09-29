_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(a.default.useContext(o.AmpStateContext))
        })
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK')
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery,
          i = void 0 !== o && o
        return n || (a && i)
      }
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('lSNA')
      ;(t.__esModule = !0), (t.defaultHead = l), (t.default = void 0)
      var r,
        a = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, a, o)
                : (n[a] = e[a])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        o = (r = n('Xuae')) && r.__esModule ? r : { default: r },
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
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              a.default.createElement('meta', {
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
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
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
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var n = a.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (a) {
                var o = !0
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  var i = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(i) ? (o = !1) : e.add(i)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var u = 0, c = d.length; u < c; u++) {
                      var s = d[u]
                      if (a.props.hasOwnProperty(s))
                        if ('charSet' === s) n.has(s) ? (o = !1) : n.add(s)
                        else {
                          var l = a.props[s],
                            f = r[s] || new Set()
                          f.has(l) ? (o = !1) : (f.add(l), (r[s] = f))
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return a.default.cloneElement(e, { key: n })
          })
      }
      function h(e) {
        var t = e.children,
          n = (0, a.useContext)(i.AmpStateContext),
          r = (0, a.useContext)(u.HeadManagerContext)
        return a.default.createElement(
          o.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(n),
          },
          t
        )
      }
      h.rewind = function () {}
      var v = h
      t.default = v
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
    Ijbi: function (e, t, n) {
      var r = n('WkPL')
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
      }
    },
    KJ3Z: function (e, t, n) {
      e.exports = {
        container: 'Articles_container__1SDJT',
        main: 'Articles_main__3v_Mj',
        grid: 'Articles_grid__3upoJ',
        date: 'Articles_date__3Lzt-',
        description: 'Articles_description__2SHEN',
        category: 'Articles_category__2vPx5',
        avatar: 'Articles_avatar__38wMb',
      }
    },
    PZRn: function (e, t, n) {
      'use strict'
      t.a = {
        linkedin: 'https://www.linkedin.com/in/dawchihliou/',
        medium: 'https://medium.com/@dawchihliou',
        twitter: 'https://twitter.com/dawchihliou',
        github: 'https://github.com/DawChihLiou',
      }
    },
    QVEA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return p
        })
      var r = n('q1tI'),
        a = n.n(r),
        o = n('8Kt/'),
        i = n.n(o),
        u = [
          {
            date: 'September 29, 2020',
            publisher: '',
            title: 'Hello World\u2600\ufe0f',
            description:
              "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
            url: '/articles/helloworld',
            category: 'Random',
            author: 'Daw-Chih Liou',
            avatar: '/portrait.png',
            social: n('PZRn').a.github,
          },
        ],
        c = n('KJ3Z'),
        s = n.n(c),
        l = n('YFqc'),
        f = n.n(l),
        d = a.a.createElement
      function p() {
        return d(
          'div',
          { className: s.a.container },
          d(
            i.a,
            null,
            d('title', null, 'Articles'),
            d('link', { rel: 'icon', href: '/favicon.ico' })
          ),
          d(
            'main',
            { className: s.a.main },
            u.map(function (e) {
              return d(
                'div',
                { className: s.a.grid, key: e.url },
                d('div', { className: s.a.date }, d('p', null, e.date)),
                d(
                  'div',
                  { className: s.a.description },
                  d('p', { className: s.a.category }, e.category),
                  d(f.a, { href: e.url }, e.title),
                  d('p', null, e.description),
                  d(
                    'div',
                    null,
                    d('img', {
                      src: e.avatar,
                      alt: e.author,
                      className: s.a.avatar,
                    }),
                    d(
                      'a',
                      { href: e.social, className: s.a.author },
                      d('span', null, e.author)
                    )
                  )
                )
              )
            })
          )
        )
      }
    },
    RIqP: function (e, t, n) {
      var r = n('Ijbi'),
        a = n('EbDI'),
        o = n('ZhPi'),
        i = n('Bnag')
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || i()
      }
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('RIqP'),
        a = n('lwsE'),
        o = n('W8MJ'),
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
            var a = c(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var l = n('q1tI'),
        f = (function (e) {
          i(n, e)
          var t = s(n)
          function n(e) {
            var o
            return (
              a(this, n),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      r(o.props.headManager.mountedInstances),
                      o.props
                    )
                  )
              }),
              (o._hasHeadManager =
                o.props.headManager && o.props.headManager.mountedInstances),
              o
            )
          }
          return (
            o(n, [
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
      t.default = f
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('J4zp'),
        a = n('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o,
        i = a(n('q1tI')),
        u = n('elyg'),
        c = n('nOHt'),
        s = new Map(),
        l = window.IntersectionObserver,
        f = {}
      var d = function (e, t) {
        var n =
          o ||
          (l
            ? (o = new l(
                function (e) {
                  e.forEach(function (e) {
                    if (s.has(e.target)) {
                      var t = s.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), s.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        return n
          ? (n.observe(e),
            s.set(e, t),
            function () {
              try {
                n.unobserve(e)
              } catch (t) {
                console.error(t)
              }
              s.delete(e)
            })
          : function () {}
      }
      function p(e, t, n, r) {
        ;(0, u.isLocalURL)(t) &&
          (e.prefetch(t, n, r).catch(function (e) {
            0
          }),
          (f[t + '%' + n] = !0))
      }
      var h = function (e) {
        var t = !1 !== e.prefetch,
          n = i.default.useState(),
          a = r(n, 2),
          o = a[0],
          s = a[1],
          h = (0, c.useRouter)(),
          v = (h && h.pathname) || '/',
          m = i.default.useMemo(
            function () {
              var t = (0, u.resolveHref)(v, e.href)
              return { href: t, as: e.as ? (0, u.resolveHref)(v, e.as) : t }
            },
            [v, e.href, e.as]
          ),
          y = m.href,
          g = m.as
        i.default.useEffect(
          function () {
            if (
              t &&
              l &&
              o &&
              o.tagName &&
              (0, u.isLocalURL)(y) &&
              !f[y + '%' + g]
            )
              return d(o, function () {
                p(h, y, g)
              })
          },
          [t, o, y, g, h]
        )
        var _ = e.children,
          w = e.replace,
          b = e.shallow,
          M = e.scroll
        'string' === typeof _ && (_ = i.default.createElement('a', null, _))
        var A = i.Children.only(_),
          k = {
            ref: function (e) {
              e && s(e),
                A &&
                  'object' === typeof A &&
                  A.ref &&
                  ('function' === typeof A.ref
                    ? A.ref(e)
                    : 'object' === typeof A.ref && (A.ref.current = e))
            },
            onClick: function (e) {
              A.props &&
                'function' === typeof A.props.onClick &&
                A.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, t, n, r, a, o, i) {
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
                        (0, u.isLocalURL)(n))) &&
                      (e.preventDefault(),
                      null == i && (i = r.indexOf('#') < 0),
                      t[a ? 'replace' : 'push'](n, r, { shallow: o }).then(
                        function (e) {
                          e &&
                            i &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, h, y, g, w, b, M)
            },
          }
        return (
          t &&
            (k.onMouseEnter = function (e) {
              ;(0, u.isLocalURL)(y) &&
                (A.props &&
                  'function' === typeof A.props.onMouseEnter &&
                  A.props.onMouseEnter(e),
                p(h, y, g, { priority: !0 }))
            }),
          (e.passHref || ('a' === A.type && !('href' in A.props))) &&
            (k.href = (0, u.addBasePath)(g)),
          i.default.cloneElement(A, k)
        )
      }
      t.default = h
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
      var a = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.AmpStateContext = a
    },
    pLg2: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return n('QVEA')
        },
      ])
    },
  },
  [['pLg2', 0, 1, 2]],
])

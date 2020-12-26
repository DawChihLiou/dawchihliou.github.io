_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    KJ3Z: function (e, t, r) {
      e.exports = {
        container: 'Articles_container__1SDJT',
        main: 'Articles_main__3v_Mj',
        banner: 'Articles_banner__143cv',
        articles: 'Articles_articles__2v9sO',
        grid: 'Articles_grid__3upoJ',
        date: 'Articles_date__3Lzt-',
        description: 'Articles_description__2SHEN',
        category: 'Articles_category__2vPx5',
        avatar: 'Articles_avatar__38wMb',
      }
    },
    QVEA: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return v
        })
      var n = r('q1tI'),
        a = r.n(n),
        o = r('g4pe'),
        i = r.n(o),
        c = r('ywx8'),
        l = r('KJ3Z'),
        s = r.n(l),
        u = r('YFqc'),
        f = r.n(u),
        p = r('Tgqd'),
        d = a.a.createElement
      function v() {
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
            d(
              'div',
              { className: s.a.banner },
              d(
                'p',
                null,
                'If you enjoy the articles, please do',
                ' ',
                d(
                  'a',
                  { href: '/rss.xml' },
                  'subscribe to the RSS feed ',
                  d(p.e, null)
                )
              )
            ),
            d(
              'div',
              { className: s.a.articles },
              c.a.map(function (e) {
                return d(
                  'section',
                  { className: s.a.grid, key: e.url },
                  d('div', { className: s.a.date }, d('p', null, e.date)),
                  d(
                    'article',
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
                        loading: 'lazy',
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
        )
      }
    },
    YFqc: function (e, t, r) {
      e.exports = r('cTJO')
    },
    cTJO: function (e, t, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o = a(r('q1tI')),
        i = r('elyg'),
        c = r('nOHt'),
        l = r('vNVm'),
        s = {}
      function u(e, t, r, n) {
        if ((0, i.isLocalURL)(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0
          })
          var a =
            n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale
          s[t + '%' + r + (a ? '%' + a : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          r = (0, c.useRouter)(),
          a = (r && r.pathname) || '/',
          f = o.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(a, e.href, !0),
                r = n(t, 2),
                o = r[0],
                c = r[1]
              return {
                href: o,
                as: e.as ? (0, i.resolveHref)(a, e.as) : c || o,
              }
            },
            [a, e.href, e.as]
          ),
          p = f.href,
          d = f.as,
          v = e.children,
          h = e.replace,
          m = e.shallow,
          _ = e.scroll,
          g = e.locale
        'string' === typeof v && (v = o.default.createElement('a', null, v))
        var y = o.Children.only(v),
          b = y && 'object' === typeof y && y.ref,
          w = (0, l.useIntersection)({ rootMargin: '200px' }),
          E = n(w, 2),
          N = E[0],
          L = E[1],
          M = o.default.useCallback(
            function (e) {
              N(e),
                b &&
                  ('function' === typeof b
                    ? b(e)
                    : 'object' === typeof b && (b.current = e))
            },
            [b, N]
          )
        ;(0, o.useEffect)(
          function () {
            var e = L && t && (0, i.isLocalURL)(p),
              n = 'undefined' !== typeof g ? g : r && r.locale,
              a = s[p + '%' + d + (n ? '%' + n : '')]
            e && !a && u(r, p, d, { locale: n })
          },
          [d, p, L, g, t, r]
        )
        var A = {
          ref: M,
          onClick: function (e) {
            y.props &&
              'function' === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, a, o, c, l) {
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
                    null == c && (c = n.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](r, n, {
                      shallow: o,
                      locale: l,
                    }).then(function (e) {
                      e && c && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, r, p, d, h, m, _, g)
          },
          onMouseEnter: function (e) {
            ;(0, i.isLocalURL)(p) &&
              (y.props &&
                'function' === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              u(r, p, d, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === y.type && !('href' in y.props))) &&
            (A.href = (0, i.addBasePath)(
              (0, i.addLocale)(
                d,
                'undefined' !== typeof g ? g : r && r.locale,
                r && r.defaultLocale
              )
            )),
          o.default.cloneElement(y, A)
        )
      }
      t.default = f
    },
    pLg2: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return r('QVEA')
        },
      ])
    },
    vNVm: function (e, t, r) {
      'use strict'
      var n = r('J4zp'),
        a = r('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !c,
            a = (0, o.useRef)(),
            s = (0, o.useState)(!1),
            u = n(s, 2),
            f = u[0],
            p = u[1],
            d = (0, o.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  r ||
                    f ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t = e.rootMargin || '',
                              r = l.get(t)
                            if (r) return r
                            var n = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  t && r && t(r)
                                })
                              }, e)
                            return (
                              l.set(
                                t,
                                (r = { id: t, observer: a, elements: n })
                              ),
                              r
                            )
                          })(r),
                          a = n.id,
                          o = n.observer,
                          i = n.elements
                        return (
                          i.set(e, t),
                          o.observe(e),
                          function () {
                            o.unobserve(e),
                              0 === i.size && (o.disconnect(), l.delete(a))
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
              [r, t, f]
            )
          return (
            (0, o.useEffect)(
              function () {
                c ||
                  f ||
                  (0, i.default)(function () {
                    return p(!0)
                  })
              },
              [f]
            ),
            [d, f]
          )
        })
      var o = r('q1tI'),
        i = a(r('0G5g')),
        c = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    ywx8: function (e, t, r) {
      'use strict'
      var n = r('PZRn'),
        a = 'Welcome',
        o = 'Performance'
      t.a = [
        {
          date: 'Octobor 6, 2020',
          publisher: '',
          title: 'Using WebP for Better User Experience',
          description:
            "WebP is a modern image format that provides outstanding image quality with smaller image size. I'll show you how much you can benefit from it and how to setup your project for optimal developer experience.",
          url: '/articles/use-webp-for-better-ux',
          cover: 'optimized/portfolio-snapshot.png',
          category: o,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: n.a.github,
        },
        {
          date: 'September 29, 2020',
          publisher: '',
          title: 'Hello World\u2600\ufe0f',
          description:
            "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
          url: '/articles/helloworld',
          cover: '/optimized/portrait.png',
          category: a,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: n.a.github,
        },
      ]
    },
  },
  [['pLg2', 0, 1, 2, 4]],
])

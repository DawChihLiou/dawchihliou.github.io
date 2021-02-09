_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    KJ3Z: function (e, t, a) {
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
    QVEA: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return h
        })
      var r = a('q1tI'),
        n = a.n(r),
        o = a('g4pe'),
        i = a.n(o),
        c = a('ywx8'),
        l = a('KJ3Z'),
        s = a.n(l),
        u = a('YFqc'),
        p = a.n(u),
        f = a('Tgqd'),
        d = n.a.createElement
      function h() {
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
                  d(f.e, null)
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
                    d(p.a, { href: e.url }, e.title),
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
    YFqc: function (e, t, a) {
      e.exports = a('cTJO')
    },
    cTJO: function (e, t, a) {
      'use strict'
      var r = a('J4zp'),
        n = a('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o = n(a('q1tI')),
        i = a('elyg'),
        c = a('nOHt'),
        l = a('vNVm'),
        s = {}
      function u(e, t, a, r) {
        if ((0, i.isLocalURL)(t)) {
          e.prefetch(t, a, r).catch(function (e) {
            0
          })
          var n =
            r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          s[t + '%' + a + (n ? '%' + n : '')] = !0
        }
      }
      var p = function (e) {
        var t = !1 !== e.prefetch,
          a = (0, c.useRouter)(),
          n = (a && a.pathname) || '/',
          p = o.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(n, e.href, !0),
                a = r(t, 2),
                o = a[0],
                c = a[1]
              return {
                href: o,
                as: e.as ? (0, i.resolveHref)(n, e.as) : c || o,
              }
            },
            [n, e.href, e.as]
          ),
          f = p.href,
          d = p.as,
          h = e.children,
          g = e.replace,
          v = e.shallow,
          m = e.scroll,
          y = e.locale
        'string' === typeof h && (h = o.default.createElement('a', null, h))
        var b = o.Children.only(h),
          _ = b && 'object' === typeof b && b.ref,
          w = (0, l.useIntersection)({ rootMargin: '200px' }),
          E = r(w, 2),
          N = E[0],
          A = E[1],
          L = o.default.useCallback(
            function (e) {
              N(e),
                _ &&
                  ('function' === typeof _
                    ? _(e)
                    : 'object' === typeof _ && (_.current = e))
            },
            [_, N]
          )
        ;(0, o.useEffect)(
          function () {
            var e = A && t && (0, i.isLocalURL)(f),
              r = 'undefined' !== typeof y ? y : a && a.locale,
              n = s[f + '%' + d + (r ? '%' + r : '')]
            e && !n && u(a, f, d, { locale: r })
          },
          [d, f, A, y, t, a]
        )
        var k = {
          ref: L,
          onClick: function (e) {
            b.props &&
              'function' === typeof b.props.onClick &&
              b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, a, r, n, o, c, l) {
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
                      (0, i.isLocalURL)(a))) &&
                    (e.preventDefault(),
                    null == c && (c = r.indexOf('#') < 0),
                    t[n ? 'replace' : 'push'](a, r, {
                      shallow: o,
                      locale: l,
                    }).then(function (e) {
                      e && c && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, a, f, d, g, v, m, y)
          },
          onMouseEnter: function (e) {
            ;(0, i.isLocalURL)(f) &&
              (b.props &&
                'function' === typeof b.props.onMouseEnter &&
                b.props.onMouseEnter(e),
              u(a, f, d, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === b.type && !('href' in b.props))) &&
            (k.href = (0, i.addBasePath)(
              (0, i.addLocale)(
                d,
                'undefined' !== typeof y ? y : a && a.locale,
                a && a.defaultLocale
              )
            )),
          o.default.cloneElement(b, k)
        )
      }
      t.default = p
    },
    pLg2: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return a('QVEA')
        },
      ])
    },
    vNVm: function (e, t, a) {
      'use strict'
      var r = a('J4zp'),
        n = a('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            a = e.disabled || !c,
            n = (0, o.useRef)(),
            s = (0, o.useState)(!1),
            u = r(s, 2),
            p = u[0],
            f = u[1],
            d = (0, o.useCallback)(
              function (e) {
                n.current && (n.current(), (n.current = void 0)),
                  a ||
                    p ||
                    (e &&
                      e.tagName &&
                      (n.current = (function (e, t, a) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              a = l.get(t)
                            if (a) return a
                            var r = new Map(),
                              n = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    a =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  t && a && t(a)
                                })
                              }, e)
                            return (
                              l.set(
                                t,
                                (a = { id: t, observer: n, elements: r })
                              ),
                              a
                            )
                          })(a),
                          n = r.id,
                          o = r.observer,
                          i = r.elements
                        return (
                          i.set(e, t),
                          o.observe(e),
                          function () {
                            o.unobserve(e),
                              0 === i.size && (o.disconnect(), l.delete(n))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && f(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [a, t, p]
            )
          return (
            (0, o.useEffect)(
              function () {
                c ||
                  p ||
                  (0, i.default)(function () {
                    return f(!0)
                  })
              },
              [p]
            ),
            [d, p]
          )
        })
      var o = a('q1tI'),
        i = n(a('0G5g')),
        c = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    ywx8: function (e, t, a) {
      'use strict'
      var r = a('PZRn'),
        n = 'Welcome',
        o = 'Performance'
      t.a = [
        {
          date: 'February 9, 2021',
          publisher: 'trivago',
          title: 'Rethinking the Next-gen Analytics Web App at trivago',
          description:
            "How trivago Frontend Engineering revamped the company's Business Intelligence web application. After almost a decade, we decided to rebuild our in-house Business Intelligence web application to better support the organization. We successfully completed the project because we fundamentally challenged and re-thought all aspects of the project.",
          url:
            'https://tech.trivago.com/2021/02/09/rethinking-the-next-gen-analytics-web-app-at-trivago/',
          cover:
            'https://tech.trivago.com/img/posts/rethinknextgenanalyticswebappattrivago/image3.png',
          category: '',
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.github,
        },
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
          social: r.a.github,
        },
        {
          date: 'September 29, 2020',
          publisher: '',
          title: 'Hello World\u2600\ufe0f',
          description:
            "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
          url: '/articles/helloworld',
          cover: '/optimized/portrait.png',
          category: n,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.github,
        },
      ]
    },
  },
  [['pLg2', 0, 1, 2, 4]],
])

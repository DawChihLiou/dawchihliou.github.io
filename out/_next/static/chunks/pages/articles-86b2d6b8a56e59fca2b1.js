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
        caption: 'Articles_caption__19IGP',
        category: 'Articles_category__2vPx5',
        avatar: 'Articles_avatar__38wMb',
      }
    },
    QVEA: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return f
        })
      var a = r('q1tI'),
        i = r.n(a),
        o = r('g4pe'),
        n = r.n(o),
        s = r('ywx8'),
        l = r('KJ3Z'),
        c = r.n(l),
        u = r('YFqc'),
        p = r.n(u),
        d = r('Tgqd'),
        h = i.a.createElement
      function f() {
        return h(
          'div',
          { className: c.a.container },
          h(
            n.a,
            null,
            h('title', null, 'Articles'),
            h('link', { rel: 'icon', href: '/favicon.ico' })
          ),
          h(
            'main',
            { className: c.a.main },
            h(
              'div',
              { className: c.a.banner },
              h(
                'p',
                null,
                'If you enjoy the articles, please do',
                ' ',
                h(
                  'a',
                  { href: '/rss.xml' },
                  'subscribe to the RSS feed ',
                  h(d.e, null)
                )
              )
            ),
            h(
              'div',
              { className: c.a.articles },
              s.a.map(function (e) {
                return h(
                  'section',
                  { className: c.a.grid, key: e.url },
                  h('div', { className: c.a.date }, h('p', null, e.date)),
                  h(
                    'article',
                    { className: c.a.description },
                    h('p', { className: c.a.category }, e.category),
                    e.external &&
                      h(
                        'a',
                        { href: e.url, target: '_blank', rel: 'noreferrer' },
                        e.title
                      ),
                    !e.external && h(p.a, { href: e.url }, e.title),
                    e.external &&
                      h(
                        'a',
                        {
                          href: e.publisherUrl,
                          target: '_blank',
                          rel: 'noreferrer',
                          className: c.a.caption,
                        },
                        'Published on ',
                        h('span', null, e.publisher)
                      ),
                    h('p', null, e.description),
                    h(
                      'div',
                      null,
                      h('img', {
                        src: e.avatar,
                        alt: e.author,
                        className: c.a.avatar,
                        loading: 'lazy',
                      }),
                      h(
                        'a',
                        { href: e.social, className: c.a.author },
                        h('span', null, e.author)
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
      var a = r('J4zp'),
        i = r('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o = i(r('q1tI')),
        n = r('elyg'),
        s = r('nOHt'),
        l = r('vNVm'),
        c = {}
      function u(e, t, r, a) {
        if ((0, n.isLocalURL)(t)) {
          e.prefetch(t, r, a).catch(function (e) {
            0
          })
          var i =
            a && 'undefined' !== typeof a.locale ? a.locale : e && e.locale
          c[t + '%' + r + (i ? '%' + i : '')] = !0
        }
      }
      var p = function (e) {
        var t = !1 !== e.prefetch,
          r = (0, s.useRouter)(),
          i = (r && r.pathname) || '/',
          p = o.default.useMemo(
            function () {
              var t = (0, n.resolveHref)(i, e.href, !0),
                r = a(t, 2),
                o = r[0],
                s = r[1]
              return {
                href: o,
                as: e.as ? (0, n.resolveHref)(i, e.as) : s || o,
              }
            },
            [i, e.href, e.as]
          ),
          d = p.href,
          h = p.as,
          f = e.children,
          m = e.replace,
          v = e.shallow,
          g = e.scroll,
          b = e.locale
        'string' === typeof f && (f = o.default.createElement('a', null, f))
        var y = o.Children.only(f),
          w = y && 'object' === typeof y && y.ref,
          _ = (0, l.useIntersection)({ rootMargin: '200px' }),
          x = a(_, 2),
          N = x[0],
          E = x[1],
          I = o.default.useCallback(
            function (e) {
              N(e),
                w &&
                  ('function' === typeof w
                    ? w(e)
                    : 'object' === typeof w && (w.current = e))
            },
            [w, N]
          )
        ;(0, o.useEffect)(
          function () {
            var e = E && t && (0, n.isLocalURL)(d),
              a = 'undefined' !== typeof b ? b : r && r.locale,
              i = c[d + '%' + h + (a ? '%' + a : '')]
            e && !i && u(r, d, h, { locale: a })
          },
          [h, d, E, b, t, r]
        )
        var L = {
          ref: I,
          onClick: function (e) {
            y.props &&
              'function' === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, a, i, o, s, l) {
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
                      (0, n.isLocalURL)(r))) &&
                    (e.preventDefault(),
                    null == s && (s = a.indexOf('#') < 0),
                    t[i ? 'replace' : 'push'](r, a, {
                      shallow: o,
                      locale: l,
                    }).then(function (e) {
                      e && s && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, r, d, h, m, v, g, b)
          },
          onMouseEnter: function (e) {
            ;(0, n.isLocalURL)(d) &&
              (y.props &&
                'function' === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              u(r, d, h, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === y.type && !('href' in y.props))) &&
            (L.href = (0, n.addBasePath)(
              (0, n.addLocale)(
                h,
                'undefined' !== typeof b ? b : r && r.locale,
                r && r.defaultLocale
              )
            )),
          o.default.cloneElement(y, L)
        )
      }
      t.default = p
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
      var a = r('J4zp'),
        i = r('TqRt')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !s,
            i = (0, o.useRef)(),
            c = (0, o.useState)(!1),
            u = a(c, 2),
            p = u[0],
            d = u[1],
            h = (0, o.useCallback)(
              function (e) {
                i.current && (i.current(), (i.current = void 0)),
                  r ||
                    p ||
                    (e &&
                      e.tagName &&
                      (i.current = (function (e, t, r) {
                        var a = (function (e) {
                            var t = e.rootMargin || '',
                              r = l.get(t)
                            if (r) return r
                            var a = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = a.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  t && r && t(r)
                                })
                              }, e)
                            return (
                              l.set(
                                t,
                                (r = { id: t, observer: i, elements: a })
                              ),
                              r
                            )
                          })(r),
                          i = a.id,
                          o = a.observer,
                          n = a.elements
                        return (
                          n.set(e, t),
                          o.observe(e),
                          function () {
                            o.unobserve(e),
                              0 === n.size && (o.disconnect(), l.delete(i))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [r, t, p]
            )
          return (
            (0, o.useEffect)(
              function () {
                s ||
                  p ||
                  (0, n.default)(function () {
                    return d(!0)
                  })
              },
              [p]
            ),
            [h, p]
          )
        })
      var o = r('q1tI'),
        n = i(r('0G5g')),
        s = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    ywx8: function (e, t, r) {
      'use strict'
      var a = r('PZRn'),
        i = 'Welcome',
        o = 'Performance',
        n = 'Leadership',
        s = 'Frontend',
        l = 'JavaScript'
      t.a = [
        {
          date: 'February 9, 2021',
          publisher: 'trivago tech blog',
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
          social: a.a.github,
          external: !0,
          publisherUrl: 'https://tech.trivago.com/',
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
          social: a.a.github,
          external: !1,
          publisherUrl: '',
        },
        {
          date: 'September 29, 2020',
          publisher: '',
          title: 'Hello World\u2600\ufe0f',
          description:
            "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
          url: '/articles/helloworld',
          cover: '/optimized/portrait.png',
          category: i,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: a.a.github,
          external: !1,
          publisherUrl: '',
        },
        {
          date: 'March 18, 2020',
          publisher: 'Medium',
          title: '3 Principles to Triumph Your Software Project',
          description:
            'Practical experience that shapes billion dollar enterprise. I have been very fortunate to take a part in important topics at trivago. We have brought groundbreaking changes in accommodation search. It was clear that our data-informed approach is the foundation to innovation. I want to share with you our learnings.',
          url:
            'https://medium.com/@dawchihliou/3-principles-to-triumph-your-software-project-38cc0951b64f',
          cover: '',
          category: n,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: a.a.medium,
          external: !0,
          publisherUrl: 'https://medium.com/',
        },
        {
          date: 'November 6, 2019',
          publisher: 'ITNEXT',
          title:
            'Writing Better Marble Tests for Redux Observable and TypeScript',
          description:
            'Marble testing is a brilliant way to test observables. It focuses on the behaviors of observables over time. The combination of test assertion and marble diagram let us visualize the progression of emitted values over time.',
          url: 'https://itnext.io/better-marble-test-70c7676a1e2',
          cover: '',
          category: s,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: a.a.medium,
          external: !0,
          publisherUrl: 'https://itnext.io/',
        },
        {
          date: 'September 25, 2018',
          publisher: 'Medium',
          title: 'Intuitive Transducer in JavaScript',
          description:
            'What is transducing? Simply put, it\u2019s a data transformation process without creating intermediate products. It\u2019s like a pipeline. It\u2019s your data on one end, and the pipeline transforms the data and produce your output on the other end.',
          url:
            'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
          cover: '',
          category: l,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: a.a.medium,
          external: !0,
          publisherUrl: 'https://medium.com/',
        },
      ]
    },
  },
  [['pLg2', 0, 1, 2, 4]],
])

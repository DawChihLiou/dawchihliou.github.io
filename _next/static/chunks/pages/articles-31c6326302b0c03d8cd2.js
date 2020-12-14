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
          return h
        })
      var a = r('q1tI'),
        n = r.n(a),
        o = r('8Kt/'),
        i = r.n(o),
        c = r('ywx8'),
        s = r('KJ3Z'),
        l = r.n(s),
        u = r('YFqc'),
        f = r.n(u),
        p = r('Tgqd'),
        d = n.a.createElement
      function h() {
        return d(
          'div',
          { className: l.a.container },
          d(
            i.a,
            null,
            d('title', null, 'Articles'),
            d('link', { rel: 'icon', href: '/favicon.ico' })
          ),
          d(
            'main',
            { className: l.a.main },
            d(
              'div',
              { className: l.a.banner },
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
              { className: l.a.articles },
              c.a.map(function (e) {
                return d(
                  'section',
                  { className: l.a.grid, key: e.url },
                  d('div', { className: l.a.date }, d('p', null, e.date)),
                  d(
                    'article',
                    { className: l.a.description },
                    d('p', { className: l.a.category }, e.category),
                    d(f.a, { href: e.url }, e.title),
                    d('p', null, e.description),
                    d(
                      'div',
                      null,
                      d('img', {
                        src: e.avatar,
                        alt: e.author,
                        className: l.a.avatar,
                        loading: 'lazy',
                      }),
                      d(
                        'a',
                        { href: e.social, className: l.a.author },
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
      var a = r('J4zp'),
        n = r('284h')
      ;(t.__esModule = !0), (t.default = void 0)
      var o,
        i = n(r('q1tI')),
        c = r('elyg'),
        s = r('nOHt'),
        l = new Map(),
        u = window.IntersectionObserver,
        f = {}
      var p = function (e, t) {
        var r =
          o ||
          (u
            ? (o = new u(
                function (e) {
                  e.forEach(function (e) {
                    if (l.has(e.target)) {
                      var t = l.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), l.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        return r
          ? (r.observe(e),
            l.set(e, t),
            function () {
              try {
                r.unobserve(e)
              } catch (t) {
                console.error(t)
              }
              l.delete(e)
            })
          : function () {}
      }
      function d(e, t, r, a) {
        ;(0, c.isLocalURL)(t) &&
          (e.prefetch(t, r, a).catch(function (e) {
            0
          }),
          (f[t + '%' + r] = !0))
      }
      var h = function (e) {
        var t = !1 !== e.prefetch,
          r = i.default.useState(),
          n = a(r, 2),
          o = n[0],
          l = n[1],
          h = (0, s.useRouter)(),
          v = (h && h.pathname) || '/',
          m = i.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(v, e.href, !0),
                r = a(t, 2),
                n = r[0],
                o = r[1]
              return {
                href: n,
                as: e.as ? (0, c.resolveHref)(v, e.as) : o || n,
              }
            },
            [v, e.href, e.as]
          ),
          _ = m.href,
          g = m.as
        i.default.useEffect(
          function () {
            if (
              t &&
              u &&
              o &&
              o.tagName &&
              (0, c.isLocalURL)(_) &&
              !f[_ + '%' + g]
            )
              return p(o, function () {
                d(h, _, g)
              })
          },
          [t, o, _, g, h]
        )
        var y = e.children,
          w = e.replace,
          b = e.shallow,
          E = e.scroll
        'string' === typeof y && (y = i.default.createElement('a', null, y))
        var N = i.Children.only(y),
          A = {
            ref: function (e) {
              e && l(e),
                N &&
                  'object' === typeof N &&
                  N.ref &&
                  ('function' === typeof N.ref
                    ? N.ref(e)
                    : 'object' === typeof N.ref && (N.ref.current = e))
            },
            onClick: function (e) {
              N.props &&
                'function' === typeof N.props.onClick &&
                N.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, t, r, a, n, o, i) {
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
                        (0, c.isLocalURL)(r))) &&
                      (e.preventDefault(),
                      null == i && (i = a.indexOf('#') < 0),
                      t[n ? 'replace' : 'push'](r, a, { shallow: o }).then(
                        function (e) {
                          e &&
                            i &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, h, _, g, w, b, E)
            },
          }
        return (
          t &&
            (A.onMouseEnter = function (e) {
              ;(0, c.isLocalURL)(_) &&
                (N.props &&
                  'function' === typeof N.props.onMouseEnter &&
                  N.props.onMouseEnter(e),
                d(h, _, g, { priority: !0 }))
            }),
          (e.passHref || ('a' === N.type && !('href' in N.props))) &&
            (A.href = (0, c.addBasePath)(g)),
          i.default.cloneElement(N, A)
        )
      }
      t.default = h
    },
    pLg2: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return r('QVEA')
        },
      ])
    },
    ywx8: function (e, t, r) {
      'use strict'
      var a = r('PZRn'),
        n = 'Welcome',
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
          social: a.a.github,
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
          social: a.a.github,
        },
      ]
    },
  },
  [['pLg2', 0, 1, 2, 4]],
])

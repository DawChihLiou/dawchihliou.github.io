_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    KJ3Z: function (e, t, r) {
      e.exports = {
        container: 'Articles_container__1SDJT',
        main: 'Articles_main__3v_Mj',
        banner: 'Articles_banner__143cv',
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
      var a = r('q1tI'),
        n = r.n(a),
        o = r('8Kt/'),
        i = r.n(o),
        c = r('PZRn'),
        l = 'Welcome',
        s = [
          {
            date: 'Octobor 6, 2020',
            publisher: '',
            title: 'Using WebP for Better User Experience',
            description:
              "WebP is a modern image format that provides outstanding image quality with smaller image size. I'll show you how much you can benefit from it and how to setup your project for optimal developer experience.",
            url: '/articles/use-webp-for-better-ux',
            cover: 'optimized/portfolio-snapshot.png',
            category: 'Performance',
            author: 'Daw-Chih Liou',
            avatar: '/optimized/portrait-sm.png',
            social: c.a.github,
          },
          {
            date: 'September 29, 2020',
            publisher: '',
            title: 'Hello World\u2600\ufe0f',
            description:
              "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
            url: '/articles/helloworld',
            cover: '/optimized/portrait.png',
            category: l,
            author: 'Daw-Chih Liou',
            avatar: '/optimized/portrait-sm.png',
            social: c.a.github,
          },
        ],
        u = r('KJ3Z'),
        f = r.n(u),
        p = r('YFqc'),
        d = r.n(p),
        h = r('Tgqd'),
        m = n.a.createElement
      function v() {
        return m(
          'div',
          { className: f.a.container },
          m(
            i.a,
            null,
            m('title', null, 'Articles'),
            m('link', { rel: 'icon', href: '/favicon.ico' })
          ),
          m(
            'main',
            { className: f.a.main },
            m(
              'div',
              { className: f.a.banner },
              m(
                'p',
                null,
                'If you enjoy the articles, please do',
                ' ',
                m(
                  'a',
                  { href: '/rss.xml' },
                  'subscribe to the RSS feed ',
                  m(h.d, null)
                )
              )
            ),
            s.map(function (e) {
              return m(
                'section',
                { className: f.a.grid, key: e.url },
                m('div', { className: f.a.date }, m('p', null, e.date)),
                m(
                  'article',
                  { className: f.a.description },
                  m('p', { className: f.a.category }, e.category),
                  m(d.a, { href: e.url }, e.title),
                  m('p', null, e.description),
                  m(
                    'div',
                    null,
                    m('img', {
                      src: e.avatar,
                      alt: e.author,
                      className: f.a.avatar,
                      loading: 'lazy',
                    }),
                    m(
                      'a',
                      { href: e.social, className: f.a.author },
                      m('span', null, e.author)
                    )
                  )
                )
              )
            })
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
        l = r('nOHt'),
        s = new Map(),
        u = window.IntersectionObserver,
        f = {}
      var p = function (e, t) {
        var r =
          o ||
          (u
            ? (o = new u(
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
        return r
          ? (r.observe(e),
            s.set(e, t),
            function () {
              try {
                r.unobserve(e)
              } catch (t) {
                console.error(t)
              }
              s.delete(e)
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
          s = n[1],
          h = (0, l.useRouter)(),
          m = (h && h.pathname) || '/',
          v = i.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(m, e.href)
              return { href: t, as: e.as ? (0, c.resolveHref)(m, e.as) : t }
            },
            [m, e.href, e.as]
          ),
          g = v.href,
          _ = v.as
        i.default.useEffect(
          function () {
            if (
              t &&
              u &&
              o &&
              o.tagName &&
              (0, c.isLocalURL)(g) &&
              !f[g + '%' + _]
            )
              return p(o, function () {
                d(h, g, _)
              })
          },
          [t, o, g, _, h]
        )
        var y = e.children,
          b = e.replace,
          w = e.shallow,
          E = e.scroll
        'string' === typeof y && (y = i.default.createElement('a', null, y))
        var N = i.Children.only(y),
          L = {
            ref: function (e) {
              e && s(e),
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
                  })(e, h, g, _, b, w, E)
            },
          }
        return (
          t &&
            (L.onMouseEnter = function (e) {
              ;(0, c.isLocalURL)(g) &&
                (N.props &&
                  'function' === typeof N.props.onMouseEnter &&
                  N.props.onMouseEnter(e),
                d(h, g, _, { priority: !0 }))
            }),
          (e.passHref || ('a' === N.type && !('href' in N.props))) &&
            (L.href = (0, c.addBasePath)(_)),
          i.default.cloneElement(N, L)
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
  },
  [['pLg2', 0, 1, 2, 4]],
])

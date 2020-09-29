_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    KJ3Z: function (e, t, n) {
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
    QVEA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return h
        })
      var r = n('q1tI'),
        a = n.n(r),
        o = n('8Kt/'),
        i = n.n(o),
        c = [
          {
            date: 'September 29, 2020',
            publisher: '',
            title: 'Hello World\u2600\ufe0f',
            description:
              "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
            url: '/articles/helloworld',
            category: 'Welcome',
            author: 'Daw-Chih Liou',
            avatar: '/portrait.png',
            social: n('PZRn').a.github,
          },
        ],
        l = n('KJ3Z'),
        s = n.n(l),
        u = n('YFqc'),
        f = n.n(u),
        p = n('Tgqd'),
        d = a.a.createElement
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
                  { href: '/api/rss' },
                  'subscribe to the RSS feed ',
                  d(p.d, null)
                )
              )
            ),
            c.map(function (e) {
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
        c = n('elyg'),
        l = n('nOHt'),
        s = new Map(),
        u = window.IntersectionObserver,
        f = {}
      var p = function (e, t) {
        var n =
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
      function d(e, t, n, r) {
        ;(0, c.isLocalURL)(t) &&
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
          h = (0, l.useRouter)(),
          v = (h && h.pathname) || '/',
          _ = i.default.useMemo(
            function () {
              var t = (0, c.resolveHref)(v, e.href)
              return { href: t, as: e.as ? (0, c.resolveHref)(v, e.as) : t }
            },
            [v, e.href, e.as]
          ),
          g = _.href,
          y = _.as
        i.default.useEffect(
          function () {
            if (
              t &&
              u &&
              o &&
              o.tagName &&
              (0, c.isLocalURL)(g) &&
              !f[g + '%' + y]
            )
              return p(o, function () {
                d(h, g, y)
              })
          },
          [t, o, g, y, h]
        )
        var m = e.children,
          w = e.replace,
          b = e.shallow,
          E = e.scroll
        'string' === typeof m && (m = i.default.createElement('a', null, m))
        var N = i.Children.only(m),
          A = {
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
                        (0, c.isLocalURL)(n))) &&
                      (e.preventDefault(),
                      null == i && (i = r.indexOf('#') < 0),
                      t[a ? 'replace' : 'push'](n, r, { shallow: o }).then(
                        function (e) {
                          e &&
                            i &&
                            (window.scrollTo(0, 0), document.body.focus())
                        }
                      ))
                  })(e, h, g, y, w, b, E)
            },
          }
        return (
          t &&
            (A.onMouseEnter = function (e) {
              ;(0, c.isLocalURL)(g) &&
                (N.props &&
                  'function' === typeof N.props.onMouseEnter &&
                  N.props.onMouseEnter(e),
                d(h, g, y, { priority: !0 }))
            }),
          (e.passHref || ('a' === N.type && !('href' in N.props))) &&
            (A.href = (0, c.addBasePath)(y)),
          i.default.cloneElement(N, A)
        )
      }
      t.default = h
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
  [['pLg2', 0, 1, 2, 3]],
])

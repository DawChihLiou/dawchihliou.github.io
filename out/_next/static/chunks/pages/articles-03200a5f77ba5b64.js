;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [91],
  {
    4507: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return c(5988)
        },
      ])
    },
    3295: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return i
        },
      })
      var d = c(5893),
        e = c(7294),
        f = c(9008),
        g = c(1163),
        h = c(2985)
      function i(a) {
        var b = a.children,
          c = a.title,
          i = a.description,
          j = a.url,
          k = a.image,
          l = a.imageWidth,
          m = a.imageHeight,
          n = a.publishedAt,
          o = (0, g.useRouter)(),
          p = (0, e.useMemo)(
            function () {
              return n ? new Date(n).toISOString() : new Date().toISOString()
            },
            [n]
          )
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(f.default, {
              children: [
                (0, d.jsx)('title', { children: c }),
                (0, d.jsx)('meta', { name: 'description', content: i }),
                (0, d.jsx)('meta', {
                  name: 'robots',
                  content: 'follow, index',
                }),
                (0, d.jsx)('link', {
                  rel: 'canonical',
                  href: ''.concat(h.Z.home).concat(o.asPath),
                }),
                (0, d.jsx)('meta', { itemProp: 'name', content: c }),
                (0, d.jsx)('meta', { itemProp: 'description', content: i }),
                (0, d.jsx)('meta', { itemProp: 'image', content: k }),
                (0, d.jsx)('meta', { property: 'og:title', content: c }),
                (0, d.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, d.jsx)('meta', { property: 'og:url', content: j }),
                (0, d.jsx)('meta', { property: 'og:description', content: i }),
                (0, d.jsx)('meta', { property: 'og:image', content: k }),
                (0, d.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, d.jsx)('meta', { property: 'og:image:width', content: l }),
                (0, d.jsx)('meta', { property: 'og:image:height', content: m }),
                (0, d.jsx)('meta', { property: 'og:image:alt', content: i }),
                (0, d.jsx)('meta', {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                }),
                (0, d.jsx)('meta', {
                  name: 'twitter:site',
                  content: '@dawchihliou',
                }),
                (0, d.jsx)('meta', {
                  name: 'twitter:creator',
                  content: '@dawchihliou',
                }),
                (0, d.jsx)('meta', { name: 'twitter:title', content: c }),
                (0, d.jsx)('meta', { name: 'twitter:description', content: i }),
                (0, d.jsx)('meta', { name: 'twitter:image', content: k }),
                (0, d.jsx)('meta', {
                  property: 'article:published_time',
                  content: p,
                }),
                (0, d.jsx)('meta', {
                  property: 'article:section',
                  content: 'Article Section',
                }),
                (0, d.jsx)('meta', {
                  property: 'article:tag',
                  content: 'Article Tag',
                }),
              ],
            }),
            b,
          ],
        })
      }
    },
    8937: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return e
        },
      })
      var d = c(2985),
        e = c(4954)
          .Z4.map(function (a) {
            return {
              date: a.publishedAt,
              publisher: '',
              title: a.title,
              description: a.description,
              url: '/articles/'.concat(a.slug),
              cover: a.cover,
              category: a.category,
              author: 'Daw-Chih Liou',
              avatar: '/optimized/portrait-sm.png',
              social: d.Z.github,
              external: !1,
              publisherUrl: '',
            }
          })
          .concat([
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
              category: 'Frontend',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/portrait-sm.png',
              social: 'https://github.com/DawChihLiou',
              external: !0,
              publisherUrl: 'https://tech.trivago.com/',
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
              category: 'Leadership',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/portrait-sm.png',
              social: 'https://medium.com/@dawchihliou',
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
              category: 'Frontend',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/portrait-sm.png',
              social: 'https://medium.com/@dawchihliou',
              external: !0,
              publisherUrl: 'https://itnext.io/',
            },
            {
              date: 'September 25, 2018',
              publisher: 'Medium',
              title: 'Intuitive Transducer in JavaScript',
              description:
                'What is transducing? Simply put, it’s a data transformation process without creating intermediate products. It’s like a pipeline. It’s your data on one end, and the pipeline transforms the data and produce your output on the other end.',
              url:
                'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
              cover: '',
              category: 'JavaScript',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/portrait-sm.png',
              social: 'https://medium.com/@dawchihliou',
              external: !0,
              publisherUrl: 'https://medium.com/',
            },
          ])
          .sort(function (a, b) {
            return Number(new Date(b.date)) - Number(new Date(a.date))
          })
    },
    5988: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          default: function () {
            return l
          },
        })
      var d = c(5893)
      c(7294)
      var e = c(8937),
        f = c(8371),
        g = c.n(f),
        h = c(1664),
        i = c(6893),
        j = c(3295),
        k = c(2985)
      function l() {
        return (0, d.jsx)(j.Z, {
          title: "Daw-Chih's articles",
          description:
            'I write for engineers. Documenting web technology, coding patterns, and best practices from my learnings.',
          url: ''.concat(k.Z.home, '/articles'),
          image: k.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, d.jsx)('div', {
            className: g().container,
            children: (0, d.jsxs)('main', {
              className: g().main,
              children: [
                (0, d.jsx)('div', {
                  className: g().banner,
                  children: (0, d.jsxs)('p', {
                    children: [
                      'If you enjoy the articles, please do',
                      ' ',
                      (0, d.jsxs)('a', {
                        href: '/rss.xml',
                        children: [
                          'subscribe to the RSS feed ',
                          (0, d.jsx)(i.xaD, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)('div', {
                  className: g().articles,
                  children: e.Z.map(function (a) {
                    return (0,
                    d.jsxs)('section', { className: g().grid, children: [(0, d.jsx)('div', { className: g().date, children: (0, d.jsx)('p', { children: a.date }) }), (0, d.jsxs)('article', { className: g().description, children: [(0, d.jsx)('p', { className: g().category, children: a.category }), a.external && (0, d.jsx)('a', { href: a.url, target: '_blank', rel: 'noreferrer', children: a.title }), !a.external && (0, d.jsx)(h.default, { href: a.url, children: a.title }), a.external && (0, d.jsxs)('a', { href: a.publisherUrl, target: '_blank', rel: 'noreferrer', className: g().caption, children: ['Published on ', (0, d.jsx)('span', { children: a.publisher })] }), (0, d.jsx)('p', { children: a.description }), (0, d.jsxs)('div', { children: [(0, d.jsx)('img', { src: a.avatar, alt: a.author, className: g().avatar, loading: 'lazy' }), (0, d.jsx)('a', { href: a.social, className: g().author, children: (0, d.jsx)('span', { children: a.author }) })] })] })] }, a.url)
                  }),
                }),
              ],
            }),
          }),
        })
      }
    },
    8371: function (a) {
      a.exports = {
        container: 'Articles_container__aGU8w',
        main: 'Articles_main__y5G99',
        banner: 'Articles_banner__YtXtB',
        articles: 'Articles_articles__OHzw9',
        grid: 'Articles_grid__3sy0T',
        date: 'Articles_date__nzC2Q',
        description: 'Articles_description__KQbY6',
        caption: 'Articles_caption__QRnZZ',
        category: 'Articles_category__QXO5g',
        avatar: 'Articles_avatar__G4oK6',
      }
    },
  },
  function (a) {
    a.O(0, [926, 568, 774, 888, 179], function () {
      return a((a.s = 4507))
    }),
      (_N_E = a.O())
  },
])

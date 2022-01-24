;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return c(1906)
        },
      ])
    },
    1208: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return h
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(1664)
      function f(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        )
      }
      function g(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {},
            d = Object.keys(c)
          'function' == typeof Object.getOwnPropertySymbols &&
            (d = d.concat(
              Object.getOwnPropertySymbols(c).filter(function (a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
              })
            )),
            d.forEach(function (b) {
              f(a, b, c[b])
            })
        }
        return a
      }
      function h(a) {
        var b = a.href
        return b && (b.startsWith('/') || b.startsWith('#'))
          ? (0, d.jsx)(e.default, {
              href: b,
              children: (0, d.jsx)('a', g({}, a, { children: a.children })),
            })
          : (0, d.jsx)(
              'a',
              g({ target: '_blank', rel: 'noopener noreferrer' }, a, {
                children: a.children,
              })
            )
      }
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
    1906: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          default: function () {
            return N
          },
        })
      var d,
        e = c(5893)
      c(7294)
      var f = c(9008),
        g = c(214),
        h = c.n(g),
        i = c(9613),
        j = c.n(i),
        k = c(6010)
      function l() {
        return (0, e.jsx)('section', {
          className: j().hero,
          title: 'Daw-Chih is a software engineer, ux designer, and mentor.',
          children: (0, e.jsxs)('h1', {
            children: [
              (0, e.jsx)('span', {
                className: (0, k.Z)(j().title, j().heroTitle, j().heroTitle_1),
                children: (0, e.jsx)('span', {
                  className: (0, k.Z)(j().title, j().animatedTitle_1),
                  children: 'software engineer',
                }),
              }),
              (0, e.jsx)('span', {
                className: (0, k.Z)(j().title, j().heroTitle, j().heroTitle_2),
                children: (0, e.jsx)('span', {
                  className: (0, k.Z)(j().title, j().animatedTitle_2),
                  children: 'ux designer',
                }),
              }),
              (0, e.jsx)('span', {
                className: (0, k.Z)(j().title, j().heroTitle, j().heroTitle_3),
                children: (0, e.jsx)('span', {
                  className: (0, k.Z)(j().title, j().animatedTitle_3),
                  children: 'creator',
                }),
              }),
            ],
          }),
        })
      }
      var m = c(8861),
        n = c.n(m),
        o = c(5155),
        p = c(2985)
      function q() {
        return (0, e.jsxs)('section', {
          className: n().wrap,
          title:
            "My name is Daw-Chih and I'm a software engineer, UX advocate, and mentor who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.",
          children: [
            (0, e.jsx)('h1', {
              hidden: !0,
              'aria-label': 'About me',
              children: 'About me',
            }),
            (0, e.jsxs)('picture', {
              children: [
                (0, e.jsx)('source', {
                  srcSet: 'optimized/portrait.webp',
                  className: n().portrait,
                  type: 'image/webp',
                }),
                (0, e.jsx)('source', {
                  srcSet: 'optimized/portrait.png',
                  className: n().portrait,
                  type: 'image/png',
                }),
                (0, e.jsx)('img', {
                  src: 'optimized/portrait.png',
                  alt: "Daw-Chih's portait",
                  className: n().portrait,
                  loading: 'lazy',
                  width: '8rem',
                  height: '8rem',
                }),
              ],
            }),
            (0, e.jsxs)('p', {
              className: n().greeting,
              children: [
                'Hi there',
                (0, e.jsx)('span', {
                  role: 'img',
                  'aria-label': 'waving emoji',
                  children: '👋',
                }),
              ],
            }),
            (0, e.jsx)('p', {
              children:
                "My name is Daw-Chih and I'm a software engineer, UX advocate, and creator who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.",
            }),
            (0, e.jsxs)('div', {
              className: n().socials,
              children: [
                (0, e.jsxs)('a', {
                  href: p.Z.linkedin,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Linkedin profile",
                  children: [
                    (0, e.jsx)(o.juy, { size: '1.5em' }),
                    (0, e.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's Linkedin profile",
                    }),
                  ],
                }),
                (0, e.jsxs)('a', {
                  href: p.Z.github,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's GitHub profile",
                  children: [
                    (0, e.jsx)(o.lfl, { size: '1.5em' }),
                    (0, e.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's GitHub profile",
                    }),
                  ],
                }),
                (0, e.jsxs)('a', {
                  href: p.Z.medium,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Medium profile",
                  children: [
                    (0, e.jsx)(o.lUN, { size: '1.5em' }),
                    (0, e.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's Medium profile",
                    }),
                  ],
                }),
                (0, e.jsxs)('a', {
                  href: p.Z.twitter,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Twitter",
                  children: [
                    (0, e.jsx)(o.Xai, { size: '1.5em' }),
                    (0, e.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's Twitter",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var r = c(6893),
        s = [
          {
            title: 'Founder & CEO',
            quote:
              'Daw-Chih is an very proactive critical thinker that has curiosity on lots of multiple technologies and software trend. He has expertise on front-end technology with his artistic designer sense. He loves challenging and is always willing to share what he knows with the peers.',
          },
          {
            title: 'Software Engineer',
            quote:
              'Daw-Chih is one of the most hard-working, highly-skilled and dedicated people I’ve ever worked with. During the 3+ years we’ve worked together, he has shown great drive and perseverance in getting things done. Once he commits to doing a project or task, no matter how challenging, it gets done at a high standard. Tense meetings are no match for him - his tranquil nature is appreciated in the team and helps us keep calm even in challenging situations. These qualities, along with his strong engineering mindset make Daw-Chih a great teammate and a pleasure to work with.',
          },
          {
            title: 'Manager',
            quote:
              'Daw Chih is one of the rising super developer that I have ever seen for a long time. He is meticulous, quick learner and self-starter. His courage to fight what is right from wrong, passion for the technology and willingness to help out others make everyone love to have him on the team. Highly recommended.',
          },
        ],
        t = c(4042),
        u = c.n(t)
      function v(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        )
      }
      function w() {
        return (0, e.jsxs)('section', {
          className: u().wrap,
          title: 'recommendation from others',
          children: [
            (0, e.jsx)('div', {
              className: u().smallerWrap,
              children: (0, e.jsx)('h1', {
                children: 'See what people say about me',
              }),
            }),
            (0, e.jsx)('div', {
              className: u().grid,
              title: 'what people say about me',
              children: s.map(function (a, b) {
                return (0,
                e.jsx)('article', { className: u().card, children: (0, e.jsxs)('a', { href: p.Z.linkedin, target: '_blank', rel: 'noreferrer', children: [(0, e.jsxs)('p', { children: ['" ', a.quote, ' "'] }), (0, e.jsxs)('div', { className: u().cardAction, children: [(0, e.jsxs)('span', { className: (0, k.Z)(u().avatar, (v((d = {}), u().avatarColorBlue, 0 === b), v(d, u().avatarColorRed, 1 === b), v(d, u().avatarColorYellow, 2 === b), d)), children: [0 === b && (0, e.jsx)(r.HR2, {}), 1 === b && (0, e.jsx)(r.jMy, {}), 2 === b && (0, e.jsx)(r.Siq, {})] }), (0, e.jsx)('span', { className: u().description, children: a.title })] }), (0, e.jsx)('div', { className: u().footer, children: (0, e.jsx)('span', { children: 'See more on Linkedin' }) })] }) }, a.title)
              }),
            }),
          ],
        })
      }
      var x = [
          {
            title: 'react-use-pip',
            description:
              'reat-use-pip is React hook library for Picture in Picture. It seamlessly detects browser support and provides flexible APIs for developers to have full control over Picture in Picture feature.',
            image: '/optimized/logo-react-use-pip.svg',
            darkmodeImage: '/optimized/logo-react-use-pip.svg',
            link: 'https://dawchihliou.github.io/react-use-pip/',
          },
          {
            title: 'cz-conventional-changelog-with-jiraid-detection',
            description:
              'A Commitizen prompts for conventional changelog standard with Jira ID auto-detection. It introduces an additional step for developers to enter Jira ID. The library detects your Jira ID from the branch name.',
            image: '/optimized/logo-npm.webp',
            darkmodeImage: '/optimized/logo-npm.webp',
            link:
              'https://github.com/DawChihLiou/cz-conventional-changelog-with-jiraid-detection',
          },
          {
            title: 'dx-scripts',
            description:
              'A collection of utility scripts for developer experience and productivity.',
            image: '/optimized/logo-npm.webp',
            darkmodeImage: '/optimized/logo-npm.webp',
            link: 'https://github.com/DawChihLiou/dx-scripts',
          },
          {
            title: 'changed-files-action',
            description:
              'GitHub Action to fetch changed files in pull requests.',
            image: '/optimized/logo-github.webp',
            darkmodeImage: '/optimized/logo-github.webp',
            link: 'https://github.com/marketplace/actions/changed-filenames',
          },
          {
            title: 'Spes',
            description:
              "Reading turned my life around, and I believe it can turn yours too. There're so many books full of wisdom but it's hard to find yourself a book among the overwhelming options. So I'm giving away a book every month to a subscriber and help you find your next book to read. Sign up! Hopefully you'll be inspired too:)",
            image: '/optimized/logo-spes.webp',
            darmodeImage: '/optimized/logo-spes.webp',
            link: 'https://spes.me/',
          },
        ],
        y = c(493),
        z = c.n(y)
      function A() {
        return (0, e.jsxs)('section', {
          className: z().wrap,
          title: 'my open source and none-profit projects',
          children: [
            (0, e.jsxs)('article', {
              className: z().description,
              children: [
                (0, e.jsx)('h1', {
                  children: 'Some of my Open Source projects',
                }),
                (0, e.jsx)('p', {
                  children:
                    "I've spent over 8 years woking on Web engineering, mostly building features and taking care of architectures for client facing products and enterprise software for public tech companies and Fortune 500 enterprises.",
                }),
                (0, e.jsx)('p', {
                  children:
                    "I've been working on open source and non-profit projects too! It brings me so much joy contributing back to the community.",
                }),
                (0, e.jsx)('p', {
                  children:
                    'I enjoy building tooling around testing, documentation, and CI/CD to improve developer experience. On top of solid coding and automation, nothing makes me happier than creating a meaningful product with thoughtful user experience and great performance.',
                }),
              ],
            }),
            (0, e.jsx)('article', {
              className: z().list,
              children: x.map(function (a) {
                return (0,
                e.jsx)('article', { className: z().item, children: (0, e.jsx)('a', { href: a.link, target: '_blank', rel: 'noreferrer', children: (0, e.jsxs)('div', { className: z().grid, children: [(0, e.jsx)('div', { className: z().itemImage, children: (0, e.jsxs)('picture', { children: [(0, e.jsx)('source', { srcSet: a.darkmodeImage, media: '(prefers-color-scheme: dark)' }), (0, e.jsx)('source', { srcSet: a.image, media: '(prefers-color-scheme: light), (prefers-color-scheme: no-preference)' }), (0, e.jsx)('img', { src: a.image, alt: a.title, loading: 'lazy' })] }) }), (0, e.jsxs)('div', { className: z().itemDescription, children: [(0, e.jsx)('h2', { children: a.title }), (0, e.jsx)('p', { children: a.description })] })] }) }) }, a.title)
              }),
            }),
            (0, e.jsx)('a', {
              href: p.Z.github,
              target: '_blank',
              rel: 'noreferrer',
              className: z().link,
              children: 'See more on GitHub',
            }),
          ],
        })
      }
      var B = c(724),
        C = c.n(B),
        D = c(1862),
        E = c.n(D)
      function F() {
        return (0, e.jsxs)('section', {
          className: E().wrap,
          children: [
            (0, e.jsx)('h1', { children: 'My tech stack' }),
            (0, e.jsx)(C(), {
              source:
                '![TypeScript](https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&labelColor=121212&color=007ACC)\n![JavaScript](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&labelColor=121212&color=F7DF1E)\n![Java](https://img.shields.io/badge/Code-Java-informational?style=flat&logo=java&logoColor=white&labelColor=121212&color=007396)\n![React](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&labelColor=121212&color=61DAFB)\n![ReactiveX](https://img.shields.io/badge/Code-ReactiveX-informational?style=flat&logo=reactivex&logoColor=white&labelColor=121212&color=B7178C)\n![Redux](https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&labelColor=121212&color=764ABC)\n![Node.js](https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=node.js&logoColor=white&labelColor=121212&color=339933)\n![GraphQL](https://img.shields.io/badge/Code-GraphQL-informational?style=flat&logo=graphql&logoColor=white&labelColor=121212&color=E10098)\n![TypeORM](https://img.shields.io/badge/Code-TypeORM-informational?style=flat&logo=typeorm&logoColor=white&labelColor=121212&color=DD1100)\n![CSS3](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&labelColor=121212&color=1572B6)\n![Sass](https://img.shields.io/badge/Code-Sass-informational?style=flat&logo=sass&logoColor=white&labelColor=121212&color=CC6699)\n![HTML5](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&labelColor=121212&color=E34F26)\n![Vue](https://img.shields.io/badge/Code-Vue.js-informational?style=flat&logo=vue.js&logoColor=white&labelColor=121212&color=4FC08D)\n![MDX](https://img.shields.io/badge/Code-MDX-informational?style=flat&logo=mdx&logoColor=white&labelColor=121212&color=F29400)\n![AuthO](https://img.shields.io/badge/Code-AuthO-informational?style=flat&logo=autho&logoColor=white&labelColor=121212&color=EB5424)\n![SVG](https://img.shields.io/badge/Code-SVG-informational?style=flat&logo=svg&logoColor=white&labelColor=121212&color=FFB13B)\n![Webpack](https://img.shields.io/badge/Tool-Webpack-informational?style=flat&logo=webpack&logoColor=white&labelColor=121212&color=8DD6F9)\n![Babel](https://img.shields.io/badge/Tool-Babel-informational?style=flat&logo=babel&logoColor=white&labelColor=121212&color=F9DC3E)\n![Jest](https://img.shields.io/badge/Tool-Jest-informational?style=flat&logo=jest&logoColor=white&labelColor=121212&color=C21325)\n![Cypress](https://img.shields.io/badge/Tool-Cypress-informational?style=flat&logo=cypress&logoColor=white&labelColor=121212&color=17202C)\n![Next.js](https://img.shields.io/badge/Tool-Next.js-informational?style=flat&logo=next.js&logoColor=white&labelColor=121212&color=000000)\n![Vercel](https://img.shields.io/badge/Tool-Vercel-informational?style=flat&logo=vercel&logoColor=white&labelColor=121212&color=000000)\n![PostgreSQL](https://img.shields.io/badge/Tool-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&labelColor=121212&color=336791)\n![Docker](https://img.shields.io/badge/Tool-Docker-informational?style=flat&logo=docker&logoColor=white&labelColor=121212&color=2496ED)\n![GitHub](https://img.shields.io/badge/Tool-GitHub-informational?style=flat&logo=github&logoColor=white&labelColor=121212&color=181717)\n![GitHub_Actions](https://img.shields.io/badge/Tool-GitHub_Actions-informational?style=flat&logo=github-actions&logoColor=white&labelColor=121212&color=2088FF)\n![Storybook](https://img.shields.io/badge/Tool-Storybook-informational?style=flat&logo=storybook&logoColor=white&labelColor=121212&color=FF4785)\n![JFrog](https://img.shields.io/badge/Tool-JFrog-informational?style=flat&logo=jfrog&logoColor=white&labelColor=121212&color=41BF47)\n![npm](https://img.shields.io/badge/Tool-npm-informational?style=flat&logo=npm&logoColor=white&labelColor=121212&color=CB3837)\n![yarn](https://img.shields.io/badge/Tool-yarn-informational?style=flat&logo=yarn&logoColor=white&labelColor=121212&color=2C8EBB)\n![Postman](https://img.shields.io/badge/Tool-Postman-informational?style=flat&logo=postman&logoColor=white&labelColor=121212&color=FF6C37)\n![RSS](https://img.shields.io/badge/Tool-RSS-informational?style=flat&logo=rss&logoColor=white&labelColor=121212&color=FFA500)\n![Sketch](https://img.shields.io/badge/Tool-Sketch-informational?style=flat&logo=sketch&logoColor=white&labelColor=121212&color=F7B500)\n![Amazon_AWS](https://img.shields.io/badge/Cloud-Amazon_AWS-informational?style=flat&logo=amazon-aws&logoColor=white&labelColor=121212&color=232F3E)\n![Google_Cloud](https://img.shields.io/badge/Cloud-Google_Cloud-informational?style=flat&logo=google-cloud&logoColor=white&labelColor=121212&color=4285F4)\n![Akamai](https://img.shields.io/badge/CDN-Akamai-informational?style=flat&logo=akamai&logoColor=white&labelColor=121212&color=1293D8)\n',
            }),
          ],
        })
      }
      var G = c(3812),
        H = c.n(G),
        I = c(8937),
        J = c(1208),
        K = I.Z.filter(function (a, b) {
          return b < 5
        })
      function L() {
        return (0, e.jsxs)('section', {
          className: H().wrap,
          title: 'my open source and none-profit projects',
          children: [
            (0, e.jsxs)('article', {
              className: H().description,
              children: [
                (0, e.jsx)('h1', { children: 'I love writing' }),
                (0, e.jsx)('p', {
                  children:
                    'I enjoy writing about software development. Especially the things that can unblock our daily work and gives people inspirations to strive for engineering excellence.',
                }),
              ],
            }),
            (0, e.jsx)('article', {
              className: H().list,
              children: K.map(function (a) {
                return (0,
                e.jsx)('article', { className: H().item, children: (0, e.jsxs)('div', { className: H().itemDescription, children: [(0, e.jsx)(J.Z, { href: a.url, children: (0, e.jsx)('h2', { children: a.title }) }), a.external && (0, e.jsxs)(J.Z, { href: a.publisherUrl, className: H().caption, children: ['Published on ', (0, e.jsx)('span', { children: a.publisher })] }), (0, e.jsx)('p', { children: a.description })] }) }, a.title)
              }),
            }),
            (0, e.jsx)('a', {
              href: '/articles',
              className: H().link,
              children: 'See more articles',
            }),
          ],
        })
      }
      var M = c(3295)
      function N() {
        return (0, e.jsx)(M.Z, {
          title: 'Daw-Chih Liou',
          description: p.Z.description,
          url: p.Z.home,
          image: p.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, e.jsxs)('div', {
            className: h().container,
            children: [
              (0, e.jsxs)(f.default, {
                children: [
                  (0, e.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'XzmO5hA3kc7-91MB68LpYNOvXxLasSYbiecgmnWuFL8',
                  }),
                  (0, e.jsx)('script', {
                    defer: !0,
                    'data-domain': 'dawchihliou.github.io',
                    src: 'https://plausible.io/js/plausible.outbound-links.js',
                  }),
                ],
              }),
              (0, e.jsxs)('main', {
                className: h().main,
                children: [
                  (0, e.jsx)(l, {}),
                  (0, e.jsx)(q, {}),
                  (0, e.jsx)(w, {}),
                  (0, e.jsx)(A, {}),
                  (0, e.jsx)(L, {}),
                  (0, e.jsx)(F, {}),
                ],
              }),
            ],
          }),
        })
      }
    },
    9613: function (a) {
      a.exports = {
        hero: 'Hero_hero__Pg0He',
        title: 'Hero_title__ouVUi',
        heroTitle: 'Hero_heroTitle__mGVx_',
        heroTitle_1: 'Hero_heroTitle_1__v7xnW',
        animatedTitle_1: 'Hero_animatedTitle_1__ehX5f',
        animation_1: 'Hero_animation_1__8T_RP',
        heroTitle_2: 'Hero_heroTitle_2__iZgX4',
        animatedTitle_2: 'Hero_animatedTitle_2__cU94p',
        animation_2: 'Hero_animation_2__iLYlf',
        heroTitle_3: 'Hero_heroTitle_3__aNId9',
        animatedTitle_3: 'Hero_animatedTitle_3__nOJvM',
        animation_3: 'Hero_animation_3__wLUYI',
      }
    },
    8861: function (a) {
      a.exports = {
        wrap: 'Intro_wrap__iKCyn',
        greeting: 'Intro_greeting__hCOLT',
        portrait: 'Intro_portrait__SuOy8',
        socials: 'Intro_socials__hSYnS',
      }
    },
    493: function (a) {
      a.exports = {
        wrap: 'Project_wrap__z3J4L',
        description: 'Project_description__4MDOS',
        list: 'Project_list__9r0ap',
        grid: 'Project_grid__np_pS',
        item: 'Project_item__ymttm',
        itemImage: 'Project_itemImage__eDgbJ',
        itemDescription: 'Project_itemDescription__vdKJP',
        link: 'Project_link__sZhy2',
      }
    },
    3812: function (a) {
      a.exports = {
        wrap: 'Publication_wrap__rByHi',
        description: 'Publication_description__8sqET',
        list: 'Publication_list__3yiaQ',
        item: 'Publication_item__yxTJJ',
        caption: 'Publication_caption__XENOq',
        link: 'Publication_link__pSetA',
        itemDescription: 'Publication_itemDescription__n6wAg',
      }
    },
    4042: function (a) {
      a.exports = {
        wrap: 'Recommendation_wrap__FTToN',
        smallerWrap: 'Recommendation_smallerWrap__3fDmx',
        grid: 'Recommendation_grid__sclrm',
        card: 'Recommendation_card__mVkTf',
        cardAction: 'Recommendation_cardAction__PWhvl',
        avatar: 'Recommendation_avatar__ST3__',
        avatarColorBlue: 'Recommendation_avatarColorBlue__foK4O',
        avatarColorRed: 'Recommendation_avatarColorRed__8c7de',
        avatarColorYellow: 'Recommendation_avatarColorYellow__DwssE',
        descrition: 'Recommendation_descrition__hlpwg',
        footer: 'Recommendation_footer__a4mcs',
      }
    },
    1862: function (a) {
      a.exports = { wrap: 'SkillSet_wrap__6Iu0R' }
    },
    214: function (a) {
      a.exports = {
        container: 'Home_container__bCOhY',
        main: 'Home_main__nLjiQ',
      }
    },
  },
  function (a) {
    a.O(0, [926, 568, 291, 774, 888, 179], function () {
      return a((a.s = 5301))
    }),
      (_N_E = a.O())
  },
])

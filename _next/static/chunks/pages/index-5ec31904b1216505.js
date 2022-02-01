;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return c(8737)
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
              avatar: '/optimized/raw/portrait-sm.png',
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
              url: 'https://tech.trivago.com/2021/02/09/rethinking-the-next-gen-analytics-web-app-at-trivago/',
              cover:
                'https://tech.trivago.com/img/posts/rethinknextgenanalyticswebappattrivago/image3.png',
              category: 'Frontend',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/raw/portrait-sm.png',
              social: 'https://twitter.com/dawchihliou',
              external: !0,
              publisherUrl: 'https://tech.trivago.com/',
            },
            {
              date: 'March 18, 2020',
              publisher: 'Medium',
              title: '3 Principles to Triumph Your Software Project',
              description:
                'Practical experience that shapes billion dollar enterprise. I have been very fortunate to take a part in important topics at trivago. We have brought groundbreaking changes in accommodation search. It was clear that our data-informed approach is the foundation to innovation. I want to share with you our learnings.',
              url: 'https://medium.com/@dawchihliou/3-principles-to-triumph-your-software-project-38cc0951b64f',
              cover: '',
              category: 'Leadership',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/raw/portrait-sm.png',
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
              avatar: '/optimized/raw/portrait-sm.png',
              social: 'https://medium.com/@dawchihliou',
              external: !0,
              publisherUrl: 'https://itnext.io/',
            },
            {
              date: 'October 15, 2018',
              publisher: 'trivago tech blog',
              title: 'JavaScript Workshop with Kyle Simpson',
              description:
                'A recap of the 5-day JavaScript journey. It has been a couple of months since Kyle, author of the “You Don’t Know JS” series, visited our trivago headquarters and gave us a wonderful JavaScript workshop. It was such an enjoyable week, being able to meet Kyle in person and walk through his thinking behind the materials.',
              url: 'https://tech.trivago.com/post/2018-10-15-javascript-workshop-with-kyle-simpson/',
              cover:
                'https://tech.trivago.com/img/posts/javascript-workshop-with-kyle-simpson/hero.jpg',
              category: 'Engineering Culture',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/raw/portrait-sm.png',
              social: 'https://twitter.com/dawchihliou',
              external: !0,
              publisherUrl: 'https://tech.trivago.com/',
            },
            {
              date: 'September 25, 2018',
              publisher: 'Medium',
              title: 'Intuitive Transducer in JavaScript',
              description:
                'What is transducing? Simply put, it’s a data transformation process without creating intermediate products. It’s like a pipeline. It’s your data on one end, and the pipeline transforms the data and produce your output on the other end.',
              url: 'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
              cover: '',
              category: 'JavaScript',
              author: 'Daw-Chih Liou',
              avatar: '/optimized/raw/portrait-sm.png',
              social: 'https://medium.com/@dawchihliou',
              external: !0,
              publisherUrl: 'https://medium.com/',
            },
          ])
          .sort(function (a, b) {
            return Number(new Date(b.date)) - Number(new Date(a.date))
          })
    },
    8737: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          default: function () {
            return Ud
          },
        })
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        aa,
        ba,
        ca,
        da,
        ea,
        fa,
        ga,
        ha,
        ia,
        ja,
        ka,
        la,
        ma,
        na,
        oa,
        pa,
        qa,
        ra,
        sa,
        ta,
        ua,
        va,
        wa,
        xa,
        ya,
        za,
        Aa,
        Ba,
        Ca,
        Da,
        Ea,
        Fa,
        Ga,
        Ha,
        Ia,
        Ja,
        Ka,
        La,
        Ma,
        Na,
        Oa,
        Pa,
        Qa,
        Ra,
        Sa,
        Ta,
        Ua,
        Va,
        Wa,
        Xa,
        Ya,
        Za,
        $a,
        _a,
        ab,
        bb,
        cb,
        db,
        eb,
        fb,
        gb,
        hb,
        ib,
        jb,
        kb,
        lb,
        mb,
        nb,
        ob,
        pb,
        qb,
        rb,
        sb,
        tb,
        ub,
        vb,
        wb,
        xb,
        yb,
        zb,
        Ab,
        Bb,
        Cb,
        Db,
        Eb,
        Fb,
        Gb,
        Hb,
        Ib,
        Jb,
        Kb,
        Lb,
        Mb,
        Nb = c(5893),
        Ob = c(7294),
        Pb = c(9008),
        Qb = c(214),
        Rb = c.n(Qb),
        Sb = c(9613),
        Tb = c.n(Sb),
        Ub = c(6010)
      function Vb() {
        return (0, Nb.jsx)('section', {
          className: Tb().hero,
          children: (0, Nb.jsxs)('h1', {
            children: [
              (0, Nb.jsx)('span', {
                className: (0, Ub.Z)(
                  Tb().title,
                  Tb().heroTitle,
                  Tb().heroTitle_1
                ),
                children: (0, Nb.jsx)('span', {
                  className: (0, Ub.Z)(Tb().title, Tb().animatedTitle_1),
                  children: 'software engineer',
                }),
              }),
              (0, Nb.jsx)('span', {
                className: (0, Ub.Z)(
                  Tb().title,
                  Tb().heroTitle,
                  Tb().heroTitle_2
                ),
                children: (0, Nb.jsx)('span', {
                  className: (0, Ub.Z)(Tb().title, Tb().animatedTitle_2),
                  children: 'ux designer',
                }),
              }),
              (0, Nb.jsx)('span', {
                className: (0, Ub.Z)(
                  Tb().title,
                  Tb().heroTitle,
                  Tb().heroTitle_3
                ),
                children: (0, Nb.jsx)('span', {
                  className: (0, Ub.Z)(Tb().title, Tb().animatedTitle_3),
                  children: 'creator',
                }),
              }),
            ],
          }),
        })
      }
      var Wb = c(8861),
        Xb = c.n(Wb),
        Yb = c(5155),
        Zb = c(2985)
      function $b() {
        return (0, Nb.jsxs)('section', {
          className: Xb().wrap,
          children: [
            (0, Nb.jsx)('h1', {
              hidden: !0,
              'aria-label': 'About me',
              children: 'About me',
            }),
            (0, Nb.jsxs)('picture', {
              children: [
                (0, Nb.jsx)('source', {
                  srcSet: 'optimized/raw/portrait.webp',
                  className: Xb().portrait,
                  type: 'image/webp',
                }),
                (0, Nb.jsx)('source', {
                  srcSet: 'optimized/raw/portrait.png',
                  className: Xb().portrait,
                  type: 'image/png',
                }),
                (0, Nb.jsx)('img', {
                  src: 'optimized/portrait.png',
                  alt: "Daw-Chih's portrait",
                  className: Xb().portrait,
                  loading: 'lazy',
                  width: '8rem',
                  height: '8rem',
                }),
              ],
            }),
            (0, Nb.jsxs)('p', {
              className: Xb().greeting,
              children: [
                'Hi there',
                (0, Nb.jsx)('span', {
                  role: 'img',
                  'aria-label': 'waving emoji',
                  children: '👋',
                }),
              ],
            }),
            (0, Nb.jsx)('p', {
              children:
                "My name is Daw-Chih and I'm a software engineer, UX advocate, and creator who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.",
            }),
            (0, Nb.jsxs)('div', {
              className: Xb().socials,
              children: [
                (0, Nb.jsxs)('a', {
                  href: Zb.Z.linkedin,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Linkedin profile",
                  children: [
                    (0, Nb.jsx)(Yb.juy, { size: '1.5em' }),
                    (0, Nb.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's Linkedin profile",
                    }),
                  ],
                }),
                (0, Nb.jsxs)('a', {
                  href: Zb.Z.github,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's GitHub profile",
                  children: [
                    (0, Nb.jsx)(Yb.lfl, { size: '1.5em' }),
                    (0, Nb.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's GitHub profile",
                    }),
                  ],
                }),
                (0, Nb.jsxs)('a', {
                  href: Zb.Z.medium,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Medium profile",
                  children: [
                    (0, Nb.jsx)(Yb.lUN, { size: '1.5em' }),
                    (0, Nb.jsx)('span', {
                      hidden: !0,
                      children: "Link to Daw-Chih's Medium profile",
                    }),
                  ],
                }),
                (0, Nb.jsxs)('a', {
                  href: Zb.Z.twitter,
                  target: '_blank',
                  rel: 'noreferrer',
                  'aria-label': "Link to Daw-Chih's Twitter",
                  children: [
                    (0, Nb.jsx)(Yb.Xai, { size: '1.5em' }),
                    (0, Nb.jsx)('span', {
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
      var _b = c(6893),
        ac = [
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
        bc = c(4042),
        cc = c.n(bc)
      function dc(a, b, c) {
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
      function ec() {
        return (0, Nb.jsxs)('section', {
          className: cc().wrap,
          children: [
            (0, Nb.jsx)('div', {
              className: cc().smallerWrap,
              children: (0, Nb.jsx)('h1', {
                children: 'See what people say about me',
              }),
            }),
            (0, Nb.jsx)('div', {
              className: cc().grid,
              children: ac.map(function (a, b) {
                var c
                return (0,
                Nb.jsx)('article', { className: cc().card, children: (0, Nb.jsxs)('a', { href: Zb.Z.linkedin, target: '_blank', rel: 'noreferrer', children: [(0, Nb.jsxs)('p', { children: ['" ', a.quote, ' "'] }), (0, Nb.jsxs)('div', { className: cc().cardAction, children: [(0, Nb.jsxs)('span', { className: (0, Ub.Z)(cc().avatar, (dc((c = {}), cc().avatarColorBlue, 0 === b), dc(c, cc().avatarColorRed, 1 === b), dc(c, cc().avatarColorYellow, 2 === b), c)), children: [0 === b && (0, Nb.jsx)(_b.HR2, {}), 1 === b && (0, Nb.jsx)(_b.jMy, {}), 2 === b && (0, Nb.jsx)(_b.Siq, {})] }), (0, Nb.jsx)('span', { className: cc().description, children: a.title })] }), (0, Nb.jsx)('div', { className: cc().footer, children: (0, Nb.jsx)('span', { children: 'See more on Linkedin' }) })] }) }, a.title)
              }),
            }),
          ],
        })
      }
      var fc = c(493),
        gc = c.n(fc),
        hc = [
          {
            id: 288395102,
            name: 'react-use-pip',
            htmlUrl: 'https://github.com/DawChihLiou/react-use-pip',
            homepage: 'https://dawchihliou.github.io/react-use-pip/',
            description: 'React hook for Picture in Picture',
            language: 'TypeScript',
            forksCount: 2,
            stargazersCount: 75,
            topics: [
              'hook',
              'picture-in-picture',
              'react',
              'react-use-pip',
              'typescript',
            ],
          },
          {
            id: 295944318,
            name: 'cz-conventional-changelog-with-jiraid-detection',
            htmlUrl:
              'https://github.com/DawChihLiou/cz-conventional-changelog-with-jiraid-detection',
            homepage:
              'https://www.npmjs.com/package/cz-conventional-changelog-with-jiraid-detection',
            description:
              'Prompts for conventional changelog standard with an Jira ID auto-detection',
            language: 'JavaScript',
            forksCount: 1,
            stargazersCount: 10,
            topics: [
              'commitizen',
              'commitizen-adapter',
              'conventional-changelog',
              'conventional-commits',
            ],
          },
          {
            id: 219204162,
            name: 'better-redux-observable-marble-testing',
            htmlUrl:
              'https://github.com/DawChihLiou/better-redux-observable-marble-testing',
            homepage: '',
            description:
              'An example to demonstrate how to write better marble tests with Redux Observable and Typescript',
            language: 'TypeScript',
            forksCount: 2,
            stargazersCount: 5,
            topics: [],
          },
          {
            id: 436122729,
            name: 'changed-files-action',
            htmlUrl: 'https://github.com/DawChihLiou/changed-files-action',
            homepage:
              'https://github.com/marketplace/actions/changed-filenames',
            description: 'GitHub Action to fetch changed files',
            language: 'TypeScript',
            forksCount: 0,
            stargazersCount: 2,
            topics: ['changed-file', 'git', 'github-actions'],
          },
          {
            id: 72384359,
            name: 'dawchihliou.github.io',
            htmlUrl: 'https://github.com/DawChihLiou/dawchihliou.github.io',
            homepage: 'https://dawchihliou.github.io',
            description: "Daw-Chih's online portfolio",
            language: 'JavaScript',
            forksCount: 0,
            stargazersCount: 2,
            topics: [],
          },
          {
            id: 428177999,
            name: 'dx-scripts',
            htmlUrl: 'https://github.com/DawChihLiou/dx-scripts',
            homepage: 'https://www.npmjs.com/package/dx-scripts',
            description:
              'A collection of utility scripts for developer experience and productivity.',
            language: 'TypeScript',
            forksCount: 0,
            stargazersCount: 2,
            topics: [
              'cli',
              'developer-experience',
              'npm',
              'productivity',
              'scripts',
            ],
          },
          {
            id: 154623109,
            name: 'react-redux-rxjs-tutorial',
            htmlUrl: 'https://github.com/DawChihLiou/react-redux-rxjs-tutorial',
            homepage: null,
            description:
              'Demonstrate patterns to best utilize functional programming to a predictable front end development',
            language: 'JavaScript',
            forksCount: 0,
            stargazersCount: 2,
            topics: [],
          },
          {
            id: 295661348,
            name: 'express-typeorm-postgres-example',
            htmlUrl:
              'https://github.com/DawChihLiou/express-typeorm-postgres-example',
            homepage: '',
            description:
              'An API server example built with Express, TypeORM, and PostgreSQL in TypeScript',
            language: 'TypeScript',
            forksCount: 0,
            stargazersCount: 1,
            topics: ['express', 'postgresql', 'typeorm', 'typescript'],
          },
          {
            id: 363345751,
            name: 'top-starred-repos',
            htmlUrl: 'https://github.com/DawChihLiou/top-starred-repos',
            homepage: 'https://top-starred-repos.vercel.app',
            description:
              'Simple UI build with Next.js and Material UI to visualize top weekly starred GitHub repositories.',
            language: 'TypeScript',
            forksCount: 0,
            stargazersCount: 1,
            topics: [],
          },
        ],
        ic = c(7152),
        jc = c.n(ic),
        kc = c(1208),
        lc = c(6653),
        mc = c(9352),
        nc = {
          Mercury: '#ff2b2b',
          TypeScript: '#2b7489',
          PureBasic: '#5a6986',
          'Objective-C++': '#6866fb',
          Self: '#0579aa',
          edn: '#db5855',
          NewLisp: '#87AED7',
          'Jupyter Notebook': '#DA5B0B',
          Rebol: '#358a5b',
          Frege: '#00cafe',
          Dart: '#00B4AB',
          AspectJ: '#a957b0',
          Shell: '#89e051',
          'Web Ontology Language': '#9cc9dd',
          xBase: '#403a40',
          Eiffel: '#946d57',
          Nix: '#7e7eff',
          RAML: '#77d9fb',
          MTML: '#b7e1f4',
          Racket: '#22228f',
          Elixir: '#6e4a7e',
          SAS: '#B34936',
          Agda: '#315665',
          wisp: '#7582D1',
          D: '#ba595e',
          Kotlin: '#F18E33',
          Opal: '#f7ede0',
          Crystal: '#776791',
          'Objective-C': '#438eff',
          'ColdFusion CFC': '#ed2cd6',
          Oz: '#fab738',
          Mirah: '#c7a938',
          'Objective-J': '#ff0c5a',
          Gosu: '#82937f',
          FreeMarker: '#0050b2',
          Ruby: '#701516',
          'Component Pascal': '#b0ce4e',
          Arc: '#aa2afe',
          Brainfuck: '#2F2530',
          Nit: '#009917',
          APL: '#5A8164',
          Go: '#375eab',
          'Visual Basic': '#945db7',
          PHP: '#4F5D95',
          Cirru: '#ccccff',
          SQF: '#3F3F3F',
          Glyph: '#e4cc98',
          Java: '#b07219',
          MAXScript: '#00a6a6',
          Scala: '#DC322F',
          Makefile: '#427819',
          ColdFusion: '#ed2cd6',
          Perl: '#0298c3',
          Lua: '#000080',
          Vue: '#2c3e50',
          Verilog: '#b2b7f8',
          Factor: '#636746',
          Haxe: '#df7900',
          'Pure Data': '#91de79',
          Forth: '#341708',
          Red: '#ee0000',
          Hy: '#7790B2',
          Volt: '#1F1F1F',
          LSL: '#3d9970',
          eC: '#913960',
          CoffeeScript: '#244776',
          HTML: '#e44b23',
          Lex: '#DBCA00',
          'API Blueprint': '#2ACCA8',
          Swift: '#ffac45',
          C: '#555555',
          AutoHotkey: '#6594b9',
          Isabelle: '#FEFE00',
          Metal: '#8f14e9',
          Clarion: '#db901e',
          JSONiq: '#40d47e',
          Boo: '#d4bec1',
          AutoIt: '#1C3552',
          Clojure: '#db5855',
          Rust: '#dea584',
          Prolog: '#74283c',
          SourcePawn: '#5c7611',
          AMPL: '#E6EFBB',
          FORTRAN: '#4d41b1',
          ANTLR: '#9DC3FF',
          Harbour: '#0e60e3',
          Tcl: '#e4cc98',
          BlitzMax: '#cd6400',
          PigLatin: '#fcd7de',
          Lasso: '#999999',
          ECL: '#8a1267',
          VHDL: '#adb2cb',
          Elm: '#60B5CC',
          'Propeller Spin': '#7fa2a7',
          X10: '#4B6BEF',
          IDL: '#a3522f',
          ATS: '#1ac620',
          Ada: '#02f88c',
          'Unity3D Asset': '#ab69a1',
          Nu: '#c9df40',
          LFE: '#004200',
          SuperCollider: '#46390b',
          Oxygene: '#cdd0e3',
          ASP: '#6a40fd',
          Assembly: '#6E4C13',
          Gnuplot: '#f0a9f0',
          JFlex: '#DBCA00',
          NetLinx: '#0aa0ff',
          Turing: '#45f715',
          Vala: '#fbe5cd',
          Processing: '#0096D8',
          Arduino: '#bd79d1',
          FLUX: '#88ccff',
          NetLogo: '#ff6375',
          'C Sharp': '#178600',
          CSS: '#563d7c',
          'Emacs Lisp': '#c065db',
          Stan: '#b2011d',
          SaltStack: '#646464',
          QML: '#44a51c',
          Pike: '#005390',
          LOLCODE: '#cc9900',
          ooc: '#b0b77e',
          Handlebars: '#01a9d6',
          J: '#9EEDFF',
          Mask: '#f97732',
          EmberScript: '#FFF4F3',
          TeX: '#3D6117',
          Nemerle: '#3d3c6e',
          KRL: '#28431f',
          "Ren'Py": '#ff7f7f',
          'Unified Parallel C': '#4e3617',
          Golo: '#88562A',
          Fancy: '#7b9db4',
          OCaml: '#3be133',
          Shen: '#120F14',
          Pascal: '#b0ce4e',
          'F#': '#b845fc',
          Puppet: '#302B6D',
          ActionScript: '#882B0F',
          Diff: '#88dddd',
          'Ragel in Ruby Host': '#9d5200',
          Fantom: '#dbded5',
          Zephir: '#118f9e',
          Click: '#E4E6F3',
          Smalltalk: '#596706',
          DM: '#447265',
          Ioke: '#078193',
          PogoScript: '#d80074',
          LiveScript: '#499886',
          JavaScript: '#f1e05a',
          VimL: '#199f4b',
          PureScript: '#1D222D',
          ABAP: '#E8274B',
          Matlab: '#bb92ac',
          Slash: '#007eff',
          R: '#198ce7',
          Erlang: '#B83998',
          Pan: '#cc0000',
          LookML: '#652B81',
          Eagle: '#814C05',
          Scheme: '#1e4aec',
          PLSQL: '#dad8d8',
          Python: '#3572A5',
          Max: '#c4a79c',
          'Common Lisp': '#3fb68b',
          Latte: '#A8FF97',
          XQuery: '#5232e7',
          Omgrofl: '#cabbff',
          XC: '#99DA07',
          Nimrod: '#37775b',
          SystemVerilog: '#DAE1C2',
          Chapel: '#8dc63f',
          Groovy: '#e69f56',
          Dylan: '#6c616e',
          E: '#ccce35',
          Parrot: '#f3ca0a',
          'Grammatical Framework': '#79aa7a',
          'Game Maker Language': '#8fb200',
          Papyrus: '#6600cc',
          'NetLinx+ERB': '#747faa',
          Clean: '#3F85AF',
          Alloy: '#64C800',
          Squirrel: '#800000',
          PAWN: '#dbb284',
          UnrealScript: '#a54c4d',
          'Standard ML': '#dc566d',
          Slim: '#ff8f77',
          Perl6: '#0000fb',
          Julia: '#a270ba',
          Haskell: '#29b544',
          NCL: '#28431f',
          Io: '#a9188d',
          Rouge: '#cc0088',
          cpp: '#f34b7d',
          'AGS Script': '#B9D9FF',
          Dogescript: '#cca760',
          nesC: '#94B0C7',
        },
        oc = c(1565),
        pc = c.n(oc)
      function qc(a) {
        var b,
          c = a.language
        return (0, Nb.jsx)('span', {
          className: pc().dot,
          style: {
            background: null !== (b = nc[c]) && void 0 !== b ? b : 'initial',
          },
        })
      }
      function rc(a) {
        var b = a.repo
        return (0, Nb.jsxs)('article', {
          className: jc().repo,
          children: [
            (0, Nb.jsxs)('div', {
              className: jc().header,
              children: [
                (0, Nb.jsx)('div', {
                  className: jc().headerLeft,
                  children: (0, Nb.jsx)(_b.QoU, {}),
                }),
                (0, Nb.jsxs)('div', {
                  className: jc().headerRight,
                  children: [
                    (0, Nb.jsx)(kc.Z, {
                      href: b.htmlUrl,
                      className: jc().link,
                      'aria-label': 'Read more about '.concat(
                        b.name,
                        ' on GitHub'
                      ),
                      children: (0, Nb.jsx)(lc.Jmn, {}),
                    }),
                    b.homepage &&
                      (0, Nb.jsx)(kc.Z, {
                        href: b.homepage,
                        className: jc().link,
                        'aria-label': 'Read more about '.concat(
                          b.name,
                          " on the project's homepage"
                        ),
                        children: b.homepage.includes('npmjs.com')
                          ? (0, Nb.jsx)(mc.HKf, {})
                          : (0, Nb.jsx)(_b.AlO, {}),
                      }),
                  ],
                }),
              ],
            }),
            (0, Nb.jsxs)('div', {
              className: jc().body,
              children: [
                (0, Nb.jsx)(kc.Z, {
                  href: b.htmlUrl,
                  className: jc().link,
                  'aria-label': 'Read more about '.concat(b.name, ' on GitHub'),
                  children: (0, Nb.jsx)('span', {
                    className: jc().title,
                    children: b.name,
                  }),
                }),
                (0, Nb.jsx)('p', { children: b.description }),
              ],
            }),
            (0, Nb.jsxs)('div', {
              className: jc().footer,
              children: [
                b.language &&
                  (0, Nb.jsxs)('div', {
                    className: jc().label,
                    children: [
                      (0, Nb.jsx)(qc, { language: b.language }),
                      (0, Nb.jsx)('span', { children: b.language }),
                    ],
                  }),
                b.stargazersCount > 0 &&
                  (0, Nb.jsx)(kc.Z, {
                    href: b.htmlUrl,
                    className: jc().labelLink,
                    'aria-label': 'Give '.concat(b.name, ' a star on GitHub'),
                    children: (0, Nb.jsxs)('div', {
                      className: jc().label,
                      children: [
                        (0, Nb.jsx)(lc.ObP, {}),
                        (0, Nb.jsx)('span', { children: b.stargazersCount }),
                      ],
                    }),
                  }),
                b.forksCount > 0 &&
                  (0, Nb.jsx)(kc.Z, {
                    href: b.htmlUrl,
                    className: jc().labelLink,
                    'aria-label': 'Fork '.concat(b.name, ' on GitHub'),
                    children: (0, Nb.jsxs)('div', {
                      className: jc().label,
                      children: [
                        (0, Nb.jsx)(lc.bLi, {}),
                        (0, Nb.jsx)('span', { children: b.forksCount }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        })
      }
      function sc() {
        var a = (0, Ob.useMemo)(function () {
          return hc
            .filter(function (a) {
              return 'dawchihliou.github.io' !== a.name
            })
            .filter(function (a) {
              return a.name.match(
                new RegExp(
                  'react-use-pip|cz-conventional-changelog-with-jiraid-detection|dx-scripts|better-redux-observable-marble-testing|changed-files-action|express-typeorm-postgres-example'
                )
              )
            })
        }, [])
        return (0, Nb.jsxs)('section', {
          className: gc().wrap,
          children: [
            (0, Nb.jsxs)('div', {
              className: gc().description,
              children: [
                (0, Nb.jsx)('h1', {
                  children: 'Some of my experiences & projects',
                }),
                (0, Nb.jsx)('p', {
                  children:
                    'I enjoy building tooling around testing, documentation, and CI/CD to improve developer experience. On top of solid coding and automation, nothing makes me happier than creating a meaningful product with thoughtful user experience and great performance.',
                }),
                (0, Nb.jsxs)('p', {
                  children: [
                    "Besides that, I've spent over ",
                    new Date().getFullYear() - 2013,
                    " years working on web engineering in startups, public tech companies, and Fortune 500 enterprises. I've built features, architectures, and infrastructure for customer-facing products and enterprise software.",
                  ],
                }),
              ],
            }),
            (0, Nb.jsxs)('div', {
              className: gc().project,
              children: [
                (0, Nb.jsxs)('div', {
                  className: gc().projectDescription,
                  children: [
                    (0, Nb.jsx)('h2', {
                      children: (0, Nb.jsx)(kc.Z, {
                        href: 'https://www.spes.me',
                        className: gc().link,
                        'aria-label': 'Go to https://spes.me',
                        children: 'Spes',
                      }),
                    }),
                    (0, Nb.jsx)('p', {
                      children:
                        "Reading turned my life around, and I believe it can turn yours too. There're so many books full of wisdom but it's hard to find yourself a book among the overwhelming options. So I'm giving away a book every month to a subscriber and help you find your next book to read. Sign up! Hopefully you'll be inspired too:)",
                    }),
                    (0, Nb.jsx)(kc.Z, {
                      href: 'https://www.spes.me',
                      className: gc().cfa,
                      'aria-label': 'Go to https://spes.me',
                      children: 'Learn more',
                    }),
                  ],
                }),
                (0, Nb.jsx)('div', {
                  className: gc().imageContainer,
                  children: (0, Nb.jsxs)('div', {
                    className: gc().image,
                    children: [
                      (0, Nb.jsx)('img', {
                        src: '/optimized/raw/spes.webp',
                        alt: 'Spes',
                      }),
                      (0, Nb.jsx)('div', { className: gc().imageShadow }),
                    ],
                  }),
                }),
              ],
            }),
            (0, Nb.jsxs)('div', {
              className: gc().description,
              children: [
                (0, Nb.jsx)('h1', { children: 'My Open Source projects' }),
                (0, Nb.jsx)('p', {
                  children:
                    "I've been working on open source and non-profit projects! Making helpful libraries is my happy place. It brings me so much joy contributing back to the community.",
                }),
              ],
            }),
            (0, Nb.jsx)('div', {
              className: gc().list,
              children: a.map(function (a) {
                return (0, Nb.jsx)(rc, { repo: a }, a.id)
              }),
            }),
            (0, Nb.jsx)(kc.Z, {
              href: Zb.Z.github,
              className: gc().link,
              children: 'See more on GitHub',
            }),
          ],
        })
      }
      var tc = c(1862),
        uc = c.n(tc)
      function vc() {
        return (vc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var wc = function (a) {
        return Ob.createElement(
          'svg',
          vc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 123,
              height: 20,
              'aria-label': 'Code: TypeScript',
            },
            a
          ),
          d ||
            (d = Ob.createElement(
              'linearGradient',
              { id: 'typescript_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          e ||
            (e = Ob.createElement(
              'clipPath',
              { id: 'typescript_svg__a' },
              Ob.createElement('rect', {
                width: 123,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          f ||
            (f = Ob.createElement(
              'g',
              { clipPath: 'url(#typescript_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#007acc',
                d: 'M54 0h69v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#typescript_svg__b)',
                d: 'M0 0h123v20H0z',
              })
            )),
          g ||
            (g = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlR5cGVTY3JpcHQ8L3RpdGxlPjxwYXRoIGQ9Ik0xLjEyNSAwQy41MDIgMCAwIC41MDIgMCAxLjEyNXYyMS43NUMwIDIzLjQ5OC41MDIgMjQgMS4xMjUgMjRoMjEuNzVjLjYyMyAwIDEuMTI1LS41MDIgMS4xMjUtMS4xMjVWMS4xMjVDMjQgLjUwMiAyMy40OTggMCAyMi44NzUgMHptMTcuMzYzIDkuNzVjLjYxMiAwIDEuMTU0LjAzNyAxLjYyNy4xMTFhNi4zOCA2LjM4IDAgMCAxIDEuMzA2LjM0djIuNDU4YTMuOTUgMy45NSAwIDAgMC0uNjQzLS4zNjEgNS4wOTMgNS4wOTMgMCAwIDAtLjcxNy0uMjYgNS40NTMgNS40NTMgMCAwIDAtMS40MjYtLjJjLS4zIDAtLjU3My4wMjgtLjgxOS4wODZhMi4xIDIuMSAwIDAgMC0uNjIzLjI0MmMtLjE3LjEwNC0uMy4yMjktLjM5My4zNzRhLjg4OC44ODggMCAwIDAtLjE0LjQ5YzAgLjE5Ni4wNTMuMzczLjE1Ni41MjkuMTA0LjE1Ni4yNTIuMzA0LjQ0My40NDRzLjQyMy4yNzYuNjk2LjQxYy4yNzMuMTM1LjU4Mi4yNzQuOTI2LjQxNi40Ny4xOTcuODkyLjQwNyAxLjI2Ni42MjguMzc0LjIyMi42OTUuNDczLjk2My43NTMuMjY4LjI3OS40NzIuNTk4LjYxNC45NTcuMTQyLjM1OS4yMTQuNzc2LjIxNCAxLjI1MyAwIC42NTctLjEyNSAxLjIxLS4zNzMgMS42NTZhMy4wMzMgMy4wMzMgMCAwIDEtMS4wMTIgMS4wODUgNC4zOCA0LjM4IDAgMCAxLTEuNDg3LjU5NmMtLjU2Ni4xMi0xLjE2My4xOC0xLjc5LjE4YTkuOTE2IDkuOTE2IDAgMCAxLTEuODQtLjE2NCA1LjU0NCA1LjU0NCAwIDAgMS0xLjUxMi0uNDkzdi0yLjYzYTUuMDMzIDUuMDMzIDAgMCAwIDMuMjM3IDEuMmMuMzMzIDAgLjYyNC0uMDMuODcyLS4wOS4yNDktLjA2LjQ1Ni0uMTQ0LjYyMy0uMjUuMTY2LS4xMDguMjktLjIzNC4zNzMtLjM4YTEuMDIzIDEuMDIzIDAgMCAwLS4wNzQtMS4wODkgMi4xMiAyLjEyIDAgMCAwLS41MzctLjUgNS41OTcgNS41OTcgMCAwIDAtLjgwNy0uNDQ0IDI3LjcyIDI3LjcyIDAgMCAwLTEuMDA3LS40MzZjLS45MTgtLjM4My0xLjYwMi0uODUyLTIuMDUzLTEuNDA1LS40NS0uNTUzLS42NzYtMS4yMjItLjY3Ni0yLjAwNSAwLS42MTQuMTIzLTEuMTQxLjM2OS0xLjU4Mi4yNDYtLjQ0MS41OC0uODA0IDEuMDA0LTEuMDg5YTQuNDk0IDQuNDk0IDAgMCAxIDEuNDctLjYyOSA3LjUzNiA3LjUzNiAwIDAgMSAxLjc3LS4yMDF6bS0xNS4xMTMuMTg4aDkuNTYzdjIuMTY2SDkuNTA2djkuNjQ2SDYuNzg5di05LjY0NkgzLjM3NXoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 875,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 590,
                },
                '\n      TypeScript\n    '
              ),
              Ob.createElement(
                'text',
                { x: 875, y: 140, transform: 'scale(.1)', textLength: 590 },
                '\n      TypeScript\n    '
              )
            ))
        )
      }
      function xc() {
        return (xc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var yc = function (a) {
        return Ob.createElement(
          'svg',
          xc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 121,
              height: 20,
              'aria-label': 'Code: JavaScript',
            },
            a
          ),
          h ||
            (h = Ob.createElement(
              'linearGradient',
              { id: 'javascript_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          i ||
            (i = Ob.createElement(
              'clipPath',
              { id: 'javascript_svg__a' },
              Ob.createElement('rect', {
                width: 121,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          j ||
            (j = Ob.createElement(
              'g',
              { clipPath: 'url(#javascript_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#f7df1e',
                d: 'M54 0h67v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#javascript_svg__b)',
                d: 'M0 0h121v20H0z',
              })
            )),
          k ||
            (k = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkphdmFTY3JpcHQ8L3RpdGxlPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0yMi4wMzQgMTguMjc2Yy0uMTc1LTEuMDk1LS44ODgtMi4wMTUtMy4wMDMtMi44NzMtLjczNi0uMzQ1LTEuNTU0LS41ODUtMS43OTctMS4xNC0uMDkxLS4zMy0uMTA1LS41MS0uMDQ2LS43MDUuMTUtLjY0Ni45MTUtLjg0IDEuNTE1LS42Ni4zOS4xMi43NS40Mi45NzYuOSAxLjAzNC0uNjc2IDEuMDM0LS42NzYgMS43NTUtMS4xMjUtLjI3LS40Mi0uNDA0LS42MDEtLjU4Ni0uNzgtLjYzLS43MDUtMS40NjktMS4wNjUtMi44MzQtMS4wMzRsLS43MDUuMDg5Yy0uNjc2LjE2NS0xLjMyLjUyNS0xLjcxIDEuMDA1LTEuMTQgMS4yOTEtLjgxMSAzLjU0MS41NjkgNC40NzEgMS4zNjUgMS4wMiAzLjM2MSAxLjI0NCAzLjYxNiAyLjIwNS4yNCAxLjE3LS44NyAxLjU0NS0xLjk2NiAxLjQxLS44MTEtLjE4LTEuMjYtLjU4Ni0xLjc1NS0xLjMzNmwtMS44MyAxLjA1MWMuMjEuNDguNDUuNjg5LjgxIDEuMTA5IDEuNzQgMS43NTYgNi4wOSAxLjY2NiA2Ljg3MS0xLjAwNC4wMjktLjA5LjI0LS43MDUuMDc0LTEuNjVsLjA0Ni4wNjd6bS04Ljk4My03LjI0NWgtMi4yNDhjMCAxLjkzOC0uMDA5IDMuODY0LS4wMDkgNS44MDUgMCAxLjIzMi4wNjMgMi4zNjMtLjEzOCAyLjcxMS0uMzMuNjg5LTEuMTguNjAxLTEuNTY2LjQ4LS4zOTYtLjE5Ni0uNTk3LS40NjYtLjgzLS44NTUtLjA2My0uMTA1LS4xMS0uMTk2LS4xMjctLjE5NmwtMS44MjUgMS4xMjVjLjMwNS42My43NSAxLjE3MiAxLjMyNCAxLjUxNy44NTUuNTEgMi4wMDQuNjc1IDMuMjA3LjQwNS43ODMtLjIyNiAxLjQ1OC0uNjkxIDEuODExLTEuNDExLjUxLS45My40MDItMi4wNy4zOTctMy4zNDYuMDEyLTIuMDU0IDAtNC4xMDkgMC02LjE3OWwuMDA0LS4wNTZ6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 865,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 570,
                },
                '\n      JavaScript\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 865,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 570,
                },
                '\n      JavaScript\n    '
              )
            ))
        )
      }
      function zc() {
        return (zc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Ac = function (a) {
        return Ob.createElement(
          'svg',
          zc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 89,
              height: 20,
              'aria-label': 'Code: Java',
            },
            a
          ),
          l ||
            (l = Ob.createElement(
              'linearGradient',
              { id: 'java_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          m ||
            (m = Ob.createElement(
              'clipPath',
              { id: 'java_svg__a' },
              Ob.createElement('rect', {
                width: 89,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          n ||
            (n = Ob.createElement(
              'g',
              { clipPath: 'url(#java_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#007396',
                d: 'M54 0h35v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#java_svg__b)',
                d: 'M0 0h89v20H0z',
              })
            )),
          o ||
            (o = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkphdmE8L3RpdGxlPjxwYXRoIGQ9Ik04Ljg1MSAxOC41NnMtLjkxNy41MzQuNjUzLjcxNGMxLjkwMi4yMTggMi44NzQuMTg3IDQuOTY5LS4yMTEgMCAwIC41NTIuMzQ2IDEuMzIxLjY0Ni00LjY5OSAyLjAxMy0xMC42MzMtLjExOC02Ljk0My0xLjE0OU04LjI3NiAxNS45MzNzLTEuMDI4Ljc2MS41NDIuOTI0YzIuMDMyLjIwOSAzLjYzNi4yMjcgNi40MTMtLjMwOCAwIDAgLjM4NC4zODkuOTg3LjYwMi01LjY3OSAxLjY2MS0xMi4wMDcuMTMtNy45NDItMS4yMThNMTMuMTE2IDExLjQ3NWMxLjE1OCAxLjMzMy0uMzA0IDIuNTMzLS4zMDQgMi41MzNzMi45MzktMS41MTggMS41ODktMy40MThjLTEuMjYxLTEuNzcyLTIuMjI4LTIuNjUyIDMuMDA3LTUuNjg4IDAtLjAwMS04LjIxNiAyLjA1MS00LjI5MiA2LjU3M00xOS4zMyAyMC41MDRzLjY3OS41NTktLjc0Ny45OTFjLTIuNzEyLjgyMi0xMS4yODggMS4wNjktMTMuNjY5LjAzMy0uODU2LS4zNzMuNzUtLjg5IDEuMjU0LS45OTguNTI3LS4xMTQuODI4LS4wOTMuODI4LS4wOTMtLjk1My0uNjcxLTYuMTU2IDEuMzE3LTIuNjQzIDEuODg3IDkuNTggMS41NTMgMTcuNDYyLS43IDE0Ljk3Ny0xLjgyTTkuMjkyIDEzLjIxcy00LjM2MiAxLjAzNi0xLjU0NCAxLjQxMmMxLjE4OS4xNTkgMy41NjEuMTIzIDUuNzctLjA2MiAxLjgwNi0uMTUyIDMuNjE4LS40NzcgMy42MTgtLjQ3N3MtLjYzNy4yNzItMS4wOTguNTg3Yy00LjQyOSAxLjE2NS0xMi45ODYuNjIzLTEwLjUyMi0uNTY4IDIuMDgyLTEuMDA2IDMuNzc2LS44OTIgMy43NzYtLjg5Mk0xNy4xMTYgMTcuNTg0YzQuNTAzLTIuMzQgMi40MjEtNC41ODkuOTY4LTQuMjg1LS4zNTUuMDc0LS41MTUuMTM4LS41MTUuMTM4cy4xMzItLjIwNy4zODUtLjI5N2MyLjg3NS0xLjAxMSA1LjA4NiAyLjk4MS0uOTI4IDQuNTYyIDAtLjAwMS4wNy0uMDYyLjA5LS4xMThNMTQuNDAxIDBzMi40OTQgMi40OTQtMi4zNjUgNi4zM2MtMy44OTYgMy4wNzctLjg4OCA0LjgzMi0uMDAxIDYuODM2LTIuMjc0LTIuMDUzLTMuOTQzLTMuODU4LTIuODI0LTUuNTM5IDEuNjQ0LTIuNDY5IDYuMTk3LTMuNjY1IDUuMTktNy42MjdNOS43MzQgMjMuOTI0YzQuMzIyLjI3NyAxMC45NTktLjE1MyAxMS4xMTYtMi4xOTggMCAwLS4zMDIuNzc1LTMuNTcyIDEuMzkxLTMuNjg4LjY5NC04LjIzOS42MTMtMTAuOTM3LjE2OCAwLS4wMDEuNTUzLjQ1NyAzLjM5My42MzkiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 705,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 250,
                },
                '\n      Java\n    '
              ),
              Ob.createElement(
                'text',
                { x: 705, y: 140, transform: 'scale(.1)', textLength: 250 },
                '\n      Java\n    '
              )
            ))
        )
      }
      function Bc() {
        return (Bc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Cc = function (a) {
        return Ob.createElement(
          'svg',
          Bc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 95,
              height: 20,
              'aria-label': 'Code: React',
            },
            a
          ),
          p ||
            (p = Ob.createElement(
              'linearGradient',
              { id: 'react_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          q ||
            (q = Ob.createElement(
              'clipPath',
              { id: 'react_svg__a' },
              Ob.createElement('rect', {
                width: 95,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          r ||
            (r = Ob.createElement(
              'g',
              { clipPath: 'url(#react_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#61dafb',
                d: 'M54 0h41v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#react_svg__b)',
                d: 'M0 0h95v20H0z',
              })
            )),
          s ||
            (s = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlJlYWN0PC90aXRsZT48cGF0aCBkPSJNMTQuMjMgMTIuMDA0YTIuMjM2IDIuMjM2IDAgMCAxLTIuMjM1IDIuMjM2IDIuMjM2IDIuMjM2IDAgMCAxLTIuMjM2LTIuMjM2IDIuMjM2IDIuMjM2IDAgMCAxIDIuMjM1LTIuMjM2IDIuMjM2IDIuMjM2IDAgMCAxIDIuMjM2IDIuMjM2em0yLjY0OC0xMC42OWMtMS4zNDYgMC0zLjEwNy45Ni00Ljg4OCAyLjYyMi0xLjc4LTEuNjUzLTMuNTQyLTIuNjAyLTQuODg3LTIuNjAyLS40MSAwLS43ODMuMDkzLTEuMTA2LjI3OC0xLjM3NS43OTMtMS42ODMgMy4yNjQtLjk3MyA2LjM2NUMxLjk4IDguOTE3IDAgMTAuNDIgMCAxMi4wMDRjMCAxLjU5IDEuOTkgMy4wOTcgNS4wNDMgNC4wMy0uNzA0IDMuMTEzLS4zOSA1LjU4OC45ODggNi4zOC4zMi4xODcuNjkuMjc1IDEuMTAyLjI3NSAxLjM0NSAwIDMuMTA3LS45NiA0Ljg4OC0yLjYyNCAxLjc4IDEuNjU0IDMuNTQyIDIuNjAzIDQuODg3IDIuNjAzLjQxIDAgLjc4My0uMDkgMS4xMDYtLjI3NSAxLjM3NC0uNzkyIDEuNjgzLTMuMjYzLjk3My02LjM2NUMyMi4wMiAxNS4wOTYgMjQgMTMuNTkgMjQgMTIuMDA0YzAtMS41OS0xLjk5LTMuMDk3LTUuMDQzLTQuMDMyLjcwNC0zLjExLjM5LTUuNTg3LS45ODgtNi4zOC0uMzE4LS4xODQtLjY4OC0uMjc3LTEuMDkyLS4yNzh6bS0uMDA1IDEuMDl2LjAwNmMuMjI1IDAgLjQwNi4wNDQuNTU4LjEyNy42NjYuMzgyLjk1NSAxLjgzNS43MyAzLjcwNC0uMDU0LjQ2LS4xNDIuOTQ1LS4yNSAxLjQ0LS45Ni0uMjM2LTIuMDA2LS40MTctMy4xMDctLjUzNC0uNjYtLjkwNS0xLjM0NS0xLjcyNy0yLjAzNS0yLjQ0NyAxLjU5Mi0xLjQ4IDMuMDg3LTIuMjkyIDQuMTA1LTIuMjk1em0tOS43Ny4wMmMxLjAxMiAwIDIuNTE0LjgwOCA0LjExIDIuMjgtLjY4Ni43Mi0xLjM3IDEuNTM3LTIuMDIgMi40NDItMS4xMDcuMTE3LTIuMTU0LjI5OC0zLjExMy41MzgtLjExMi0uNDktLjE5NS0uOTY0LS4yNTQtMS40Mi0uMjMtMS44NjguMDU0LTMuMzIuNzE0LTMuNzA3LjE5LS4wOS40LS4xMjcuNTYzLS4xMzJ6bTQuODgyIDMuMDVjLjQ1NS40NjguOTEuOTkyIDEuMzYgMS41NjQtLjQ0LS4wMi0uODktLjAzNC0xLjM0NS0uMDM0LS40NiAwLS45MTUuMDEtMS4zNi4wMzQuNDQtLjU3Mi44OTUtMS4wOTYgMS4zNDUtMS41NjV6TTEyIDguMWMuNzQgMCAxLjQ3Ny4wMzQgMi4yMDIuMDkzLjQwNi41ODIuODAyIDEuMjAzIDEuMTgzIDEuODYuMzcyLjY0LjcxIDEuMjkgMS4wMTggMS45NDYtLjMwOC42NTUtLjY0NiAxLjMxLTEuMDEzIDEuOTUtLjM4LjY2LS43NzMgMS4yODgtMS4xOCAxLjg3LS43MjguMDYzLTEuNDY2LjA5OC0yLjIxLjA5OC0uNzQgMC0xLjQ3Ny0uMDM1LTIuMjAyLS4wOTMtLjQwNi0uNTgyLS44MDItMS4yMDQtMS4xODMtMS44Ni0uMzcyLS42NC0uNzEtMS4yOS0xLjAxOC0xLjk0Ni4zMDMtLjY1Ny42NDYtMS4zMTMgMS4wMTMtMS45NTQuMzgtLjY2Ljc3My0xLjI4NiAxLjE4LTEuODY4LjcyOC0uMDY0IDEuNDY2LS4wOTggMi4yMS0uMDk4em0tMy42MzUuMjU0Yy0uMjQuMzc3LS40OC43NjMtLjcwNCAxLjE2LS4yMjUuMzktLjQzNS43ODItLjYzNSAxLjE3NC0uMjY1LS42NTYtLjQ5LTEuMzEtLjY3Ni0xLjk0Ny42NC0uMTUgMS4zMTUtLjI4MyAyLjAxNS0uMzg2em03LjI2IDBjLjY5NS4xMDMgMS4zNjUuMjMgMi4wMDYuMzg3LS4xOC42MzItLjQwNSAxLjI4Mi0uNjYgMS45MzMtLjItLjM5LS40MS0uNzgzLS42NC0xLjE3NC0uMjI1LS4zOTItLjQ2NS0uNzc0LS43MDUtMS4xNDZ6bTMuMDYzLjY3NWMuNDg0LjE1Ljk0NC4zMTcgMS4zNzUuNDk4IDEuNzMyLjc0IDIuODUyIDEuNzA4IDIuODUyIDIuNDc2LS4wMDUuNzY4LTEuMTI1IDEuNzQtMi44NTcgMi40NzUtLjQyLjE4LS44OC4zNDItMS4zNTUuNDkzLS4yOC0uOTU4LS42NDYtMS45NTYtMS4xLTIuOTguNDUtMS4wMTcuODEtMi4wMSAxLjA4NS0yLjk2NHptLTEzLjM5NS4wMDRjLjI3OC45Ni42NDUgMS45NTcgMS4xIDIuOTgtLjQ1IDEuMDE3LS44MTIgMi4wMS0xLjA4NiAyLjk2NC0uNDg0LS4xNS0uOTQ0LS4zMTgtMS4zNy0uNS0xLjczMi0uNzM3LTIuODUyLTEuNzA2LTIuODUyLTIuNDc0IDAtLjc2OCAxLjEyLTEuNzQyIDIuODUyLTIuNDc2LjQyLS4xOC44OC0uMzQyIDEuMzU2LS40OTR6bTExLjY3OCA0LjI4Yy4yNjUuNjU3LjQ5IDEuMzEyLjY3NiAxLjk0OC0uNjQuMTU3LTEuMzE2LjI5LTIuMDE2LjM5LjI0LS4zNzUuNDgtLjc2Mi43MDUtMS4xNTguMjI1LS4zOS40MzUtLjc4OC42MzYtMS4xOHptLTkuOTQ1LjAyYy4yLjM5Mi40MS43ODMuNjQgMS4xNzUuMjMuMzkuNDY1Ljc3Mi43MDUgMS4xNDMtLjY5NS0uMTAyLTEuMzY1LS4yMy0yLjAwNi0uMzg2LjE4LS42My40MDYtMS4yODIuNjYtMS45MzN6TTE3LjkyIDE2LjMyYy4xMTIuNDkzLjIuOTY4LjI1NCAxLjQyMy4yMyAxLjg2OC0uMDU0IDMuMzItLjcxNCAzLjcwOC0uMTQ3LjA5LS4zMzguMTI4LS41NjMuMTI4LTEuMDEyIDAtMi41MTQtLjgwNy00LjExLTIuMjguNjg2LS43MiAxLjM3LTEuNTM2IDIuMDItMi40NCAxLjEwNy0uMTE4IDIuMTU0LS4zIDMuMTEzLS41NHptLTExLjgzLjAxYy45Ni4yMzQgMi4wMDYuNDE1IDMuMTA3LjUzMi42Ni45MDUgMS4zNDUgMS43MjcgMi4wMzUgMi40NDYtMS41OTUgMS40ODMtMy4wOTIgMi4yOTUtNC4xMSAyLjI5NS0uMjItLjAwNS0uNDA2LS4wNS0uNTUzLS4xMzItLjY2Ni0uMzgtLjk1NS0xLjgzNC0uNzMtMy43MDMuMDU0LS40Ni4xNDItLjk0NC4yNS0xLjQzOHptNC41Ni42NGMuNDQuMDIuODkuMDM0IDEuMzQ1LjAzNC40NiAwIC45MTUtLjAxIDEuMzYtLjAzNC0uNDQuNTcyLS44OTUgMS4wOTUtMS4zNDUgMS41NjUtLjQ1NS0uNDctLjkxLS45OTMtMS4zNi0xLjU2NXoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 735,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 310,
                },
                '\n      React\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 735,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 310,
                },
                '\n      React\n    '
              )
            ))
        )
      }
      function Dc() {
        return (Dc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Ec = function (a) {
        return Ob.createElement(
          'svg',
          Dc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 119,
              height: 20,
              'aria-label': 'Code: ReactiveX',
            },
            a
          ),
          t ||
            (t = Ob.createElement(
              'linearGradient',
              { id: 'reactivex_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          u ||
            (u = Ob.createElement(
              'clipPath',
              { id: 'reactivex_svg__a' },
              Ob.createElement('rect', {
                width: 119,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          v ||
            (v = Ob.createElement(
              'g',
              { clipPath: 'url(#reactivex_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#b7178c',
                d: 'M54 0h65v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#reactivex_svg__b)',
                d: 'M0 0h119v20H0z',
              })
            )),
          w ||
            (w = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlJlYWN0aXZlWDwvdGl0bGU+PHBhdGggZD0iTTcuNDAyIDIuMzQzYy0yLjIyNC45ODQtMy42MTUgMi41ODMtNC40IDMuNzQ3LS44NTIgMS4yNjgtMS4xODQgMi4zMTktMS4xODQgMi4zMjgtLjAwMi4wMzYuMDA1LS4wMTcgMCAuMDE5LS4yNDYuNy0uNDczIDEuNzk4LS40NzMgMS44MDctLjI2NSAxLjM0NC0uMTQyIDIuNTkzLS4xNDIgMi42MTJsLjAyOS4yNDZhOS41OCA5LjU4IDAgMDEuMTMyLTEuMDEyYy4wMTktLjEzMy4zNy0yLjAxNiAxLjY5NC0zLjUxMS4xNDItLjIxOCAxLjY3NS0yLjIzMyA0LjQ5NS0yLjIzMy42MDYgMCAxLjI0LjA5NCAxLjg3NC4yODNoLjAxOWMuMDM4LjAxLjg3LjMxMyAxLjE3My40NjQuMjg0LjE0Mi43ODYuMzYuNzk1LjM2aC4wMmMyLjcxNSAxLjMyNSA1LjA2MiAxLjc1IDUuMDgxIDEuNzYuNjcyLjExNCAxLjI3OC4xNyAxLjgxNy4xNyAxLjA3OSAwIDEuODU1LS4yMzYgMi4yNjItLjY5LjIzNy0uMjYuMzA3LS41NTkuMjkzLS44MTQuMDE5LS45ODUtLjc4NS0yLjA0NC0xLjQ2Ny0yLjc1NGExMC44NjggMTAuODY4IDAgMDAtMS41NDItMS4zNDRjLTIuMDQ0LTEuNTE0LTQuMjMtMi4yOC02LjUyLTIuMjgtMi4zNDcuMDA5LTMuOTM3LjgzMi0zLjk1Ni44NDJ6bTcuNDE5IDIuNjU5Yy4yODQgMCAuNTExLjIyNy41MTEuNTFhLjUwOS41MDkgMCAwMS0uNTExLjUxMi41MDkuNTA5IDAgMDEtLjUxMS0uNTExYzAtLjI4NC4yMjctLjUxMS41MTEtLjUxMXptLTYuNjA1LTEuOTRjLjA3NSAwIC4xMjMuMDE5LjE0Mi4wMTlsMy4yMjcgMS4wMDMtLjEyMy4yNTUtMS41NDMtLjQ4MmMtLjU0OC0uMTctMS4xMi0uMzUxLTEuNjU2LS41Mi0uMDEgMC0uMDI4LS4wMS0uMDQ3LS4wMS0uMDIgMC0uMDQ4IDAtLjA2Ny4wMS0uMjkzLjA3NS0xLjA5Ny4zNTktMS4zMzQuNzg1YS40ODEuNDgxIDAgMDAtLjAzOC4zNzhjMCAuMDEuMTcuNTQuNTk2IDEuMDg4bDIuMTQtLjEwNCAxLjQyOC0uMDY2LS4xNDIuMjkzLTMuNTQ5LjE3Yy0uNTMtLjY0My0uNzM4LTEuMjg2LS43MzgtMS4yODZDNi4xODEgMy41NTQgOC4wODMgMy4wNyA4LjA4MyAzLjA3Yy4wNDUtLjAwMS4wOS0uMDA2LjEzMy0uMDF6bTExLjIyMyAxNS43NDdjMi4xNzctLjk0NiAzLjEwNC0yLjU4NCAzLjEwNC0yLjU4NCAyLjAzNS0yLjc3MiAxLjM0NC01LjY5NyAxLjM0NC01LjY5Ny0xLjI5NiAyLjgyLTIuNDggMy41OTYtMi40OCAzLjU5NiAzLjE5LTQuODU0LjAyLTcuNzg4LjAyLTcuNzg4QzIyLjcyMyA5LjEgMjEgMTIuNDY4IDIxIDEyLjQ2OGMtMS40NDggMy4wNDgtMy41MDIgNC4xMzYtMy41MDIgNC4xMzYgMi4yOS40MjYgMy45NzUtMS4xMTcgMy45NzUtMS4xMTctMy4yODQgMy41NDktNi44NDIgMy4zNzktNi44NDIgMy4zNzkgMS40OTUgMS42NzUgMy43MzggMS41MzMgMy43MzggMS41MzMtMi45MzQuNjktNS42ODgtLjI4NC03Ljk1LTIuMTY3LS40MjUtLjM1LS44MzItLjczLTEuMjEtMS4xMzYtLjE0NC0uMTUtLjI4LS4zMS0uNDE3LS40NjQtLjA0NyAxLjc1MSAxLjc3OSAzLjM3OSAxLjc3OSAzLjM3OS0yLjI5LS45NDctMy4zNC0zLTMuMzQtM3MtMS41NDMtMi42MzEtLjQyNi01LjYzMWMxLjEwNy0yLjk2MiA0LjQxOS0zLjYyNiA0LjUwNC0zLjY0NS0uMjUxLS4xMTctLjY0NC0uMjkyLS44MTQtLjM2Ny0uMjkzLS4xNDItMS4xNDUtLjQ1NS0xLjE0NS0uNDU1YTYuMzk3IDYuMzk3IDAgMDAtMS43OTgtLjI3NGMtMi43OTIgMC00LjI3NyAyLjExLTQuMjc3IDIuMTEtMS4zMTYgMS40NzctMS42MjggMy4zODgtMS42MjggMy4zODgtLjM3IDEuODI3LjAyOCAzLjc0OC4wMjggMy43NDhzLjAzOC4xNTEuMDQ4LjIxN2MuMzAzLjcyLjY5IDEuNDMgMS4xNDUgMi4xMDEgMi40NiAzLjY3MiA2LjQ1NCA0Ljk0IDYuNDU0IDQuOTQgNS45MTQgMi4wMDYgOS45NTUtLjk0NiA5Ljk1NS0uOTQ2IDMuNzItMi41NTUgNC40NjctNS41MDggNC40NjctNS41MDgtMy4wMSAyLjMzOC00LjMwNiAyLjEyLTQuMzA2IDIuMTJ6TTEuMzA3IDE0Ljk0OGExMi41NDUgMTIuNTQ1IDAgMDEtLjM2LTEuNzhjLS4wMS0uMDk4LS4wMjUtLjIwNy0uMDM3LS4zMDIgMCAwLS4xMzMtMS4yODcuMTUxLTIuNjk3IDAgMCAuMDEtLjAzOC4wMi0uMDk1LjAzNi0uMjAzLjA5My0uNDA3LjEzMi0uNTc3LjA4NS0uMzcuMjA4LS44MTQuMzMtMS4xNzQgMCAwIDEuMzA3LTQuMjg3IDUuNzI2LTYuMjQ1IDAgMCAxLjUyNC0uODA1IDMuODIzLS44NjItLjE2Mi0uMTYtLjM0OS0uMzI5LS41MS0uNDM1LTEuMDgtLjcyLTIuNjg4LS45NTYtMy42NjMuMDU3LS4yOTMuMzAzLS41NC42MzQtLjgxNC45MzctLjMxMi4zNC0uNjkuNjI0LTEuMTI2Ljc4NS0uMzc4LjE0Mi0uNzU3LjExNC0xLjE0NS4xOC0uMzk3LjA2Ni0uODA0LjIwOC0xLjEyNi40NjQtLjM1LjI4NC0uNDkyLjY2Mi0uNTMgMS4wOTctLjAzOC4zNDEtLjAyOC42OTEtLjA0NyAxLjAzMi0uMDQ4IDEuMDAzLS4zNyAxLjI4Ny0xLjA4OSAxLjg0NS0uMzAzLjIyNy0uNTU4LjUzLS43NDcuODUyLS41NjggMS4wMDMuMzQgMi4wNDQuMzg4IDMuMDU3LjAxLjIwOC0uMDEuNDE2LS4wODUuNjE1LS4wNzYuMjE3LS4yMjguMzYtLjM1LjU0LS4xNzEuMjM2LS4yODUuNTItLjIzNy44MTMuMDQ3LjI5My4xOTkuNTY4LjM0LjgyMy4yNzUuNDU1LjYxNi44NjIuOTc1IDEuMjUuMDEyLjAxNi4wMzguMDQuMDU0LjA1MmwtLjA3My0uMjMyeiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 855,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 550,
                },
                '\n      ReactiveX\n    '
              ),
              Ob.createElement(
                'text',
                { x: 855, y: 140, transform: 'scale(.1)', textLength: 550 },
                '\n      ReactiveX\n    '
              )
            ))
        )
      }
      function Fc() {
        return (Fc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Gc = function (a) {
        return Ob.createElement(
          'svg',
          Fc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 99,
              height: 20,
              'aria-label': 'Code: Redux',
            },
            a
          ),
          x ||
            (x = Ob.createElement(
              'linearGradient',
              { id: 'redux_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          y ||
            (y = Ob.createElement(
              'clipPath',
              { id: 'redux_svg__a' },
              Ob.createElement('rect', {
                width: 99,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          z ||
            (z = Ob.createElement(
              'g',
              { clipPath: 'url(#redux_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#764abc',
                d: 'M54 0h45v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#redux_svg__b)',
                d: 'M0 0h99v20H0z',
              })
            )),
          A ||
            (A = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlJlZHV4PC90aXRsZT48cGF0aCBkPSJNMTYuNjM0IDE2LjUwNGMuODctLjA3NSAxLjU0My0uODQgMS41LTEuNzU0LS4wNDctLjkxNC0uNzk2LTEuNjQ4LTEuNzA5LTEuNjQ4aC0uMDYxYTEuNzEgMS43MSAwIDAwLTEuNjQ4IDEuNzY5Yy4wMy40NzkuMjI2Ljg2OS40OTQgMS4xNTMtMS4wNDggMi4wMzgtMi42MjEgMy41MzYtNS4wMDUgNC43OTUtMS42MDMuODM4LTMuMjk2IDEuMTU0LTQuOTQ0LjkzLTEuMzc4LS4xOTUtMi40NTYtLjgxLTMuMTE2LTEuNzk5LS45ODgtMS40OTktMS4wNzgtMy4xMTYtLjI1NS00LjczNC42LTEuMTcgMS40OTktMi4wMjMgMi4wOTktMi40NDNhOS45NiA5Ljk2IDAgMDEtLjQyLTEuNTQzQy0uODY4IDE0LjQwOC0uNDE2IDE4Ljc1Mi45MzIgMjAuODA1YzEuMDA0IDEuNDk4IDMuMDU3IDIuNDU2IDUuMzA0IDIuNDU2LjYgMCAxLjIzLS4wNDQgMS44NDMtLjE5NCAzLjg5Ny0uNzQ5IDYuODQ4LTMuMDg2IDguNTQxLTYuNTMyem01LjM0OC0zLjc0NmMtMi4zMi0yLjcyOC01LjczOC00LjIyNi05LjYzNC00LjIyNmgtLjUxYy0uMjUzLS41NTQtLjgzNy0uODk5LTEuNDk4LS44OTloLS4wNDVjLS45NDMgMC0xLjY3OC44MS0xLjY0NyAxLjc1My4wMy44OTguNzk0IDEuNjQ4IDEuNzA4IDEuNjQ4aC4wNzRhMS42OSAxLjY5IDAgMDAxLjQ5OS0xLjA0OWguNTU1YzIuMzA5IDAgNC40OTUuNjc0IDYuNDg4IDEuOTkyIDEuNTI3IDEuMDA1IDIuNjIyIDIuMzIzIDMuMjM3IDMuODk3LjUzOCAxLjI4OC41MDkgMi41NDctLjA0NSAzLjU5Ny0uODU1IDEuNjQ3LTIuMjk0IDIuNTE3LTQuMTk2IDIuNTE3LTEuMTk5IDAtMi4zNjctLjM3NS0yLjk2Ny0uNjQ0LS4zNi4yOTgtLjk2Ljc5My0xLjM5NCAxLjA5MyAxLjMxOC41OTggMi42NTIuOTQzIDMuOTQuOTQzIDIuOTIyIDAgNS4wOTQtMS42NDcgNS45MTktMy4yMzYuODk4LTEuNzk4LjgyNC00LjgyNC0xLjQ3LTcuNDE2ek02LjQ5IDE3LjA0MmMuMDMuODk5Ljc5MyAxLjY0OCAxLjcwOCAxLjY0OGguMDZhMS42ODggMS42ODggMCAwMDEuNjQ4LTEuNzY4YzAtLjktLjc3OS0xLjY0Ny0xLjY5My0xLjY0N2gtLjA2Yy0uMDYgMC0uMTUgMC0uMjI2LjAyOS0xLjI0My0yLjA5OC0xLjc2OC00LjM0Ny0xLjU3Mi02Ljc3Mi4xMi0xLjgyOC43Mi0zLjQxNyAxLjc5Ny00LjczNS45LTEuMTI0IDIuNTkzLTEuNjggMy43NDctMS43MDggMy4yMzYtLjA2MSA0LjU4NSAzLjk3MSA0LjY4OSA1LjU3NGwxLjQ5OC40NUMxNy43NDEgMy4xOTcgMTQuNjg2LjYyIDExLjc2NC42MiA5LjAyLjYyIDYuNDkgMi42MTMgNS40NyA1LjUzNSA0LjA3NyA5LjQzIDQuOTkxIDEzLjE3NyA2LjcgMTYuMTc0Yy0uMTUuMTk1LS4yNC41MzktLjIxLjg2OHoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 755,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 350,
                },
                '\n      Redux\n    '
              ),
              Ob.createElement(
                'text',
                { x: 755, y: 140, transform: 'scale(.1)', textLength: 350 },
                '\n      Redux\n    '
              )
            ))
        )
      }
      function Hc() {
        return (Hc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Ic = function (a) {
        return Ob.createElement(
          'svg',
          Hc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 105,
              height: 20,
              'aria-label': 'Code: Node.js',
            },
            a
          ),
          B ||
            (B = Ob.createElement(
              'linearGradient',
              { id: 'node_js_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          C ||
            (C = Ob.createElement(
              'clipPath',
              { id: 'node_js_svg__a' },
              Ob.createElement('rect', {
                width: 105,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          D ||
            (D = Ob.createElement(
              'g',
              { clipPath: 'url(#node_js_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', { fill: '#393', d: 'M54 0h51v20H54z' }),
              Ob.createElement('path', {
                fill: 'url(#node_js_svg__b)',
                d: 'M0 0h105v20H0z',
              })
            )),
          E ||
            (E = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk5vZGUuanM8L3RpdGxlPjxwYXRoIGQ9Ik0xMS45OTgsMjRjLTAuMzIxLDAtMC42NDEtMC4wODQtMC45MjItMC4yNDdsLTIuOTM2LTEuNzM3Yy0wLjQzOC0wLjI0NS0wLjIyNC0wLjMzMi0wLjA4LTAuMzgzIGMwLjU4NS0wLjIwMywwLjcwMy0wLjI1LDEuMzI4LTAuNjA0YzAuMDY1LTAuMDM3LDAuMTUxLTAuMDIzLDAuMjE4LDAuMDE3bDIuMjU2LDEuMzM5YzAuMDgyLDAuMDQ1LDAuMTk3LDAuMDQ1LDAuMjcyLDBsOC43OTUtNS4wNzYgYzAuMDgyLTAuMDQ3LDAuMTM0LTAuMTQxLDAuMTM0LTAuMjM4VjYuOTIxYzAtMC4wOTktMC4wNTMtMC4xOTItMC4xMzctMC4yNDJsLTguNzkxLTUuMDcyYy0wLjA4MS0wLjA0Ny0wLjE4OS0wLjA0Ny0wLjI3MSwwIEwzLjA3NSw2LjY4QzIuOTksNi43MjksMi45MzYsNi44MjUsMi45MzYsNi45MjF2MTAuMTVjMCwwLjA5NywwLjA1NCwwLjE4OSwwLjEzOSwwLjIzNWwyLjQwOSwxLjM5MiBjMS4zMDcsMC42NTQsMi4xMDgtMC4xMTYsMi4xMDgtMC44OVY3Ljc4N2MwLTAuMTQyLDAuMTE0LTAuMjUzLDAuMjU2LTAuMjUzaDEuMTE1YzAuMTM5LDAsMC4yNTUsMC4xMTIsMC4yNTUsMC4yNTN2MTAuMDIxIGMwLDEuNzQ1LTAuOTUsMi43NDUtMi42MDQsMi43NDVjLTAuNTA4LDAtMC45MDksMC0yLjAyNi0wLjU1MUwyLjI4LDE4LjY3NWMtMC41Ny0wLjMyOS0wLjkyMi0wLjk0NS0wLjkyMi0xLjYwNFY2LjkyMSBjMC0wLjY1OSwwLjM1My0xLjI3NSwwLjkyMi0xLjYwM2w4Ljc5NS01LjA4MmMwLjU1Ny0wLjMxNSwxLjI5Ni0wLjMxNSwxLjg0OCwwbDguNzk0LDUuMDgyYzAuNTcsMC4zMjksMC45MjQsMC45NDQsMC45MjQsMS42MDMgdjEwLjE1YzAsMC42NTktMC4zNTQsMS4yNzMtMC45MjQsMS42MDRsLTguNzk0LDUuMDc4QzEyLjY0MywyMy45MTYsMTIuMzI0LDI0LDExLjk5OCwyNHogTTE5LjA5OSwxMy45OTMgYzAtMS45LTEuMjg0LTIuNDA2LTMuOTg3LTIuNzYzYy0yLjczMS0wLjM2MS0zLjAwOS0wLjU0OC0zLjAwOS0xLjE4N2MwLTAuNTI4LDAuMjM1LTEuMjMzLDIuMjU4LTEuMjMzIGMxLjgwNywwLDIuNDczLDAuMzg5LDIuNzQ3LDEuNjA3YzAuMDI0LDAuMTE1LDAuMTI5LDAuMTk5LDAuMjQ3LDAuMTk5aDEuMTQxYzAuMDcxLDAsMC4xMzgtMC4wMzEsMC4xODYtMC4wODEgYzAuMDQ4LTAuMDU0LDAuMDc0LTAuMTIzLDAuMDY3LTAuMTk2Yy0wLjE3Ny0yLjA5OC0xLjU3MS0zLjA3Ni00LjM4OC0zLjA3NmMtMi41MDgsMC00LjAwNCwxLjA1OC00LjAwNCwyLjgzMyBjMCwxLjkyNSwxLjQ4OCwyLjQ1NywzLjg5NSwyLjY5NWMyLjg4LDAuMjgyLDMuMTAzLDAuNzAzLDMuMTAzLDEuMjY5YzAsMC45ODMtMC43ODksMS40MDItMi42NDIsMS40MDIgYy0yLjMyNywwLTIuODM5LTAuNTg0LTMuMDExLTEuNzQyYy0wLjAyLTAuMTI0LTAuMTI2LTAuMjE1LTAuMjUzLTAuMjE1aC0xLjEzN2MtMC4xNDEsMC0wLjI1NCwwLjExMi0wLjI1NCwwLjI1MyBjMCwxLjQ4MiwwLjgwNiwzLjI0OCw0LjY1NSwzLjI0OEMxNy41MDEsMTcuMDA3LDE5LjA5OSwxNS45MSwxOS4wOTksMTMuOTkzeiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 785,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 410,
                },
                '\n      Node.js\n    '
              ),
              Ob.createElement(
                'text',
                { x: 785, y: 140, transform: 'scale(.1)', textLength: 410 },
                '\n      Node.js\n    '
              )
            ))
        )
      }
      function Jc() {
        return (Jc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Kc = function (a) {
        return Ob.createElement(
          'svg',
          Jc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 113,
              height: 20,
              'aria-label': 'Code: GraphQL',
            },
            a
          ),
          F ||
            (F = Ob.createElement(
              'linearGradient',
              { id: 'graphql_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          G ||
            (G = Ob.createElement(
              'clipPath',
              { id: 'graphql_svg__a' },
              Ob.createElement('rect', {
                width: 113,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          H ||
            (H = Ob.createElement(
              'g',
              { clipPath: 'url(#graphql_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#e10098',
                d: 'M54 0h59v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#graphql_svg__b)',
                d: 'M0 0h113v20H0z',
              })
            )),
          I ||
            (I = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdyYXBoUUw8L3RpdGxlPjxwYXRoIGQ9Ik0xMi4wMDIgMGEyLjEzOCAyLjEzOCAwIDEgMCAwIDQuMjc3IDIuMTM4IDIuMTM4IDAgMSAwIDAtNC4yNzd6bTguNTQgNC45MzFhMi4xMzggMi4xMzggMCAxIDAgMCA0LjI3NyAyLjEzOCAyLjEzOCAwIDEgMCAwLTQuMjc3em0wIDkuODYyYTIuMTM4IDIuMTM4IDAgMSAwIDAgNC4yNzcgMi4xMzggMi4xMzggMCAxIDAgMC00LjI3N3ptLTguNTQgNC45MzFhMi4xMzggMi4xMzggMCAxIDAgMCA0LjI3NiAyLjEzOCAyLjEzOCAwIDEgMCAwLTQuMjc2em0tOC41NDItNC45M2EyLjEzOCAyLjEzOCAwIDEgMCAwIDQuMjc2IDIuMTM4IDIuMTM4IDAgMSAwIDAtNC4yNzd6bTAtOS44NjNhMi4xMzggMi4xMzggMCAxIDAgMCA0LjI3NyAyLjEzOCAyLjEzOCAwIDEgMCAwLTQuMjc3em04LjU0Mi0zLjM3OEwyLjk1MyA2Ljc3N3YxMC40NDhsOS4wNDkgNS4yMjQgOS4wNDctNS4yMjRWNi43Nzd6bTAgMS42MDEgNy42NiAxMy4yN0g0LjM0em0tMS4zODcuMzcxTDMuOTcgMTUuMDM3VjcuMzYzem0yLjc3NCAwIDYuNjQ2IDMuODM4djcuNjc0ek01LjM1NSAxNy40NGgxMy4yOTNsLTYuNjQ2IDMuODM2eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 825,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 490,
                },
                '\n      GraphQL\n    '
              ),
              Ob.createElement(
                'text',
                { x: 825, y: 140, transform: 'scale(.1)', textLength: 490 },
                '\n      GraphQL\n    '
              )
            ))
        )
      }
      function Lc() {
        return (Lc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Mc = function (a) {
        return Ob.createElement(
          'svg',
          Lc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 100,
              height: 20,
              'aria-label': 'Code: TypeORM',
            },
            a
          ),
          J ||
            (J = Ob.createElement(
              'linearGradient',
              { id: 'typeorm_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          K ||
            (K = Ob.createElement(
              'clipPath',
              { id: 'typeorm_svg__a' },
              Ob.createElement('rect', {
                width: 100,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          L ||
            (L = Ob.createElement(
              'g',
              { clipPath: 'url(#typeorm_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h37v20H0z' }),
              Ob.createElement('path', { fill: '#d10', d: 'M37 0h63v20H37z' }),
              Ob.createElement('path', {
                fill: 'url(#typeorm_svg__b)',
                d: 'M0 0h100v20H0z',
              })
            )),
          M ||
            (M = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 195,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 270,
                  transform: 'scale(.1)',
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 195, y: 140, textLength: 270, transform: 'scale(.1)' },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 675,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 530,
                  transform: 'scale(.1)',
                },
                '\n      TypeORM\n    '
              ),
              Ob.createElement(
                'text',
                { x: 675, y: 140, textLength: 530, transform: 'scale(.1)' },
                '\n      TypeORM\n    '
              )
            ))
        )
      }
      function Nc() {
        return (Nc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Oc = function (a) {
        return Ob.createElement(
          'svg',
          Nc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 93,
              height: 20,
              'aria-label': 'Code: CSS3',
            },
            a
          ),
          N ||
            (N = Ob.createElement(
              'linearGradient',
              { id: 'css3_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          O ||
            (O = Ob.createElement(
              'clipPath',
              { id: 'css3_svg__a' },
              Ob.createElement('rect', {
                width: 93,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          P ||
            (P = Ob.createElement(
              'g',
              { clipPath: 'url(#css3_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#1572b6',
                d: 'M54 0h39v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#css3_svg__b)',
                d: 'M0 0h93v20H0z',
              })
            )),
          Q ||
            (Q = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkNTUzM8L3RpdGxlPjxwYXRoIGQ9Ik0xLjUgMGgyMWwtMS45MSAyMS41NjNMMTEuOTc3IDI0bC04LjU2NS0yLjQzOEwxLjUgMHptMTcuMDkgNC40MTNMNS40MSA0LjQxbC4yMTMgMi42MjIgMTAuMTI1LjAwMi0uMjU1IDIuNzE2aC02LjY0bC4yNCAyLjU3M2g2LjE4MmwtLjM2NiAzLjUyMy0yLjkxLjgwNC0yLjk1Ni0uODEtLjE4OC0yLjExaC0yLjYxbC4yOSAzLjg1NUwxMiAxOS4yODhsNS4zNzMtMS41M0wxOC41OSA0LjQxNHoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 725,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 290,
                },
                '\n      CSS3\n    '
              ),
              Ob.createElement(
                'text',
                { x: 725, y: 140, transform: 'scale(.1)', textLength: 290 },
                '\n      CSS3\n    '
              )
            ))
        )
      }
      function Pc() {
        return (Pc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Qc = function (a) {
        return Ob.createElement(
          'svg',
          Pc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 89,
              height: 20,
              'aria-label': 'Code: Sass',
            },
            a
          ),
          R ||
            (R = Ob.createElement(
              'linearGradient',
              { id: 'sass_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          S ||
            (S = Ob.createElement(
              'clipPath',
              { id: 'sass_svg__a' },
              Ob.createElement('rect', {
                width: 89,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          T ||
            (T = Ob.createElement(
              'g',
              { clipPath: 'url(#sass_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', { fill: '#c69', d: 'M54 0h35v20H54z' }),
              Ob.createElement('path', {
                fill: 'url(#sass_svg__b)',
                d: 'M0 0h89v20H0z',
              })
            )),
          U ||
            (U = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNhc3M8L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTIgNS4zNzMgMCAxMiAwek05LjYxNSAxNS45OThjLjE3NS42NDUuMTU2IDEuMjQ4LS4wMjQgMS43OTJsLS4wNjUuMThjLS4wMjQuMDYxLS4wNTIuMTItLjA3OC4xNzYtLjE0LjI5LS4zMjYuNTYtLjU1NS44MS0uNjk4Ljc1OS0xLjY3MiAxLjA0Ny0yLjA5LjgwNS0uNDUtLjI2Mi0uMjI2LTEuMzM1LjU4NC0yLjE5Ljg3MS0uOTE4IDIuMTItMS41MDkgMi4xMi0xLjUwOXYtLjAwM2wuMTA4LS4wNjF6bTkuOTExLTEwLjg2MWMtLjU0Mi0yLjEzMy00LjA3Ny0yLjgzNC03LjQyMi0xLjY0NS0xLjk4OS43MDctNC4xNDQgMS44MTgtNS42OTMgMy4yNjdDNC41NjggOC40OCA0LjI3NSA5Ljk4IDQuMzk2IDEwLjYwN2MuNDI3IDIuMjExIDMuNDU3IDMuNjU3IDQuNzAzIDQuNzN2LjAwNmMtLjM2Ny4xOC0zLjA1NiAxLjUyOS0zLjY4NiAyLjkyNS0uNjc1IDEuNDcuMTA1IDIuNTIxLjYxNSAyLjY1NSAxLjU3NS40MzYgMy4xOTUtLjM2IDQuMDY1LTEuNjQ5Ljg0LTEuMjYxLjc2Ni0yLjg4MS40MDQtMy42NzYuNDk2LS4xMzUgMS4wOC0uMTk1IDEuODMtLjEwNCAyLjEwMS4yNCAyLjUyMSAxLjU2IDIuNDMgMi4xLS4wOS41MzktLjUyMy44NTQtLjY3NC45NDQtLjE1LjA5MS0uMTk1LjEyLS4xODEuMTgxLjAxNS4wOS4wOTEuMDkuMjEuMDc1LjE2NS0uMDMgMS4wOTYtLjQ1IDEuMTQxLTEuNDcxLjA0NS0xLjI5LTEuMTg2LTIuNzI5LTMuMzc1LTIuNy0uOS4wMTYtMS40NzEuMDkxLTEuODc1LjI1Ni0uMDMtLjA0NS0uMDYxLS4wNzUtLjEwNS0uMTA1LTEuMzUtMS40NTUtMy44NTUtMi40NzUtMy43NS00LjQxLjAzLS43MDUuMjg1LTIuNTY0IDQuOC00LjgxNCAzLjcwNS0xLjg0NiA2LjY2MS0xLjMzNSA3LjE3MS0uMjEuNzMzIDEuNjA0LTEuNTc2IDQuNTktNS40MzEgNS4wMjQtMS40Ny4xNjUtMi4yMzUtLjQwNC0yLjQzMS0uNjE1LS4yMDktLjIyNS0uMjM5LS4yNC0uMzE0LS4xOTQtLjEyLjA2LS4wNDUuMjU1IDAgLjM3NS4xMi4zLjU4NS44MjUgMS4zOTYgMS4wOTUuNzA0LjIyNSAyLjQzLjM1OSA0LjUtLjQ1IDIuMzI0LS44OTkgNC4xMzktMy40MDUgMy42MTQtNS41MDVsLjA3My4wNjd6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 705,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 250,
                },
                '\n      Sass\n    '
              ),
              Ob.createElement(
                'text',
                { x: 705, y: 140, transform: 'scale(.1)', textLength: 250 },
                '\n      Sass\n    '
              )
            ))
        )
      }
      function Rc() {
        return (Rc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Sc = function (a) {
        return Ob.createElement(
          'svg',
          Rc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 101,
              height: 20,
              'aria-label': 'Code: HTML5',
            },
            a
          ),
          V ||
            (V = Ob.createElement(
              'linearGradient',
              { id: 'html5_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          W ||
            (W = Ob.createElement(
              'clipPath',
              { id: 'html5_svg__a' },
              Ob.createElement('rect', {
                width: 101,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          X ||
            (X = Ob.createElement(
              'g',
              { clipPath: 'url(#html5_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#e34f26',
                d: 'M54 0h47v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#html5_svg__b)',
                d: 'M0 0h101v20H0z',
              })
            )),
          Y ||
            (Y = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkhUTUw1PC90aXRsZT48cGF0aCBkPSJNMS41IDBoMjFsLTEuOTEgMjEuNTYzTDExLjk3NyAyNGwtOC41NjQtMi40MzhMMS41IDB6bTcuMDMxIDkuNzVsLS4yMzItMi43MTggMTAuMDU5LjAwMy4yMy0yLjYyMkw1LjQxMiA0LjQxbC42OTggOC4wMWg5LjEyNmwtLjMyNiAzLjQyNi0yLjkxLjgwNC0yLjk1NS0uODEtLjE4OC0yLjExSDYuMjQ4bC4zMyA0LjE3MUwxMiAxOS4zNTFsNS4zNzktMS40NDMuNzQ0LTguMTU3SDguNTMxeiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 765,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 370,
                },
                '\n      HTML5\n    '
              ),
              Ob.createElement(
                'text',
                { x: 765, y: 140, transform: 'scale(.1)', textLength: 370 },
                '\n      HTML5\n    '
              )
            ))
        )
      }
      function Tc() {
        return (Tc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Uc = function (a) {
        return Ob.createElement(
          'svg',
          Tc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 99,
              height: 20,
              'aria-label': 'Code: Vue.js',
            },
            a
          ),
          Z ||
            (Z = Ob.createElement(
              'linearGradient',
              { id: 'vue_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          $ ||
            ($ = Ob.createElement(
              'clipPath',
              { id: 'vue_svg__a' },
              Ob.createElement('rect', {
                width: 99,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          _ ||
            (_ = Ob.createElement(
              'g',
              { clipPath: 'url(#vue_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#4fc08d',
                d: 'M54 0h45v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#vue_svg__b)',
                d: 'M0 0h99v20H0z',
              })
            )),
          aa ||
            (aa = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlZ1ZS5qczwvdGl0bGU+PHBhdGggZD0iTTI0LDEuNjFIMTQuMDZMMTIsNS4xNiw5Ljk0LDEuNjFIMEwxMiwyMi4zOVpNMTIsMTQuMDgsNS4xNiwyLjIzSDkuNTlMMTIsNi40MWwyLjQxLTQuMThoNC40M1oiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 755,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 350,
                },
                '\n      Vue.js\n    '
              ),
              Ob.createElement(
                'text',
                { x: 755, y: 140, transform: 'scale(.1)', textLength: 350 },
                '\n      Vue.js\n    '
              )
            ))
        )
      }
      function Vc() {
        return (Vc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Wc = function (a) {
        return Ob.createElement(
          'svg',
          Vc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 72,
              height: 20,
              'aria-label': 'Code: MDX',
            },
            a
          ),
          ba ||
            (ba = Ob.createElement(
              'linearGradient',
              { id: 'mdx_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ca ||
            (ca = Ob.createElement(
              'clipPath',
              { id: 'mdx_svg__a' },
              Ob.createElement('rect', {
                width: 72,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          da ||
            (da = Ob.createElement(
              'g',
              { clipPath: 'url(#mdx_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h37v20H0z' }),
              Ob.createElement('path', {
                fill: '#f29400',
                d: 'M37 0h35v20H37z',
              }),
              Ob.createElement('path', {
                fill: 'url(#mdx_svg__b)',
                d: 'M0 0h72v20H0z',
              })
            )),
          ea ||
            (ea = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 195,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 270,
                  transform: 'scale(.1)',
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 195, y: 140, textLength: 270, transform: 'scale(.1)' },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 535,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 250,
                  transform: 'scale(.1)',
                },
                '\n      MDX\n    '
              ),
              Ob.createElement(
                'text',
                { x: 535, y: 140, textLength: 250, transform: 'scale(.1)' },
                '\n      MDX\n    '
              )
            ))
        )
      }
      function Xc() {
        return (Xc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Yc = function (a) {
        return Ob.createElement(
          'svg',
          Xc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 82,
              height: 20,
              'aria-label': 'Code: AuthO',
            },
            a
          ),
          fa ||
            (fa = Ob.createElement(
              'linearGradient',
              { id: 'autho_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ga ||
            (ga = Ob.createElement(
              'clipPath',
              { id: 'autho_svg__a' },
              Ob.createElement('rect', {
                width: 82,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          ha ||
            (ha = Ob.createElement(
              'g',
              { clipPath: 'url(#autho_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h37v20H0z' }),
              Ob.createElement('path', {
                fill: '#eb5424',
                d: 'M37 0h45v20H37z',
              }),
              Ob.createElement('path', {
                fill: 'url(#autho_svg__b)',
                d: 'M0 0h82v20H0z',
              })
            )),
          ia ||
            (ia = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 195,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 270,
                  transform: 'scale(.1)',
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 195, y: 140, textLength: 270, transform: 'scale(.1)' },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 585,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 350,
                  transform: 'scale(.1)',
                },
                '\n      AuthO\n    '
              ),
              Ob.createElement(
                'text',
                { x: 585, y: 140, textLength: 350, transform: 'scale(.1)' },
                '\n      AuthO\n    '
              )
            ))
        )
      }
      function Zc() {
        return (Zc =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var $c = function (a) {
        return Ob.createElement(
          'svg',
          Zc(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 87,
              height: 20,
              'aria-label': 'Code: SVG',
            },
            a
          ),
          ja ||
            (ja = Ob.createElement(
              'linearGradient',
              { id: 'svg_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ka ||
            (ka = Ob.createElement(
              'clipPath',
              { id: 'svg_svg__a' },
              Ob.createElement('rect', {
                width: 87,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          la ||
            (la = Ob.createElement(
              'g',
              { clipPath: 'url(#svg_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h54v20H0z' }),
              Ob.createElement('path', {
                fill: '#ffb13b',
                d: 'M54 0h33v20H54z',
              }),
              Ob.createElement('path', {
                fill: 'url(#svg_svg__b)',
                d: 'M0 0h87v20H0z',
              })
            )),
          ma ||
            (ma = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNWRzwvdGl0bGU+PHBhdGggZD0iTTEyIDBjLTEuNDk3IDAtMi43NDkuOTY1LTMuMjQ4IDIuMTdhMy40NSAzLjQ1IDAgMDAtLjIzOCAxLjQxNiAzLjQ1OSAzLjQ1OSAwIDAwLTEuMTY4LS44MzQgMy41MDggMy41MDggMCAwMC0xLjQ2My0uMjU2IDMuNTEzIDMuNTEzIDAgMDAtMi4zNjcgMS4wMmMtMS4wNiAxLjA1OC0xLjI2MyAyLjYyNS0uNzY0IDMuODMuMTc5LjQzMi40Ny44Mi44MiAxLjE1NGEzLjQ5IDMuNDkgMCAwMC0xLjQwMi4yNTJDLjk2NSA5LjI1MSAwIDEwLjUwMiAwIDEyYzAgMS40OTcuOTY1IDIuNzQ5IDIuMTcgMy4yNDguNDM3LjE4MS45MjQuMjUgMS40MTQuMjM2LS4zNTcuMzM4LS42NS43MzItLjgzMiAxLjE3LS40OTkgMS4yMDUtLjI5NSAyLjc3Mi43NjQgMy44MyAxLjA1OCAxLjA2IDIuNjI1IDEuMjYzIDMuODMuNzY0LjQzNy0uMTgxLjgzLS40NzYgMS4xNjgtLjgzMi0uMDE0LjQ5LjA1Ny45NzcuMjM4IDEuNDE0QzkuMjUxIDIzLjAzNSAxMC41MDIgMjQgMTIgMjRjMS40OTcgMCAyLjc0OS0uOTY1IDMuMjQ4LTIuMTdhMy40NSAzLjQ1IDAgMDAuMjM4LTEuNDE2Yy4zMzguMzU2LjczLjY1MyAxLjE2OC44MzQgMS4yMDUuNDk5IDIuNzcyLjI5NSAzLjgzLS43NjQgMS4wNi0xLjA1OCAxLjI2My0yLjYyNS43NjQtMy44M2EzLjQ1OSAzLjQ1OSAwIDAwLS44MzQtMS4xNjggMy40NSAzLjQ1IDAgMDAxLjQxNi0uMjM4QzIzLjAzNSAxNC43NDkgMjQgMTMuNDk4IDI0IDEyYzAtMS40OTctLjk2NS0yLjc0OS0yLjE3LTMuMjQ4YTMuNDU1IDMuNDU1IDAgMDAtMS40MTQtLjIzNmMuMzU3LS4zMzguNjUtLjczMi44MzItMS4xNy40OTktMS4yMDUuMjk1LTIuNzcyLS43NjQtMy44M2EzLjUxMyAzLjUxMyAwIDAwLTIuMzY3LTEuMDIgMy41MDggMy41MDggMCAwMC0xLjQ2My4yNTZjLS40MzcuMTgxLS44My40NzUtMS4xNjguODMyYTMuNDUgMy40NSAwIDAwLS4yMzgtMS40MTRDMTQuNzQ5Ljk2NSAxMy40OTggMCAxMiAwem0tLjA0MSAxLjYxM2ExLjkwMiAxLjkwMiAwIDAxMS4zODcgMy4yNDZ2My44OTNMMTYuMDk4IDZBMS45MDIgMS45MDIgMCAxMTE4IDcuOTAybC0yLjc1MiAyLjc1MmgzLjg5M2ExLjkwMiAxLjkwMiAwIDExMCAyLjY5MmgtMy44OTNMMTggMTYuMDk4QTEuOTAyIDEuOTAyIDAgMTExNi4wOTggMThsLTIuNzUyLTIuNzUydjMuODkzYTEuOTAyIDEuOTAyIDAgMTEtMi42OTIgMHYtMy44OTNMNy45MDIgMThBMS45MDIgMS45MDIgMCAxMTYgMTYuMDk4bDIuNzUyLTIuNzUySDQuODU5YTEuOTAyIDEuOTAyIDAgMTEwLTIuNjkyaDMuODkzTDYgNy45MDJBMS45MDIgMS45MDIgMCAxMTcuOTAyIDZsMi43NTIgMi43NTJWNC44NTlhMS45MDIgMS45MDIgMCAwMTEuMzA1LTMuMjQ2eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 365,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 270,
                },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                { x: 365, y: 140, transform: 'scale(.1)', textLength: 270 },
                '\n      Code\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 695,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      SVG\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 695,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 230,
                },
                '\n      SVG\n    '
              )
            ))
        )
      }
      function _c() {
        return (_c =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var ad = function (a) {
        return Ob.createElement(
          'svg',
          _c(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 109,
              height: 20,
              'aria-label': 'Tool: Webpack',
            },
            a
          ),
          na ||
            (na = Ob.createElement(
              'linearGradient',
              { id: 'webpack_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          oa ||
            (oa = Ob.createElement(
              'clipPath',
              { id: 'webpack_svg__a' },
              Ob.createElement('rect', {
                width: 109,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          pa ||
            (pa = Ob.createElement(
              'g',
              { clipPath: 'url(#webpack_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#8dd6f9',
                d: 'M50 0h59v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#webpack_svg__b)',
                d: 'M0 0h109v20H0z',
              })
            )),
          qa ||
            (qa = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPldlYnBhY2s8L3RpdGxlPjxwYXRoIGQ9Ik0yMi4xOTg3IDE4LjQ5OGwtOS43Njk5IDUuNTAyMnYtNC4yODU1bDYuMDg3Mi0zLjMzMzggMy42ODI2IDIuMTE3em0uNjY4My0uNjAyNlY2LjM4ODRsLTMuNTc1MiAyLjA1NDR2Ny4zOTZ6bS0yMS4wNjU3LjYwMjZsOS43Njk5IDUuNTAyMnYtNC4yODU1TDUuNDg0IDE2LjM4MDlsLTMuNjgyNiAyLjExN3ptLS42NjgzLS42MDI2VjYuMzg4NGwzLjU3NTEgMi4wNTQ0djcuMzk2em0uNDE4My0xMi4yNTE1bDEwLjAxOTktNS42NDR2NC4xNDM0TDUuMTUyIDcuNjU4NmwtLjA0ODkuMDI4em0yMC44OTc1IDBsLTEwLjAyLTUuNjQ0djQuMTQzNGw2LjQxOTIgMy41MTU0LjA0ODkuMDI4IDMuNTUxOC0yLjA0Mjd6bS0xMC44Nzc1IDEzLjA5NmwtNi4wMDU2LTMuMjg3M1Y4LjkzODRsNi4wMDU0IDMuNDUyNXY2LjM0OXptLjg1NzUgMGw2LjAwNTMtMy4yODczVjguOTM4NGwtNi4wMDUzIDMuNDUyNXpNNS45NzI0IDguMTg0NWw2LjAyODctMy4zMDE1TDE4LjAzIDguMTg0NWwtNi4wMjg4IDMuNDY2NXoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 785,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 490,
                },
                '\n      Webpack\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 785,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 490,
                },
                '\n      Webpack\n    '
              )
            ))
        )
      }
      function bd() {
        return (bd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var cd = function (a) {
        return Ob.createElement(
          'svg',
          bd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 91,
              height: 20,
              'aria-label': 'Tool: Babel',
            },
            a
          ),
          ra ||
            (ra = Ob.createElement(
              'linearGradient',
              { id: 'babel_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          sa ||
            (sa = Ob.createElement(
              'clipPath',
              { id: 'babel_svg__a' },
              Ob.createElement('rect', {
                width: 91,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          ta ||
            (ta = Ob.createElement(
              'g',
              { clipPath: 'url(#babel_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#f9dc3e',
                d: 'M50 0h41v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#babel_svg__b)',
                d: 'M0 0h91v20H0z',
              })
            )),
          ua ||
            (ua = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkJhYmVsPC90aXRsZT48cGF0aCBkPSJNMTUuNzYgMGMtMS42MDMuMTQ3LTMuNzE5LjcxMy02LjMxNyAxLjcxOWEyMi4zNjYgMjIuMzY2IDAgMDEtMi40NCAxLjUzOWwuMDEuMTU4Yy4wNjQgMCAuMTM2LS4wNDMuMjQtLjA5Ni4xMDYtLjAxLjE2OS4wMzIuMTY5LjEzN2wuMTY4LS4wOTQuMDg0LS4wMTEuMDEuMDc0Yy4wMS4wNzMtLjU2Ni41MjMtMS43MDcgMS4zM2wuMDkzLjE0Ni0uMDg0LjAxMi0uMTc3LS4wNjRjMCAuMDUyLS4wNzMuMDg1LS4yNC4wOTVsLjAxLjA4NC4xODkuMjFhLjY3My42NzMgMCAwMS0uMjUyLS4wNTNjLS4zNjcuMDMxLS43MzQuMzAzLTEuMDkuODA2bC4wOTQuMTQ3Yy4zMTQtLjI4My40OTItLjQzLjU0NC0uNDNsLjAyMi4yM2MtLjA1MiAwLS4xMzYuMDQyLS4yNC4wOTRsLjE5OS4yOTVBNS44NiA1Ljg2IDAgMDE2LjI5IDUuMjkxYy4yMy4wNjMuMzQ2LjEyNS4zNDYuMjA5bC4xNjgtLjAxYzEuMjI1LS45MTEgMi40NC0xLjU2MiAzLjY0NC0xLjk3bC4wMTIuMTU4Yy0uMjIuMzM1LS4zNzcuNTAxLS40NjEuNTExLjAxLjExNi4wNTIuMjEuMTE1LjMwNS4wMjEuMjEtLjUyNCAxLjU4My0xLjYzNSA0LjEzOS0yLjUzNSA1LjkzLTQuNjUxIDEwLjMwNy02LjM1OSAxMy4xNTYgMCAuMDUyLjA0MS4xMzYuMDk0LjIzLjQxOS0uMTA0LjY5MS0uMTk3LjgwNi0uMzAybC4wOTYtLjAxMi4wMS4xNTguMTU4LS4wMTEuMTY2LS4wOTRjMCAuMDUyLjA2My4wNzMuMTY4LjA2MmwuMDEyLjE1OWMuMDEuMTU3LS4wNzUuMzk3LS4yNzQuNzIyLS4xNzguMi0uMzU1LjYwNy0uNTU0IDEuMjI1bC4wMS4wNzQuMTU4LS4wMWMuNjgtLjc2NCAxLjIwNC0xLjUyIDEuNTYtMi4yNTQgMi4wMDEtLjU4NiAzLjUyLTEuMTYyIDQuNTc4LTEuNzI4IDEuMDU4LS4wOTQgMS44NzYtLjM2NSAyLjQyLS44MjZsLS4wMTEtLjA4NC0uMzk5LjExNS0uMDk0LjAxLS4wMS0uMDg0Yy43NzYtLjExNiAxLjMyLS4yOTMgMS42MTQtLjUyNCAxLjUxOS0xLjE3MyAyLjY2LTIgMy40MzUtMi40OTIgMi40LTEuNzYgMy41MzEtMy40NTcgMy4zOTUtNS4wNy0uMDEtLjE2OC0uNTQ1LS44MjgtMS41ODItMS45OC0uMDIxLS4yMi4zNDUtLjUzNSAxLjA3OC0uOTU0bDIuMDg2LTEuODM0Yy40Ni0uNTk3Ljc0NC0xLjU2LjgzOC0yLjg5bC0uMDMxLS4zMTVjLS4wODQtLjkzMi0uNzU2LTEuNjg3LTIuMDM0LTIuMjY0QzE5LjA2LjMwMyAxNy43MDguMDMxIDE1Ljc2IDB6bTIuNTI1IDEuMDM3YzEuNTUuMDYzIDIuMzQ3LjMzNSAyLjM4OS44MTdsLS4wNjMuMTU4LTIuMzI2LS45NzV6bS0xLjQ4MiAxLjMxN2MxLjA2My0uMDE2IDEuNjE3LjI2NyAxLjY3Mi44NjNsLjE1Ni0uMDEyLS4wMzEtLjM5OC4xNjgtLjAxYy40MDguMjIuNjI3LjQ5Mi42NDguODE2LjAyMS4yMi0uMDk0LjQ5NC0uMzU1LjgxOS0uMTA1LjAxLS4xNjgtLjA2NC0uMTc4LS4yMjFsLS4xNjguMDEyLS4wNDEuNDdjLS43MDIgMS4wNDgtMS4yMDUgMS41ODItMS41MiAxLjYxNC0uMjgzLjM4Ny0uNDYyLjU4Ny0uNTM1LjU5Ny0uMjIuMjYyLS44MTYuNzEyLTEuOCAxLjM0LS4zMjUuMDMyLTEuNTMxLjQ5My0zLjYxNiAxLjQwNGEuNTk1LjU5NSAwIDAwLS4zMzQtLjA1MmwtLjAxMi0uMTQ3Yy0uMDItLjMwNC4xMDctLjY4MS40MS0xLjE0Mi4xNTgtLjg2LjMzNS0xLjM1Mi41MzQtMS40NjdsMS43MzgtMy45MDZjLS4wMi0uMjQxLjM0Ny0uNDMgMS4xMTEtLjU1NWwuMjUyLS4wMjIuMDIuMjIxYTUwLjM4NyA1MC4zODcgMCAwMTEuMzk0LS4yYy4xNzMtLjAxNC4zMzUtLjAyMi40ODctLjAyNHptMy42MTkuMzloLjAyN2MuMTM5LjAxMi4yODguMjYzLjQ0Ni43NDRsLjAxLjE0N2MtLjA4NS4wMS0uMjQtLjI0Mi0uNDcxLS43NDRsLS4wMTItLjE0N3ptLTkuODM2IDIuNDgzaC4wNzJsLjAyMi4yM2MtLjA3NC4wMS0uMTc3LjExNi0uMzAzLjMzNmwtLjAxMi0uMTU2Yy4xNDctLjE3OC4yMi0uMzE2LjIyLS40MXpNNS42IDUuMzU0bC4wMS4wNzJjLS4wNTMgMC0uMTM2LjA0My0uMjQuMDk1bC0uMDg1LjAxLS4wMS0uMTQ2LjMyNS0uMDMxek05Ljg4NSA2Ljg2bC4wMzEuMzE1LS4wODQuMDEtLjAzMS0uMzEzLjA4NC0uMDEyem0tLjIuNTY3Yy0uMDIuMjYyLS4wODQuMzk3LS4yMi40MDhsLS4wODQuMDFjLjA5NC0uMTc4LjE0Ny0uMzAzLjEzNy0uMzk3bC4xNjgtLjAyMXptLS4zNDUuODE2bC4wMS4wNzQtLjE0Ny4yNS0uMTU4LjAxMi0uMDEtLjA3NGMuMTU3LS4wMS4yMzEtLjA5My4yMi0uMjVsLjA4NS0uMDEyem0tLjM1OC43MzVsLS4wNC4zODYtLjA4NS4wMS0uMDMtLjM4Ny4xNTUtLjAxem04LjQ5Ny4yOGwuMzQ1LjIxMmMuMDEuMTA0LS4wNDIuMTY3LS4xNDYuMTc3LS4xNDctLjA5NC0uMjYyLS4xMzYtLjM0Ni0uMTM2bC0uMDIxLS4yMy4xNjgtLjAyMnptLTYuNjUzLjg5MWwuMDEyLjE0Ny0uMzI2LjAzMy0uMDEtLjE0OC4zMjQtLjAzMnptNS4zNjMuNTQ1Yy4yMy4xMDUuMzQ3LjIxLjM1OC4yOTNsLjAxLjA3NWMtLjIyLjAyLS40Mi0uMDk1LS42MDgtLjM0NmwuMjQtLjAyMnptMi42LjI1MmMuMTc4LjA3NC4yNjEuMTQ4LjI3Mi4yMjFsLjA1Mi42MTdjLS4wNzMuMTY4LS4xNDYuMjUyLS4yMy4yNTJsLS4wOTQtMS4wOXptLTQuMTk1LjA2NWMuODQtLjAxNCAxLjQ4Mi4xODQgMS45MjIuNjA1bC4wMy4zMTVjLS4zNzYgMS4wOS0uNzk1IDEuNzE5LTEuMjQ1IDEuOTE4bC0yLjA5NiAxLjY2NmMtMS41NiAxLjAyNi0yLjQgMS41MzgtMi41MjUgMS41NDgtMi40ODMgMS4zNzMtNC4wMzIgMi4wNzUtNC42MyAyLjEyN2wtLjA5NS4wMWMuMDg0LS4yOTMgMS4xODUtMi41NTUgMy4zMjItNi44MDguOTQzLS4wODQgMi40My0uNTI1IDQuNDUyLTEuMzJsLjQ5Mi0uMDQyYy4xMjgtLjAxLjI1My0uMDE3LjM3My0uMDJ6bS0zLjA1NS40OWwuMDEuMDc0LS4zMzQuMDMxLS4wMTItLjA3NC4zMzYtLjAzMXptLTUuMjI2IDUuMDdjLS4xMDUuNTM1LS4yMjEuODA4LS4zMzYuODE5bC0uMDEtLjA3NWMtLjAyMS0uMjcyLjA5NC0uNTEzLjM0Ni0uNzQ0em03LjEwMS4zMzZsLjAxLjE0N2MuMDEuMDYzLS4yMy4yNjEtLjcwMS42MDctMS4zOTQuNjgxLTIuMjEgMS4xNTItMi40NTIgMS4zOTMtMS41MDguNTIzLTIuMjUyLjg0OS0yLjI0Mi45NzQtMS4zNC41MzUtMi4yMi45MjMtMi42MzggMS4xNjQtLjA5NS4wMS0uMjQxLS4wMzEtLjQzLS4xMTUtLjAyMS0uMjcyLjA5My0uNDk0LjM2NS0uNjcyLjIzLS4wMi40NjMuMDExLjY3Mi4xMDYuMjUxLS4xMjYuNjgtLjI3NCAxLjI5OS0uNDJsLS4wMTItLjE1Ni0uNDkyLjA0Yy4wNjMtLjA4My41MzUtLjMwMyAxLjQzNi0uNjdsLjI1MS0uMDIuMDEuMDczYy0uNDE5LjAzMi0uNjYuMTY3LS43MTMuMzg3LjAxLjA5NC4wNjQuMTQ3LjE2OC4xMzcuMzA0LS4yMS40NjEtLjMyNC40NjEtLjM1Ni42MDgtLjExNSAyLjI3NC0uOTk1IDUuMDA4LTIuNjE5em0tNy41ODQuNzIzbC4wMS4wNzJjLjAxLjEwNS0uMDQyLjE3LS4xNDcuMThsLS4wMS0uMDc0Yy0uMDEtLjA5NS4wNDItLjE1Ny4xNDctLjE3OHptMy43Ny45MzdjLjA4OS0uMDAyLjEzOS4wNDkuMTQ4LjEzMS0uMTk5LjAyMS0uNTY2LjE3OC0xLjEyMS40OTJsLS4wODQuMDEtLjAxLS4xNTZhMS41ODYgMS41ODYgMCAwMDEuMDI2LS40N2MuMDE0LS4wMDMuMDI4LS4wMDYuMDQtLjAwN3ptLTMuNjY0IDEuMjQzbC4wMS4wODJjLS4wNjQgMC0uMTM4LjA0My0uMjQzLjA5NWwtLjE1Ni4wMWMtLjAxLS4wNzMuMDMyLS4xMzYuMTM3LS4xNjhsLjI1Mi0uMDJ6bS0xLjkxOC45NTNsLjE3Ny4wNzJjLS4wNjMuNDcxLS4xOTguNzEzLS40NC43MzRhMS4wNzYgMS4wNzYgMCAwMC0uNTEzLS4xMDVsLS4wMjEtLjIzYy0uMDEtLjA5NS4wNDMtLjE0Ny4xNTgtLjE3OC4xMDUtLjAxLjE2Ny4wNjEuMTc4LjIxOC4yODItLjM0NS40NC0uNTExLjQ2LS41MTFaIi8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 695,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 310,
                },
                '\n      Babel\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 695,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 310,
                },
                '\n      Babel\n    '
              )
            ))
        )
      }
      function dd() {
        return (dd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var ed = function (a) {
        return Ob.createElement(
          'svg',
          dd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 81,
              height: 20,
              'aria-label': 'Tool: Jest',
            },
            a
          ),
          va ||
            (va = Ob.createElement(
              'linearGradient',
              { id: 'jest_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          wa ||
            (wa = Ob.createElement(
              'clipPath',
              { id: 'jest_svg__a' },
              Ob.createElement('rect', {
                width: 81,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          xa ||
            (xa = Ob.createElement(
              'g',
              { clipPath: 'url(#jest_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#c21325',
                d: 'M50 0h31v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#jest_svg__b)',
                d: 'M0 0h81v20H0z',
              })
            )),
          ya ||
            (ya = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkplc3Q8L3RpdGxlPjxwYXRoIGQ9Ik0yMi4yNTEgMTEuODJhMy4xMTcgMy4xMTcgMCAwIDAtMi4zMjgtMy4wMUwyMi45MTEgMEg4LjEwNEwxMS4xIDguODM4YTMuMTE2IDMuMTE2IDAgMCAwLTIuMjQ0IDIuOTg4YzAgMS4wNDMuNTIgMS45NjcgMS4zMTMgMi41MzZhOC4yNzkgOC4yNzkgMCAwIDEtMS4wODQgMS4yNDQgOC4xNCA4LjE0IDAgMCAxLTIuNTUgMS42NDdjLS44MzQtLjU2My0xLjE5NS0xLjU1Ni0uODY5LTIuNDQ2YTMuMTEgMy4xMSAwIDAgMC0uOTEtNi4wOCAzLjExNyAzLjExNyAwIDAgMC0zLjExMyAzLjExM2MwIC44NDguMzQ3IDEuNjI2LjkwMyAyLjE4Mi0uMDQ4LjA5Ny0uMDk3LjE5NS0uMTQ2LjI5OS0uNDY1Ljk1OS0uOTkzIDIuMDQzLTEuMTk1IDMuMjU5LS40MDMgMi40MzIuMjU3IDQuMzg0IDEuODQ5IDUuNDg5QTUuMDkzIDUuMDkzIDAgMCAwIDUuOTk5IDI0YzEuODI3IDAgMy42ODItLjkxNyA1LjQ3NS0xLjgwNyAxLjI3OS0uNjMyIDIuNTk5LTEuMjkyIDMuODk4LTEuNjEyLjQ4LS4xMTguOTgtLjE4NyAxLjUwOC0uMjY0IDEuMDctLjE1MyAyLjE3NS0uMzEyIDMuMTY4LS44OWE0LjQ4MiA0LjQ4MiAwIDAgMCAyLjE4Mi0zLjA5MWMuMTc0LS45OTQgMC0xLjk5NC0uNDQ0LTIuODcuMjk4LS40OC40NjUtMS4wNDIuNDY1LTEuNjQ3em0tMS4zNTUgMGMwIC45NjUtLjc4NSAxLjc1LTEuNzUgMS43NWExLjc1MyAxLjc1MyAwIDAgMS0xLjA4NS0zLjEyNmwuMDA3LS4wMDdjLjA1Ni0uMDQyLjExOC0uMDg0LjE4LS4xMjUgMCAwIC4wMDggMCAuMDA4LS4wMDcuMDI4LS4wMTQuMDU1LS4wMzUuMDgzLS4wNS4wMDcgMCAuMDE0LS4wMDYuMDIxLS4wMDYuMDI4LS4wMTQuMDYzLS4wMjguMDk3LS4wNDIuMDM1LS4wMTQuMDctLjAyNy4wOTgtLjA0MS4wMDcgMCAuMDEzLS4wMDcuMDItLjAwNy4wMjgtLjAwNy4wNTYtLjAyMS4wODQtLjAyOC4wMDcgMCAuMDItLjAwNy4wMjgtLjAwNy4wMzQtLjAwNy4wNjItLjAxNC4wOTctLjAyaC4wMDdsLjEwNC0uMDIyYy4wMDcgMCAuMDIgMCAuMDI4LS4wMDcuMDI4IDAgLjA1NS0uMDA3LjA4My0uMDA3aC4wMzVjLjAzNSAwIC4wNy0uMDA3LjExMS0uMDA3aC4wOWMuMDI4IDAgLjA1IDAgLjA3Ny4wMDdoLjAxNGMuMDU1LjAwNy4xMTEuMDE0LjE2Ny4wMjhhMS43NjYgMS43NjYgMCAwIDEgMS4zOTYgMS43MjN6TTEwLjA0MyAxLjM5aDEwLjkzbC0yLjUwOSA3LjRjLS4xMDQuMDItLjIwOC4wNTUtLjMxMi4wOWwtMi42NC01LjM4NS0yLjY0OCA1LjM1Yy0uMTA0LS4wMzQtLjIxNi0uMDU1LS4zMjctLjA3NmwtMi40OTQtNy4zOHptNC45NjggOS44MjVhMy4wODMgMy4wODMgMCAwIDAtLjkzOC0xLjY2OGwxLjQzOC0yLjkwNCAxLjQ1MiAyLjk2N2MtLjQzLjQzLS43NDMuOTgtLjg2OCAxLjYwNUgxNS4wMXptLTMuNDgxLTEuMDk4Yy4wMzQtLjAwNy4wNjItLjAxNC4wOTctLjAyaC4wMmMuMDI5LS4wMDguMDU2LS4wMDguMDg0LS4wMTVoLjAyOGMuMDI4IDAgLjA0OS0uMDA3LjA3Ni0uMDA3aC4yNzFjLjAyOCAwIC4wNDkuMDA3LjA3LjAwNy4wMTQgMCAuMDIgMCAuMDM1LjAwNy4wMjcuMDA3LjA0OC4wMDcuMDc2LjAxNC4wMDcgMCAuMDE0IDAgLjAyOC4wMDdsLjA5Ny4wMmguMDA3Yy4wMjguMDA4LjA1Ni4wMTUuMDgzLjAyOS4wMDcgMCAuMDE0LjAwNy4wMjguMDA3LjAyMS4wMDcuMDQ5LjAxNC4wNy4wMjcuMDA3IDAgLjAxNC4wMDcuMDIuMDA3LjAyOC4wMTQuMDU2LjAyMS4wODQuMDM1aC4wMDdhLjM3NC4zNzQgMCAwIDEgLjA5LjA0OWguMDA3Yy4wMjguMDE0LjA1Ni4wMzQuMDg0LjA0OC4wMDcgMCAuMDA3LjAwNy4wMTMuMDA3LjAyOC4wMTQuMDUuMDM1LjA3Ny4wNDlsLjAwNy4wMDdjLjA4My4wNjIuMTYuMTMyLjIzNi4yMDFsLjAwNy4wMDdhMS43NDcgMS43NDcgMCAwIDEgLjQ4IDEuMjA5IDEuNzUyIDEuNzUyIDAgMCAxLTMuNTAyIDAgMS43NDIgMS43NDIgMCAwIDEgMS4zMi0xLjY5NXptLTYuODM4LS4wNDljLjk2NiAwIDEuNzUxLjc4NiAxLjc1MSAxLjc1MXMtLjc4NSAxLjc1MS0xLjc1IDEuNzUxLTEuNzUyLS43ODUtMS43NTItMS43NS43ODYtMS43NTIgMS43NTEtMS43NTJ6bTE2LjE2MyA2LjAyNWEzLjA3IDMuMDcgMCAwIDEtMS41MDggMi4xMzNjLS43NTguNDM4LTEuNjg5LjU3Ny0yLjY2OS43MTZhMTcuMjkgMTcuMjkgMCAwIDAtMS42NC4yOTFjLTEuNDQ1LjM1NS0yLjgzNCAxLjA1LTQuMTgyIDEuNzE3LTEuNzI0Ljg1NC0zLjM1IDEuNjYtNC44NTcgMS42NmEzLjY0NSAzLjY0NSAwIDAgMS0yLjE1NC0uNjg4Yy0xLjUyOS0xLjA1Ni0xLjQ1My0zLjAzNi0xLjI3Mi00LjEyLjE2Ny0xLjAxNS42MzItMS45NjYgMS4wNzctMi44NzcuMDI4LS4wNTUuMDQ5LS4xMDQuMDc3LS4xNi4xNTIuMDU2LjMxMi4wOTguNDc5LjEyNi0uMjY0IDEuNDczLjQ4NiAyLjk5NCAxLjk0NiAzLjc0NWwuMjY0LjEzOS4yODQtLjEwNGMxLjIxNi0uNDMxIDIuMzQyLTEuMTMzIDMuMzM2LTIuMDcxYTkuMzM0IDkuMzM0IDAgMCAwIDEuNDQ1LTEuNzE2Yy4xNi4wMjcuMzIuMDM0LjQ4LjAzNGEzLjExNyAzLjExNyAwIDAgMCAzLjAwOC0yLjMyN2gxLjE2N2EzLjEwOSAzLjEwOSAwIDAgMCAzLjAxIDIuMzI3Yy41NzYgMCAxLjExLS4xNiAxLjU3LS40My4xOC41Mi4yMzYgMS4wNjMuMTM5IDEuNjA1eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 645,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 210,
                },
                '\n      Jest\n    '
              ),
              Ob.createElement(
                'text',
                { x: 645, y: 140, transform: 'scale(.1)', textLength: 210 },
                '\n      Jest\n    '
              )
            ))
        )
      }
      function fd() {
        return (fd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var gd = function (a) {
        return Ob.createElement(
          'svg',
          fd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 103,
              height: 20,
              'aria-label': 'Tool: Cypress',
            },
            a
          ),
          za ||
            (za = Ob.createElement(
              'linearGradient',
              { id: 'cypress_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Aa ||
            (Aa = Ob.createElement(
              'clipPath',
              { id: 'cypress_svg__a' },
              Ob.createElement('rect', {
                width: 103,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Ba ||
            (Ba = Ob.createElement(
              'g',
              { clipPath: 'url(#cypress_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#17202c',
                d: 'M50 0h53v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#cypress_svg__b)',
                d: 'M0 0h103v20H0z',
              })
            )),
          Ca ||
            (Ca = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkN5cHJlc3M8L3RpdGxlPjxwYXRoIGQ9Ik0xMS45OTggMEM1LjM2NiAwIDAgNS4zNjcgMCAxMmExMS45OTIgMTEuOTkyIDAgMCAwIDEyIDEyYzYuNjMzIDAgMTItNS4zNjcgMTItMTItLjAwMS02LjYzMy01LjQxMi0xMi0xMi4wMDItMTJ6TTYuMzcgMTQuNTc1Yy4zOTIuNTIzLjkxNi43NDIgMS42NTcuNzQyLjM1IDAgLjY5OS0uMDQ0IDEuMDA0LS4xNzUuMzA2LS4xMy42NTUtLjMwNiAxLjA5LS41NjdsMS4yMjMgMS43NDVjLTEuMDAzLjgzLTIuMTM4IDEuMjIyLTMuNDQ3IDEuMjIyLTEuMDQ4IDAtMS45Mi0uMjE4LTIuNzA1LS42NTRhNC4zOTMgNC4zOTMgMCAwIDEtMS43NDYtMS45MmMtLjM5Mi0uODMtLjYxMS0xLjc5LS42MTEtMi45MjUgMC0xLjA5LjIxOS0yLjA5NC42MS0yLjkyM2E0LjYyMyA0LjYyMyAwIDAgMSAxLjc0OC0yLjAwN2MuNzQxLS40OCAxLjY1Ny0uNjk4IDIuNjYxLS42OTguNjk5IDAgMS4zNTMuMDg3IDEuODc3LjMwNWE1LjY0IDUuNjQgMCAwIDEgMS42MTQuOTZsLTEuMjIyIDEuNjU4QTQuNzg2IDQuNzg2IDAgMCAwIDkuMTIgOC43N2MtLjMwNS0uMTMtLjY5OC0uMTc0LTEuMDQ4LS4xNzQtMS40ODMgMC0yLjIyNSAxLjEzNC0yLjIyNSAzLjQ0Ni0uMDQzIDEuMTguMTc1IDIuMDA4LjUyNCAyLjUzMkg2LjM3em0xMiAyLjcwNWMtLjQzNiAxLjM1My0xLjA5MSAyLjM1Ny0yLjAwOCAzLjA5OC0uOTE2Ljc0My0yLjEzOCAxLjEzNS0zLjY2NSAxLjI2NmwtLjMwNS0yLjA1YzEuMDAzLS4xMzIgMS43NDUtLjM1IDIuMjI1LS43LjE3NC0uMTMuNTI0LS41MjMuNTI0LS41MjNMMTEuNTE5IDYuNzY0aDMuMDFsMi4wOTUgOC42ODMgMi4yMjYtOC42ODNoMi45MjNMMTguMzcgMTcuMjh6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 755,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 430,
                },
                '\n      Cypress\n    '
              ),
              Ob.createElement(
                'text',
                { x: 755, y: 140, transform: 'scale(.1)', textLength: 430 },
                '\n      Cypress\n    '
              )
            ))
        )
      }
      function hd() {
        return (hd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var id = function (a) {
        return Ob.createElement(
          'svg',
          hd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 99,
              height: 20,
              'aria-label': 'Tool: Next.js',
            },
            a
          ),
          Da ||
            (Da = Ob.createElement(
              'linearGradient',
              { id: 'next_js_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Ea ||
            (Ea = Ob.createElement(
              'clipPath',
              { id: 'next_js_svg__a' },
              Ob.createElement('rect', {
                width: 99,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Fa ||
            (Fa = Ob.createElement(
              'g',
              { clipPath: 'url(#next_js_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', { d: 'M50 0h49v20H50z' }),
              Ob.createElement('path', {
                fill: 'url(#next_js_svg__b)',
                d: 'M0 0h99v20H0z',
              })
            )),
          Ga ||
            (Ga = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk5leHQuanM8L3RpdGxlPjxwYXRoIGQ9Ik0xMS41NzI1IDBjLS4xNzYzIDAtLjMwOTguMDAxMy0uMzU4NC4wMDY3LS4wNTE2LjAwNTMtLjIxNTkuMDIxLS4zNjM2LjAzMjgtMy40MDg4LjMwNzMtNi42MDE3IDIuMTQ2My04LjYyNCA0Ljk3MjhDMS4xMDA0IDYuNTg0LjM4MDIgOC4zNjY2LjEwODIgMTAuMjU1Yy0uMDk2Mi42NTktLjEwOC44NTM3LS4xMDggMS43NDc0cy4wMTIgMS4wODg0LjEwOCAxLjc0NzZjLjY1MiA0LjUwNiAzLjg1OTEgOC4yOTE5IDguMjA4NyA5LjY5NDUuNzc4OS4yNTExIDEuNi40MjIzIDIuNTMzNy41MjU1LjM2MzYuMDQgMS45MzU0LjA0IDIuMjk5IDAgMS42MTE3LS4xNzgzIDIuOTc3Mi0uNTc3IDQuMzIzNy0xLjI2NDMuMjA2NS0uMTA1Ni4yNDY0LS4xMzM3LjIxODMtLjE1NzMtLjAxODgtLjAxMzktLjg5ODctMS4xOTM4LTEuOTU0My0yLjYybC0xLjkxOS0yLjU5Mi0yLjQwNDctMy41NTgzYy0xLjMyMzEtMS45NTY0LTIuNDExNy0zLjU1Ni0yLjQyMTEtMy41NTYtLjAwOTQtLjAwMjYtLjAxODcgMS41Nzg3LS4wMjM1IDMuNTA5LS4wMDY3IDMuMzgwMi0uMDA5MyAzLjUxNjItLjA1MTYgMy41OTYtLjA2MS4xMTUtLjEwOC4xNjE4LS4yMDY0LjIxMzQtLjA3NS4wMzc0LS4xNDA4LjA0NDUtLjQ5NS4wNDQ1aC0uNDA2bC0uMTA3OC0uMDY4YS40MzgzLjQzODMgMCAwMS0uMTU3Mi0uMTcxMmwtLjA0OTMtLjEwNTYuMDA1My00LjcwMy4wMDY3LTQuNzA1NC4wNzI2LS4wOTE1Yy4wMzc2LS4wNDkzLjExNzQtLjExMjUuMTczNi0uMTQzLjA5NjItLjA0Ny4xMzM4LS4wNTE3LjUzOTYtLjA1MTcuNDc4NyAwIC41NTg0LjAxODcuNjgyNy4xNTQ3LjAzNTMuMDM3NyAxLjMzNzMgMS45OTg3IDIuODk1IDQuMzYwOGExMDc2MC40MzMgMTA3NjAuNDMzIDAgMDA0LjczNDQgNy4xNzA2bDEuOTAwMiAyLjg3ODIuMDk2LS4wNjMzYy44NTE4LS41NTM2IDEuNzUyNS0xLjM0MTggMi40NjU3LTIuMTYyNyAxLjUxNzktMS43NDI5IDIuNDk2My0zLjg2OCAyLjgyNDctNi4xMzQuMDk2MS0uNjU5MS4xMDc4LS44NTQuMTA3OC0xLjc0NzUgMC0uODkzNy0uMDEyLTEuMDg4NC0uMTA3OC0xLjc0NzYtLjY1MjItNC41MDYtMy44NTkyLTguMjkxOS04LjIwODctOS42OTQ1LS43NjcyLS4yNDg3LTEuNTgzNi0uNDItMi40OTg1LS41MjMyLS4xNjktLjAxNzYtMS4wODM1LS4wMzY2LTEuNjEyMy0uMDM3em00LjA2ODUgNy4yMTdjLjM0NzMgMCAuNDA4Mi4wMDUzLjQ4NTcuMDQ3LjExMjcuMDU2Mi4yMDQuMTY0Mi4yMzcuMjc2Ny4wMTg2LjA2MS4wMjM0IDEuMzY1My4wMTg2IDQuMzA0NGwtLjAwNjcgNC4yMTc1LS43NDM2LTEuMTQtLjc0NjEtMS4xNHYtMy4wNjZjMC0xLjk4Mi4wMDkzLTMuMDk2My4wMjM0LTMuMTUwMi4wMzc1LS4xMzEzLjExOTYtLjIzNDYuMjMyMy0uMjk1NS4wOTYxLS4wNDk0LjEzMTMtLjA1NC40OTk3LS4wNTR6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 735,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 390,
                },
                '\n      Next.js\n    '
              ),
              Ob.createElement(
                'text',
                { x: 735, y: 140, transform: 'scale(.1)', textLength: 390 },
                '\n      Next.js\n    '
              )
            ))
        )
      }
      function jd() {
        return (jd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var kd = function (a) {
        return Ob.createElement(
          'svg',
          jd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 95,
              height: 20,
              'aria-label': 'Tool: Vercel',
            },
            a
          ),
          Ha ||
            (Ha = Ob.createElement(
              'linearGradient',
              { id: 'vercel_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Ia ||
            (Ia = Ob.createElement(
              'clipPath',
              { id: 'vercel_svg__a' },
              Ob.createElement('rect', {
                width: 95,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Ja ||
            (Ja = Ob.createElement(
              'g',
              { clipPath: 'url(#vercel_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', { d: 'M50 0h45v20H50z' }),
              Ob.createElement('path', {
                fill: 'url(#vercel_svg__b)',
                d: 'M0 0h95v20H0z',
              })
            )),
          Ka ||
            (Ka = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlZlcmNlbDwvdGl0bGU+PHBhdGggZD0iTTI0IDIyLjUyNUgwbDEyLTIxLjA1IDEyIDIxLjA1eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 715,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 350,
                },
                '\n      Vercel\n    '
              ),
              Ob.createElement(
                'text',
                { x: 715, y: 140, transform: 'scale(.1)', textLength: 350 },
                '\n      Vercel\n    '
              )
            ))
        )
      }
      function ld() {
        return (ld =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var md = function (a) {
        return Ob.createElement(
          'svg',
          ld(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 123,
              height: 20,
              'aria-label': 'Tool: PostgreSQL',
            },
            a
          ),
          La ||
            (La = Ob.createElement(
              'linearGradient',
              { id: 'postgresql_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Ma ||
            (Ma = Ob.createElement(
              'clipPath',
              { id: 'postgresql_svg__a' },
              Ob.createElement('rect', {
                width: 123,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Na ||
            (Na = Ob.createElement(
              'g',
              { clipPath: 'url(#postgresql_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#336791',
                d: 'M50 0h73v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#postgresql_svg__b)',
                d: 'M0 0h123v20H0z',
              })
            )),
          Oa ||
            (Oa = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBvc3RncmVTUUw8L3RpdGxlPjxwYXRoIGQ9Ik0yMy41NTk0IDE0LjcyMjhhLjUyNjkuNTI2OSAwIDAgMC0uMDU2My0uMTE5MWMtLjEzOS0uMjYzMi0uNDc2OC0uMzQxOC0xLjAwNzQtLjIzMjEtMS42NTMzLjM0MTEtMi4yOTM1LjEzMTItMi41MjU2LS4wMTkxIDEuMzQyLTIuMDQ4MiAyLjQ0NS00LjUyMiAzLjA0MTEtNi44Mjk3LjI3MTQtMS4wNTA3Ljc5ODItMy41MjM3LjEyMjItNC43MzE2YTEuNTY0MSAxLjU2NDEgMCAwIDAtLjE1MDktLjIzNUMyMS42OTMxLjkwODYgMTkuODAwNy4wMjQ4IDE3LjUwOTkuMDAwNWMtMS40OTQ3LS4wMTU4LTIuNzcwNS4zNDYxLTMuMTE2MS40Nzk0YTkuNDQ5IDkuNDQ5IDAgMCAwLS41MTU5LS4wODE2IDguMDQ0IDguMDQ0IDAgMCAwLTEuMzExNC0uMTI3OGMtMS4xODIyLS4wMTg0LTIuMjAzOC4yNjQyLTMuMDQ5OC44NDA2LS44NTczLS4zMjExLTQuNzg4OC0xLjY0NS03LjIyMTkuMDc4OEMuOTM1OSAyLjE1MjYuMzA4NiAzLjg3MzMuNDMwMiA2LjMwNDNjLjA0MDkuODE4LjUwNjkgMy4zMzQgMS4yNDIzIDUuNzQzNi40NTk4IDEuNTA2NS45Mzg3IDIuNzAxOSAxLjQzMzQgMy41ODIuNTUzLjk5NDIgMS4xMjU5IDEuNTkzMyAxLjcxNDMgMS43ODk1LjQ0NzQuMTQ5MSAxLjEzMjcuMTQ0MSAxLjg1ODEtLjcyNzkuODAxMi0uOTYzNSAxLjU5MDMtMS44MjU4IDEuOTQ0Ni0yLjIwNjkuNDM1MS4yMzU1LjkwNjQuMzYyNSAxLjM5LjM3NzJhLjA1NjkuMDU2OSAwIDAgMCAuMDAwNC4wMDQxIDExLjAzMTIgMTEuMDMxMiAwIDAgMC0uMjQ3Mi4zMDU0Yy0uMzM4OS40MzAyLS40MDk0LjUxOTctMS41MDAyLjc0NDMtLjMxMDIuMDY0LTEuMTM0NC4yMzM5LTEuMTQ2NC44MTE1LS4wMDI1LjEyMjQuMDMyOS4yMzA5LjA5MTkuMzI2OC4yMjY5LjQyMzEuOTIxNi42MDk3IDEuMDE1LjYzMzEgMS4zMzQ1LjMzMzUgMi41MDQ0LjA5MiAzLjM3MTQtLjY3ODctLjAxNyAyLjIzMS4wNzc1IDQuNDE3NC4zNDU0IDUuMDg3NC4yMjEyLjU1MjkuNzYxOCAxLjkwNDUgMi40NjkyIDEuOTA0My4yNTA1IDAgLjUyNjMtLjAyOTEuODI5Ni0uMDk0MSAxLjc4MTktLjM4MjEgMi41NTU3LTEuMTY5NiAyLjg1NS0yLjkwNTkuMTUwMy0uODcwNy40MDE2LTIuODc1My41Mzg4LTQuMTAxMi4wMTY5LS4wNzAzLjAzNTctLjEyMDcuMDU3LS4xMzYyLjAwMDctLjAwMDUuMDY5Ny0uMDQ3MS40MjcyLjAzMDdhLjM2NzMuMzY3MyAwIDAgMCAuMDQ0My4wMDY4bC4yNTM5LjAyMjMuMDE0OS4wMDFjLjg0NjguMDM4NCAxLjkxMTQtLjE0MjYgMi41MzEyLS40MzA4LjY0MzgtLjI5ODggMS44MDU3LTEuMDMyMyAxLjU5NTEtMS42Njk4ek0yLjM3MSAxMS44NzY1Yy0uNzQzNS0yLjQzNTgtMS4xNzc5LTQuODg1MS0xLjIxMjMtNS41NzE5LS4xMDg2LTIuMTcxNC40MTcxLTMuNjgyOSAxLjU2MjMtNC40OTI3IDEuODM2Ny0xLjI5ODYgNC44Mzk4LS41NDA4IDYuMTA4LS4xMy0uMDAzMi4wMDMyLS4wMDY2LjAwNjEtLjAwOTguMDA5NC0yLjAyMzggMi4wNDQtMS45NzU4IDUuNTM2LTEuOTcwOCA1Ljc0OTUtLjAwMDIuMDgyMy4wMDY2LjE5ODkuMDE2Mi4zNTkzLjAzNDguNTg3My4wOTk2IDEuNjgwNC0uMDczNSAyLjkxODQtLjE2MDkgMS4xNTA0LjE5MzcgMi4yNzY0Ljk3MjggMy4wODkyLjA4MDYuMDg0MS4xNjQ4LjE2MzEuMjUxOC4yMzc0LS4zNDY4LjM3MTQtMS4xMDA0IDEuMTkyNi0xLjkwMjUgMi4xNTc2LS41Njc3LjY4MjUtLjk1OTcuNTUxNy0xLjA4ODYuNTA4Ny0uMzkxOS0uMTMwNy0uODEzLS41ODcxLTEuMjM4MS0xLjMyMjMtLjQ3OTYtLjgzOS0uOTYzNS0yLjAzMTctMS40MTU1LTMuNTEyNnptNi4wMDcyIDUuMDg3MWMtLjE3MTEtLjA0MjgtLjMyNzEtLjExMzItLjQzMjItLjE3NzIuMDg4OS0uMDM5NC4yMzc0LS4wOTAyLjQ4MzMtLjE0MDkgMS4yODMzLS4yNjQxIDEuNDgxNS0uNDUwNiAxLjkxNDMtMS4wMDAyLjA5OTItLjEyNi4yMTE2LS4yNjg3LjM2NzMtLjQ0MjZhLjM1NDkuMzU0OSAwIDAgMCAuMDczNy0uMTI5OGMuMTcwOC0uMTUxMy4yNzI0LS4xMDk5LjQzNjktLjA0MTcuMTU2LjA2NDYuMzA3OC4yNi4zNjk1LjQ3NTIuMDI5MS4xMDE2LjA2MTkuMjk0NS0uMDQ1Mi40NDQ0LS45MDQzIDEuMjY1OC0yLjIyMTYgMS4yNDk0LTMuMTY3NiAxLjAxMjh6bTIuMDk0LTMuOTg4LS4wNTI1LjE0MWMtLjEzMy4zNTY2LS4yNTY3LjY4ODEtLjMzMzQgMS4wMDMtLjY2NzQtLjAwMjEtMS4zMTY4LS4yODcyLTEuODEwNS0uODAyNC0uNjI3OS0uNjU1MS0uOTEzMS0xLjU2NjQtLjc4MjUtMi41MDA0LjE4MjgtMS4zMDc5LjExNTMtMi40NDY4LjA3OS0zLjA1ODYtLjAwNS0uMDg1Ny0uMDA5NS0uMTYwNy0uMDEyMi0uMjE5OS4yOTU3LS4yNjIxIDEuNjY1OS0uOTk2MiAyLjY0MjktLjc3MjQuNDQ1OS4xMDIyLjcxNzYuNDA1Ny44MzA1LjkyOC41ODQ2IDIuNzAzOC4wNzc0IDMuODMwNy0uMzMwMiA0LjczNjMtLjA4NC4xODY2LS4xNjMzLjM2MjktLjIzMTEuNTQ1NHptNy4zNjM3IDQuNTcyNWMtLjAxNjkuMTc2OC0uMDM1OC4zNzYtLjA2MTguNTk1OWwtLjE0Ni40MzgzYS4zNTQ3LjM1NDcgMCAwIDAtLjAxODIuMTA3N2MtLjAwNTkuNDc0Ny0uMDU0LjY0ODktLjExNS44NjkzLS4wNjM0LjIyOTItLjEzNTMuNDg5MS0uMTc5NCAxLjA1NzUtLjExIDEuNDE0My0uODc4MiAyLjIyNjctMi40MTcyIDIuNTU2NS0xLjUxNTUuMzI1MS0xLjc4NDMtLjQ5NjgtMi4wMjEyLTEuMjIxN2E2LjU4MjQgNi41ODI0IDAgMCAwLS4wNzY5LS4yMjY2Yy0uMjE1NC0uNTg1OC0uMTkxMS0xLjQxMTktLjE1NzQtMi41NTUxLjAxNjUtLjU2MTItLjAyNDktMS45MDEzLS4zMzAyLTIuNjQ2Mi4wMDQ0LS4yOTMyLjAxMDYtLjU5MDkuMDE5LS44OTE4YS4zNTI5LjM1MjkgMCAwIDAtLjAxNTMtLjExMjYgMS40OTI3IDEuNDkyNyAwIDAgMC0uMDQzOS0uMjA4Yy0uMTIyNi0uNDI4My0uNDIxMy0uNzg2Ni0uNzc5Ny0uOTM1MS0uMTQyNC0uMDU5LS40MDM4LS4xNjcyLS43MTc4LS4wODY5LjA2Ny0uMjc2LjE4MzEtLjU4NzUuMzA5LS45MjQ5bC4wNTI5LS4xNDJjLjA1OTUtLjE2LjEzNC0uMzI1Ny4yMTMtLjUwMTIuNDI2NS0uOTQ3NiAxLjAxMDYtMi4yNDUzLjM3NjYtNS4xNzcyLS4yMzc0LTEuMDk4MS0xLjAzMDQtMS42MzQzLTIuMjMyNC0xLjUwOTgtLjcyMDcuMDc0Ni0xLjM3OTkuMzY1NC0xLjcwODguNTMyMWE1LjY3MTYgNS42NzE2IDAgMCAwLS4xOTU4LjEwNDFjLjA5MTgtMS4xMDY0LjQzODYtMy4xNzQxIDEuNzM1Ny00LjQ4MjNhNC4wMzA2IDQuMDMwNiAwIDAgMSAuMzAzMy0uMjc2LjM1MzIuMzUzMiAwIDAgMCAuMTQ0Ny0uMDY0NGMuNzUyNC0uNTcwNiAxLjY5NDUtLjg1MDYgMi44MDItLjgzMjUuNDA5MS4wMDY3LjgwMTcuMDMzOSAxLjE3NDIuMDgxIDEuOTM5LjM1NDQgMy4yNDM5IDEuNDQ2OCA0LjAzNTkgMi4zODI3LjgxNDMuOTYyMyAxLjI1NTIgMS45MzE1IDEuNDMxMiAyLjQ1NDMtMS4zMjMyLS4xMzQ2LTIuMjIzNC4xMjY4LTIuNjc5Ny43NzktLjk5MjYgMS40MTg5LjU0MyA0LjE3MjkgMS4yODExIDUuNDk2NC4xMzUzLjI0MjYuMjUyMi40NTIyLjI4ODkuNTQxMy4yNDAzLjU4MjUuNTUxNS45NzEzLjc3ODcgMS4yNTUyLjA2OTYuMDg3LjEzNzIuMTcxNC4xODg1LjI0NS0uNDAwOC4xMTU1LTEuMTIwOC4zODI1LTEuMDU1MiAxLjcxNy0uMDEyMy4xNTYzLS4wNDIzLjQ0NjktLjA4MzQuODE0OC0uMDQ2MS4yMDc3LS4wNzAyLjQ2MDMtLjA5OTQuNzY2MnptLjg5MDUtMS42MjExYy0uMDQwNS0uODMxNi4yNjkxLS45MTg1LjU5NjctMS4wMTA1YTIuODU2NiAyLjg1NjYgMCAwIDAgLjEzNS0uMDQwNiAxLjIwMiAxLjIwMiAwIDAgMCAuMTM0Mi4xMDNjLjU3MDMuMzc2NSAxLjU4MjMuNDIxMyAzLjAwNjguMTM0NC0uMjAxNi4xNzY5LS41MTg5LjM5OTQtLjk1MzMuNjAxMS0uNDA5OC4xOTAzLTEuMDk1Ny4zMzMtMS43NDczLjM2MzYtLjcxOTcuMDMzNi0xLjA4NTktLjA4MDctMS4xNzIxLS4xNTF6bS41Njk1LTkuMjcxMmMtLjAwNTkuMzUwOC0uMDU0Mi42NjkyLS4xMDU0IDEuMDAxNy0uMDU1LjM1NzYtLjExMi43Mjc0LS4xMjY0IDEuMTc2Mi0uMDE0Mi40MzY4LjA0MDQuODkwOS4wOTMyIDEuMzMwMS4xMDY2Ljg4Ny4yMTYgMS44MDAzLS4yMDc1IDIuNzAxNGEzLjUyNzIgMy41MjcyIDAgMCAxLS4xODc2LS4zODU2Yy0uMDUyNy0uMTI3Ni0uMTY2OS0uMzMyNi0uMzI1MS0uNjE2Mi0uNjE1Ni0xLjEwNDEtMi4wNTc0LTMuNjg5Ni0xLjMxOTMtNC43NDQ2LjM3OTUtLjU0MjcgMS4zNDA4LS41NjYxIDIuMTc4MS0uNDYzem0uMjI4NCA3LjAxMzdhMTIuMzc2MiAxMi4zNzYyIDAgMCAwLS4wODUzLS4xMDc0bC0uMDM1NS0uMDQ0NGMuNzI2Mi0xLjE5OTUuNTg0Mi0yLjM4NjIuNDU3OC0zLjQzODUtLjA1MTktLjQzMTgtLjEwMDktLjgzOTYtLjA4ODUtMS4yMjI2LjAxMjktLjQwNjEuMDY2Ni0uNzU0My4xMTg1LTEuMDkxMS4wNjM5LS40MTUuMTI4OC0uODQ0My4xMTA5LTEuMzUwNS4wMTM0LS4wNTMxLjAxODgtLjExNTguMDExOC0uMTkwMi0uMDQ1Ny0uNDg1NS0uNTk5OS0xLjkzOC0xLjcyOTQtMy4yNTMtLjYwNzYtLjcwNzMtMS40ODk2LTEuNDk3Mi0yLjY4ODktMi4wMzk1LjUyNTEtLjEwNjYgMS4yMzI4LS4yMDM1IDIuMDI0NC0uMTg1OSAyLjA1MTUuMDQ1NiAzLjY3NDYuODEzNSA0LjgyNDIgMi4yODI0YS45MDguOTA4IDAgMCAxIC4wNjY3LjEwMDJjLjcyMzEgMS4zNTU2LS4yNzYyIDYuMjc1MS0yLjk4NjcgMTAuNTQwNXptLTguODE2Ni02LjExNjJjLS4wMjUuMTc5NC0uMzA4OS40MjI1LS42MjExLjQyMjVhLjU4MjEuNTgyMSAwIDAgMS0uMDgwOS0uMDA1NmMtLjE4NzMtLjAyNi0uMzc2NS0uMTQ0LS41MDU5LS4zMTU2LS4wNDU4LS4wNjA1LS4xMjAzLS4xNzgtLjEwNTUtLjI4NDQuMDA1NS0uMDQwMS4wMjYxLS4wOTg1LjA5MjUtLjE0ODguMTE4Mi0uMDg5NC4zNTE4LS4xMjI2LjYwOTYtLjA4NjcuMzE2My4wNDQxLjY0MjYuMTkzOC42MTEzLjQxODZ6bTcuOTMwNS0uNDExNGMuMDExMS4wNzkyLS4wNDkuMjAxLS4xNTMxLjMxMDItLjA2ODMuMDcxNy0uMjEyLjE5NjEtLjQwNzkuMjIzMmEuNTQ1Ni41NDU2IDAgMCAxLS4wNzUuMDA1MmMtLjI5MzUgMC0uNTQxNC0uMjM0NC0uNTYwNy0uMzcxNy0uMDI0LS4xNzY1LjI2NDEtLjMxMDYuNTYxMS0uMzUyLjI5Ny0uMDQxNC42MTExLjAwODguNjM1Ni4xODUxeiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 855,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 630,
                },
                '\n      PostgreSQL\n    '
              ),
              Ob.createElement(
                'text',
                { x: 855, y: 140, transform: 'scale(.1)', textLength: 630 },
                '\n      PostgreSQL\n    '
              )
            ))
        )
      }
      function nd() {
        return (nd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var od = function (a) {
        return Ob.createElement(
          'svg',
          nd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 99,
              height: 20,
              'aria-label': 'Tool: Docker',
            },
            a
          ),
          Pa ||
            (Pa = Ob.createElement(
              'linearGradient',
              { id: 'docker_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Qa ||
            (Qa = Ob.createElement(
              'clipPath',
              { id: 'docker_svg__a' },
              Ob.createElement('rect', {
                width: 99,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Ra ||
            (Ra = Ob.createElement(
              'g',
              { clipPath: 'url(#docker_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#2496ed',
                d: 'M50 0h49v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#docker_svg__b)',
                d: 'M0 0h99v20H0z',
              })
            )),
          Sa ||
            (Sa = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkRvY2tlcjwvdGl0bGU+PHBhdGggZD0iTTEzLjk4MyAxMS4wNzhoMi4xMTlhLjE4Ni4xODYgMCAwMC4xODYtLjE4NVY5LjAwNmEuMTg2LjE4NiAwIDAwLS4xODYtLjE4NmgtMi4xMTlhLjE4NS4xODUgMCAwMC0uMTg1LjE4NXYxLjg4OGMwIC4xMDIuMDgzLjE4NS4xODUuMTg1bS0yLjk1NC01LjQzaDIuMTE4YS4xODYuMTg2IDAgMDAuMTg2LS4xODZWMy41NzRhLjE4Ni4xODYgMCAwMC0uMTg2LS4xODVoLTIuMTE4YS4xODUuMTg1IDAgMDAtLjE4NS4xODV2MS44ODhjMCAuMTAyLjA4Mi4xODUuMTg1LjE4NW0wIDIuNzE2aDIuMTE4YS4xODcuMTg3IDAgMDAuMTg2LS4xODZWNi4yOWEuMTg2LjE4NiAwIDAwLS4xODYtLjE4NWgtMi4xMThhLjE4NS4xODUgMCAwMC0uMTg1LjE4NXYxLjg4N2MwIC4xMDIuMDgyLjE4NS4xODUuMTg2bS0yLjkzIDBoMi4xMmEuMTg2LjE4NiAwIDAwLjE4NC0uMTg2VjYuMjlhLjE4NS4xODUgMCAwMC0uMTg1LS4xODVIOC4xYS4xODUuMTg1IDAgMDAtLjE4NS4xODV2MS44ODdjMCAuMTAyLjA4My4xODUuMTg1LjE4Nm0tMi45NjQgMGgyLjExOWEuMTg2LjE4NiAwIDAwLjE4NS0uMTg2VjYuMjlhLjE4NS4xODUgMCAwMC0uMTg1LS4xODVINS4xMzZhLjE4Ni4xODYgMCAwMC0uMTg2LjE4NXYxLjg4N2MwIC4xMDIuMDg0LjE4NS4xODYuMTg2bTUuODkzIDIuNzE1aDIuMTE4YS4xODYuMTg2IDAgMDAuMTg2LS4xODVWOS4wMDZhLjE4Ni4xODYgMCAwMC0uMTg2LS4xODZoLTIuMTE4YS4xODUuMTg1IDAgMDAtLjE4NS4xODV2MS44ODhjMCAuMTAyLjA4Mi4xODUuMTg1LjE4NW0tMi45MyAwaDIuMTJhLjE4NS4xODUgMCAwMC4xODQtLjE4NVY5LjAwNmEuMTg1LjE4NSAwIDAwLS4xODQtLjE4NmgtMi4xMmEuMTg1LjE4NSAwIDAwLS4xODQuMTg1djEuODg4YzAgLjEwMi4wODMuMTg1LjE4NS4xODVtLTIuOTY0IDBoMi4xMTlhLjE4NS4xODUgMCAwMC4xODUtLjE4NVY5LjAwNmEuMTg1LjE4NSAwIDAwLS4xODQtLjE4NmgtMi4xMmEuMTg2LjE4NiAwIDAwLS4xODYuMTg2djEuODg3YzAgLjEwMi4wODQuMTg1LjE4Ni4xODVtLTIuOTIgMGgyLjEyYS4xODUuMTg1IDAgMDAuMTg0LS4xODVWOS4wMDZhLjE4NS4xODUgMCAwMC0uMTg0LS4xODZoLTIuMTJhLjE4NS4xODUgMCAwMC0uMTg0LjE4NXYxLjg4OGMwIC4xMDIuMDgyLjE4NS4xODUuMTg1TTIzLjc2MyA5Ljg5Yy0uMDY1LS4wNTEtLjY3Mi0uNTEtMS45NTQtLjUxLS4zMzguMDAxLS42NzYuMDMtMS4wMS4wODctLjI0OC0xLjctMS42NTMtMi41My0xLjcxNi0yLjU2NmwtLjM0NC0uMTk5LS4yMjYuMzI3Yy0uMjg0LjQzOC0uNDkuOTIyLS42MTIgMS40My0uMjMuOTctLjA5IDEuODgyLjQwMyAyLjY2MS0uNTk1LjMzMi0xLjU1LjQxMy0xLjc0NC40MkguNzUxYS43NTEuNzUxIDAgMDAtLjc1Ljc0OCAxMS4zNzYgMTEuMzc2IDAgMDAuNjkyIDQuMDYyYy41NDUgMS40MjggMS4zNTUgMi40OCAyLjQxIDMuMTI0IDEuMTguNzIzIDMuMSAxLjEzNyA1LjI3NSAxLjEzNy45ODMuMDAzIDEuOTYzLS4wODYgMi45My0uMjY2YTEyLjI0OCAxMi4yNDggMCAwMDMuODIzLTEuMzg5Yy45OC0uNTY3IDEuODYtMS4yODggMi42MS0yLjEzNiAxLjI1Mi0xLjQxOCAxLjk5OC0yLjk5NyAyLjU1My00LjRoLjIyMWMxLjM3MiAwIDIuMjE1LS41NDkgMi42OC0xLjAwOS4zMDktLjI5My41NS0uNjUuNzA3LTEuMDQ2bC4wOTgtLjI4OFoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 735,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 390,
                },
                '\n      Docker\n    '
              ),
              Ob.createElement(
                'text',
                { x: 735, y: 140, transform: 'scale(.1)', textLength: 390 },
                '\n      Docker\n    '
              )
            ))
        )
      }
      function pd() {
        return (pd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var qd = function (a) {
        return Ob.createElement(
          'svg',
          pd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 97,
              height: 20,
              'aria-label': 'Tool: GitHub',
            },
            a
          ),
          Ta ||
            (Ta = Ob.createElement(
              'linearGradient',
              { id: 'github_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Ua ||
            (Ua = Ob.createElement(
              'clipPath',
              { id: 'github_svg__a' },
              Ob.createElement('rect', {
                width: 97,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Va ||
            (Va = Ob.createElement(
              'g',
              { clipPath: 'url(#github_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#181717',
                d: 'M50 0h47v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#github_svg__b)',
                d: 'M0 0h97v20H0z',
              })
            )),
          Wa ||
            (Wa = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 725,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 370,
                },
                '\n      GitHub\n    '
              ),
              Ob.createElement(
                'text',
                { x: 725, y: 140, transform: 'scale(.1)', textLength: 370 },
                '\n      GitHub\n    '
              )
            ))
        )
      }
      function rd() {
        return (rd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var sd = function (a) {
        return Ob.createElement(
          'svg',
          rd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 141,
              height: 20,
              'aria-label': 'Tool: GitHub Actions',
            },
            a
          ),
          Xa ||
            (Xa = Ob.createElement(
              'linearGradient',
              { id: 'github_actions_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Ya ||
            (Ya = Ob.createElement(
              'clipPath',
              { id: 'github_actions_svg__a' },
              Ob.createElement('rect', {
                width: 141,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Za ||
            (Za = Ob.createElement(
              'g',
              { clipPath: 'url(#github_actions_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#2088ff',
                d: 'M50 0h91v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#github_actions_svg__b)',
                d: 'M0 0h141v20H0z',
              })
            )),
          $a ||
            ($a = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YiBBY3Rpb25zPC90aXRsZT48cGF0aCBkPSJNMTAuOTg0IDEzLjgzNmEuNS41IDAgMCAxLS4zNTMtLjE0NmwtLjc0NS0uNzQzYS41LjUgMCAxIDEgLjcwNi0uNzA4bC4zOTIuMzkxIDEuMTgxLTEuMThhLjUuNSAwIDAgMSAuNzA4LjcwN2wtMS41MzUgMS41MzNhLjUwNC41MDQgMCAwIDEtLjM1NC4xNDZ6bTkuMzUzLS4xNDdsMS41MzQtMS41MzJhLjUuNSAwIDAgMC0uNzA3LS43MDdsLTEuMTgxIDEuMTgtLjM5Mi0uMzkxYS41LjUgMCAxIDAtLjcwNi43MDhsLjc0Ni43NDNhLjQ5Ny40OTcgMCAwIDAgLjcwNi0uMDAxek00LjUyNyA3LjQ1MmwyLjU1Ny0xLjU4NUExIDEgMCAwIDAgNy4wOSA0LjE3TDQuNTMzIDIuNTZBMSAxIDAgMCAwIDMgMy40MDZ2My4xOTZhMS4wMDEgMS4wMDEgMCAwIDAgMS41MjcuODV6bTIuMDMtMi40MzZMNCA2LjYwMlYzLjQwNmwyLjU1NyAxLjYxek0yNCAxMi41YzAgMS45My0xLjU3IDMuNS0zLjUgMy41YTMuNTAzIDMuNTAzIDAgMCAxLTMuNDYtM2gtMi4wOGEzLjUwMyAzLjUwMyAwIDAgMS0zLjQ2IDMgMy41MDIgMy41MDIgMCAwIDEtMy40Ni0zaC0uNTU4Yy0uOTcyIDAtMS44NS0uMzk5LTIuNDgyLTEuMDQyVjE3YzAgMS42NTQgMS4zNDYgMyAzIDNoLjA0Yy4yNDQtMS42OTMgMS43LTMgMy40Ni0zIDEuOTMgMCAzLjUgMS41NyAzLjUgMy41UzEzLjQzIDI0IDExLjUgMjRhMy41MDIgMy41MDIgMCAwIDEtMy40Ni0zSDhjLTIuMjA2IDAtNC0xLjc5NC00LTRWOS44OTlBNS4wMDggNS4wMDggMCAwIDEgMCA1YzAtMi43NTcgMi4yNDMtNSA1LTVzNSAyLjI0MyA1IDVhNS4wMDUgNS4wMDUgMCAwIDEtNC45NTIgNC45OThBMi40ODIgMi40ODIgMCAwIDAgNy40ODIgMTJoLjU1OGMuMjQ0LTEuNjkzIDEuNy0zIDMuNDYtM2EzLjUwMiAzLjUwMiAwIDAgMSAzLjQ2IDNoMi4wOGEzLjUwMyAzLjUwMyAwIDAgMSAzLjQ2LTNjMS45MyAwIDMuNSAxLjU3IDMuNSAzLjV6bS0xNSA4YzAgMS4zNzggMS4xMjIgMi41IDIuNSAyLjVzMi41LTEuMTIyIDIuNS0yLjUtMS4xMjItMi41LTIuNS0yLjVTOSAxOS4xMjIgOSAyMC41ek01IDljMi4yMDYgMCA0LTEuNzk0IDQtNFM3LjIwNiAxIDUgMSAxIDIuNzk0IDEgNXMxLjc5NCA0IDQgNHptOSAzLjVjMC0xLjM3OC0xLjEyMi0yLjUtMi41LTIuNVM5IDExLjEyMiA5IDEyLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIyIDIuNS0yLjV6bTkgMGMwLTEuMzc4LTEuMTIyLTIuNS0yLjUtMi41UzE4IDExLjEyMiAxOCAxMi41czEuMTIyIDIuNSAyLjUgMi41IDIuNS0xLjEyMiAyLjUtMi41em0tMTMgOGEuNS41IDAgMSAwIDEgMCAuNS41IDAgMCAwLTEgMHptMiAwYS41LjUgMCAxIDAgMSAwIC41LjUgMCAwIDAtMSAwem0xMiAwYzAgMS45My0xLjU3IDMuNS0zLjUgMy41YTMuNTAzIDMuNTAzIDAgMCAxLTMuNDYtMy4wMDJjLS4wMDcuMDAxLS4wMTMuMDA1LS4wMjEuMDA1bC0uNTA2LjAxN2gtLjAxN2EuNS41IDAgMCAxLS4wMTYtLjk5OWwuNTA2LS4wMTdjLjAxOC0uMDAyLjAzNS4wMDYuMDUyLjAwN0EzLjUwMyAzLjUwMyAwIDAgMSAyMC41IDE3YzEuOTMgMCAzLjUgMS41NyAzLjUgMy41em0tMSAwYzAtMS4zNzgtMS4xMjItMi41LTIuNS0yLjVTMTggMTkuMTIyIDE4IDIwLjVzMS4xMjIgMi41IDIuNSAyLjUgMi41LTEuMTIyIDIuNS0yLjV6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 945,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 810,
                },
                '\n      GitHub Actions\n    '
              ),
              Ob.createElement(
                'text',
                { x: 945, y: 140, transform: 'scale(.1)', textLength: 810 },
                '\n      GitHub Actions\n    '
              )
            ))
        )
      }
      function td() {
        return (td =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var ud = function (a) {
        return Ob.createElement(
          'svg',
          td(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 117,
              height: 20,
              'aria-label': 'Tool: Storybook',
            },
            a
          ),
          _a ||
            (_a = Ob.createElement(
              'linearGradient',
              { id: 'storybook_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ab ||
            (ab = Ob.createElement(
              'clipPath',
              { id: 'storybook_svg__a' },
              Ob.createElement('rect', {
                width: 117,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          bb ||
            (bb = Ob.createElement(
              'g',
              { clipPath: 'url(#storybook_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#ff4785',
                d: 'M50 0h67v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#storybook_svg__b)',
                d: 'M0 0h117v20H0z',
              })
            )),
          cb ||
            (cb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlN0b3J5Ym9vazwvdGl0bGU+PHBhdGggZD0iTTE2LjcxLjI0M2wtLjEyIDIuNzFhLjE4LjE4IDAgMDAuMjkuMTVsMS4wNi0uOC45LjdhLjE4LjE4IDAgMDAuMjgtLjE0bC0uMS0yLjc2IDEuMzMtLjFhMS4yIDEuMiAwIDAxMS4yNzkgMS4ydjIxLjU5NmExLjIgMS4yIDAgMDEtMS4yNiAxLjJsLTE2LjA5Ni0uNzJhMS4yIDEuMiAwIDAxLTEuMTUtMS4xNmwtLjc1LTE5Ljc5N2ExLjIgMS4yIDAgMDExLjEzLTEuMjdMMTYuNy4yMjJ6TTEzLjY0IDkuM2MwIC40NyAzLjE2LjI0IDMuNTktLjA4IDAtMy4yLTEuNzItNC44OS00Ljg1OS00Ljg5LTMuMTUgMC00Ljg5OSAxLjcyLTQuODk5IDQuMjkgMCA0LjQ1IDUuOTk5IDQuNTMgNS45OTkgNi45NTkgMCAuNy0uMzIgMS4xLTEuMDUgMS4xLS45NiAwLTEuMzUtLjQ5LTEuMy0yLjE2IDAtLjM2LTMuNjQ5LS40OC0zLjc2OSAwLS4yNyA0LjAzIDIuMjMgNS4yIDUuMDk5IDUuMiAyLjc5IDAgNC45NjktMS40OSA0Ljk2OS00LjE4IDAtNC43Ny02LjA5OS00LjY0LTYuMDk5LTYuOTk5IDAtLjk3LjcyLTEuMSAxLjEzLTEuMS40NSAwIDEuMjUuMDcgMS4xOSAxLjg3eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 825,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 570,
                },
                '\n      Storybook\n    '
              ),
              Ob.createElement(
                'text',
                { x: 825, y: 140, transform: 'scale(.1)', textLength: 570 },
                '\n      Storybook\n    '
              )
            ))
        )
      }
      function vd() {
        return (vd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var wd = function (a) {
        return Ob.createElement(
          'svg',
          vd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 89,
              height: 20,
              'aria-label': 'Tool: JFrog',
            },
            a
          ),
          db ||
            (db = Ob.createElement(
              'linearGradient',
              { id: 'jfrog_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          eb ||
            (eb = Ob.createElement(
              'clipPath',
              { id: 'jfrog_svg__a' },
              Ob.createElement('rect', {
                width: 89,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          fb ||
            (fb = Ob.createElement(
              'g',
              { clipPath: 'url(#jfrog_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#41bf47',
                d: 'M50 0h39v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#jfrog_svg__b)',
                d: 'M0 0h89v20H0z',
              })
            )),
          gb ||
            (gb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkpGcm9nPC90aXRsZT48cGF0aCBkPSJNMTAuNjU1IDE1LjYzMWwtMS4yNjguMzUzYy4xMS4zMi4yLjg5My4yIDEuNjY1djMuNzk1aDEuNDIxdi00LjAxNWMuMjY1LS4zMi41NTItLjQ3NC44Ni0uNDc0LjE1NiAwIC4yNzcuMDMzLjQwOS4xMWwuMzg2LTEuMzEyYTEuMDUgMS4wNSAwIDAwLS41My0uMTIyIDEuMjIgMS4yMiAwIDAwLS40NjMuMDljLS4yNjUuMTMxLS41OTYuNDMtLjgwNS43MTUgMC0uMzItLjA3Ny0uNTczLS4yMS0uODA1ek01Ljc2IDEzLjc1N2gtLjE1NHY3LjY3NmgxLjQ3N3YtMy4zOThoMS44NjR2LTEuMjY4SDcuMDgydi0xLjc2NEg5LjQxbC4wODgtLjY3M2MtMS40LS4xLTIuNjY4LS4zMi0zLjczOC0uNTczem0tMy40NTIgOC43bC42ODQuNzk2Yy42NjItLjI2NSAxLjQ5LS44NiAxLjcxLTEuODEuMDc3LS4zMDguMS0uNTA2LjEtMS41MXYtNi4xNjVIMy4zMDh2Ni4zM2MwIC44MjgtLjAzMiAxLjEzNi0uMTQyIDEuNDIzLS4xNDQuMzItLjQ4Ni42OTUtLjg2LjkzOHptMTMuNDIyLTMuODkyYzAgMS4zNDYtLjI2NCAxLjkyLS44NzEgMS45MmEuNzgyLjc4MiAwIDAxLS43MTctLjQ2NGMtLjExLS4yODYtLjE3Ni0uNzczLS4xNzYtMS40MzQgMC0uNTYzLjA1NS0uOTYuMTQzLTEuMjY4LjExLS4zNTMuMzg2LS41NzQuNzI4LS41NzQuMjU0IDAgLjQ3NC4xMS42MDYuMjk4LjE5OS4yNjUuMjg3Ljc2LjI4NyAxLjUyMnptLjg3IDIuMjA2Yy40NjUtLjU1MS42NzQtMS4yMjUuNjc0LTIuMTk1IDAtLjkxNi0uMTg3LTEuNTQ0LS42MTctMi4wNzMtLjQ2NC0uNTc0LTEuMDYtLjg1LTEuODMxLS44NS0xLjQ1NiAwLTIuNDI2IDEuMTgtMi40MjYgMi45NjcgMCAxLjc4Ny45NiAyLjkzNCAyLjQyNiAyLjkzNC44MjcuMDEgMS4zNjctLjI5NyAxLjc3NS0uNzgzem00LjAzOC0zLjE3N2MwIC41Mi0uMzEuODA1LS44Ni44MDUtLjQ5NyAwLS44MjgtLjIzLS44MjgtLjgwNSAwLS41MjkuMzEtLjgzOC44MzgtLjgzOC41MyAwIC44NS4zMS44NS44Mzh6bTIuNTAzLTEuMjEzbC0uNTg1LS45MzdjLS4zMy4zMS0uNzI3LjQ4NS0xLjExMy40ODUtLjE3NyAwLS4yNzYtLjAyMi0uNjYyLS4xMmEzLjI4MiAzLjI4MiAwIDAwLS45Ny0uMTQ1Yy0xLjM4IDAtMi4yNzIuNzUtMi4yNzIgMS45MiAwIC44MzcuMzc1IDEuMzY3IDEuMTU4IDEuNTc2LS4zMi4wNzctLjY2Mi4yNDMtLjgxNi40M2EuNzkuNzkgMCAwMC0uMTY2LjUyYzAgLjE3Ni4wNDQuMzMuMTEuNDYzYS42OC42OCAwIDAwLjMxLjI3NWMuMjUzLjEuNjYuMTY2IDEuMjkuMTc3LjMzIDAgLjUyOS4wMS41OTUuMDEuMzg2LjAyMy41ODQuMDkuNzM5LjE2Ni4xNDMuMDg5LjI1My4yODcuMjUzLjUwOCAwIC4yMi0uMTMyLjQ0LS4zNDEuNTczLS4xODguMTMyLS40OTcuMTg4LS44OTQuMTg4LS42NSAwLTEuMDE0LS4yNDMtMS4wMTQtLjY5NSAwLS4yLjAyMi0uMjQzLjA2Ni0uMzY0aC0xLjMwMWMtLjA1NS4xMS0uMTIyLjI2NS0uMTIyLjU3MyAwIC4zODYuMTQ0LjcxNy40NDIgMS4wMDQuNDg1LjQ3NCAxLjI3OS42MDYgMi4wNC42MDYuODM4IDAgMS42NTQtLjE5OCAyLjEyOC0uNzI3LjI5OC0uMzMxLjQzLS42OTUuNDMtMS4xNyAwLS41MDctLjE0My0uODkzLS40NjMtMS4yMTItLjM3NS0uMzY0LS44MDUtLjQ5Ny0xLjYzMi0uNTA4bC0uNzYxLS4wMWMtLjE0MyAwLS4yMzItLjA1Ni0uMjMyLS4xMzMgMC0uMTU0LjE5OS0uMjg4LjU2My0uNDY0LjExLjAxLjE0My4wMS4yMS4wMSAxLjE0NiAwIDEuOTg0LS43MDUgMS45ODQtMS42ODYgMC0uMzc1LS4xMS0uNjYyLS4zMi0uOTI3LjE3Ny4wMjIuMjMyLjAzMy4zNjQuMDMzLjM3NSAwIC42NzMtLjEyLjk4Mi0uNDE5ek01LjM4NCA3LjA4NWMtMS43NjQuNDMtMi45NjYgMS4yNzktMi45NjYgMi4yNSAwIC42MDYuNDYzIDEuMTU3IDEuMjI0IDEuNTg3YTIuMTU1IDIuMTU1IDAgMDEtLjM1My0xLjE1N2MuMDEtMS4wMDQuNzk0LTEuOTQxIDIuMDk1LTIuNjh6TTI0IDEwLjg4OWMwLS42NC0uMzk3LTEuMjI0LTEuMDU5LTEuNzA5LjA1NS4yLjEuMzk3LjEuNTk2IDAgMS44Mi0yLjU0OCAzLjM4NS02LjE2NSA0LjAzNi40MDguMDQ0LjgyNy4wNjYgMS4yNjguMDY2IDMuMjMtLjAxIDUuODU2LTEuMzQ1IDUuODU2LTIuOTg5em0tMi4wODQtLjk5MmMwLS42NzMtLjU3NC0xLjI5LTEuNTU1LTEuNzk4LjIzLjI3Ni4zNTMuNTc0LjM1My44ODMgMCAxLjYyLTMuNDQgMi45MzMtNy42OTggMi45MzMtNC4yNDYgMC03LjY5OC0xLjMxMi03LjY5OC0yLjkzMyAwLS4yMS4wNTUtLjQwOC4xNjUtLjU5Ni0uNjgzLjQ1Mi0xLjA3Ljk3LTEuMDcgMS41MjIgMCAxLjc1MyAzLjkxNiAzLjE3NiA4Ljc0NyAzLjE3NiA0LjgzIDAgOC43NTYtMS40NDUgOC43NTYtMy4xODd6TTE4LjEgOS44MWMtMS43ODYgMS4xNDctNy4yNzkgMS41ODgtOS42MzkuMTEtMS44NTMtMS4xNTgtMS4yMTMtMy02LjUxOC03LjAzNi0uNjk0LS41My4xMzMtMS4wOTIuNjUxLS43MjguNTE4LjM2NC4wNDQuNDUzIDEuMDkyIDEuNSAyLjExNyAyLjExOCAyLjA5NS4yMSAyLjQyNi45MzguNzA2IDEuNTEgMi4yNSAzLjAzMiAyLjI1IDMuMDMyIDEuNTU1IDEuMDE1IDIuNzkgMS4yMzUgNS4wODQtLjMyIDEuNDU2LS45ODEuODYgMS41NjYgNC40MjMtLjI3NSAxLjMtLjY3MyAxLjI0Ni0uMjIgMi41NjktMi4wNjMuNTUtLjc2IDEuNi41ODUuNDA4Ljc3Mi0uNDc0LjA3OC0xLjI4LjU5Ni0xLjYyMSAxLjQxMi0uNDk2IDEuMjI0LS4yODcgMi4xMjgtMS4xMjUgMi42NTh6TTguMTk2IDYuN2MtLjQ0LS4xOTktLjkwNC0uOTUtMS4wOC0xLjI0Ni40OTYtLjQ4Ni4yOTctMS4yOS4wMS0xLjczMi0uMjc1LS40NC0uNjE3LS4zMi0uOTgtLjcyNy0uMzc2LS40MS4xNDItMS40NjcuNjE3LS42NTEgMS43NzUgMy4wNTUgMi45NDQgMS43ODYgNC4zOSAxLjU5OSAxLjM5LS4xNzcgMi42MjQuNTg0IDMtMS41NjYuMDY1LS4zNTMuNDA3LS40My40NC4xNDMuMDMzLjU4NS4yNTQgMS45OTYgMS4wMTUgMi4xNzMuNzYuMTg3IDEuMzc4LS4xNzcgMS41NTUtLjM3NS4xNzYtLjIuMjc1LS4xNzcuMzUzLjMzLjA3Ny40OTcuMjc1IDEuMTkyIDEuMzQ1LjQyIDIuMTk1LTEuNTY2IDEuNTY2LTIuMTczIDIuNDI2LTIuNTguNDg1LS4yMzIgMS4yNTcuNTE4LjE0NCAxLjA4LTEuNTg4LjgwNS0xLjc1NCAxLjc5Ny0yLjc1NyAyLjQyNi0xLjY4OCAxLjA1OS0xLjE3LjA0NC0zLjg4Mi0uMzQyLTEuMDQ4LS4xNDMtMS4zOCAxLjAxNS0yLjE5NS42ODQtMS44NjQtLjc3Mi0zLjE3Ny0uNjE4LTQuNC4zNjR6bTUuODc5LTUuNjU3Yy4wNjYuNDYzLjE0My40NTIuMzA5LjQ4NS4xNjUuMDQ0LjM3NS0uMjIuMzc1LS40NjMuMDEtLjI1NC0uMTEtLjQwOC0uMzUzLS4zOTctLjI1NC4wMS0uMzQyLjEzMi0uMzMxLjM3NXptOC4xNi44MjdjLjIuMTg3LjcyOC4wNjYuODUtLjA3OC4zMi0uMzUyLjMzLS41NjIuMTY1LS44MDUtLjE2NS0uMjMxLS41MDctLjE5OC0uODUuMDU2LS4zNDEuMjUzLS4yNzUuNzI3LS4xNjQuODI3em0tLjE0MyAyLjMzOGMtLjE2NS4yMi0uMTc2LjM4Ni0uMDU1LjUwNy4xMzIuMTMyLjM5Ny4yNDIuNTg1LjEuMTg3LS4xNTUuMTg3LS4zNzYuMDMzLS41NjMtLjE2Ni0uMi0uMzg2LS4yLS41NjMtLjA0NHpNNS4zNTIgMS40NWMuMjUzLjA3Ny4zNzQuMzIuNTg0LjA0NC4xMS0uMTMzLjEyLS4zMi0uMDIzLS41Mi0uMDg4LS4xMi0uNTA3LS4yMS0uNjgzLS4wMzItLjE3Ny4xNzctLjAxLjQ2NC4xMjEuNTA4ek0uMTc4IDEuMjk1Yy40NjMuMjg3Ljc2LjcxNyAxLjExNC4zMy4xMjEtLjEzMS4yNjQtLjM2My4wMS0uODI2QzEuMTE3LjQ1Ny41MTEuMzI1LjMwMS40NTdjLS4yMi4xMi0uNDg1LjYxOC0uMTIxLjgzOHpNNC40NDcgMy40OWMuMTQzLjE1NC4zOTcuMTQzLjU1MS4wNTUuMTQ0LS4wODguMTIxLS4zMi0uMDIyLS41MTgtLjA4OC0uMTIyLS4zNTMtLjE4OC0uNTMgMC0uMTc2LjE4Ny0uMDk4LjM1MiAwIC40NjN6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 685,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 290,
                },
                '\n      JFrog\n    '
              ),
              Ob.createElement(
                'text',
                { x: 685, y: 140, transform: 'scale(.1)', textLength: 290 },
                '\n      JFrog\n    '
              )
            ))
        )
      }
      function xd() {
        return (xd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var yd = function (a) {
        return Ob.createElement(
          'svg',
          xd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 85,
              height: 20,
              'aria-label': 'Tool: npm',
            },
            a
          ),
          hb ||
            (hb = Ob.createElement(
              'linearGradient',
              { id: 'npm_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ib ||
            (ib = Ob.createElement(
              'clipPath',
              { id: 'npm_svg__a' },
              Ob.createElement('rect', {
                width: 85,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          jb ||
            (jb = Ob.createElement(
              'g',
              { clipPath: 'url(#npm_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#cb3837',
                d: 'M50 0h35v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#npm_svg__b)',
                d: 'M0 0h85v20H0z',
              })
            )),
          kb ||
            (kb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjY2IwMDAwIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcgN2gyNnYyNmgtN1YxNGgtNnYxOUg3eiIvPjwvc3ZnPgo=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 665,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 250,
                },
                '\n      npm\n    '
              ),
              Ob.createElement(
                'text',
                { x: 665, y: 140, transform: 'scale(.1)', textLength: 250 },
                '\n      npm\n    '
              )
            ))
        )
      }
      function zd() {
        return (zd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Ad = function (a) {
        return Ob.createElement(
          'svg',
          zd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 85,
              height: 20,
              'aria-label': 'Tool: yarn',
            },
            a
          ),
          lb ||
            (lb = Ob.createElement(
              'linearGradient',
              { id: 'yarn_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          mb ||
            (mb = Ob.createElement(
              'clipPath',
              { id: 'yarn_svg__a' },
              Ob.createElement('rect', {
                width: 85,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          nb ||
            (nb = Ob.createElement(
              'g',
              { clipPath: 'url(#yarn_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#2c8ebb',
                d: 'M50 0h35v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#yarn_svg__b)',
                d: 'M0 0h85v20H0z',
              })
            )),
          ob ||
            (ob = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPllhcm48L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzUuMzc1IDAgMCA1LjM3NSAwIDEyczUuMzc1IDEyIDEyIDEyIDEyLTUuMzc1IDEyLTEyUzE4LjYyNSAwIDEyIDB6bS43NjggNC4xMDVjLjE4MyAwIC4zNjMuMDUzLjUyNS4xNTcuMTI1LjA4My4yODcuMTg1Ljc1NSAxLjE1NC4zMS0uMDg4LjQ2OC0uMDQyLjU1MS0uMDE5LjIwNC4wNTYuMzY2LjE5LjQ2My4zNzUuNDc3LjkxNy41NDIgMi41NTMuMzM0IDMuNjA1LS4yNDEgMS4yMzItLjc1NSAyLjAyOS0xLjEzMSAyLjU3Ni4zMjQuMzI5Ljc3OC44OTkgMS4xMTcgMS44MjUuMjc4Ljc3NC4zMSAxLjQ3OC4yNzMgMi4wMTVhNS41MSA1LjUxIDAgMCAwIC42MDItLjMyOWMuNTkzLS4zNjYgMS40ODctLjkxNyAyLjU1My0uOTMxLjcxNC0uMDA5IDEuMjY5LjQ0NSAxLjM1MyAxLjEwM2ExLjIzIDEuMjMgMCAwIDEtLjk0NSAxLjM2MmMtLjY0OS4xNTgtLjk1LjI3OC0xLjgyMS44NDMtMS4yMzIuNzk3LTIuNTM5IDEuMjQyLTMuMDEyIDEuMzlhMS42ODYgMS42ODYgMCAwIDEtLjcwNC4zNDNjLS43MzcuMTgxLTMuMjY2LjMxNS0zLjQ2Ni4zMTVoLS4wNDZjLS43ODMgMC0xLjIxNC0uMjQxLTEuNDUtLjQ5MS0uNjU4LjMyOS0xLjUxLjE5LTIuMTIyLS4xMzRhMS4wNzggMS4wNzggMCAwIDEtLjU4LTEuMTUzIDEuMjQzIDEuMjQzIDAgMCAxLS4xNTMtLjE5NWMtLjE2Mi0uMjUtLjUyOC0uOTM2LS40NTQtMS45NDYuMDU2LS43MjMuNTU2LTEuMzY3Ljg4LTEuNzFhNS41MjIgNS41MjIgMCAwIDEgLjQwOC0yLjI1NmMuMzA2LS43MjcuODg1LTEuMzQ4IDEuMzItMS43MzctLjMyLS41MzctLjY0NC0xLjM2Ny0uMzI5LTIuMjEuMjI3LS42MDIuNDEyLS45MzYuODItMS4wOGgtLjAwNWMuMTk5LS4wNzQuMzg5LS4xNTMuNDg2LS4yNTlhMy40MTggMy40MTggMCAwIDEgMi4yOTgtMS4xMDNjLjAzNy0uMDkzLjA3OS0uMTg1LjEyNS0uMjgzLjMxLS42NTguNjM5LTEuMDI5IDEuMDI0LTEuMTY4YS45NC45NCAwIDAgMSAuMzI4LS4wNnptLjAwNi43Yy0uNTA3LjAxNi0xLjAwMSAxLjUxOS0xLjAwMSAxLjUxOXMtMS4yNy0uMjA0LTIuMjY2Ljg3MWMtLjE5OS4yMTgtLjQ2OC4zMzQtLjc0Ni40NC0uMDc5LjAyOC0uMTc2LjAyMy0uNDE3LjY3Mi0uMzcxLjk5MS42MjUgMi4wOTQuNjI1IDIuMDk0cy0xLjE4Ni44MzktMS42MjYgMS44ODFjLS40ODYgMS4xNDQtLjMzOCAyLjI2MS0uMzM4IDIuMjYxcy0uODQzLjczMi0uODk5IDEuNDg3Yy0uMDUxLjY2My4xMzkgMS4yLjM0MyAxLjUxNS4yMjcuMzQzLjUxLjE3Ni41MS4xNzZzLS41NjEuNjUzLS4wMzcuOTMxYy40NzcuMjUgMS4yODMuMzk0IDEuNzEtLjAzNy4zMS0uMzEuMzcxLTEuMDAxLjQ4Ni0xLjI4My4wMjgtLjA2NS4xMi4xMTEuMjA5LjE5OS4wOTcuMDkzLjI2NC4xOTUuMjY0LjE5NXMtLjc1NS4zMjQtLjQ0NSAxLjA2NmMuMTAyLjI0Ni40NjguNDAzIDEuMDY2LjM5OC4yMjItLjAwNSAyLjY2NC0uMTM5IDMuMzEzLS4yOTYuMzc1LS4wODguNTA1LS4yODMuNTA1LS4yODNzMS41NjYtLjQzMSAyLjk5OC0xLjM1N2MuOTE3LS41OTggMS4yOTMtLjc2IDIuMDM0LS45MzYuNjEyLS4xNDguNTctMS4wOTgtLjI0MS0xLjA4NC0uODM5LjAwOS0xLjU3NS40NC0yLjE5Ni44MjUtMS4xNjMuNzE4LTEuNzQyLjY3Mi0xLjc0Mi42NzJsLS4wMTgtLjAzMmMtLjA3OS0uMTMuMzcxLTEuMjkzLS4xMzQtMi42NzgtLjU0Ny0xLjUxNS0xLjQxMy0xLjg4MS0xLjM0NC0xLjk5Ny4yOTctLjUgMS4wMzgtMS4yOTcgMS4zMzQtMi43OC4xNzYtLjg5OS4xMy0yLjM3Ny0uMjY5LTMuMTUxLS4wNzQtLjE0NC0uNzMyLjI0MS0uNzMyLjI0MXMtLjYxNi0xLjM3MS0uNzg4LTEuNDgzYS4yNzEuMjcxIDAgMCAwLS4xNTctLjA0NnoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 665,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 250,
                },
                '\n      yarn\n    '
              ),
              Ob.createElement(
                'text',
                { x: 665, y: 140, transform: 'scale(.1)', textLength: 250 },
                '\n      yarn\n    '
              )
            ))
        )
      }
      function Bd() {
        return (Bd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Cd = function (a) {
        return Ob.createElement(
          'svg',
          Bd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 107,
              height: 20,
              'aria-label': 'Tool: Postman',
            },
            a
          ),
          pb ||
            (pb = Ob.createElement(
              'linearGradient',
              { id: 'postman_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          qb ||
            (qb = Ob.createElement(
              'clipPath',
              { id: 'postman_svg__a' },
              Ob.createElement('rect', {
                width: 107,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          rb ||
            (rb = Ob.createElement(
              'g',
              { clipPath: 'url(#postman_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#ff6c37',
                d: 'M50 0h57v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#postman_svg__b)',
                d: 'M0 0h107v20H0z',
              })
            )),
          sb ||
            (sb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBvc3RtYW48L3RpdGxlPjxwYXRoIGQ9Ik0xMy41MjcuMDk5QzYuOTU1LS43NDQuOTQyIDMuOS4wOTkgMTAuNDczYy0uODQzIDYuNTcyIDMuOCAxMi41ODQgMTAuMzczIDEzLjQyOCA2LjU3My44NDMgMTIuNTg3LTMuODAxIDEzLjQyOC0xMC4zNzRDMjQuNzQ0IDYuOTU1IDIwLjEwMS45NDMgMTMuNTI3LjA5OXptMi40NzEgNy40ODVhLjg1NS44NTUgMCAwIDAtLjU5My4yNWwtNC40NTMgNC40NTMtLjMwNy0uMzA3LS42NDMtLjY0M2M0LjM4OS00LjM3NiA1LjE4LTQuNDE4IDUuOTk2LTMuNzUzem0tNC44NjMgNC44NjFsNC40NC00LjQ0YS42Mi42MiAwIDEgMSAuODQ3LjkwM2wtNC42OTkgNC4xMjUtLjU4OC0uNTg4em0uMzMuNjk0bC0xLjEuMjM4YS4wNi4wNiAwIDAgMS0uMDY3LS4wMzIuMDYuMDYgMCAwIDEgLjAxLS4wNzNsLjY0NS0uNjQ1LjUxMi41MTJ6bS0yLjgwMy0uNDU5bDEuMTcyLTEuMTcyLjg3OS44NzgtMS45NzkuNDI2YS4wNzQuMDc0IDAgMCAxLS4wODUtLjAzOS4wNzIuMDcyIDAgMCAxIC4wMTMtLjA5M3ptLTMuNjQ2IDYuMDU4YS4wNzYuMDc2IDAgMCAxLS4wNjktLjA4My4wNzcuMDc3IDAgMCAxIC4wMjItLjA0NmguMDAybC45NDYtLjk0NiAxLjIyMiAxLjIyMi0yLjEyMy0uMTQ3em0yLjQyNS0xLjI1NmEuMjI4LjIyOCAwIDAgMC0uMTE3LjI1NmwuMjAzLjg2NWEuMTI1LjEyNSAwIDAgMS0uMjExLjExN2gtLjAwM2wtLjkzNC0uOTM0LS4yOTQtLjI5NSAzLjc2Mi0zLjc1OCAxLjgyLS4zOTMuODc0Ljg3NGMtMS4yNTUgMS4xMDItMi45NzEgMi4yMDEtNS4xIDMuMjY4em01LjI3OS0zLjQyOGgtLjAwMmwtLjgzOS0uODM5IDQuNjk5LTQuMTI1YS45NTIuOTUyIDAgMCAwIC4xMTktLjEyN2MtLjE0OCAxLjM0NS0yLjAyOSAzLjI0NS0zLjk3NyA1LjA5MXptMy42NTctNi40NmwtLjAwMy0uMDAyYTEuODIyIDEuODIyIDAgMCAxIDIuNDU5LTIuNjg0bC0xLjYxIDEuNjEzYS4xMTkuMTE5IDAgMCAwIDAgLjE2OWwxLjI0NyAxLjI0N2ExLjgxNyAxLjgxNyAwIDAgMS0yLjA5My0uMzQzem0yLjU3OCAwYTEuNzE0IDEuNzE0IDAgMCAxLS4yNzEuMjE4aC0uMDAxbC0xLjIwNy0xLjIwNyAxLjUzMy0xLjUzM2MuNjYxLjcyLjYzNyAxLjgzMi0uMDU0IDIuNTIyek0xOC44NTUgNi4wNWEuMTQzLjE0MyAwIDAgMC0uMDUzLjE1Ny40MTYuNDE2IDAgMCAxLS4wNTMuNDUuMTQuMTQgMCAwIDAgLjAyMy4xOTcuMTQxLjE0MSAwIDAgMCAuMDg0LjAzLjE0LjE0IDAgMCAwIC4xMDYtLjA1LjY5MS42OTEgMCAwIDAgLjA4Ny0uNzUxLjEzOC4xMzggMCAwIDAtLjE5NC0uMDMzeiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 775,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 470,
                },
                '\n      Postman\n    '
              ),
              Ob.createElement(
                'text',
                { x: 775, y: 140, transform: 'scale(.1)', textLength: 470 },
                '\n      Postman\n    '
              )
            ))
        )
      }
      function Dd() {
        return (Dd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Ed = function (a) {
        return Ob.createElement(
          'svg',
          Dd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 83,
              height: 20,
              'aria-label': 'Tool: RSS',
            },
            a
          ),
          tb ||
            (tb = Ob.createElement(
              'linearGradient',
              { id: 'rss_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          ub ||
            (ub = Ob.createElement(
              'clipPath',
              { id: 'rss_svg__a' },
              Ob.createElement('rect', {
                width: 83,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          vb ||
            (vb = Ob.createElement(
              'g',
              { clipPath: 'url(#rss_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: 'orange',
                d: 'M50 0h33v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#rss_svg__b)',
                d: 'M0 0h83v20H0z',
              })
            )),
          wb ||
            (wb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlJTUzwvdGl0bGU+PHBhdGggZD0iTTE5LjE5OSAyNEMxOS4xOTkgMTMuNDY3IDEwLjUzMyA0LjggMCA0LjhWMGMxMy4xNjUgMCAyNCAxMC44MzUgMjQgMjRoLTQuODAxek0zLjI5MSAxNy40MTVjMS44MTQgMCAzLjI5MyAxLjQ3OSAzLjI5MyAzLjI5NSAwIDEuODEzLTEuNDg1IDMuMjktMy4zMDEgMy4yOUMxLjQ3IDI0IDAgMjIuNTI2IDAgMjAuNzFzMS40NzUtMy4yOTQgMy4yOTEtMy4yOTV6TTE1LjkwOSAyNGgtNC42NjVjMC02LjE2OS01LjA3NS0xMS4yNDUtMTEuMjQ0LTExLjI0NVY4LjA5YzguNzI3IDAgMTUuOTA5IDcuMTg0IDE1LjkwOSAxNS45MXoiLz48L3N2Zz4=',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 655,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      RSS\n    '
              ),
              Ob.createElement(
                'text',
                { x: 655, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      RSS\n    '
              )
            ))
        )
      }
      function Fd() {
        return (Fd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Gd = function (a) {
        return Ob.createElement(
          'svg',
          Fd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 97,
              height: 20,
              'aria-label': 'Tool: Sketch',
            },
            a
          ),
          xb ||
            (xb = Ob.createElement(
              'linearGradient',
              { id: 'sketch_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          yb ||
            (yb = Ob.createElement(
              'clipPath',
              { id: 'sketch_svg__a' },
              Ob.createElement('rect', {
                width: 97,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          zb ||
            (zb = Ob.createElement(
              'g',
              { clipPath: 'url(#sketch_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h50v20H0z' }),
              Ob.createElement('path', {
                fill: '#f7b500',
                d: 'M50 0h47v20H50z',
              }),
              Ob.createElement('path', {
                fill: 'url(#sketch_svg__b)',
                d: 'M0 0h97v20H0z',
              })
            )),
          Ab ||
            (Ab = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlNrZXRjaDwvdGl0bGU+PHBhdGggZD0iTTEyIDEuMjVsNi43NSA2LjYzN1YyTDEyIDEuMjV6bTAgMGwtNi4wNSA3aDEyLjFsLTYuMDUtN3ptMCAwTDUuMjUgMnY1Ljg4N0wxMiAxLjI1ek01LjI1IDJMMCA5bDQuNDE2LS42OEw1LjI1IDJ6TTAgOWwxMS45NTkgMTMuNzAzLjAwOC0uMDE0TDQuNDQzIDlIMHptMTguNzUtN2wuODM0IDYuMzJMMjQgOWwtNS4yNS03ek0yNCA5aC00LjUwNmwtNy41MjMgMTMuNjkuMDI5LjA2TDI0IDl6TTEyIDIyLjc1bC0uMDMxLS4wNTctLjAwOC4wMTIuMDM5LjA0NXpNNS40MzYgOWw2LjUzMyAxMy42ODZMMTguNTY0IDlINS40MzZaIi8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 345,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 230,
                },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                { x: 345, y: 140, transform: 'scale(.1)', textLength: 230 },
                '\n      Tool\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 725,
                  y: 150,
                  fill: '#ccc',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 370,
                },
                '\n      Sketch\n    '
              ),
              Ob.createElement(
                'text',
                {
                  x: 725,
                  y: 140,
                  transform: 'scale(.1)',
                  fill: '#333',
                  textLength: 370,
                },
                '\n      Sketch\n    '
              )
            ))
        )
      }
      function Hd() {
        return (Hd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Id = function (a) {
        return Ob.createElement(
          'svg',
          Hd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 143,
              height: 20,
              'aria-label': 'Cloud: Amazon AWS',
            },
            a
          ),
          Bb ||
            (Bb = Ob.createElement(
              'linearGradient',
              { id: 'amazon_aws_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Cb ||
            (Cb = Ob.createElement(
              'clipPath',
              { id: 'amazon_aws_svg__a' },
              Ob.createElement('rect', {
                width: 143,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Db ||
            (Db = Ob.createElement(
              'g',
              { clipPath: 'url(#amazon_aws_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h58v20H0z' }),
              Ob.createElement('path', {
                fill: '#232f3e',
                d: 'M58 0h85v20H58z',
              }),
              Ob.createElement('path', {
                fill: 'url(#amazon_aws_svg__b)',
                d: 'M0 0h143v20H0z',
              })
            )),
          Eb ||
            (Eb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkFtYXpvbiBBV1M8L3RpdGxlPjxwYXRoIGQ9Ik02Ljc2MyAxMC4wMzZjMCAuMjk2LjAzMi41MzUuMDg4LjcxLjA2NC4xNzYuMTQ0LjM2OC4yNTYuNTc2LjA0LjA2My4wNTYuMTI3LjA1Ni4xODMgMCAuMDgtLjA0OC4xNi0uMTUyLjI0bC0uNTAzLjMzNWEuMzgzLjM4MyAwIDAgMS0uMjA4LjA3MmMtLjA4IDAtLjE2LS4wNC0uMjM5LS4xMTJhMi40NyAyLjQ3IDAgMCAxLS4yODctLjM3NSA2LjE4IDYuMTggMCAwIDEtLjI0OC0uNDcxYy0uNjIyLjczNC0xLjQwNSAxLjEwMS0yLjM0NyAxLjEwMS0uNjcgMC0xLjIwNS0uMTkxLTEuNTk2LS41NzQtLjM5MS0uMzg0LS41OS0uODk0LS41OS0xLjUzMyAwLS42NzguMjM5LTEuMjMuNzI2LTEuNjQ0LjQ4Ny0uNDE1IDEuMTMzLS42MjMgMS45NTUtLjYyMy4yNzIgMCAuNTUxLjAyNC44NDYuMDY0LjI5Ni4wNC42LjEwNC45MTguMTc2di0uNTgzYzAtLjYwNy0uMTI3LTEuMDMtLjM3NS0xLjI3Ny0uMjU1LS4yNDgtLjY4Ni0uMzY3LTEuMy0uMzY3LS4yOCAwLS41NjguMDMxLS44NjMuMTAzLS4yOTUuMDcyLS41ODMuMTYtLjg2Mi4yNzJhMi4yODcgMi4yODcgMCAwIDEtLjI4LjEwNC40ODguNDg4IDAgMCAxLS4xMjcuMDIzYy0uMTEyIDAtLjE2OC0uMDgtLjE2OC0uMjQ3di0uMzkxYzAtLjEyOC4wMTYtLjIyNC4wNTYtLjI4YS41OTcuNTk3IDAgMCAxIC4yMjQtLjE2N2MuMjc5LS4xNDQuNjE0LS4yNjQgMS4wMDUtLjM2YTQuODQgNC44NCAwIDAgMSAxLjI0Ni0uMTUxYy45NSAwIDEuNjQ0LjIxNiAyLjA5MS42NDcuNDM5LjQzLjY2MiAxLjA4NS42NjIgMS45NjN2Mi41ODZ6bS0zLjI0IDEuMjE0Yy4yNjMgMCAuNTM0LS4wNDguODIyLS4xNDQuMjg3LS4wOTYuNTQzLS4yNzEuNzU4LS41MS4xMjgtLjE1Mi4yMjQtLjMyLjI3Mi0uNTEyLjA0Ny0uMTkxLjA4LS40MjMuMDgtLjY5NHYtLjMzNWE2LjY2IDYuNjYgMCAwIDAtLjczNS0uMTM2IDYuMDIgNi4wMiAwIDAgMC0uNzUtLjA0OGMtLjUzNSAwLS45MjYuMTA0LTEuMTkuMzItLjI2My4yMTUtLjM5LjUxOC0uMzkuOTE3IDAgLjM3NS4wOTUuNjU1LjI5NS44NDYuMTkxLjIuNDcuMjk2LjgzOC4yOTZ6bTYuNDEuODYyYy0uMTQ0IDAtLjI0LS4wMjQtLjMwNC0uMDgtLjA2NC0uMDQ4LS4xMi0uMTYtLjE2OC0uMzExTDcuNTg2IDUuNTVhMS4zOTggMS4zOTggMCAwIDEtLjA3Mi0uMzJjMC0uMTI4LjA2NC0uMi4xOTEtLjJoLjc4M2MuMTUxIDAgLjI1NS4wMjUuMzEuMDguMDY1LjA0OC4xMTMuMTYuMTYuMzEybDEuMzQyIDUuMjg0IDEuMjQ1LTUuMjg0Yy4wNC0uMTYuMDg4LS4yNjQuMTUxLS4zMTJhLjU0OS41NDkgMCAwIDEgLjMyLS4wOGguNjM4Yy4xNTIgMCAuMjU2LjAyNS4zMi4wOC4wNjMuMDQ4LjEyLjE2LjE1MS4zMTJsMS4yNjEgNS4zNDggMS4zODEtNS4zNDhjLjA0OC0uMTYuMTA0LS4yNjQuMTYtLjMxMmEuNTIuNTIgMCAwIDEgLjMxMS0uMDhoLjc0M2MuMTI3IDAgLjIuMDY1LjIuMiAwIC4wNC0uMDA5LjA4LS4wMTcuMTI4YTEuMTM3IDEuMTM3IDAgMCAxLS4wNTYuMmwtMS45MjMgNi4xN2MtLjA0OC4xNi0uMTA0LjI2My0uMTY4LjMxMWEuNTEuNTEgMCAwIDEtLjMwMy4wOGgtLjY4N2MtLjE1MSAwLS4yNTUtLjAyNC0uMzItLjA4LS4wNjMtLjA1Ni0uMTE5LS4xNi0uMTUtLjMybC0xLjIzOC01LjE0OC0xLjIzIDUuMTRjLS4wNC4xNi0uMDg3LjI2NC0uMTUuMzItLjA2NS4wNTYtLjE3Ny4wOC0uMzIuMDh6bTEwLjI1Ni4yMTVjLS40MTUgMC0uODMtLjA0OC0xLjIyOS0uMTQzLS4zOTktLjA5Ni0uNzEtLjItLjkxOC0uMzItLjEyOC0uMDcxLS4yMTUtLjE1MS0uMjQ3LS4yMjNhLjU2My41NjMgMCAwIDEtLjA0OC0uMjI0di0uNDA3YzAtLjE2Ny4wNjQtLjI0Ny4xODMtLjI0Ny4wNDggMCAuMDk2LjAwOC4xNDQuMDI0LjA0OC4wMTYuMTIuMDQ4LjIuMDguMjcxLjEyLjU2Ni4yMTUuODc4LjI3OS4zMTkuMDY0LjYzLjA5Ni45NS4wOTYuNTAyIDAgLjg5NC0uMDg4IDEuMTY1LS4yNjRhLjg2Ljg2IDAgMCAwIC40MTUtLjc1OC43NzcuNzc3IDAgMCAwLS4yMTUtLjU1OWMtLjE0NC0uMTUxLS40MTYtLjI4Ny0uODA3LS40MTVsLTEuMTU3LS4zNmMtLjU4My0uMTgzLTEuMDE0LS40NTQtMS4yNzctLjgxM2ExLjkwMiAxLjkwMiAwIDAgMS0uNC0xLjE1OGMwLS4zMzUuMDczLS42My4yMTYtLjg4Ni4xNDQtLjI1NS4zMzUtLjQ3OS41NzUtLjY1NC4yNC0uMTg0LjUxLS4zMi44My0uNDE1LjMyLS4wOTYuNjU1LS4xMzYgMS4wMDYtLjEzNi4xNzUgMCAuMzU5LjAwOC41MzUuMDMyLjE4My4wMjQuMzUuMDU2LjUxOC4wODguMTYuMDQuMzEyLjA4LjQ1NS4xMjcuMTQ0LjA0OC4yNTYuMDk2LjMzNi4xNDRhLjY5LjY5IDAgMCAxIC4yNC4yLjQzLjQzIDAgMCAxIC4wNzEuMjYzdi4zNzVjMCAuMTY4LS4wNjQuMjU2LS4xODQuMjU2YS44My44MyAwIDAgMS0uMzAzLS4wOTYgMy42NTIgMy42NTIgMCAwIDAtMS41MzItLjMxMWMtLjQ1NSAwLS44MTUuMDcxLTEuMDYyLjIyMy0uMjQ4LjE1Mi0uMzc1LjM4My0uMzc1LjcxIDAgLjIyNC4wOC40MTYuMjQuNTY3LjE1OS4xNTIuNDU0LjMwNC44NzcuNDRsMS4xMzQuMzU4Yy41NzQuMTg0Ljk5LjQ0IDEuMjM3Ljc2Ny4yNDcuMzI3LjM2Ny43MDIuMzY3IDEuMTE3IDAgLjM0My0uMDcyLjY1NS0uMjA3LjkyNi0uMTQ0LjI3Mi0uMzM2LjUxMS0uNTgzLjcwMy0uMjQ4LjItLjU0My4zNDMtLjg4Ni40NDctLjM2LjExMS0uNzM0LjE2Ny0xLjE0Mi4xNjd6TTIxLjY5OCAxNi4yMDdjLTIuNjI2IDEuOTQtNi40NDIgMi45NjktOS43MjIgMi45NjktNC41OTggMC04Ljc0LTEuNy0xMS44Ny00LjUyNi0uMjQ3LS4yMjMtLjAyNC0uNTI3LjI3Mi0uMzUxIDMuMzg0IDEuOTYzIDcuNTU5IDMuMTUzIDExLjg3NyAzLjE1MyAyLjkxNCAwIDYuMTE0LS42MDcgOS4wNi0xLjg1Mi40MzktLjIuODE0LjI4Ny4zODMuNjA3ek0yMi43OTIgMTQuOTYxYy0uMzM2LS40My0yLjIyLS4yMDctMy4wNzQtLjEwMy0uMjU1LjAzMi0uMjk1LS4xOTItLjA2My0uMzYgMS41LTEuMDUzIDMuOTY3LS43NSA0LjI1NC0uMzk5LjI4Ny4zNi0uMDggMi44MjYtMS40ODUgNC4wMDctLjIxNS4xODQtLjQyMy4wODgtLjMyNy0uMTUxLjMyLS43OSAxLjAzLTIuNTcuNjk1LTIuOTk0eiIvPjwvc3ZnPg==',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 385,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 310,
                },
                '\n      Cloud\n    '
              ),
              Ob.createElement(
                'text',
                { x: 385, y: 140, transform: 'scale(.1)', textLength: 310 },
                '\n      Cloud\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 995,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 750,
                },
                '\n      Amazon AWS\n    '
              ),
              Ob.createElement(
                'text',
                { x: 995, y: 140, transform: 'scale(.1)', textLength: 750 },
                '\n      Amazon AWS\n    '
              )
            ))
        )
      }
      function Jd() {
        return (Jd =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Kd = function (a) {
        return Ob.createElement(
          'svg',
          Jd(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: 141,
              height: 20,
              'aria-label': 'Cloud: Google Cloud',
            },
            a
          ),
          Fb ||
            (Fb = Ob.createElement(
              'linearGradient',
              { id: 'google_cloud_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Gb ||
            (Gb = Ob.createElement(
              'clipPath',
              { id: 'google_cloud_svg__a' },
              Ob.createElement('rect', {
                width: 141,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Hb ||
            (Hb = Ob.createElement(
              'g',
              { clipPath: 'url(#google_cloud_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h58v20H0z' }),
              Ob.createElement('path', {
                fill: '#4285f4',
                d: 'M58 0h83v20H58z',
              }),
              Ob.createElement('path', {
                fill: 'url(#google_cloud_svg__b)',
                d: 'M0 0h141v20H0z',
              })
            )),
          Ib ||
            (Ib = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement('image', {
                x: 5,
                y: 3,
                width: 14,
                height: 14,
                xlinkHref:
                  'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdvb2dsZSBDbG91ZDwvdGl0bGU+PHBhdGggZD0iTTEyLjE5IDIuMzhhOS4zNDQgOS4zNDQgMCAwIDAtOS4yMzQgNi44OTNjLjA1My0uMDItLjA1NS4wMTMgMCAwLTMuODc1IDIuNTUxLTMuOTIyIDguMTEtLjI0NyAxMC45NDFsLjAwNi0uMDA3LS4wMDcuMDNhNi43MTcgNi43MTcgMCAwIDAgNC4wNzcgMS4zNTZoNS4xNzNsLjAzLjAzaDUuMTkyYzYuNjg3LjA1MyA5LjM3Ni04LjYwNSAzLjgzNS0xMi4zNWE5LjM2NSA5LjM2NSAwIDAgMC0yLjgyMS00LjU1MmwtLjA0My4wNDMuMDA2LS4wNUE5LjM0NCA5LjM0NCAwIDAgMCAxMi4xOSAyLjM4em0tLjM1OCA0LjE0NmMxLjI0NC0uMDQgMi41MTguMzY4IDMuNDg2IDEuMTVhNS4xODYgNS4xODYgMCAwIDEgMS44NjIgNC4wNzh2LjUxOGMzLjUzLS4wNyAzLjUzIDUuMjYyIDAgNS4xOTNoLTUuMTkzbC0uMDA4LjAwOXYtLjA0SDYuNzg1YTIuNTkgMi41OSAwIDAgMS0xLjA2Ny0uMjNoLjAwMWEyLjU5NyAyLjU5NyAwIDEgMSAzLjQzNy0zLjQzN2wzLjAxMy0zLjAxMkE2Ljc0NyA2Ljc0NyAwIDAgMCA4LjExIDguMjRjLjAxOC0uMDEuMDQtLjAyNi4wNTQtLjAyM2E1LjE4NiA1LjE4NiAwIDAgMSAzLjY3LTEuNjl6Ii8+PC9zdmc+',
              }),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 385,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 310,
                },
                '\n      Cloud\n    '
              ),
              Ob.createElement(
                'text',
                { x: 385, y: 140, transform: 'scale(.1)', textLength: 310 },
                '\n      Cloud\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 985,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  transform: 'scale(.1)',
                  textLength: 730,
                },
                '\n      Google Cloud\n    '
              ),
              Ob.createElement(
                'text',
                { x: 985, y: 140, transform: 'scale(.1)', textLength: 730 },
                '\n      Google Cloud\n    '
              )
            ))
        )
      }
      function Ld() {
        return (Ld =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      var Md = function (a) {
        return Ob.createElement(
          'svg',
          Ld(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 86,
              height: 20,
              'aria-label': 'CDN: Akamai',
            },
            a
          ),
          Jb ||
            (Jb = Ob.createElement(
              'linearGradient',
              { id: 'akamai_svg__b', x2: 0, y2: '100%' },
              Ob.createElement('stop', {
                offset: 0,
                stopColor: '#bbb',
                stopOpacity: 0.1,
              }),
              Ob.createElement('stop', { offset: 1, stopOpacity: 0.1 })
            )),
          Kb ||
            (Kb = Ob.createElement(
              'clipPath',
              { id: 'akamai_svg__a' },
              Ob.createElement('rect', {
                width: 86,
                height: 20,
                rx: 3,
                fill: '#fff',
              })
            )),
          Lb ||
            (Lb = Ob.createElement(
              'g',
              { clipPath: 'url(#akamai_svg__a)' },
              Ob.createElement('path', { fill: '#121212', d: 'M0 0h35v20H0z' }),
              Ob.createElement('path', { fill: '#4c1', d: 'M35 0h51v20H35z' }),
              Ob.createElement('path', {
                fill: 'url(#akamai_svg__b)',
                d: 'M0 0h86v20H0z',
              })
            )),
          Mb ||
            (Mb = Ob.createElement(
              'g',
              {
                fill: '#fff',
                textAnchor: 'middle',
                fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
                textRendering: 'geometricPrecision',
                fontSize: 110,
              },
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 185,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 250,
                  transform: 'scale(.1)',
                },
                '\n      CDN\n    '
              ),
              Ob.createElement(
                'text',
                { x: 185, y: 140, textLength: 250, transform: 'scale(.1)' },
                '\n      CDN\n    '
              ),
              Ob.createElement(
                'text',
                {
                  'aria-hidden': 'true',
                  x: 595,
                  y: 150,
                  fill: '#010101',
                  fillOpacity: 0.3,
                  textLength: 410,
                  transform: 'scale(.1)',
                },
                '\n      Akamai\n    '
              ),
              Ob.createElement(
                'text',
                { x: 595, y: 140, textLength: 410, transform: 'scale(.1)' },
                '\n      Akamai\n    '
              )
            ))
        )
      }
      function Nd() {
        return (0, Nb.jsxs)('section', {
          className: uc().wrap,
          children: [
            (0, Nb.jsx)('h1', { children: 'My tech stack' }),
            (0, Nb.jsx)(wc, {}),
            (0, Nb.jsx)(yc, {}),
            (0, Nb.jsx)(Ac, {}),
            (0, Nb.jsx)(Cc, {}),
            (0, Nb.jsx)(Ec, {}),
            (0, Nb.jsx)(Gc, {}),
            (0, Nb.jsx)(Ic, {}),
            (0, Nb.jsx)(Kc, {}),
            (0, Nb.jsx)(Mc, {}),
            (0, Nb.jsx)(Oc, {}),
            (0, Nb.jsx)(Qc, {}),
            (0, Nb.jsx)(Sc, {}),
            (0, Nb.jsx)(Uc, {}),
            (0, Nb.jsx)(Wc, {}),
            (0, Nb.jsx)(Yc, {}),
            (0, Nb.jsx)($c, {}),
            (0, Nb.jsx)(ad, {}),
            (0, Nb.jsx)(cd, {}),
            (0, Nb.jsx)(ed, {}),
            (0, Nb.jsx)(gd, {}),
            (0, Nb.jsx)(id, {}),
            (0, Nb.jsx)(kd, {}),
            (0, Nb.jsx)(md, {}),
            (0, Nb.jsx)(od, {}),
            (0, Nb.jsx)(qd, {}),
            (0, Nb.jsx)(sd, {}),
            (0, Nb.jsx)(ud, {}),
            (0, Nb.jsx)(wd, {}),
            (0, Nb.jsx)(yd, {}),
            (0, Nb.jsx)(Ad, {}),
            (0, Nb.jsx)(Cd, {}),
            (0, Nb.jsx)(Ed, {}),
            (0, Nb.jsx)(Gd, {}),
            (0, Nb.jsx)(Id, {}),
            (0, Nb.jsx)(Kd, {}),
            (0, Nb.jsx)(Md, {}),
          ],
        })
      }
      var Od = c(3812),
        Pd = c.n(Od),
        Qd = c(8937),
        Rd = Qd.Z.filter(function (a, b) {
          return b < 5
        })
      function Sd() {
        return (0, Nb.jsxs)('section', {
          className: Pd().wrap,
          children: [
            (0, Nb.jsxs)('article', {
              className: Pd().description,
              children: [
                (0, Nb.jsx)('h1', { children: 'I love writing' }),
                (0, Nb.jsx)('p', {
                  children:
                    'I enjoy writing about software development. Especially the things that can unblock our daily work and gives people inspirations to strive for engineering excellence.',
                }),
              ],
            }),
            (0, Nb.jsx)('article', {
              className: Pd().list,
              children: Rd.map(function (a) {
                return (0,
                Nb.jsxs)('article', { className: Pd().item, children: [(0, Nb.jsx)('div', { className: Pd().thumbnail, children: a.cover.startsWith('/') && (0, Nb.jsx)('img', { src: a.cover, alt: a.title }) }), (0, Nb.jsxs)('div', { className: Pd().itemDescription, children: [(0, Nb.jsx)(kc.Z, { href: a.url, children: (0, Nb.jsx)('h2', { children: a.title }) }), a.external && (0, Nb.jsxs)(kc.Z, { href: a.publisherUrl, className: Pd().caption, children: ['Published on ', (0, Nb.jsx)('span', { children: a.publisher })] }), (0, Nb.jsx)('p', { children: a.description })] })] }, a.title)
              }),
            }),
            (0, Nb.jsx)('a', {
              href: '/articles',
              className: Pd().link,
              children: 'See more articles',
            }),
          ],
        })
      }
      var Td = c(3295)
      function Ud() {
        return (0, Nb.jsx)(Td.Z, {
          title: 'Daw-Chih Liou',
          description: Zb.Z.description,
          url: Zb.Z.home,
          image: Zb.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, Nb.jsxs)('div', {
            className: Rb().container,
            children: [
              (0, Nb.jsxs)(Pb.default, {
                children: [
                  (0, Nb.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'XzmO5hA3kc7-91MB68LpYNOvXxLasSYbiecgmnWuFL8',
                  }),
                  (0, Nb.jsx)('script', {
                    defer: !0,
                    'data-domain': 'dawchihliou.github.io',
                    src: 'https://plausible.io/js/plausible.outbound-links.js',
                  }),
                ],
              }),
              (0, Nb.jsxs)('main', {
                className: Rb().main,
                children: [
                  (0, Nb.jsx)(Vb, {}),
                  (0, Nb.jsx)($b, {}),
                  (0, Nb.jsx)(ec, {}),
                  (0, Nb.jsx)(sc, {}),
                  (0, Nb.jsx)(Sd, {}),
                  (0, Nb.jsx)(Nd, {}),
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
    1565: function (a) {
      a.exports = { dot: 'styles_dot__45Gw2' }
    },
    493: function (a) {
      a.exports = {
        wrap: 'Project_wrap__z3J4L',
        project: 'Project_project__Semgz',
        projectDescription: 'Project_projectDescription__FhobG',
        imageContainer: 'Project_imageContainer__CUCm9',
        image: 'Project_image__YFchy',
        imageShadow: 'Project_imageShadow__5j6Bs',
        description: 'Project_description__4MDOS',
        list: 'Project_list__9r0ap',
        link: 'Project_link__sZhy2',
        cfa: 'Project_cfa__YEIeR',
      }
    },
    3812: function (a) {
      a.exports = {
        wrap: 'Publication_wrap__rByHi',
        description: 'Publication_description__8sqET',
        list: 'Publication_list__3yiaQ',
        item: 'Publication_item__yxTJJ',
        itemDescription: 'Publication_itemDescription__n6wAg',
        thumbnail: 'Publication_thumbnail__GUZSL',
        caption: 'Publication_caption__XENOq',
        link: 'Publication_link__pSetA',
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
    7152: function (a) {
      a.exports = {
        repo: 'Repo_repo__NELZY',
        header: 'Repo_header__yE46o',
        headerLeft: 'Repo_headerLeft__rAAJn',
        headerRight: 'Repo_headerRight__tkLOx',
        body: 'Repo_body__9idxe',
        link: 'Repo_link__q7BaF',
        footer: 'Repo_footer__mzYnM',
        label: 'Repo_label__j5TPX',
        labelLink: 'Repo_labelLink__5zYn9',
        title: 'Repo_title__ZTfgA',
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
    a.O(0, [926, 937, 568, 24, 774, 888, 179], function () {
      return a((a.s = 5301))
    }),
      (_N_E = a.O())
  },
])

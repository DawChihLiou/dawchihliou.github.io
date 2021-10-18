_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    '/EDR': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('23aj')
        },
      ])
    },
    '/qNp': function (e, t, n) {
      'use strict'
      var r = {}.hasOwnProperty
      function o(e) {
        return (
          (e && 'object' === typeof e) || (e = {}),
          a(e.line) + ':' + a(e.column)
        )
      }
      function i(e) {
        return (
          (e && 'object' === typeof e) || (e = {}), o(e.start) + '-' + o(e.end)
        )
      }
      function a(e) {
        return e && 'number' === typeof e ? e : 1
      }
      e.exports = function (e) {
        if (!e || 'object' !== typeof e) return null
        if (r.call(e, 'position') || r.call(e, 'type')) return i(e.position)
        if (r.call(e, 'start') || r.call(e, 'end')) return i(e)
        if (r.call(e, 'line') || r.call(e, 'column')) return o(e)
        return null
      }
    },
    '044C': function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        var n = e.indexOf('**', t),
          r = e.indexOf('__', t)
        if (-1 === r) return n
        if (-1 === n) return r
        return r < n ? r : n
      }
    },
    '1T8B': function (e, t, n) {
      'use strict'
      var r =
          '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\u0000-\\u0020]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
        o = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>'
      ;(t.openCloseTag = new RegExp('^(?:' + r + '|' + o + ')')),
        (t.tag = new RegExp(
          '^(?:' +
            r +
            '|' +
            o +
            '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
        ))
    },
    '1db3': function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('Y6TP')
      e.exports = function (e) {
        return (
          (i.raw = function (e, i, a) {
            return o(e, r(a, { position: t(i), warning: n }))
          }),
          i
        )
        function t(t) {
          for (var n = e.offset, r = t.line, o = []; ++r && r in n; )
            o.push((n[r] || 0) + 1)
          return { start: t, indent: o }
        }
        function n(t, n, r) {
          3 !== r && e.file.message(t, n)
        }
        function i(r, i, a) {
          o(r, {
            position: t(i),
            warning: n,
            text: a,
            reference: a,
            textContext: e,
            referenceContext: e,
          })
        }
      }
    },
    '1iAE': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        var t = 'string' === typeof e ? e.charCodeAt(0) : e
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90)
      }
    },
    '22pC': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return function (t, n) {
          var i,
            a,
            l,
            s,
            c,
            u = this,
            f = u.offset,
            p = [],
            h = u[e + 'Methods'],
            d = u[e + 'Tokenizers'],
            m = n.line,
            g = n.column
          if (!t) return p
          ;(C.now = b), (C.file = u.file), v('')
          for (; t; ) {
            for (
              i = -1, a = h.length, s = !1;
              ++i < a &&
              (!(l = d[h[i]]) ||
                (l.onlyAtStart && !u.atStart) ||
                (l.notInList && u.inList) ||
                (l.notInBlock && u.inBlock) ||
                (l.notInLink && u.inLink) ||
                ((c = t.length), l.apply(u, [C, t]), !(s = c !== t.length)));

            );
            s || u.file.fail(new Error('Infinite loop'), C.now())
          }
          return (u.eof = b()), p
          function v(e) {
            for (var t = -1, n = e.indexOf('\n'); -1 !== n; )
              m++, (t = n), (n = e.indexOf('\n', n + 1))
            ;-1 === t ? (g += e.length) : (g = e.length - t),
              m in f && (-1 !== t ? (g += f[m]) : g <= f[m] && (g = f[m] + 1))
          }
          function y() {
            var e = [],
              t = m + 1
            return function () {
              for (var n = m + 1; t < n; ) e.push((f[t] || 0) + 1), t++
              return e
            }
          }
          function b() {
            var e = { line: m, column: g }
            return (e.offset = u.toOffset(e)), e
          }
          function w(e) {
            ;(this.start = e), (this.end = b())
          }
          function k(e) {
            t.substring(0, e.length) !== e &&
              u.file.fail(
                new Error(
                  'Incorrectly eaten value: please report this warning on http://git.io/vg5Ft'
                ),
                b()
              )
          }
          function A() {
            var e = b()
            return t
            function t(t, n) {
              var r = t.position,
                o = r ? r.start : e,
                i = [],
                a = r && r.end.line,
                l = e.line
              if (((t.position = new w(o)), r && n && r.indent)) {
                if (((i = r.indent), a < l)) {
                  for (; ++a < l; ) i.push((f[a] || 0) + 1)
                  i.push(e.column)
                }
                n = i.concat(n)
              }
              return (t.position.indent = n || []), t
            }
          }
          function x(e, t) {
            var n = t ? t.children : p,
              i = n[n.length - 1]
            return (
              i &&
                e.type === i.type &&
                e.type in r &&
                o(i) &&
                o(e) &&
                (e = r[e.type].call(u, i, e)),
              e !== i && n.push(e),
              u.atStart && 0 !== p.length && u.exitStart(),
              e
            )
          }
          function C(e) {
            var n = y(),
              r = A(),
              o = b()
            return (
              k(e),
              (i.reset = a),
              (a.test = l),
              (i.test = l),
              (t = t.substring(e.length)),
              v(e),
              (n = n()),
              i
            )
            function i(e, t) {
              return r(x(r(e), t), n)
            }
            function a() {
              var n = i.apply(null, arguments)
              return (m = o.line), (g = o.column), (t = e + t), n
            }
            function l() {
              var n = r({})
              return (m = o.line), (g = o.column), (t = e + t), n.position
            }
          }
        }
      }
      var r = {
        text: function (e, t) {
          return (e.value += t.value), e
        },
        blockquote: function (e, t) {
          if (this.options.commonmark) return t
          return (e.children = e.children.concat(t.children)), e
        },
      }
      function o(e) {
        var t, n
        return (
          'text' !== e.type ||
          !e.position ||
          ((t = e.position.start),
          (n = e.position.end),
          t.line !== n.line || n.column - t.column === e.value.length)
        )
      }
    },
    '23aj': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return $
        })
      var r = n('q1tI'),
        o = n.n(r),
        i = n('g4pe'),
        a = n.n(i),
        l = n('vRNQ'),
        s = n.n(l),
        c = n('jjhM'),
        u = n.n(c)
      function f(e) {
        var t,
          n,
          r = ''
        if ('string' === typeof e || 'number' === typeof e) r += e
        else if ('object' === typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = f(e[t])) && (r && (r += ' '), (r += n))
          else for (t in e) e[t] && (r && (r += ' '), (r += t))
        return r
      }
      var p = function () {
          for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = f(e)) && (r && (r += ' '), (r += t))
          return r
        },
        h = o.a.createElement
      function d() {
        return h(
          'section',
          {
            className: u.a.hero,
            title: 'Daw-Chih is a software engineer, ux designer, and mentor.',
          },
          h(
            'h1',
            null,
            h(
              'span',
              { className: p(u.a.title, u.a.heroTitle, u.a.heroTitle_1) },
              h(
                'span',
                { className: p(u.a.title, u.a.animatedTitle_1) },
                'software engineer'
              )
            ),
            h(
              'span',
              { className: p(u.a.title, u.a.heroTitle, u.a.heroTitle_2) },
              h(
                'span',
                { className: p(u.a.title, u.a.animatedTitle_2) },
                'ux designer'
              )
            ),
            h(
              'span',
              { className: p(u.a.title, u.a.heroTitle, u.a.heroTitle_3) },
              h(
                'span',
                { className: p(u.a.title, u.a.animatedTitle_3) },
                'mentor'
              )
            )
          )
        )
      }
      var m = n('L7av'),
        g = n.n(m),
        v = n('iNdW'),
        y = n('PZRn'),
        b = o.a.createElement
      function w() {
        return b(
          'section',
          {
            className: g.a.wrap,
            title:
              "My name is Daw-Chih and I'm a software engineer, UX advocate, and mentor who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.",
          },
          b('h1', { hidden: !0, 'aria-label': 'About me' }, 'About me'),
          b(
            'picture',
            null,
            b('source', {
              srcSet: 'optimized/portrait.webp',
              className: g.a.portrait,
              type: 'image/webp',
            }),
            b('source', {
              srcSet: 'optimized/portrait.png',
              className: g.a.portrait,
              type: 'image/png',
            }),
            b('img', {
              src: 'optimized/portrait.png',
              alt: "Daw-Chih's portait",
              className: g.a.portrait,
              loading: 'lazy',
              width: '8rem',
              height: '8rem',
            })
          ),
          b(
            'p',
            { className: g.a.greeting },
            'Hi there',
            b(
              'span',
              { role: 'img', 'aria-label': 'waving emoji' },
              '\ud83d\udc4b'
            )
          ),
          b(
            'p',
            null,
            "My name is Daw-Chih and I'm a software engineer, UX advocate, and mentor who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience."
          ),
          b(
            'div',
            { className: g.a.socials },
            b(
              'a',
              {
                href: y.a.linkedin,
                target: '_blank',
                rel: 'noreferrer',
                'aria-label': "Link to Daw-Chih's Linkedin profile",
              },
              b(v.b, { size: '1.5em' }),
              b('span', { hidden: !0 }, "Link to Daw-Chih's Linkedin profile")
            ),
            b(
              'a',
              {
                href: y.a.github,
                target: '_blank',
                rel: 'noreferrer',
                'aria-label': "Link to Daw-Chih's GitHub profile",
              },
              b(v.a, { size: '1.5em' }),
              b('span', { hidden: !0 }, "Link to Daw-Chih's GitHub profile")
            ),
            b(
              'a',
              {
                href: y.a.medium,
                target: '_blank',
                rel: 'noreferrer',
                'aria-label': "Link to Daw-Chih's Medium profile",
              },
              b(v.c, { size: '1.5em' }),
              b('span', { hidden: !0 }, "Link to Daw-Chih's Medium profile")
            ),
            b(
              'a',
              {
                href: y.a.twitter,
                target: '_blank',
                rel: 'noreferrer',
                'aria-label': "Link to Daw-Chih's Twitter",
              },
              b(v.d, { size: '1.5em' }),
              b('span', { hidden: !0 }, "Link to Daw-Chih's Twitter")
            )
          )
        )
      }
      function k(e, t, n) {
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
      var A = n('Tgqd'),
        x = [
          {
            title: 'Founder & CEO',
            quote:
              'Daw-Chih is an very proactive critical thinker that has curiosity on lots of multiple technologies and software trend. He has expertise on front-end technology with his artistic designer sense. He loves challenging and is always willing to share what he knows with the peers.',
          },
          {
            title: 'Software Engineer',
            quote:
              'Daw-Chih is one of the most hard-working, highly-skilled and dedicated people I\u2019ve ever worked with. During the 3+ years we\u2019ve worked together, he has shown great drive and perseverance in getting things done. Once he commits to doing a project or task, no matter how challenging, it gets done at a high standard. Tense meetings are no match for him - his tranquil nature is appreciated in the team and helps us keep calm even in challenging situations. These qualities, along with his strong engineering mindset make Daw-Chih a great teammate and a pleasure to work with.',
          },
          {
            title: 'Manager',
            quote:
              'Daw Chih is one of the rising super developer that I have ever seen for a long time. He is meticulous, quick learner and self-starter. His courage to fight what is right from wrong, passion for the technology and willingness to help out others make everyone love to have him on the team. Highly recommended.',
          },
        ],
        C = n('O5o4'),
        _ = n.n(C),
        T = o.a.createElement
      function j() {
        return T(
          'section',
          { className: _.a.wrap, title: 'recommendation from others' },
          T(
            'div',
            { className: _.a.smallerWrap },
            T('h1', null, 'See what people say about me')
          ),
          T(
            'div',
            { className: _.a.grid, title: 'what people say about me' },
            x.map(function (e, t) {
              var n
              return T(
                'article',
                { className: _.a.card, key: e.title },
                T(
                  'a',
                  { href: y.a.linkedin, target: '_blank', rel: 'noreferrer' },
                  T('p', null, '" ', e.quote, ' "'),
                  T(
                    'div',
                    { className: _.a.cardAction },
                    T(
                      'span',
                      {
                        className: p(
                          _.a.avatar,
                          ((n = {}),
                          k(n, _.a.avatarColorBlue, 0 === t),
                          k(n, _.a.avatarColorRed, 1 === t),
                          k(n, _.a.avatarColorYellow, 2 === t),
                          n)
                        ),
                      },
                      0 === t && T(A.b, null),
                      1 === t && T(A.f, null),
                      2 === t && T(A.a, null)
                    ),
                    T('span', { className: _.a.description }, e.title)
                  ),
                  T(
                    'div',
                    { className: _.a.footer },
                    T('span', null, 'See more on Linkedin')
                  )
                )
              )
            })
          )
        )
      }
      var O = [
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
            image: '/optimized/logo-npm.png',
            darkmodeImage: '/optimized/logo-npm.png',
            link:
              'https://github.com/DawChihLiou/cz-conventional-changelog-with-jiraid-detection',
          },
          {
            title: 'Spes',
            description:
              "Reading turned my life around, and I believe it can turn yours too. There're so many books full of wisdom but it's hard to find yourself a book among the overwhelming options. So I'm giving away a book every month to a subscriber and help you find your next book to read. Sign up! Hopefully you'll be inspired too:)",
            image: '/optimized/logo-spes.png',
            darmodeImage: '/optimized/logo-spes.png',
            link: 'https://spes.me/',
          },
        ],
        I = n('j9mF'),
        P = n.n(I),
        S = o.a.createElement
      function N() {
        return S(
          'section',
          {
            className: P.a.wrap,
            title: 'my open source and none-profit projects',
          },
          S(
            'article',
            { className: P.a.description },
            S('h1', null, 'Some of my Open Source projects'),
            S(
              'p',
              null,
              "I've spent over 8 years woking on Web engineering, mostly building features and taking care of architectures for client facing products and enterprise software for public tech companies and Fortune 500 enterprises."
            ),
            S(
              'p',
              null,
              "I've been working on open source and non-profit projects too! It brings me so much joy contributing back to the community."
            ),
            S(
              'p',
              null,
              'I enjoy building tooling around testing, documentation, and CI/CD to improve developer experience. On top of solid coding and automation, nothing makes me happier than creating a meaningful product with thoughtful user experience and great performance.'
            )
          ),
          S(
            'article',
            { className: P.a.list },
            O.map(function (e) {
              return S(
                'article',
                { key: e.title, className: P.a.item },
                S(
                  'a',
                  { href: e.link, target: '_blank', rel: 'noreferrer' },
                  S(
                    'div',
                    { className: P.a.grid },
                    S(
                      'div',
                      { className: P.a.itemImage },
                      S(
                        'picture',
                        null,
                        S('source', {
                          srcSet: e.darkmodeImage,
                          media: '(prefers-color-scheme: dark)',
                        }),
                        S('source', {
                          srcSet: e.image,
                          media:
                            '(prefers-color-scheme: light), (prefers-color-scheme: no-preference)',
                        }),
                        S('img', {
                          src: e.image,
                          alt: e.title,
                          loading: 'lazy',
                        })
                      )
                    ),
                    S(
                      'div',
                      { className: P.a.itemDescription },
                      S('h2', null, e.title),
                      S('p', null, e.description)
                    )
                  )
                )
              )
            })
          ),
          S(
            'a',
            {
              href: y.a.github,
              target: '_blank',
              rel: 'noreferrer',
              className: P.a.link,
            },
            'See more on GitHub'
          )
        )
      }
      var E = n('IujW'),
        L = n.n(E),
        z = n('psyO'),
        H = n.n(z),
        B = o.a.createElement
      function D() {
        return B(
          'section',
          { className: H.a.wrap },
          B('h1', null, 'My tech stack'),
          B(L.a, {
            source:
              '![TypeScript](https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&labelColor=121212&color=007ACC)\n![JavaScript](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&labelColor=121212&color=F7DF1E)\n![Java](https://img.shields.io/badge/Code-Java-informational?style=flat&logo=java&logoColor=white&labelColor=121212&color=007396)\n![React](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&labelColor=121212&color=61DAFB)\n![ReactiveX](https://img.shields.io/badge/Code-ReactiveX-informational?style=flat&logo=reactivex&logoColor=white&labelColor=121212&color=B7178C)\n![Redux](https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&labelColor=121212&color=764ABC)\n![Node.js](https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=node.js&logoColor=white&labelColor=121212&color=339933)\n![GraphQL](https://img.shields.io/badge/Code-GraphQL-informational?style=flat&logo=graphql&logoColor=white&labelColor=121212&color=E10098)\n![TypeORM](https://img.shields.io/badge/Code-TypeORM-informational?style=flat&logo=typeorm&logoColor=white&labelColor=121212&color=DD1100)\n![CSS3](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&labelColor=121212&color=1572B6)\n![Sass](https://img.shields.io/badge/Code-Sass-informational?style=flat&logo=sass&logoColor=white&labelColor=121212&color=CC6699)\n![HTML5](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&labelColor=121212&color=E34F26)\n![Vue](https://img.shields.io/badge/Code-Vue.js-informational?style=flat&logo=vue.js&logoColor=white&labelColor=121212&color=4FC08D)\n![MDX](https://img.shields.io/badge/Code-MDX-informational?style=flat&logo=mdx&logoColor=white&labelColor=121212&color=F29400)\n![AuthO](https://img.shields.io/badge/Code-AuthO-informational?style=flat&logo=autho&logoColor=white&labelColor=121212&color=EB5424)\n![SVG](https://img.shields.io/badge/Code-SVG-informational?style=flat&logo=svg&logoColor=white&labelColor=121212&color=FFB13B)\n![Webpack](https://img.shields.io/badge/Tool-Webpack-informational?style=flat&logo=webpack&logoColor=white&labelColor=121212&color=8DD6F9)\n![Babel](https://img.shields.io/badge/Tool-Babel-informational?style=flat&logo=babel&logoColor=white&labelColor=121212&color=F9DC3E)\n![Jest](https://img.shields.io/badge/Tool-Jest-informational?style=flat&logo=jest&logoColor=white&labelColor=121212&color=C21325)\n![Cypress](https://img.shields.io/badge/Tool-Cypress-informational?style=flat&logo=cypress&logoColor=white&labelColor=121212&color=17202C)\n![Next.js](https://img.shields.io/badge/Tool-Next.js-informational?style=flat&logo=next.js&logoColor=white&labelColor=121212&color=000000)\n![Vercel](https://img.shields.io/badge/Tool-Vercel-informational?style=flat&logo=vercel&logoColor=white&labelColor=121212&color=000000)\n![PostgreSQL](https://img.shields.io/badge/Tool-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&labelColor=121212&color=336791)\n![Docker](https://img.shields.io/badge/Tool-Docker-informational?style=flat&logo=docker&logoColor=white&labelColor=121212&color=2496ED)\n![GitHub](https://img.shields.io/badge/Tool-GitHub-informational?style=flat&logo=github&logoColor=white&labelColor=121212&color=181717)\n![GitHub_Actions](https://img.shields.io/badge/Tool-GitHub_Actions-informational?style=flat&logo=github-actions&logoColor=white&labelColor=121212&color=2088FF)\n![Storybook](https://img.shields.io/badge/Tool-Storybook-informational?style=flat&logo=storybook&logoColor=white&labelColor=121212&color=FF4785)\n![JFrog](https://img.shields.io/badge/Tool-JFrog-informational?style=flat&logo=jfrog&logoColor=white&labelColor=121212&color=41BF47)\n![npm](https://img.shields.io/badge/Tool-npm-informational?style=flat&logo=npm&logoColor=white&labelColor=121212&color=CB3837)\n![yarn](https://img.shields.io/badge/Tool-yarn-informational?style=flat&logo=yarn&logoColor=white&labelColor=121212&color=2C8EBB)\n![Postman](https://img.shields.io/badge/Tool-Postman-informational?style=flat&logo=postman&logoColor=white&labelColor=121212&color=FF6C37)\n![RSS](https://img.shields.io/badge/Tool-RSS-informational?style=flat&logo=rss&logoColor=white&labelColor=121212&color=FFA500)\n![Sketch](https://img.shields.io/badge/Tool-Sketch-informational?style=flat&logo=sketch&logoColor=white&labelColor=121212&color=F7B500)\n![Amazon_AWS](https://img.shields.io/badge/Cloud-Amazon_AWS-informational?style=flat&logo=amazon-aws&logoColor=white&labelColor=121212&color=232F3E)\n![Google_Cloud](https://img.shields.io/badge/Cloud-Google_Cloud-informational?style=flat&logo=google-cloud&logoColor=white&labelColor=121212&color=4285F4)\n![Akamai](https://img.shields.io/badge/CDN-Akamai-informational?style=flat&logo=akamai&logoColor=white&labelColor=121212&color=1293D8)\n',
          })
        )
      }
      var R = n('puBm'),
        F = n.n(R),
        M = n('ywx8'),
        U = o.a.createElement,
        q = M.a.filter(function (e) {
          return '/articles/helloworld' !== e.url
        })
      function J() {
        return U(
          'section',
          {
            className: F.a.wrap,
            title: 'my open source and none-profit projects',
          },
          U(
            'article',
            { className: F.a.description },
            U('h1', null, 'I love writing'),
            U(
              'p',
              null,
              'I enjoy writing about software development. Especially the things that can unblock our daily work and gives people inspirations to strive for engineering excellence.'
            )
          ),
          U(
            'article',
            { className: F.a.list },
            q.map(function (e) {
              return U(
                'article',
                { key: e.title, className: F.a.item },
                U(
                  'a',
                  { href: e.url, target: '_blank', rel: 'noreferrer' },
                  U(
                    'div',
                    { className: F.a.itemDescription },
                    U('h2', null, e.title),
                    e.external &&
                      U(
                        'a',
                        {
                          href: e.publisherUrl,
                          target: '_blank',
                          rel: 'noreferrer',
                          className: F.a.caption,
                        },
                        'Published on ',
                        U('span', null, e.publisher)
                      ),
                    U('p', null, e.description)
                  )
                )
              )
            })
          ),
          U(
            'a',
            { href: '/articles', className: F.a.link },
            'See more articles'
          )
        )
      }
      var W = o.a.createElement
      function $() {
        return W(
          'div',
          { className: s.a.container },
          W(
            a.a,
            null,
            W('meta', {
              property: 'og:title',
              content: "Daw-Chih Liou's Portfolio",
            }),
            W('meta', { property: 'og:type', content: 'website' }),
            W('meta', { property: 'og:url', content: y.a.home }),
            W('meta', { property: 'og:description', content: y.a.description }),
            W('meta', { property: 'og:image', content: y.a.heroImage }),
            W('meta', { property: 'og:image:type', content: 'image/png' }),
            W('meta', { property: 'og:image:width', content: '1411' }),
            W('meta', { property: 'og:image:height', content: '682' }),
            W('meta', { property: 'og:image:alt', content: y.a.description }),
            W('meta', {
              name: 'google-site-verification',
              content: 'XzmO5hA3kc7-91MB68LpYNOvXxLasSYbiecgmnWuFL8',
            })
          ),
          W(
            'main',
            { className: s.a.main },
            W(d, null),
            W(w, null),
            W(j, null),
            W(N, null),
            W(J, null),
            W(D, null)
          )
        )
      }
    },
    '2a+b': function (e, t, n) {
      'use strict'
      var r = n('IPAr')
      e.exports = function (e, t, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          h,
          d,
          m,
          g,
          v,
          y,
          b,
          w,
          k,
          A,
          x,
          C,
          _,
          T,
          j,
          O,
          I
        if (!this.options.gfm) return
        ;(a = 0), (x = 0), (f = t.length + 1), (p = [])
        for (; a < f; ) {
          if (
            ((j = t.indexOf(o, a)),
            (O = t.indexOf('|', a + 1)),
            -1 === j && (j = t.length),
            -1 === O || O > j)
          ) {
            if (x < 2) return
            break
          }
          p.push(t.slice(a, j)), x++, (a = j + 1)
        }
        ;(c = p.join(o)),
          (l = p.splice(1, 1)[0] || []),
          (a = 0),
          (f = l.length),
          x--,
          (s = !1),
          (g = [])
        for (; a < f; ) {
          if ('|' === (d = l.charAt(a))) {
            if (((m = null), !1 === s)) {
              if (!1 === I) return
            } else g.push(s), (s = !1)
            I = !1
          } else if ('-' === d) (m = !0), (s = s || null)
          else if (':' === d)
            s = s === i ? 'center' : m && null === s ? 'right' : i
          else if (!r(d)) return
          a++
        }
        !1 !== s && g.push(s)
        if (g.length < 1) return
        if (n) return !0
        ;(A = -1),
          (_ = []),
          (T = e(c).reset({ type: 'table', align: g, children: _ }))
        for (; ++A < x; ) {
          for (
            C = p[A],
              u = { type: 'tableRow', children: [] },
              A && e(o),
              e(C).reset(u, T),
              f = C.length + 1,
              a = 0,
              h = '',
              v = '',
              y = !0,
              b = null,
              w = null;
            a < f;

          )
            if ('\t' !== (d = C.charAt(a)) && ' ' !== d) {
              if ('' === d || '|' === d)
                if (y) e(d)
                else {
                  if (d && w) {
                    ;(h += d), a++
                    continue
                  }
                  ;(!v && !d) ||
                    y ||
                    ((c = v),
                    h.length > 1 &&
                      (d
                        ? ((c += h.slice(0, h.length - 1)),
                          (h = h.charAt(h.length - 1)))
                        : ((c += h), (h = ''))),
                    (k = e.now()),
                    e(c)(
                      {
                        type: 'tableCell',
                        children: this.tokenizeInline(v, k),
                      },
                      u
                    )),
                    e(h + d),
                    (h = ''),
                    (v = '')
                }
              else if (
                (h && ((v += h), (h = '')),
                (v += d),
                '\\' === d && a !== f - 2 && ((v += C.charAt(a + 1)), a++),
                '`' === d)
              ) {
                for (b = 1; C.charAt(a + 1) === d; ) (v += d), a++, b++
                w ? b >= w && (w = 0) : (w = b)
              }
              ;(y = !1), a++
            } else v ? (h += d) : e(d), a++
          A || e(o + l)
        }
        return T
      }
      var o = '\n',
        i = 'left'
    },
    '3+Nb': function (e, t, n) {
      'use strict'
      e.exports = {
        position: !0,
        gfm: !0,
        commonmark: !1,
        footnotes: !1,
        pedantic: !1,
        blocks: n('VHls'),
      }
    },
    '36yr': function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return e.indexOf('`', t)
      }
    },
    '3GlI': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        var t = String(e),
          n = t.length
        for (; '\n' === t.charAt(--n); );
        return t.slice(0, n + 1)
      }
    },
    '3m36': function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('q1tI'),
        i = parseInt((o.version || '16').slice(0, 2), 10) >= 16,
        a = o.createElement
      function l(e, t) {
        return a(e, s(t), t.children)
      }
      function s(e) {
        return e['data-sourcepos']
          ? { 'data-sourcepos': e['data-sourcepos'] }
          : {}
      }
      e.exports = {
        break: 'br',
        paragraph: 'p',
        emphasis: 'em',
        strong: 'strong',
        thematicBreak: 'hr',
        blockquote: 'blockquote',
        delete: 'del',
        link: 'a',
        image: 'img',
        linkReference: 'a',
        imageReference: 'img',
        table: l.bind(null, 'table'),
        tableHead: l.bind(null, 'thead'),
        tableBody: l.bind(null, 'tbody'),
        tableRow: l.bind(null, 'tr'),
        tableCell: function (e) {
          var t = e.align ? { textAlign: e.align } : void 0,
            n = s(e)
          return a(
            e.isHeader ? 'th' : 'td',
            t ? r({ style: t }, n) : n,
            e.children
          )
        },
        root: function (e) {
          var t = !e.className,
            n = (t && o.Fragment) || 'div'
          return a(n, t ? null : e, e.children)
        },
        text: function (e) {
          return i ? e.children : a('span', null, e.children)
        },
        list: function (e) {
          var t = s(e)
          null !== e.start &&
            1 !== e.start &&
            void 0 !== e.start &&
            (t.start = e.start.toString())
          return a(e.ordered ? 'ol' : 'ul', t, e.children)
        },
        listItem: function (e) {
          var t = null
          if (null !== e.checked && void 0 !== e.checked) {
            var n = e.checked
            t = a('input', { type: 'checkbox', checked: n, readOnly: !0 })
          }
          return a('li', s(e), t, e.children)
        },
        definition: function () {
          return null
        },
        heading: function (e) {
          return a('h'.concat(e.level), s(e), e.children)
        },
        inlineCode: function (e) {
          return a('code', s(e), e.children)
        },
        code: function (e) {
          var t = e.language && 'language-'.concat(e.language),
            n = a('code', t ? { className: t } : null, e.value)
          return a('pre', s(e), n)
        },
        html: function (e) {
          if (e.skipHtml) return null
          var t = e.isBlock ? 'div' : 'span'
          if (e.escapeHtml) {
            var n = o.Fragment || t
            return a(n, null, e.value)
          }
          var r = { dangerouslySetInnerHTML: { __html: e.value } }
          return a(t, r)
        },
        virtualHtml: function (e) {
          return a(e.tag, s(e), e.children)
        },
        parsedHtml: function (e) {
          return e['data-sourcepos']
            ? o.cloneElement(e.element, {
                'data-sourcepos': e['data-sourcepos'],
              })
            : e.element
        },
      }
    },
    '48q5': function (e, t, n) {
      'use strict'
      var r = n('tpqs')
      e.exports = function (e, t) {
        if ('string' !== typeof e) return e
        if (0 === e.length) return e
        var n = r.basename(e, r.extname(e)) + t
        return r.join(r.dirname(e), n)
      }
    },
    '4MqD': function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        return function () {
          var r = n || this,
            o = r[e]
          return (r[e] = !t), i
          function i() {
            r[e] = o
          }
        }
      }
    },
    '5T4m': function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          h = this
        if (n) return !0
        ;(r = h.inlineMethods),
          (a = r.length),
          (o = h.inlineTokenizers),
          (i = -1),
          (f = t.length)
        for (; ++i < a; )
          'text' !== (u = r[i]) &&
            o[u] &&
            ((c = o[u].locator) || e.file.fail('Missing locator: `' + u + '`'),
            -1 !== (s = c.call(h, t, 1)) && s < f && (f = s))
        ;(l = t.slice(0, f)),
          (p = e.now()),
          h.decode(l, p, function (t, n, r) {
            e(r || t)({ type: 'text', value: t })
          })
      }
    },
    '5t69': function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('P7XM')
      e.exports = function (e) {
        var t, n, i
        for (n in (o(l, e), o(a, l), (t = l.prototype)))
          (i = t[n]) &&
            'object' === typeof i &&
            (t[n] = 'concat' in i ? i.concat() : r(i))
        return l
        function a(t) {
          return e.apply(this, t)
        }
        function l() {
          return this instanceof l ? e.apply(this, arguments) : new a(arguments)
        }
      }
    },
    '62+j': function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('d+Jj')
      ;(e.exports = a), (a.notInList = !0), (a.notInBlock = !0)
      var i = /^( {4}|\t)?/gm
      function a(e, t, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          h,
          d,
          m,
          g,
          v,
          y = this,
          b = y.offset
        if (y.options.footnotes) {
          for (
            a = 0, l = t.length, s = '', c = e.now(), u = c.line;
            a < l && ((d = t.charAt(a)), r(d));

          )
            (s += d), a++
          if ('[' === t.charAt(a) && '^' === t.charAt(a + 1)) {
            for (
              a = (s += '[^').length, p = '';
              a < l && ']' !== (d = t.charAt(a));

            )
              '\\' === d && ((p += d), a++, (d = t.charAt(a))), (p += d), a++
            if (p && ']' === t.charAt(a) && ':' === t.charAt(a + 1)) {
              if (n) return !0
              for (
                m = o(p), a = (s += p + ']:').length;
                a < l && ('\t' === (d = t.charAt(a)) || ' ' === d);

              )
                (s += d), a++
              for (
                c.column += s.length,
                  c.offset += s.length,
                  p = '',
                  f = '',
                  h = '';
                a < l;

              ) {
                if ('\n' === (d = t.charAt(a))) {
                  for (h = d, a++; a < l && '\n' === (d = t.charAt(a)); )
                    (h += d), a++
                  for (p += h, h = ''; a < l && ' ' === (d = t.charAt(a)); )
                    (h += d), a++
                  if (0 === h.length) break
                  p += h
                }
                p && ((f += p), (p = '')), (f += d), a++
              }
              return (
                (s += f),
                (f = f.replace(i, function (e) {
                  return (b[u] = (b[u] || 0) + e.length), u++, ''
                })),
                (g = e(s)),
                (v = y.enterBlock()),
                (f = y.tokenizeBlock(f, c)),
                v(),
                g({ type: 'footnoteDefinition', identifier: m, children: f })
              )
            }
          }
        }
      }
    },
    '6MDH': function (e, t, n) {
      'use strict'
      var r = n('g1+e')
      function o(e) {
        delete e.position
      }
      function i(e) {
        e.position = void 0
      }
      e.exports = function (e, t) {
        return r(e, t ? o : i), e
      }
    },
    '6dBs': function (e, t, n) {
      'use strict'
      var r = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        l = function (e) {
          return 'function' === typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === o.call(e)
        },
        s = function (e) {
          if (!e || '[object Object]' !== o.call(e)) return !1
          var t,
            n = r.call(e, 'constructor'),
            i =
              e.constructor &&
              e.constructor.prototype &&
              r.call(e.constructor.prototype, 'isPrototypeOf')
          if (e.constructor && !n && !i) return !1
          for (t in e);
          return 'undefined' === typeof t || r.call(e, t)
        },
        c = function (e, t) {
          i && '__proto__' === t.name
            ? i(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue)
        },
        u = function (e, t) {
          if ('__proto__' === t) {
            if (!r.call(e, t)) return
            if (a) return a(e, t).value
          }
          return e[t]
        }
      e.exports = function e() {
        var t,
          n,
          r,
          o,
          i,
          a,
          f = arguments[0],
          p = 1,
          h = arguments.length,
          d = !1
        for (
          'boolean' === typeof f &&
            ((d = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ('object' !== typeof f && 'function' !== typeof f)) &&
              (f = {});
          p < h;
          ++p
        )
          if (null != (t = arguments[p]))
            for (n in t)
              (r = u(f, n)),
                f !== (o = u(t, n)) &&
                  (d && o && (s(o) || (i = l(o)))
                    ? (i
                        ? ((i = !1), (a = r && l(r) ? r : []))
                        : (a = r && s(r) ? r : {}),
                      c(f, { name: n, newValue: e(d, a, o) }))
                    : 'undefined' !== typeof o &&
                      c(f, { name: n, newValue: o }))
        return f
      }
    },
    '7MxR': function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('6MDH')
      e.exports = function () {
        var e,
          t = this,
          n = String(t.file),
          a = { line: 1, column: 1, offset: 0 },
          l = r(a)
        65279 === (n = n.replace(i, '\n')).charCodeAt(0) &&
          ((n = n.slice(1)), l.column++, l.offset++)
        ;(e = {
          type: 'root',
          children: t.tokenizeBlock(n, l),
          position: { start: a, end: t.eof || r(a) },
        }),
          t.options.position || o(e, !0)
        return e
      }
      var i = /\r\n|\r/g
    },
    '7XrY': function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        var n = e.indexOf('\n', t)
        for (; n > t && ' ' === e.charAt(n - 1); ) n--
        return n
      }
    },
    '8oxB': function (e, t) {
      var n,
        r,
        o = (e.exports = {})
      function i() {
        throw new Error('setTimeout has not been defined')
      }
      function a() {
        throw new Error('clearTimeout has not been defined')
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0)
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0)
        try {
          return n(e, 0)
        } catch (t) {
          try {
            return n.call(null, e, 0)
          } catch (t) {
            return n.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : i
        } catch (e) {
          n = i
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          r = a
        }
      })()
      var s,
        c = [],
        u = !1,
        f = -1
      function p() {
        u &&
          s &&
          ((u = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && h())
      }
      function h() {
        if (!u) {
          var e = l(p)
          u = !0
          for (var t = c.length; t; ) {
            for (s = c, c = []; ++f < t; ) s && s[f].run()
            ;(f = -1), (t = c.length)
          }
          ;(s = null),
            (u = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e)
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e)
              try {
                r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            })(e)
        }
      }
      function d(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function m() {}
      ;(o.nextTick = function (e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        c.push(new d(e, t)), 1 !== c.length || u || l(h)
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (e) {
          return []
        }),
        (o.binding = function (e) {
          throw new Error('process.binding is not supported')
        }),
        (o.cwd = function () {
          return '/'
        }),
        (o.chdir = function (e) {
          throw new Error('process.chdir is not supported')
        }),
        (o.umask = function () {
          return 0
        })
    },
    '9Z5P': function (e, t, n) {
      'use strict'
      var r = n('g1+e')
      function o(e) {
        var t = e.children
        ;(e.children = [
          {
            type: 'tableHead',
            align: e.align,
            children: [t[0]],
            position: t[0].position,
          },
        ]),
          t.length > 1 &&
            e.children.push({
              type: 'tableBody',
              align: e.align,
              children: t.slice(1),
              position: {
                start: t[1].position.start,
                end: t[t.length - 1].position.end,
              },
            })
      }
      e.exports = function (e) {
        return r(e, 'table', o), e
      }
    },
    ACGk: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        var n = e.indexOf('[', t),
          r = e.indexOf('![', t)
        if (-1 === r) return n
        return n < r ? n : r
      }
    },
    BEtg: function (e, t) {
      function n(e) {
        return (
          !!e.constructor &&
          'function' === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      }
      e.exports = function (e) {
        return (
          null != e &&
          (n(e) ||
            (function (e) {
              return (
                'function' === typeof e.readFloatLE &&
                'function' === typeof e.slice &&
                n(e.slice(0, 0))
              )
            })(e) ||
            !!e._isBuffer)
        )
      }
    },
    DCCt: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('obXZ'),
        i = n('IPAr'),
        a = n('W8QB')
      ;(e.exports = l), (l.locator = a)
      function l(e, t, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          h = 0,
          d = t.charAt(h)
        if (
          ('*' === d || '_' === d) &&
          ((l = this.options.pedantic),
          (u = d),
          (s = d),
          (f = t.length),
          h++,
          (c = ''),
          (d = ''),
          !l || !i(t.charAt(h)))
        )
          for (; h < f; ) {
            if (((p = d), (d = t.charAt(h)) === s && (!l || !i(p)))) {
              if ((d = t.charAt(++h)) !== s) {
                if (!r(c) || p === s) return
                if (!l && '_' === s && o(d)) {
                  c += s
                  continue
                }
                return (
                  !!n ||
                  ((a = e.now()).column++,
                  a.offset++,
                  e(u + c + s)({
                    type: 'emphasis',
                    children: this.tokenizeInline(c, a),
                  }))
                )
              }
              c += s
            }
            l || '\\' !== d || ((c += d), (d = t.charAt(++h))), (c += d), h++
          }
      }
    },
    DNXe: function (e, t, n) {
      'use strict'
      var r = n('Y6TP'),
        o = n('IPAr'),
        i = n('DuHW')
      ;(e.exports = c), (c.locator = i), (c.notInLink = !0)
      var a = 'mailto:',
        l = ['http://', 'https://', a],
        s = l.length
      function c(e, t, n) {
        var i,
          c,
          u,
          f,
          p,
          h,
          d,
          m,
          g,
          v,
          y,
          b,
          w = this
        if (w.options.gfm) {
          for (i = '', f = -1, m = s; ++f < m; )
            if (((h = l[f]), (d = t.slice(0, h.length)).toLowerCase() === h)) {
              i = d
              break
            }
          if (i) {
            for (
              f = i.length, m = t.length, g = '', v = 0;
              f < m &&
              ((u = t.charAt(f)), !o(u) && '<' !== u) &&
              (('.' !== u &&
                ',' !== u &&
                ':' !== u &&
                ';' !== u &&
                '"' !== u &&
                "'" !== u &&
                ')' !== u &&
                ']' !== u) ||
                ((y = t.charAt(f + 1)) && !o(y))) &&
              (('(' !== u && '[' !== u) || v++,
              (')' !== u && ']' !== u) || !(--v < 0));

            )
              (g += u), f++
            if (g) {
              if (((c = i += g), h === a)) {
                if (-1 === (p = g.indexOf('@')) || p === m - 1) return
                c = c.substr(a.length)
              }
              return (
                !!n ||
                ((b = w.enterLink()),
                (c = w.tokenizeInline(c, e.now())),
                b(),
                e(i)({
                  type: 'link',
                  title: null,
                  url: r(i, { nonTerminated: !1 }),
                  children: c,
                }))
              )
            }
          }
        }
      }
    },
    DuHW: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        var n,
          o = r.length,
          i = -1,
          a = -1
        if (!this.options.gfm) return -1
        for (; ++i < o; )
          -1 !== (n = e.indexOf(r[i], t)) && (n < a || -1 === a) && (a = n)
        return a
      }
      var r = ['https://', 'http://', 'mailto:']
    },
    EBzq: function (e, t, n) {
      'use strict'
      var r = [].slice
      e.exports = function (e, t) {
        var n
        return function () {
          var t,
            a = r.call(arguments, 0),
            l = e.length > a.length
          l && a.push(o)
          try {
            t = e.apply(null, a)
          } catch (s) {
            if (l && n) throw s
            return o(s)
          }
          l ||
            (t && 'function' === typeof t.then
              ? t.then(i, o)
              : t instanceof Error
              ? o(t)
              : i(t))
        }
        function o() {
          n || ((n = !0), t.apply(null, arguments))
        }
        function i(e) {
          o(null, e)
        }
      }
    },
    Fhq4: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return e.indexOf('~~', t)
      }
    },
    FxOa: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return e.indexOf('\\', t)
      }
    },
    Gdbo: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        if (e) throw e
      }
    },
    GyeZ: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return function (n) {
          var r,
            o = 0,
            i = n.indexOf('\\'),
            a = e[t],
            l = []
          for (; -1 !== i; )
            l.push(n.slice(o, i)),
              (o = i + 1),
              ((r = n.charAt(o)) && -1 !== a.indexOf(r)) || l.push('\\'),
              (i = n.indexOf('\\', o))
          return l.push(n.slice(o)), l.join('')
        }
      }
    },
    'I7+u': function (e, t, n) {
      'use strict'
      function r(e) {
        if ('string' === typeof e)
          return (function (e) {
            return t
            function t(t) {
              return Boolean(t && t.type === e)
            }
          })(e)
        if (null === e || void 0 === e) return a
        if ('object' === typeof e) return ('length' in e ? i : o)(e)
        if ('function' === typeof e) return e
        throw new Error('Expected function, string, or object as test')
      }
      function o(e) {
        return function (t) {
          var n
          for (n in e) if (t[n] !== e[n]) return !1
          return !0
        }
      }
      function i(e) {
        var t = (function (e) {
            for (var t = [], n = e.length, o = -1; ++o < n; ) t[o] = r(e[o])
            return t
          })(e),
          n = t.length
        return function () {
          var e = -1
          for (; ++e < n; ) if (t[e].apply(this, arguments)) return !0
          return !1
        }
      }
      function a() {
        return !0
      }
      e.exports = r
    },
    IPAr: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return o.test('number' === typeof e ? r(e) : e.charAt(0))
      }
      var r = String.fromCharCode,
        o = /\s/
    },
    IRYA: function (e, t) {
      var n = Object.prototype.toString
      e.exports = function (e) {
        return '[object String]' === n.call(e)
      }
    },
    IoeE: function (e, t, n) {
      'use strict'
      e.exports = function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return (t.children || []).reduce(function (t, n) {
          return (
            'definition' === n.type &&
              (t[n.identifier] = { href: n.url, title: n.title }),
            e(n, t)
          )
        }, n)
      }
    },
    IujW: function (e, t, n) {
      'use strict'
      function r(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      var o = n('U6jy'),
        i = n('ZEx/'),
        a = n('v0oL'),
        l = n('17x9'),
        s = n('wnOJ'),
        c = n('cVWj'),
        u = n('u3i/'),
        f = n('UV+P'),
        p = n('9Z5P'),
        h = n('IoeE'),
        d = n('Nw8X'),
        m = n('3m36'),
        g = n('h9ck'),
        v = Object.keys(m),
        y = function (e) {
          var t = e.source || e.children || '',
            n = e.parserOptions
          if (e.allowedTypes && e.disallowedTypes)
            throw new Error(
              'Only one of `allowedTypes` and `disallowedTypes` should be defined'
            )
          var r = o(m, e.renderers),
            l = [[a, n]].concat(e.plugins || []).reduce(b, i()),
            d = l.parse(t),
            y = o(e, { renderers: r, definitions: h(d) }),
            w = (function (e) {
              var t = [p, s()],
                n = e.disallowedTypes
              e.allowedTypes &&
                (n = v.filter(function (t) {
                  return 'root' !== t && -1 === e.allowedTypes.indexOf(t)
                }))
              var r = e.unwrapDisallowed ? 'unwrap' : 'remove'
              n && n.length > 0 && t.push(u.ofType(n, r))
              e.allowNode && t.push(u.ifNotMatch(e.allowNode, r))
              var o = !e.escapeHtml && !e.skipHtml,
                i = (e.astPlugins || []).some(function (e) {
                  return (Array.isArray(e) ? e[0] : e).identity === g.HtmlParser
                })
              o && !i && t.push(c)
              return e.astPlugins ? t.concat(e.astPlugins) : t
            })(e),
            k = l.runSync(d),
            A = w.reduce(function (e, t) {
              return t(e, y)
            }, k)
          return f(A, y)
        }
      function b(e, t) {
        return Array.isArray(t) ? e.use.apply(e, r(t)) : e.use(t)
      }
      ;(y.defaultProps = {
        renderers: {},
        escapeHtml: !0,
        skipHtml: !1,
        sourcePos: !1,
        rawSourcePos: !1,
        transformLinkUri: d,
        astPlugins: [],
        plugins: [],
        parserOptions: {},
      }),
        (y.propTypes = {
          className: l.string,
          source: l.string,
          children: l.string,
          sourcePos: l.bool,
          rawSourcePos: l.bool,
          escapeHtml: l.bool,
          skipHtml: l.bool,
          allowNode: l.func,
          allowedTypes: l.arrayOf(l.oneOf(v)),
          disallowedTypes: l.arrayOf(l.oneOf(v)),
          transformLinkUri: l.oneOfType([l.func, l.bool]),
          linkTarget: l.oneOfType([l.func, l.string]),
          transformImageUri: l.func,
          astPlugins: l.arrayOf(l.func),
          unwrapDisallowed: l.bool,
          renderers: l.object,
          plugins: l.array,
          parserOptions: l.object,
        }),
        (y.types = v),
        (y.renderers = m),
        (y.uriTransformer = d),
        (e.exports = y)
    },
    J5yW: function (e, t, n) {
      'use strict'
      var r = n('1iAE'),
        o = n('ZONP')
      e.exports = function (e) {
        return r(e) || o(e)
      }
    },
    JWB8: function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('4MqD'),
        i = n('K4Ni'),
        a = n('GyeZ'),
        l = n('1db3'),
        s = n('22pC')
      function c(e, t) {
        ;(this.file = t),
          (this.offset = {}),
          (this.options = r(this.options)),
          this.setOptions({}),
          (this.inList = !1),
          (this.inBlock = !1),
          (this.inLink = !1),
          (this.atStart = !0),
          (this.toOffset = i(t).toOffset),
          (this.unescape = a(this, 'escape')),
          (this.decode = l(this))
      }
      e.exports = c
      var u = c.prototype
      function f(e) {
        var t,
          n = []
        for (t in e) n.push(t)
        return n
      }
      ;(u.setOptions = n('qUik')),
        (u.parse = n('7MxR')),
        (u.options = n('3+Nb')),
        (u.exitStart = o('atStart', !0)),
        (u.enterList = o('inList', !1)),
        (u.enterLink = o('inLink', !1)),
        (u.enterBlock = o('inBlock', !1)),
        (u.interruptParagraph = [
          ['thematicBreak'],
          ['atxHeading'],
          ['fencedCode'],
          ['blockquote'],
          ['html'],
          ['setextHeading', { commonmark: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.interruptList = [
          ['atxHeading', { pedantic: !1 }],
          ['fencedCode', { pedantic: !1 }],
          ['thematicBreak', { pedantic: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.interruptBlockquote = [
          ['indentedCode', { commonmark: !0 }],
          ['fencedCode', { commonmark: !0 }],
          ['atxHeading', { commonmark: !0 }],
          ['setextHeading', { commonmark: !0 }],
          ['thematicBreak', { commonmark: !0 }],
          ['html', { commonmark: !0 }],
          ['list', { commonmark: !0 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (u.blockTokenizers = {
          newline: n('akNn'),
          indentedCode: n('kmJ7'),
          fencedCode: n('Syd7'),
          blockquote: n('soWj'),
          atxHeading: n('kDuX'),
          thematicBreak: n('rUY8'),
          list: n('Nx7O'),
          setextHeading: n('lebq'),
          html: n('tvOo'),
          footnote: n('62+j'),
          definition: n('uuyv'),
          table: n('2a+b'),
          paragraph: n('NiDC'),
        }),
        (u.inlineTokenizers = {
          escape: n('mcUT'),
          autoLink: n('Sce3'),
          url: n('DNXe'),
          html: n('g1k0'),
          link: n('MNGI'),
          reference: n('c6LQ'),
          strong: n('qPMR'),
          emphasis: n('DCCt'),
          deletion: n('egI8'),
          code: n('cFAA'),
          break: n('lgF9'),
          text: n('5T4m'),
        }),
        (u.blockMethods = f(u.blockTokenizers)),
        (u.inlineMethods = f(u.inlineTokenizers)),
        (u.tokenizeBlock = s('block')),
        (u.tokenizeInline = s('inline')),
        (u.tokenizeFactory = s)
    },
    JqBK: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return String(e).replace(/\s+/g, ' ')
      }
    },
    K4Ni: function (e, t, n) {
      'use strict'
      function r(e) {
        return function (t) {
          var n = -1,
            r = e.length
          if (t < 0) return {}
          for (; ++n < r; )
            if (e[n] > t)
              return { line: n + 1, column: t - (e[n - 1] || 0) + 1, offset: t }
          return {}
        }
      }
      function o(e) {
        return function (t) {
          var n = t && t.line,
            r = t && t.column
          if (!isNaN(n) && !isNaN(r) && n - 1 in e)
            return (e[n - 2] || 0) + r - 1 || 0
          return -1
        }
      }
      e.exports = function (e) {
        var t = (function (e) {
          var t = [],
            n = e.indexOf('\n')
          for (; -1 !== n; ) t.push(n + 1), (n = e.indexOf('\n', n + 1))
          return t.push(e.length + 1), t
        })(String(e))
        return { toPosition: r(t), toOffset: o(t) }
      }
    },
    L7av: function (e, t, n) {
      e.exports = {
        wrap: 'Intro_wrap__3FL8Y',
        greeting: 'Intro_greeting__3B0GS',
        portrait: 'Intro_portrait__2lmQ3',
        socials: 'Intro_socials__2yu0Q',
      }
    },
    MNGI: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('ACGk')
      ;(e.exports = h), (h.locator = o)
      var i = {}.hasOwnProperty,
        a = '\\',
        l = '(',
        s = ')',
        c = '"',
        u = "'",
        f = {}
      ;(f['"'] = c), (f["'"] = u)
      var p = {}
      function h(e, t, n) {
        var o,
          c,
          u,
          h,
          d,
          m,
          g,
          v,
          y,
          b,
          w,
          k,
          A,
          x,
          C,
          _,
          T,
          j,
          O,
          I = this,
          P = '',
          S = 0,
          N = t.charAt(0),
          E = I.options.pedantic,
          L = I.options.commonmark,
          z = I.options.gfm
        if (
          ('!' === N && ((y = !0), (P = N), (N = t.charAt(++S))),
          '[' === N && (y || !I.inLink))
        ) {
          for (
            P += N,
              C = '',
              S++,
              k = t.length,
              x = 0,
              (T = e.now()).column += S,
              T.offset += S;
            S < k;

          ) {
            if (((m = N = t.charAt(S)), '`' === N)) {
              for (c = 1; '`' === t.charAt(S + 1); ) (m += N), S++, c++
              u ? c >= u && (u = 0) : (u = c)
            } else if (N === a) S++, (m += t.charAt(S))
            else if ((u && !z) || '[' !== N) {
              if ((!u || z) && ']' === N) {
                if (!x) {
                  if (!E)
                    for (; S < k && ((N = t.charAt(S + 1)), r(N)); )
                      (m += N), S++
                  if (t.charAt(S + 1) !== l) return
                  ;(m += l), (o = !0), S++
                  break
                }
                x--
              }
            } else x++
            ;(C += m), (m = ''), S++
          }
          if (o) {
            for (b = C, P += C + m, S++; S < k && ((N = t.charAt(S)), r(N)); )
              (P += N), S++
            if (
              ((N = t.charAt(S)), (v = L ? p : f), (C = ''), (h = P), '<' === N)
            ) {
              for (S++, h += '<'; S < k && '>' !== (N = t.charAt(S)); ) {
                if (L && '\n' === N) return
                ;(C += N), S++
              }
              if ('>' !== t.charAt(S)) return
              ;(P += '<' + C + '>'), (_ = C), S++
            } else {
              for (
                N = null, m = '';
                S < k && ((N = t.charAt(S)), !m || !i.call(v, N));

              ) {
                if (r(N)) {
                  if (!E) break
                  m += N
                } else {
                  if (N === l) x++
                  else if (N === s) {
                    if (0 === x) break
                    x--
                  }
                  ;(C += m),
                    (m = ''),
                    N === a && ((C += a), (N = t.charAt(++S))),
                    (C += N)
                }
                S++
              }
              ;(_ = C), (S = (P += C).length)
            }
            for (C = ''; S < k && ((N = t.charAt(S)), r(N)); ) (C += N), S++
            if (((N = t.charAt(S)), (P += C), C && i.call(v, N)))
              if ((S++, (P += N), (C = ''), (w = v[N]), (d = P), L)) {
                for (; S < k && (N = t.charAt(S)) !== w; )
                  N === a && ((C += a), (N = t.charAt(++S))), S++, (C += N)
                if ((N = t.charAt(S)) !== w) return
                for (
                  A = C, P += C + N, S++;
                  S < k && ((N = t.charAt(S)), r(N));

                )
                  (P += N), S++
              } else
                for (m = ''; S < k; ) {
                  if ((N = t.charAt(S)) === w)
                    g && ((C += w + m), (m = '')), (g = !0)
                  else if (g) {
                    if (N === s) {
                      ;(P += C + w + m), (A = C)
                      break
                    }
                    r(N) ? (m += N) : ((C += w + m + N), (m = ''), (g = !1))
                  } else C += N
                  S++
                }
            if (t.charAt(S) === s)
              return (
                !!n ||
                ((P += s),
                (_ = I.decode.raw(I.unescape(_), e(h).test().end, {
                  nonTerminated: !1,
                })),
                A &&
                  ((d = e(d).test().end), (A = I.decode.raw(I.unescape(A), d))),
                (O = { type: y ? 'image' : 'link', title: A || null, url: _ }),
                y
                  ? (O.alt = I.decode.raw(I.unescape(b), T) || null)
                  : ((j = I.enterLink()),
                    (O.children = I.tokenizeInline(b, T)),
                    j()),
                e(P)(O))
              )
          }
        }
      }
      ;(p['"'] = c), (p["'"] = u), (p['('] = s)
    },
    'MQ5/': function (e, t, n) {
      'use strict'
      e.exports = a
      var r = [
          '\\',
          '`',
          '*',
          '{',
          '}',
          '[',
          ']',
          '(',
          ')',
          '#',
          '+',
          '-',
          '.',
          '!',
          '_',
          '>',
        ],
        o = r.concat(['~', '|']),
        i = o.concat([
          '\n',
          '"',
          '$',
          '%',
          '&',
          "'",
          ',',
          '/',
          ':',
          ';',
          '<',
          '=',
          '?',
          '@',
          '^',
        ])
      function a(e) {
        var t = e || {}
        return t.commonmark ? i : t.gfm ? o : r
      }
      ;(a.default = r), (a.gfm = o), (a.commonmark = i)
    },
    NBu1: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return e.indexOf('<', t)
      }
    },
    NiDC: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('ZONP'),
        i = n('3GlI'),
        a = n('cmLN')
      e.exports = function (e, t, n) {
        var s,
          c,
          u,
          f,
          p,
          h = this,
          d = h.options,
          m = d.commonmark,
          g = d.gfm,
          v = h.blockTokenizers,
          y = h.interruptParagraph,
          b = t.indexOf(l),
          w = t.length
        for (; b < w; ) {
          if (-1 === b) {
            b = w
            break
          }
          if (t.charAt(b + 1) === l) break
          if (m) {
            for (f = 0, s = b + 1; s < w; ) {
              if ('\t' === (u = t.charAt(s))) {
                f = 4
                break
              }
              if (' ' !== u) break
              f++, s++
            }
            if (f >= 4) {
              b = t.indexOf(l, b + 1)
              continue
            }
          }
          if (((c = t.slice(b + 1)), a(y, v, h, [e, c, !0]))) break
          if (
            v.list.call(h, e, c, !0) &&
            (h.inList || m || (g && !o(r.left(c).charAt(0))))
          )
            break
          if (
            ((s = b),
            -1 !== (b = t.indexOf(l, b + 1)) && '' === r(t.slice(s, b)))
          ) {
            b = s
            break
          }
        }
        if (((c = t.slice(0, b)), '' === r(c))) return e(c), null
        if (n) return !0
        return (
          (p = e.now()),
          (c = i(c)),
          e(c)({ type: 'paragraph', children: h.tokenizeInline(c, p) })
        )
      }
      var l = '\n'
    },
    'NkL+': function (e, t, n) {
      'use strict'
      var r = Object.prototype.toString
      e.exports = function (e) {
        var t
        return (
          '[object Object]' === r.call(e) &&
          (null === (t = Object.getPrototypeOf(e)) ||
            t === Object.getPrototypeOf({}))
        )
      }
    },
    Nw8X: function (e, t, n) {
      'use strict'
      var r = ['http', 'https', 'mailto', 'tel']
      e.exports = function (e) {
        var t = (e || '').trim(),
          n = t.charAt(0)
        if ('#' === n || '/' === n) return t
        var o = t.indexOf(':')
        if (-1 === o) return t
        for (var i = r.length, a = -1; ++a < i; ) {
          var l = r[a]
          if (o === l.length && t.slice(0, l.length).toLowerCase() === l)
            return t
        }
        return (-1 !== (a = t.indexOf('?')) && o > a) ||
          (-1 !== (a = t.indexOf('#')) && o > a)
          ? t
          : 'javascript:void(0)'
      }
    },
    Nx7O: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('RjOF'),
        i = n('ZONP'),
        a = n('vPdy'),
        l = n('vvrU'),
        s = n('cmLN')
      e.exports = function (e, t, n) {
        var o,
          a,
          l,
          p,
          h,
          d,
          m,
          g,
          k,
          A,
          x,
          C,
          _,
          T,
          j,
          O,
          I,
          P,
          S,
          N,
          E,
          L,
          z,
          H,
          B = this,
          D = B.options.commonmark,
          R = B.options.pedantic,
          F = B.blockTokenizers,
          M = B.interruptList,
          U = 0,
          q = t.length,
          J = null,
          W = 0
        for (; U < q; ) {
          if ((p = t.charAt(U)) === f) W += 4 - (W % 4)
          else {
            if (p !== c) break
            W++
          }
          U++
        }
        if (W >= 4) return
        if (((p = t.charAt(U)), (o = D ? b : y), !0 === v[p])) (h = p), (l = !1)
        else {
          for (l = !0, a = ''; U < q && ((p = t.charAt(U)), i(p)); )
            (a += p), U++
          if (((p = t.charAt(U)), !a || !0 !== o[p])) return
          ;(J = parseInt(a, 10)), (h = p)
        }
        if ((p = t.charAt(++U)) !== c && p !== f) return
        if (n) return !0
        ;(U = 0), (T = []), (j = []), (O = [])
        for (; U < q; ) {
          for (
            d = t.indexOf(u, U),
              m = U,
              g = !1,
              H = !1,
              -1 === d && (d = q),
              z = U + 4,
              W = 0;
            U < q;

          ) {
            if ((p = t.charAt(U)) === f) W += 4 - (W % 4)
            else {
              if (p !== c) break
              W++
            }
            U++
          }
          if (
            (W >= 4 && (H = !0),
            I && W >= I.indent && (H = !0),
            (p = t.charAt(U)),
            (k = null),
            !H)
          ) {
            if (!0 === v[p]) (k = p), U++, W++
            else {
              for (a = ''; U < q && ((p = t.charAt(U)), i(p)); ) (a += p), U++
              ;(p = t.charAt(U)),
                U++,
                a && !0 === o[p] && ((k = p), (W += a.length + 1))
            }
            if (k)
              if ((p = t.charAt(U)) === f) (W += 4 - (W % 4)), U++
              else if (p === c) {
                for (z = U + 4; U < z && t.charAt(U) === c; ) U++, W++
                U === z && t.charAt(U) === c && ((U -= 3), (W -= 3))
              } else p !== u && '' !== p && (k = null)
          }
          if (k) {
            if (!R && h !== k) break
            g = !0
          } else
            D || H || t.charAt(m) !== c
              ? D && I && (H = W >= I.indent || W > 4)
              : (H = !0),
              (g = !1),
              (U = m)
          if (
            ((x = t.slice(m, d)),
            (A = m === U ? x : t.slice(U, d)),
            ('*' === k || '_' === k || '-' === k) &&
              F.thematicBreak.call(B, e, x, !0))
          )
            break
          if (((C = _), (_ = !r(A).length), H && I))
            (I.value = I.value.concat(O, x)), (j = j.concat(O, x)), (O = [])
          else if (g)
            0 !== O.length && (I.value.push(''), (I.trail = O.concat())),
              (I = { value: [x], indent: W, trail: [] }),
              T.push(I),
              (j = j.concat(O, x)),
              (O = [])
          else if (_) {
            if (C) break
            O.push(x)
          } else {
            if (C) break
            if (s(M, F, B, [e, x, !0])) break
            ;(I.value = I.value.concat(O, x)), (j = j.concat(O, x)), (O = [])
          }
          U = d + 1
        }
        ;(E = e(j.join(u)).reset({
          type: 'list',
          ordered: l,
          start: J,
          loose: null,
          children: [],
        })),
          (P = B.enterList()),
          (S = B.enterBlock()),
          (N = !1),
          (U = -1),
          (q = T.length)
        for (; ++U < q; )
          (I = T[U].value.join(u)),
            (L = e.now()),
            (I = e(I)(w(B, I, L), E)).loose && (N = !0),
            (I = T[U].trail.join(u)),
            U !== q - 1 && (I += u),
            e(I)
        return P(), S(), (E.loose = N), E
      }
      var c = ' ',
        u = '\n',
        f = '\t',
        p = /\n\n(?!\s*$)/,
        h = /^\[([ \t]|x|X)][ \t]/,
        d = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
        m = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
        g = /^( {1,4}|\t)?/gm,
        v = { '*': !0, '+': !0, '-': !0 },
        y = { '.': !0 },
        b = {}
      function w(e, t, n) {
        var r,
          o,
          i = e.offset,
          a = e.options.pedantic ? k : A,
          l = null
        return (
          (t = a.apply(null, arguments)),
          e.options.gfm &&
            (r = t.match(h)) &&
            ((o = r[0].length),
            (l = 'x' === r[1].toLowerCase()),
            (i[n.line] += o),
            (t = t.slice(o))),
          {
            type: 'listItem',
            loose: p.test(t) || t.charAt(t.length - 1) === u,
            checked: l,
            children: e.tokenizeBlock(t, n),
          }
        )
      }
      function k(e, t, n) {
        var r = e.offset,
          o = n.line
        return (t = t.replace(m, i)), (o = n.line), t.replace(g, i)
        function i(e) {
          return (r[o] = (r[o] || 0) + e.length), o++, ''
        }
      }
      function A(e, t, n) {
        var r,
          i,
          s,
          f,
          p,
          h,
          m,
          g = e.offset,
          v = n.line
        for (
          f = (t = t.replace(d, function (e, t, n, a, l) {
            ;(i = t + n + a),
              (s = l),
              Number(n) < 10 && i.length % 2 === 1 && (n = c + n)
            return (r = t + o(c, n.length) + a) + s
          })).split(u),
            (p = l(t, a(r).indent).split(u))[0] = s,
            g[v] = (g[v] || 0) + i.length,
            v++,
            h = 0,
            m = f.length;
          ++h < m;

        )
          (g[v] = (g[v] || 0) + f[h].length - p[h].length), v++
        return p.join(u)
      }
      ;(b['.'] = !0), (b[')'] = !0)
    },
    O5o4: function (e, t, n) {
      e.exports = {
        wrap: 'Recommendation_wrap__yhRyl',
        smallerWrap: 'Recommendation_smallerWrap__2UJQF',
        grid: 'Recommendation_grid__3UO52',
        card: 'Recommendation_card__13DEA',
        cardAction: 'Recommendation_cardAction__3xzYW',
        avatar: 'Recommendation_avatar__19q-L',
        avatarColorBlue: 'Recommendation_avatarColorBlue__2CCXO',
        avatarColorRed: 'Recommendation_avatarColorRed__2hdDL',
        avatarColorYellow: 'Recommendation_avatarColorYellow__1Eg60',
        descrition: 'Recommendation_descrition__UapL2',
        footer: 'Recommendation_footer__36vPq',
      }
    },
    P7XM: function (e, t) {
      'function' === typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })))
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t
              var n = function () {}
              ;(n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.prototype.constructor = e)
            }
          })
    },
    RjOF: function (e, t, n) {
      'use strict'
      var r,
        o = ''
      e.exports = function (e, t) {
        if ('string' !== typeof e) throw new TypeError('expected a string')
        if (1 === t) return e
        if (2 === t) return e + e
        var n = e.length * t
        if (r !== e || 'undefined' === typeof r) (r = e), (o = '')
        else if (o.length >= n) return o.substr(0, n)
        for (; n > o.length && t > 1; ) 1 & t && (o += e), (t >>= 1), (e += e)
        return (o = (o += e).substr(0, n))
      }
    },
    RsFJ: function (e, t) {
      ;((t = e.exports = function (e) {
        return e.replace(/^\s*|\s*$/g, '')
      }).left = function (e) {
        return e.replace(/^\s*/, '')
      }),
        (t.right = function (e) {
          return e.replace(/\s*$/, '')
        })
    },
    SZPq: function (e, t, n) {
      'use strict'
      ;(function (t) {
        var r = n('tpqs'),
          o = n('48q5'),
          i = n('BEtg')
        e.exports = c
        var a = {}.hasOwnProperty,
          l = c.prototype
        l.toString = function (e) {
          var t = this.contents || ''
          return i(t) ? t.toString(e) : String(t)
        }
        var s = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']
        function c(e) {
          var n, r, o
          if (e) {
            if ('string' === typeof e || i(e)) e = { contents: e }
            else if ('message' in e && 'messages' in e) return e
          } else e = {}
          if (!(this instanceof c)) return new c(e)
          for (
            this.data = {},
              this.messages = [],
              this.history = [],
              this.cwd = t.cwd(),
              r = -1,
              o = s.length;
            ++r < o;

          )
            (n = s[r]), a.call(e, n) && (this[n] = e[n])
          for (n in e) -1 === s.indexOf(n) && (this[n] = e[n])
        }
        function u(e, t) {
          if (-1 !== e.indexOf(r.sep))
            throw new Error(
              '`' + t + '` cannot be a path: did not expect `' + r.sep + '`'
            )
        }
        function f(e, t) {
          if (!e) throw new Error('`' + t + '` cannot be empty')
        }
        function p(e, t) {
          if (!e)
            throw new Error('Setting `' + t + '` requires `path` to be set too')
        }
        Object.defineProperty(l, 'path', {
          get: function () {
            return this.history[this.history.length - 1]
          },
          set: function (e) {
            f(e, 'path'), e !== this.path && this.history.push(e)
          },
        }),
          Object.defineProperty(l, 'dirname', {
            get: function () {
              return 'string' === typeof this.path
                ? r.dirname(this.path)
                : void 0
            },
            set: function (e) {
              p(this.path, 'dirname'),
                (this.path = r.join(e || '', this.basename))
            },
          }),
          Object.defineProperty(l, 'basename', {
            get: function () {
              return 'string' === typeof this.path
                ? r.basename(this.path)
                : void 0
            },
            set: function (e) {
              f(e, 'basename'),
                u(e, 'basename'),
                (this.path = r.join(this.dirname || '', e))
            },
          }),
          Object.defineProperty(l, 'extname', {
            get: function () {
              return 'string' === typeof this.path
                ? r.extname(this.path)
                : void 0
            },
            set: function (e) {
              var t = e || ''
              if ((u(t, 'extname'), p(this.path, 'extname'), t)) {
                if ('.' !== t.charAt(0))
                  throw new Error('`extname` must start with `.`')
                if (-1 !== t.indexOf('.', 1))
                  throw new Error('`extname` cannot contain multiple dots')
              }
              this.path = o(this.path, t)
            },
          }),
          Object.defineProperty(l, 'stem', {
            get: function () {
              return 'string' === typeof this.path
                ? r.basename(this.path, this.extname)
                : void 0
            },
            set: function (e) {
              f(e, 'stem'),
                u(e, 'stem'),
                (this.path = r.join(
                  this.dirname || '',
                  e + (this.extname || '')
                ))
            },
          })
      }.call(this, n('8oxB')))
    },
    Sce3: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('Y6TP'),
        i = n('NBu1')
      ;(e.exports = s), (s.locator = i), (s.notInLink = !0)
      var a = 'mailto:',
        l = a.length
      function s(e, t, n) {
        var i, s, c, u, f, p, h, d, m, g, v, y
        if ('<' === t.charAt(0)) {
          for (
            i = this,
              s = '',
              c = t.length,
              u = 0,
              f = '',
              h = !1,
              d = '',
              u++,
              s = '<';
            u < c &&
            ((p = t.charAt(u)),
            !(
              r(p) ||
              '>' === p ||
              '@' === p ||
              (':' === p && '/' === t.charAt(u + 1))
            ));

          )
            (f += p), u++
          if (f) {
            if (((d += f), (f = ''), (d += p = t.charAt(u)), u++, '@' === p))
              h = !0
            else {
              if (':' !== p || '/' !== t.charAt(u + 1)) return
              ;(d += '/'), u++
            }
            for (; u < c && ((p = t.charAt(u)), !r(p) && '>' !== p); )
              (f += p), u++
            if (((p = t.charAt(u)), f && '>' === p))
              return (
                !!n ||
                ((g = d += f),
                (s += d + p),
                (m = e.now()).column++,
                m.offset++,
                h &&
                  (d.slice(0, l).toLowerCase() === a
                    ? ((g = g.substr(l)), (m.column += l), (m.offset += l))
                    : (d = a + d)),
                (v = i.inlineTokenizers),
                (i.inlineTokenizers = { text: v.text }),
                (y = i.enterLink()),
                (g = i.tokenizeInline(g, m)),
                (i.inlineTokenizers = v),
                y(),
                e(s)({
                  type: 'link',
                  title: null,
                  url: o(d, { nonTerminated: !1 }),
                  children: g,
                }))
              )
          }
        }
      }
    },
    Syd7: function (e, t, n) {
      'use strict'
      var r = n('3GlI')
      e.exports = function (e, t, n) {
        var l,
          s,
          c,
          u,
          f,
          p,
          h,
          d,
          m,
          g,
          v,
          y = this,
          b = y.options,
          w = t.length + 1,
          k = 0,
          A = ''
        if (!b.gfm) return
        for (; k < w && ((c = t.charAt(k)) === a || c === i); ) (A += c), k++
        if (((g = k), '~' !== (c = t.charAt(k)) && '`' !== c)) return
        k++, (s = c), (l = 1), (A += c)
        for (; k < w && (c = t.charAt(k)) === s; ) (A += c), l++, k++
        if (l < 3) return
        for (; k < w && ((c = t.charAt(k)) === a || c === i); ) (A += c), k++
        ;(u = ''), (f = '')
        for (; k < w && (c = t.charAt(k)) !== o && '~' !== c && '`' !== c; )
          c === a || c === i ? (f += c) : ((u += f + c), (f = '')), k++
        if ((c = t.charAt(k)) && c !== o) return
        if (n) return !0
        ;((v = e.now()).column += A.length),
          (v.offset += A.length),
          (A += u),
          (u = y.decode.raw(y.unescape(u), v)),
          f && (A += f)
        ;(f = ''), (d = ''), (m = ''), (p = ''), (h = '')
        for (; k < w; )
          if (
            ((c = t.charAt(k)), (p += d), (h += m), (d = ''), (m = ''), c === o)
          ) {
            for (
              p ? ((d += c), (m += c)) : (A += c), f = '', k++;
              k < w && (c = t.charAt(k)) === a;

            )
              (f += c), k++
            if (((d += f), (m += f.slice(g)), !(f.length >= 4))) {
              for (f = ''; k < w && (c = t.charAt(k)) === s; ) (f += c), k++
              if (((d += f), (m += f), !(f.length < l))) {
                for (f = ''; k < w && ((c = t.charAt(k)) === a || c === i); )
                  (d += c), (m += c), k++
                if (!c || c === o) break
              }
            }
          } else (p += c), (m += c), k++
        return e((A += p + d))({ type: 'code', lang: u || null, value: r(h) })
      }
      var o = '\n',
        i = '\t',
        a = ' '
    },
    TOwV: function (e, t, n) {
      'use strict'
      e.exports = n('qT12')
    },
    U6jy: function (e, t) {
      e.exports = function () {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var r = arguments[t]
          for (var o in r) n.call(r, o) && (e[o] = r[o])
        }
        return e
      }
      var n = Object.prototype.hasOwnProperty
    },
    'UV+P': function (e, t, n) {
      'use strict'
      var r = n('q1tI'),
        o = n('U6jy'),
        i = n('TOwV'),
        a = {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 },
        }
      function l(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          c = t.renderers[e.type]
        void 0 === e.position && (e.position = (n.node && n.node.position) || a)
        var u = e.position.start,
          f = [e.type, u.line, u.column, o].join('-')
        if (!i.isValidElementType(c))
          throw new Error(
            'Renderer for type `'.concat(
              e.type,
              '` not defined or is not renderable'
            )
          )
        var p = s(e, f, t, c, n, o)
        return r.createElement(c, p, p.children || h() || void 0)
        function h() {
          return (
            e.children &&
            e.children.map(function (n, r) {
              return l(n, t, { node: e, props: p }, r)
            })
          )
        }
      }
      function s(e, t, n, i, a, s) {
        var u,
          f = { key: t },
          p = 'string' === typeof i
        n.sourcePos &&
          e.position &&
          (f['data-sourcepos'] = [
            (u = e.position).start.line,
            ':',
            u.start.column,
            '-',
            u.end.line,
            ':',
            u.end.column,
          ]
            .map(String)
            .join('')),
          n.rawSourcePos && !p && (f.sourcePosition = e.position),
          n.includeNodeIndex &&
            a.node &&
            a.node.children &&
            !p &&
            ((f.index = a.node.children.indexOf(e)),
            (f.parentChildCount = a.node.children.length))
        var h =
          null !== e.identifier && void 0 !== e.identifier
            ? n.definitions[e.identifier] || {}
            : null
        switch (e.type) {
          case 'root':
            c(f, { className: n.className })
            break
          case 'text':
            ;(f.nodeKey = t), (f.children = e.value)
            break
          case 'heading':
            f.level = e.depth
            break
          case 'list':
            ;(f.start = e.start),
              (f.ordered = e.ordered),
              (f.tight = !e.loose),
              (f.depth = e.depth)
            break
          case 'listItem':
            ;(f.checked = e.checked),
              (f.tight = !e.loose),
              (f.ordered = e.ordered),
              (f.index = e.index),
              (f.children = (function (e, t) {
                if (e.loose) return e.children
                if (t.node && e.index > 0 && t.node.children[e.index - 1].loose)
                  return e.children
                return (function (e) {
                  return e.children.reduce(function (e, t) {
                    return e.concat(
                      'paragraph' === t.type ? t.children || [] : [t]
                    )
                  }, [])
                })(e)
              })(e, a).map(function (t, r) {
                return l(t, n, { node: e, props: f }, r)
              }))
            break
          case 'definition':
            c(f, { identifier: e.identifier, title: e.title, url: e.url })
            break
          case 'code':
            c(f, { language: e.lang && e.lang.split(/\s/, 1)[0] })
            break
          case 'inlineCode':
            ;(f.children = e.value), (f.inline = !0)
            break
          case 'link':
            c(f, {
              title: e.title || void 0,
              target:
                'function' === typeof n.linkTarget
                  ? n.linkTarget(e.url, e.children, e.title)
                  : n.linkTarget,
              href: n.transformLinkUri
                ? n.transformLinkUri(e.url, e.children, e.title)
                : e.url,
            })
            break
          case 'image':
            c(f, {
              alt: e.alt || void 0,
              title: e.title || void 0,
              src: n.transformImageUri
                ? n.transformImageUri(e.url, e.children, e.title, e.alt)
                : e.url,
            })
            break
          case 'linkReference':
            c(
              f,
              o(h, {
                href: n.transformLinkUri ? n.transformLinkUri(h.href) : h.href,
              })
            )
            break
          case 'imageReference':
            c(f, {
              src:
                n.transformImageUri && h.href
                  ? n.transformImageUri(h.href, e.children, h.title, e.alt)
                  : h.href,
              title: h.title || void 0,
              alt: e.alt || void 0,
            })
            break
          case 'table':
          case 'tableHead':
          case 'tableBody':
            f.columnAlignment = e.align
            break
          case 'tableRow':
            ;(f.isHeader = 'tableHead' === a.node.type),
              (f.columnAlignment = a.props.columnAlignment)
            break
          case 'tableCell':
            c(f, {
              isHeader: a.props.isHeader,
              align: a.props.columnAlignment[s],
            })
            break
          case 'virtualHtml':
            f.tag = e.tag
            break
          case 'html':
            ;(f.isBlock = e.position.start.line !== e.position.end.line),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml)
            break
          case 'parsedHtml':
            var d
            e.children &&
              (d = e.children.map(function (t, r) {
                return l(t, n, { node: e, props: f }, r)
              })),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml),
              (f.element = (function (e, t) {
                var n = e.element
                if (Array.isArray(n)) {
                  var o = r.Fragment || 'div'
                  return r.createElement(o, null, n)
                }
                if (n.props.children || t) {
                  var i = r.Children.toArray(n.props.children).concat(t)
                  return r.cloneElement(n, null, i)
                }
                return r.cloneElement(n, null)
              })(e, d))
            break
          default:
            c(f, o(e, { type: void 0, position: void 0, children: void 0 }))
        }
        return !p && e.value && (f.value = e.value), f
      }
      function c(e, t) {
        for (var n in t) 'undefined' !== typeof t[n] && (e[n] = t[n])
      }
      e.exports = l
    },
    UfUV: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        var r = []
        'function' === typeof t && ((n = t), (t = null))
        function o(e) {
          var i
          return (
            (t && e.type !== t) || (i = n(e, r.concat())),
            e.children && !1 !== i
              ? (function (e, t) {
                  var n,
                    i = e.length,
                    a = -1
                  r.push(t)
                  for (; ++a < i; ) if ((n = e[a]) && !1 === o(n)) return !1
                  return r.pop(), !0
                })(e.children, e)
              : i
          )
        }
        o(e)
      }
    },
    VHls: function (e) {
      e.exports = JSON.parse(
        '["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]'
      )
    },
    W8QB: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        var n = e.indexOf('*', t),
          r = e.indexOf('_', t)
        if (-1 === r) return n
        if (-1 === n) return r
        return r < n ? r : n
      }
    },
    Y6TP: function (e, t, n) {
      'use strict'
      var r = n('m2n9'),
        o = n('Z87L'),
        i = n('ZONP'),
        a = n('fjrl'),
        l = n('J5yW'),
        s = n('j0Z/')
      e.exports = function (e, t) {
        var n,
          i,
          a = {}
        t || (t = {})
        for (i in p) (n = t[i]), (a[i] = null === n || void 0 === n ? p[i] : n)
        ;(a.position.indent || a.position.start) &&
          ((a.indent = a.position.indent || []),
          (a.position = a.position.start))
        return (function (e, t) {
          var n,
            i,
            a,
            p,
            k,
            A,
            x,
            C,
            _,
            T,
            j,
            O,
            I,
            P,
            S,
            N,
            E,
            L,
            z,
            H = t.additional,
            B = t.nonTerminated,
            D = t.text,
            R = t.reference,
            F = t.warning,
            M = t.textContext,
            U = t.referenceContext,
            q = t.warningContext,
            J = t.position,
            W = t.indent || [],
            $ = e.length,
            G = 0,
            X = -1,
            Z = J.column || 1,
            V = J.line || 1,
            Y = '',
            Q = []
          'string' === typeof H && (H = H.charCodeAt(0))
          ;(N = K()), (C = F ? ee : f), G--, $++
          for (; ++G < $; )
            if ((10 === k && (Z = W[X] || 1), 38 === (k = e.charCodeAt(G)))) {
              if (
                9 === (x = e.charCodeAt(G + 1)) ||
                10 === x ||
                12 === x ||
                32 === x ||
                38 === x ||
                60 === x ||
                x !== x ||
                (H && x === H)
              ) {
                ;(Y += u(k)), Z++
                continue
              }
              for (
                O = I = G + 1,
                  z = I,
                  35 === x
                    ? ((z = ++O),
                      88 === (x = e.charCodeAt(z)) || 120 === x
                        ? ((P = d), (z = ++O))
                        : (P = m))
                    : (P = h),
                  n = '',
                  j = '',
                  p = '',
                  S = v[P],
                  z--;
                ++z < $ && S((x = e.charCodeAt(z)));

              )
                (p += u(x)), P === h && c.call(r, p) && ((n = p), (j = r[p]))
              ;(a = 59 === e.charCodeAt(z)) &&
                (z++, (i = P === h && s(p)) && ((n = p), (j = i))),
                (L = 1 + z - I),
                (a || B) &&
                  (p
                    ? P === h
                      ? (a && !j
                          ? C(5, 1)
                          : (n !== p &&
                              ((L = 1 + (z = O + n.length) - O), (a = !1)),
                            a ||
                              ((_ = n ? 1 : 3),
                              t.attribute
                                ? 61 === (x = e.charCodeAt(z))
                                  ? (C(_, L), (j = null))
                                  : l(x)
                                  ? (j = null)
                                  : C(_, L)
                                : C(_, L))),
                        (A = j))
                      : (a || C(2, L),
                        b((A = parseInt(p, g[P])))
                          ? (C(7, L), (A = u(65533)))
                          : A in o
                          ? (C(6, L), (A = o[A]))
                          : ((T = ''),
                            w(A) && C(6, L),
                            A > 65535 &&
                              ((T += u(((A -= 65536) >>> 10) | 55296)),
                              (A = 56320 | (1023 & A))),
                            (A = T + u(A))))
                    : P !== h && C(4, L)),
                A
                  ? (te(),
                    (N = K()),
                    (G = z - 1),
                    (Z += z - I + 1),
                    Q.push(A),
                    (E = K()).offset++,
                    R && R.call(U, A, { start: N, end: E }, e.slice(I - 1, z)),
                    (N = E))
                  : ((p = e.slice(I - 1, z)),
                    (Y += p),
                    (Z += p.length),
                    (G = z - 1))
            } else
              10 === k && (V++, X++, (Z = 0)),
                k === k ? ((Y += u(k)), Z++) : te()
          return Q.join('')
          function K() {
            return { line: V, column: Z, offset: G + (J.offset || 0) }
          }
          function ee(e, t) {
            var n = K()
            ;(n.column += t), (n.offset += t), F.call(q, y[e], n, e)
          }
          function te() {
            Y &&
              (Q.push(Y), D && D.call(M, Y, { start: N, end: K() }), (Y = ''))
          }
        })(e, a)
      }
      var c = {}.hasOwnProperty,
        u = String.fromCharCode,
        f = Function.prototype,
        p = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        h = 'named',
        d = 'hexadecimal',
        m = 'decimal',
        g = { hexadecimal: 16, decimal: 10 },
        v = {}
      ;(v.named = l), (v[m] = i), (v[d] = a)
      var y = {}
      function b(e) {
        return (e >= 55296 && e <= 57343) || e > 1114111
      }
      function w(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 === (65535 & e) ||
          65534 === (65535 & e)
        )
      }
      ;(y[1] = 'Named character references must be terminated by a semicolon'),
        (y[2] =
          'Numeric character references must be terminated by a semicolon'),
        (y[3] = 'Named character references cannot be empty'),
        (y[4] = 'Numeric character references cannot be empty'),
        (y[5] = 'Named character references must be known'),
        (y[6] = 'Numeric character references cannot be disallowed'),
        (y[7] =
          'Numeric character references cannot be outside the permissible Unicode range')
    },
    Z87L: function (e) {
      e.exports = JSON.parse(
        '{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}'
      )
    },
    'ZEx/': function (e, t, n) {
      'use strict'
      var r = n('6dBs'),
        o = n('Gdbo'),
        i = n('vKFC'),
        a = n('xkQk'),
        l = n('IRYA'),
        s = n('NkL+')
      e.exports = (function e() {
        var t = [],
          n = a(),
          y = {},
          b = !1,
          w = -1
        return (
          (k.data = function (e, t) {
            if (l(e))
              return 2 === arguments.length
                ? (m('data', b), (y[e] = t), k)
                : (u.call(y, e) && y[e]) || null
            if (e) return m('data', b), (y = e), k
            return y
          }),
          (k.freeze = A),
          (k.attachers = t),
          (k.use = function (e) {
            var n
            if ((m('use', b), null === e || void 0 === e));
            else if ('function' === typeof e) l.apply(null, arguments)
            else {
              if ('object' !== typeof e)
                throw new Error('Expected usable value, not `' + e + '`')
              'length' in e ? a(e) : o(e)
            }
            n && (y.settings = r(y.settings || {}, n))
            return k
            function o(e) {
              a(e.plugins), e.settings && (n = r(n || {}, e.settings))
            }
            function i(e) {
              if ('function' === typeof e) l(e)
              else {
                if ('object' !== typeof e)
                  throw new Error('Expected usable value, not `' + e + '`')
                'length' in e ? l.apply(null, e) : o(e)
              }
            }
            function a(e) {
              var t, n
              if (null === e || void 0 === e);
              else {
                if ('object' !== typeof e || !('length' in e))
                  throw new Error('Expected a list of plugins, not `' + e + '`')
                for (t = e.length, n = -1; ++n < t; ) i(e[n])
              }
            }
            function l(e, n) {
              var o = x(e)
              o
                ? (s(o[1]) && s(n) && (n = r(o[1], n)), (o[1] = n))
                : t.push(c.call(arguments))
            }
          }),
          (k.parse = function (e) {
            var t,
              n = i(e)
            if ((A(), h('parse', (t = k.Parser)), p(t)))
              return new t(String(n), n).parse()
            return t(String(n), n)
          }),
          (k.stringify = function (e, t) {
            var n,
              r = i(t)
            if ((A(), d('stringify', (n = k.Compiler)), g(e), p(n)))
              return new n(e, r).compile()
            return n(e, r)
          }),
          (k.run = C),
          (k.runSync = function (e, t) {
            var n,
              r = !1
            return C(e, t, i), v('runSync', 'run', r), n
            function i(e, t) {
              ;(r = !0), o(e), (n = t)
            }
          }),
          (k.process = _),
          (k.processSync = function (e) {
            var t,
              n = !1
            return (
              A(),
              h('processSync', k.Parser),
              d('processSync', k.Compiler),
              _((t = i(e)), r),
              v('processSync', 'process', n),
              t
            )
            function r(e) {
              ;(n = !0), o(e)
            }
          }),
          k
        )
        function k() {
          for (var n = e(), o = t.length, i = -1; ++i < o; )
            n.use.apply(null, t[i])
          return n.data(r(!0, {}, y)), n
        }
        function A() {
          var e, r, o, i
          if (b) return k
          for (; ++w < t.length; )
            (r = (e = t[w])[0]),
              null,
              !1 !== (o = e[1]) &&
                (!0 === o && (e[1] = void 0),
                'function' === typeof (i = r.apply(k, e.slice(1))) && n.use(i))
          return (b = !0), (w = 1 / 0), k
        }
        function x(e) {
          for (var n, r = t.length, o = -1; ++o < r; )
            if ((n = t[o])[0] === e) return n
        }
        function C(e, t, r) {
          if (
            (g(e),
            A(),
            r || 'function' !== typeof t || ((r = t), (t = null)),
            !r)
          )
            return new Promise(o)
          function o(o, a) {
            n.run(e, i(t), function (t, n, i) {
              ;(n = n || e), t ? a(t) : o ? o(n) : r(null, n, i)
            })
          }
          o(null, r)
        }
        function _(e, t) {
          if ((A(), h('process', k.Parser), d('process', k.Compiler), !t))
            return new Promise(n)
          function n(n, r) {
            var o = i(e)
            f.run(k, { file: o }, function (e) {
              e ? r(e) : n ? n(o) : t(null, o)
            })
          }
          n(null, t)
        }
      })().freeze()
      var c = [].slice,
        u = {}.hasOwnProperty,
        f = a()
          .use(function (e, t) {
            t.tree = e.parse(t.file)
          })
          .use(function (e, t, n) {
            e.run(t.tree, t.file, function (e, r, o) {
              e ? n(e) : ((t.tree = r), (t.file = o), n())
            })
          })
          .use(function (e, t) {
            t.file.contents = e.stringify(t.tree, t.file)
          })
      function p(e) {
        return (
          'function' === typeof e &&
          (function (e) {
            var t
            for (t in e) return !0
            return !1
          })(e.prototype)
        )
      }
      function h(e, t) {
        if ('function' !== typeof t)
          throw new Error('Cannot `' + e + '` without `Parser`')
      }
      function d(e, t) {
        if ('function' !== typeof t)
          throw new Error('Cannot `' + e + '` without `Compiler`')
      }
      function m(e, t) {
        if (t)
          throw new Error(
            [
              'Cannot invoke `' + e + '` on a frozen processor.\nCreate a new ',
              'processor first, by invoking it: use `processor()` instead of ',
              '`processor`.',
            ].join('')
          )
      }
      function g(e) {
        if (!e || !l(e.type)) throw new Error('Expected node, got `' + e + '`')
      }
      function v(e, t, n) {
        if (!n)
          throw new Error('`' + e + '` finished async. Use `' + t + '` instead')
      }
    },
    ZONP: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        var t = 'string' === typeof e ? e.charCodeAt(0) : e
        return t >= 48 && t <= 57
      }
    },
    akNn: function (e, t, n) {
      'use strict'
      var r = n('IPAr')
      e.exports = function (e, t, n) {
        var o,
          i,
          a,
          l,
          s = t.charAt(0)
        if ('\n' !== s) return
        if (n) return !0
        ;(l = 1), (o = t.length), (i = s), (a = '')
        for (; l < o && ((s = t.charAt(l)), r(s)); )
          (a += s), '\n' === s && ((i += a), (a = '')), l++
        e(i)
      }
    },
    c6LQ: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('ACGk'),
        i = n('d+Jj')
      ;(e.exports = h), (h.locator = o)
      var a = 'link',
        l = 'image',
        s = 'footnote',
        c = 'full',
        u = '\\',
        f = '[',
        p = ']'
      function h(e, t, n) {
        var o,
          h,
          d,
          m,
          g,
          v,
          y,
          b,
          w = this,
          k = t.charAt(0),
          A = 0,
          x = t.length,
          C = '',
          _ = '',
          T = a,
          j = 'shortcut'
        if (('!' === k && ((T = l), (_ = k), (k = t.charAt(++A))), k === f)) {
          if (
            (A++,
            (_ += k),
            (v = ''),
            w.options.footnotes && '^' === t.charAt(A))
          ) {
            if (T === l) return
            ;(_ += '^'), A++, (T = s)
          }
          for (b = 0; A < x; ) {
            if ((k = t.charAt(A)) === f) (y = !0), b++
            else if (k === p) {
              if (!b) break
              b--
            }
            k === u && ((v += u), (k = t.charAt(++A))), (v += k), A++
          }
          if (((C = v), (o = v), (k = t.charAt(A)) === p)) {
            for (A++, C += k, v = ''; A < x && ((k = t.charAt(A)), r(k)); )
              (v += k), A++
            if (((k = t.charAt(A)), T !== s && k === f)) {
              for (
                h = '', v += k, A++;
                A < x && (k = t.charAt(A)) !== f && k !== p;

              )
                k === u && ((h += u), (k = t.charAt(++A))), (h += k), A++
              ;(k = t.charAt(A)) === p
                ? ((j = h ? c : 'collapsed'), (v += h + k), A++)
                : (h = ''),
                (C += v),
                (v = '')
            } else {
              if (!o) return
              h = o
            }
            if (j === c || !y)
              return (
                (C = _ + C),
                T === a && w.inLink
                  ? null
                  : !!n ||
                    (T === s && -1 !== o.indexOf(' ')
                      ? e(C)({
                          type: 'footnote',
                          children: this.tokenizeInline(o, e.now()),
                        })
                      : (((d = e.now()).column += _.length),
                        (d.offset += _.length),
                        (m = {
                          type: T + 'Reference',
                          identifier: i((h = j === c ? h : o)),
                        }),
                        (T !== a && T !== l) || (m.referenceType = j),
                        T === a
                          ? ((g = w.enterLink()),
                            (m.children = w.tokenizeInline(o, d)),
                            g())
                          : T === l &&
                            (m.alt = w.decode.raw(w.unescape(o), d) || null),
                        e(C)(m)))
              )
          }
        }
      }
    },
    cFAA: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('36yr')
      ;(e.exports = a), (a.locator = o)
      var i = '`'
      function a(e, t, n) {
        for (
          var o, a, l, s, c, u, f, p, h = t.length, d = 0, m = '', g = '';
          d < h && t.charAt(d) === i;

        )
          (m += i), d++
        if (m) {
          for (c = m, s = d, m = '', p = t.charAt(d), l = 0; d < h; ) {
            if (
              ((u = p),
              (p = t.charAt(d + 1)),
              u === i ? (l++, (g += u)) : ((l = 0), (m += u)),
              l && p !== i)
            ) {
              if (l === s) {
                ;(c += m + g), (f = !0)
                break
              }
              ;(m += g), (g = '')
            }
            d++
          }
          if (!f) {
            if (s % 2 !== 0) return
            m = ''
          }
          if (n) return !0
          for (o = '', a = '', h = m.length, d = -1; ++d < h; )
            (u = m.charAt(d)),
              r(u) ? (a += u) : (a && (o && (o += a), (a = '')), (o += u))
          return e(c)({ type: 'inlineCode', value: o })
        }
      }
    },
    cVWj: function (e, t, n) {
      'use strict'
      var r = n('g1+e'),
        o = 'virtualHtml',
        i = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
        a = /^<(\/?)([a-z]+)\s*>$/
      e.exports = function (e) {
        var t, n
        return (
          r(
            e,
            'html',
            function (e, r, l) {
              n !== l && ((t = []), (n = l))
              var s = (function (e) {
                var t = e.value.match(i)
                return !!t && t[1]
              })(e)
              if (s)
                return (
                  l.children.splice(r, 1, {
                    type: o,
                    tag: s,
                    position: e.position,
                  }),
                  !0
                )
              var c = (function (e, t) {
                var n = e.value.match(a)
                return !!n && { tag: n[2], opening: !n[1], node: e }
              })(e)
              if (!c) return !0
              var u = (function (e, t) {
                var n = e.length
                for (; n--; ) if (e[n].tag === t) return e.splice(n, 1)[0]
                return !1
              })(t, c.tag)
              return (
                u
                  ? l.children.splice(
                      r,
                      0,
                      (function (e, t, n) {
                        var r = n.children.indexOf(e.node),
                          i = n.children.indexOf(t.node),
                          a = n.children.splice(r, i - r + 1).slice(1, -1)
                        return {
                          type: o,
                          children: a,
                          tag: e.tag,
                          position: {
                            start: e.node.position.start,
                            end: t.node.position.end,
                            indent: [],
                          },
                        }
                      })(c, u, l)
                    )
                  : c.opening || t.push(c),
                !0
              )
            },
            !0
          ),
          e
        )
      }
    },
    cmLN: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n, r) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u = ['pedantic', 'commonmark'],
          f = u.length,
          p = e.length,
          h = -1
        for (; ++h < p; ) {
          for (o = e[h], i = o[1] || {}, a = o[0], l = -1, c = !1; ++l < f; )
            if (void 0 !== i[(s = u[l])] && i[s] !== n.options[s]) {
              c = !0
              break
            }
          if (!c && t[a].apply(n, r)) return !0
        }
        return !1
      }
    },
    'd+Jj': function (e, t, n) {
      'use strict'
      var r = n('JqBK')
      e.exports = function (e) {
        return r(e).toLowerCase()
      }
    },
    egI8: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('Fhq4')
      ;(e.exports = a), (a.locator = o)
      var i = '~'
      function a(e, t, n) {
        var o,
          a,
          l,
          s = '',
          c = '',
          u = '',
          f = ''
        if (
          this.options.gfm &&
          t.charAt(0) === i &&
          t.charAt(1) === i &&
          !r(t.charAt(2))
        )
          for (
            o = 1, a = t.length, (l = e.now()).column += 2, l.offset += 2;
            ++o < a;

          ) {
            if ((s = t.charAt(o)) === i && c === i && (!u || !r(u)))
              return (
                !!n ||
                e('~~' + f + '~~')({
                  type: 'delete',
                  children: this.tokenizeInline(f, l),
                })
              )
            ;(f += c), (u = c), (c = s)
          }
      }
    },
    fjrl: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        var t = 'string' === typeof e ? e.charCodeAt(0) : e
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        )
      }
    },
    'g1+e': function (e, t, n) {
      'use strict'
      e.exports = l
      var r = n('gcql'),
        o = r.CONTINUE,
        i = r.SKIP,
        a = r.EXIT
      function l(e, t, n, o) {
        'function' === typeof t &&
          'function' !== typeof n &&
          ((o = n), (n = t), (t = null)),
          r(
            e,
            t,
            function (e, t) {
              var r = t[t.length - 1],
                o = r ? r.children.indexOf(e) : null
              return n(e, o, r)
            },
            o
          )
      }
      ;(l.CONTINUE = o), (l.SKIP = i), (l.EXIT = a)
    },
    g1k0: function (e, t, n) {
      'use strict'
      var r = n('1iAE'),
        o = n('NBu1'),
        i = n('1T8B').tag
      ;(e.exports = s), (s.locator = o)
      var a = /^<a /i,
        l = /^<\/a>/i
      function s(e, t, n) {
        var o,
          s,
          c = this,
          u = t.length
        if (
          !('<' !== t.charAt(0) || u < 3) &&
          ((o = t.charAt(1)),
          (r(o) || '?' === o || '!' === o || '/' === o) && (s = t.match(i)))
        )
          return (
            !!n ||
            ((s = s[0]),
            !c.inLink && a.test(s)
              ? (c.inLink = !0)
              : c.inLink && l.test(s) && (c.inLink = !1),
            e(s)({ type: 'html', value: s }))
          )
      }
    },
    gcql: function (e, t, n) {
      'use strict'
      e.exports = a
      var r = n('I7+u'),
        o = 'skip',
        i = !1
      function a(e, t, n, a) {
        var s
        function c(e, r, u) {
          var f,
            p = []
          return ((t && !s(e, r, u[u.length - 1] || null)) ||
            (p = l(n(e, u)))[0] !== i) &&
            e.children &&
            p[0] !== o &&
            (f = l(
              (function (e, t) {
                var n,
                  r = -1,
                  o = a ? -1 : 1,
                  l = (a ? e.length : r) + o
                for (; l > r && l < e.length; ) {
                  if ((n = c(e[l], l, t))[0] === i) return n
                  l = 'number' === typeof n[1] ? n[1] : l + o
                }
              })(e.children, u.concat(e))
            ))[0] === i
            ? f
            : p
        }
        'function' === typeof t &&
          'function' !== typeof n &&
          ((a = n), (n = t), (t = null)),
          (s = r(t)),
          c(e, null, [])
      }
      function l(e) {
        return null !== e && 'object' === typeof e && 'length' in e
          ? e
          : 'number' === typeof e
          ? [true, e]
          : [e]
      }
      ;(a.CONTINUE = true), (a.SKIP = o), (a.EXIT = i)
    },
    h9ck: function (e, t, n) {
      'use strict'
      var r = '__RMD_HTML_PARSER__'
      t.HtmlParser = 'undefined' === typeof Symbol ? r : Symbol(r)
    },
    'j0Z/': function (e, t, n) {
      'use strict'
      var r
      e.exports = function (e) {
        var t,
          n = '&' + e + ';'
        if (
          (((r = r || document.createElement('i')).innerHTML = n),
          59 === (t = r.textContent).charCodeAt(t.length - 1) && 'semi' !== e)
        )
          return !1
        return t !== n && t
      }
    },
    j9mF: function (e, t, n) {
      e.exports = {
        wrap: 'Project_wrap__1JMyH',
        description: 'Project_description__8arnJ',
        list: 'Project_list__YVJ_N',
        grid: 'Project_grid__1RxfD',
        item: 'Project_item__9Y-or',
        itemImage: 'Project_itemImage__28RRT',
        itemDescription: 'Project_itemDescription__2eewd',
        link: 'Project_link__2N4d_',
      }
    },
    jjhM: function (e, t, n) {
      e.exports = {
        hero: 'Hero_hero__2C4IP',
        title: 'Hero_title__2QTV3',
        heroTitle: 'Hero_heroTitle__3FT5c',
        heroTitle_1: 'Hero_heroTitle_1__mEhbr',
        animatedTitle_1: 'Hero_animatedTitle_1__1sEX3',
        animation_1: 'Hero_animation_1__2HnAb',
        heroTitle_2: 'Hero_heroTitle_2__1w_M0',
        animatedTitle_2: 'Hero_animatedTitle_2__1VKmk',
        animation_2: 'Hero_animation_2__2kFjx',
        heroTitle_3: 'Hero_heroTitle_3__2VAYJ',
        animatedTitle_3: 'Hero_animatedTitle_3__IF6Gd',
        animation_3: 'Hero_animation_3__18H6v',
      }
    },
    kDuX: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        var a,
          l,
          s,
          c = this.options,
          u = t.length + 1,
          f = -1,
          p = e.now(),
          h = '',
          d = ''
        for (; ++f < u; ) {
          if ((a = t.charAt(f)) !== o && a !== r) {
            f--
            break
          }
          h += a
        }
        s = 0
        for (; ++f <= u; ) {
          if ((a = t.charAt(f)) !== i) {
            f--
            break
          }
          ;(h += a), s++
        }
        if (s > 6) return
        if (!s || (!c.pedantic && t.charAt(f + 1) === i)) return
        ;(u = t.length + 1), (l = '')
        for (; ++f < u; ) {
          if ((a = t.charAt(f)) !== o && a !== r) {
            f--
            break
          }
          l += a
        }
        if (!c.pedantic && 0 === l.length && a && '\n' !== a) return
        if (n) return !0
        ;(h += l), (l = ''), (d = '')
        for (; ++f < u && (a = t.charAt(f)) && '\n' !== a; )
          if (a === o || a === r || a === i) {
            for (; a === o || a === r; ) (l += a), (a = t.charAt(++f))
            for (; a === i; ) (l += a), (a = t.charAt(++f))
            for (; a === o || a === r; ) (l += a), (a = t.charAt(++f))
            f--
          } else (d += l + a), (l = '')
        return (
          (p.column += h.length),
          (p.offset += h.length),
          e((h += d + l))({
            type: 'heading',
            depth: s,
            children: this.tokenizeInline(d, p),
          })
        )
      }
      var r = '\t',
        o = ' ',
        i = '#'
    },
    kmJ7: function (e, t, n) {
      'use strict'
      var r = n('RjOF'),
        o = n('3GlI')
      e.exports = function (e, t, n) {
        var r,
          a,
          l,
          s = -1,
          c = t.length,
          u = '',
          f = '',
          p = '',
          h = ''
        for (; ++s < c; )
          if (((r = t.charAt(s)), l))
            if (((l = !1), (u += p), (f += h), (p = ''), (h = ''), '\n' === r))
              (p = r), (h = r)
            else
              for (u += r, f += r; ++s < c; ) {
                if (!(r = t.charAt(s)) || '\n' === r) {
                  ;(h = r), (p = r)
                  break
                }
                ;(u += r), (f += r)
              }
          else if (
            ' ' === r &&
            t.charAt(s + 1) === r &&
            t.charAt(s + 2) === r &&
            t.charAt(s + 3) === r
          )
            (p += i), (s += 3), (l = !0)
          else if ('\t' === r) (p += r), (l = !0)
          else {
            for (a = ''; '\t' === r || ' ' === r; )
              (a += r), (r = t.charAt(++s))
            if ('\n' !== r) break
            ;(p += a + r), (h += r)
          }
        if (f) return !!n || e(u)({ type: 'code', lang: null, value: o(f) })
      }
      var i = r(' ', 4)
    },
    lebq: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        var o,
          i,
          a,
          l,
          s,
          c = e.now(),
          u = t.length,
          f = -1,
          p = ''
        for (; ++f < u; ) {
          if (' ' !== (a = t.charAt(f)) || f >= 3) {
            f--
            break
          }
          p += a
        }
        ;(o = ''), (i = '')
        for (; ++f < u; ) {
          if ('\n' === (a = t.charAt(f))) {
            f--
            break
          }
          ' ' === a || '\t' === a ? (i += a) : ((o += i + a), (i = ''))
        }
        if (
          ((c.column += p.length),
          (c.offset += p.length),
          (p += o + i),
          (a = t.charAt(++f)),
          (l = t.charAt(++f)),
          '\n' !== a || !r[l])
        )
          return
        ;(p += a), (i = l), (s = r[l])
        for (; ++f < u; ) {
          if ((a = t.charAt(f)) !== l) {
            if ('\n' !== a) return
            f--
            break
          }
          i += a
        }
        if (n) return !0
        return e(p + i)({
          type: 'heading',
          depth: s,
          children: this.tokenizeInline(o, c),
        })
      }
      var r = {}
      ;(r['='] = 1), (r['-'] = 2)
    },
    lgF9: function (e, t, n) {
      'use strict'
      var r = n('7XrY')
      ;(e.exports = o), (o.locator = r)
      function o(e, t, n) {
        for (var r, o = t.length, i = -1, a = ''; ++i < o; ) {
          if ('\n' === (r = t.charAt(i))) {
            if (i < 2) return
            return !!n || e((a += r))({ type: 'break' })
          }
          if (' ' !== r) return
          a += r
        }
      }
    },
    m2n9: function (e) {
      e.exports = JSON.parse(
        '{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}'
      )
    },
    mcUT: function (e, t, n) {
      'use strict'
      var r = n('FxOa')
      function o(e, t, n) {
        var r, o
        if (
          '\\' === t.charAt(0) &&
          ((r = t.charAt(1)), -1 !== this.escape.indexOf(r))
        )
          return (
            !!n ||
            ((o = '\n' === r ? { type: 'break' } : { type: 'text', value: r }),
            e('\\' + r)(o))
          )
      }
      ;(e.exports = o), (o.locator = r)
    },
    obXZ: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return o.test('number' === typeof e ? r(e) : e.charAt(0))
      }
      var r = String.fromCharCode,
        o = /\w/
    },
    psyO: function (e, t, n) {
      e.exports = { wrap: 'SkillSet_wrap__3eBOh' }
    },
    puBm: function (e, t, n) {
      e.exports = {
        wrap: 'Publication_wrap__3YgIy',
        description: 'Publication_description__dNt-m',
        list: 'Publication_list__1zB8q',
        item: 'Publication_item__9WpXT',
        itemDescription: 'Publication_itemDescription__31JbC',
        caption: 'Publication_caption__oDc52',
        link: 'Publication_link__152qf',
      }
    },
    qPMR: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('IPAr'),
        i = n('044C')
      ;(e.exports = a), (a.locator = i)
      function a(e, t, n) {
        var i,
          a,
          l,
          s,
          c,
          u,
          f,
          p = 0,
          h = t.charAt(p)
        if (
          ('*' === h || '_' === h) &&
          t.charAt(++p) === h &&
          ((a = this.options.pedantic),
          (c = (l = h) + l),
          (u = t.length),
          p++,
          (s = ''),
          (h = ''),
          !a || !o(t.charAt(p)))
        )
          for (; p < u; ) {
            if (
              ((f = h),
              (h = t.charAt(p)) === l &&
                t.charAt(p + 1) === l &&
                (!a || !o(f)) &&
                (h = t.charAt(p + 2)) !== l)
            ) {
              if (!r(s)) return
              return (
                !!n ||
                (((i = e.now()).column += 2),
                (i.offset += 2),
                e(c + s + c)({
                  type: 'strong',
                  children: this.tokenizeInline(s, i),
                }))
              )
            }
            a || '\\' !== h || ((s += h), (h = t.charAt(++p))), (s += h), p++
          }
      }
    },
    qT12: function (e, t, n) {
      'use strict'
      var r = 'function' === typeof Symbol && Symbol.for,
        o = r ? Symbol.for('react.element') : 60103,
        i = r ? Symbol.for('react.portal') : 60106,
        a = r ? Symbol.for('react.fragment') : 60107,
        l = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        u = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        p = r ? Symbol.for('react.concurrent_mode') : 60111,
        h = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        m = r ? Symbol.for('react.suspense_list') : 60120,
        g = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        y = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        w = r ? Symbol.for('react.responder') : 60118,
        k = r ? Symbol.for('react.scope') : 60119
      function A(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case f:
                case p:
                case a:
                case s:
                case l:
                case d:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case h:
                    case v:
                    case g:
                    case c:
                      return e
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }
      function x(e) {
        return A(e) === p
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = o),
        (t.ForwardRef = h),
        (t.Fragment = a),
        (t.Lazy = v),
        (t.Memo = g),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = l),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return x(e) || A(e) === f
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return A(e) === u
        }),
        (t.isContextProvider = function (e) {
          return A(e) === c
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === o
        }),
        (t.isForwardRef = function (e) {
          return A(e) === h
        }),
        (t.isFragment = function (e) {
          return A(e) === a
        }),
        (t.isLazy = function (e) {
          return A(e) === v
        }),
        (t.isMemo = function (e) {
          return A(e) === g
        }),
        (t.isPortal = function (e) {
          return A(e) === i
        }),
        (t.isProfiler = function (e) {
          return A(e) === s
        }),
        (t.isStrictMode = function (e) {
          return A(e) === l
        }),
        (t.isSuspense = function (e) {
          return A(e) === d
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === a ||
            e === p ||
            e === s ||
            e === l ||
            e === d ||
            e === m ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === g ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === k ||
                e.$$typeof === y))
          )
        }),
        (t.typeOf = A)
    },
    qUik: function (e, t, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('MQ5/'),
        i = n('3+Nb')
      e.exports = function (e) {
        var t,
          n,
          a = this,
          l = a.options
        if (null == e) e = {}
        else {
          if ('object' !== typeof e)
            throw new Error('Invalid value `' + e + '` for setting `options`')
          e = r(e)
        }
        for (t in i) {
          if (
            (null == (n = e[t]) && (n = l[t]),
            ('blocks' !== t && 'boolean' !== typeof n) ||
              ('blocks' === t && 'object' !== typeof n))
          )
            throw new Error(
              'Invalid value `' + n + '` for setting `options.' + t + '`'
            )
          e[t] = n
        }
        return (a.options = e), (a.escape = o(e)), a
      }
    },
    rUY8: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          a,
          l = -1,
          s = t.length + 1,
          c = ''
        for (; ++l < s && ('\t' === (r = t.charAt(l)) || ' ' === r); ) c += r
        if ('*' !== r && '-' !== r && '_' !== r) return
        ;(o = r), (c += r), (i = 1), (a = '')
        for (; ++l < s; )
          if ((r = t.charAt(l)) === o) i++, (c += a + o), (a = '')
          else {
            if (' ' !== r)
              return i >= 3 && (!r || '\n' === r)
                ? ((c += a), !!n || e(c)({ type: 'thematicBreak' }))
                : void 0
            a += r
          }
      }
    },
    soWj: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('cmLN')
      e.exports = function (e, t, n) {
        var i,
          a,
          l,
          s,
          c,
          u,
          f,
          p,
          h,
          d = this,
          m = d.offset,
          g = d.blockTokenizers,
          v = d.interruptBlockquote,
          y = e.now(),
          b = y.line,
          w = t.length,
          k = [],
          A = [],
          x = [],
          C = 0
        for (; C < w && (' ' === (a = t.charAt(C)) || '\t' === a); ) C++
        if ('>' !== t.charAt(C)) return
        if (n) return !0
        C = 0
        for (; C < w; ) {
          for (
            s = t.indexOf('\n', C), f = C, p = !1, -1 === s && (s = w);
            C < w && (' ' === (a = t.charAt(C)) || '\t' === a);

          )
            C++
          if (
            ('>' === t.charAt(C)
              ? (C++, (p = !0), ' ' === t.charAt(C) && C++)
              : (C = f),
            (c = t.slice(C, s)),
            !p && !r(c))
          ) {
            C = f
            break
          }
          if (!p && ((l = t.slice(C)), o(v, g, d, [e, l, !0]))) break
          ;(u = f === C ? c : t.slice(f, s)),
            x.push(C - f),
            k.push(u),
            A.push(c),
            (C = s + 1)
        }
        ;(C = -1), (w = x.length), (i = e(k.join('\n')))
        for (; ++C < w; ) (m[b] = (m[b] || 0) + x[C]), b++
        return (
          (h = d.enterBlock()),
          (A = d.tokenizeBlock(A.join('\n'), y)),
          h(),
          i({ type: 'blockquote', children: A })
        )
      }
    },
    tpqs: function (e, t, n) {
      ;(function (e) {
        function n(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var o = e[r]
            '.' === o
              ? e.splice(r, 1)
              : '..' === o
              ? (e.splice(r, 1), n++)
              : n && (e.splice(r, 1), n--)
          }
          if (t) for (; n--; n) e.unshift('..')
          return e
        }
        function r(e, t) {
          if (e.filter) return e.filter(t)
          for (var n = [], r = 0; r < e.length; r++)
            t(e[r], r, e) && n.push(e[r])
          return n
        }
        ;(t.resolve = function () {
          for (
            var t = '', o = !1, i = arguments.length - 1;
            i >= -1 && !o;
            i--
          ) {
            var a = i >= 0 ? arguments[i] : e.cwd()
            if ('string' !== typeof a)
              throw new TypeError('Arguments to path.resolve must be strings')
            a && ((t = a + '/' + t), (o = '/' === a.charAt(0)))
          }
          return (
            (o ? '/' : '') +
              (t = n(
                r(t.split('/'), function (e) {
                  return !!e
                }),
                !o
              ).join('/')) || '.'
          )
        }),
          (t.normalize = function (e) {
            var i = t.isAbsolute(e),
              a = '/' === o(e, -1)
            return (
              (e = n(
                r(e.split('/'), function (e) {
                  return !!e
                }),
                !i
              ).join('/')) ||
                i ||
                (e = '.'),
              e && a && (e += '/'),
              (i ? '/' : '') + e
            )
          }),
          (t.isAbsolute = function (e) {
            return '/' === e.charAt(0)
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0)
            return t.normalize(
              r(e, function (e, t) {
                if ('string' !== typeof e)
                  throw new TypeError('Arguments to path.join must be strings')
                return e
              }).join('/')
            )
          }),
          (t.relative = function (e, n) {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
              return t > n ? [] : e.slice(t, n - t + 1)
            }
            ;(e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1))
            for (
              var o = r(e.split('/')),
                i = r(n.split('/')),
                a = Math.min(o.length, i.length),
                l = a,
                s = 0;
              s < a;
              s++
            )
              if (o[s] !== i[s]) {
                l = s
                break
              }
            var c = []
            for (s = l; s < o.length; s++) c.push('..')
            return (c = c.concat(i.slice(l))).join('/')
          }),
          (t.sep = '/'),
          (t.delimiter = ':'),
          (t.dirname = function (e) {
            if (('string' !== typeof e && (e += ''), 0 === e.length)) return '.'
            for (
              var t = e.charCodeAt(0),
                n = 47 === t,
                r = -1,
                o = !0,
                i = e.length - 1;
              i >= 1;
              --i
            )
              if (47 === (t = e.charCodeAt(i))) {
                if (!o) {
                  r = i
                  break
                }
              } else o = !1
            return -1 === r
              ? n
                ? '/'
                : '.'
              : n && 1 === r
              ? '/'
              : e.slice(0, r)
          }),
          (t.basename = function (e, t) {
            var n = (function (e) {
              'string' !== typeof e && (e += '')
              var t,
                n = 0,
                r = -1,
                o = !0
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!o) {
                    n = t + 1
                    break
                  }
                } else -1 === r && ((o = !1), (r = t + 1))
              return -1 === r ? '' : e.slice(n, r)
            })(e)
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            )
          }),
          (t.extname = function (e) {
            'string' !== typeof e && (e += '')
            for (
              var t = -1, n = 0, r = -1, o = !0, i = 0, a = e.length - 1;
              a >= 0;
              --a
            ) {
              var l = e.charCodeAt(a)
              if (47 !== l)
                -1 === r && ((o = !1), (r = a + 1)),
                  46 === l
                    ? -1 === t
                      ? (t = a)
                      : 1 !== i && (i = 1)
                    : -1 !== t && (i = -1)
              else if (!o) {
                n = a + 1
                break
              }
            }
            return -1 === t ||
              -1 === r ||
              0 === i ||
              (1 === i && t === r - 1 && t === n + 1)
              ? ''
              : e.slice(t, r)
          })
        var o =
          'b' === 'ab'.substr(-1)
            ? function (e, t, n) {
                return e.substr(t, n)
              }
            : function (e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n)
              }
      }.call(this, n('8oxB')))
    },
    tvOo: function (e, t, n) {
      'use strict'
      var r = n('1T8B').openCloseTag
      e.exports = function (e, t, n) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u,
          f = this.options.blocks,
          p = t.length,
          h = 0,
          d = [
            [
              /^<(script|pre|style)(?=(\s|>|$))/i,
              /<\/(script|pre|style)>/i,
              !0,
            ],
            [/^<!--/, /-->/, !0],
            [/^<\?/, /\?>/, !0],
            [/^<![A-Za-z]/, />/, !0],
            [/^<!\[CDATA\[/, /\]\]>/, !0],
            [
              new RegExp('^</?(' + f.join('|') + ')(?=(\\s|/?>|$))', 'i'),
              /^$/,
              !0,
            ],
            [new RegExp(r.source + '\\s*$'), /^$/, !1],
          ]
        for (; h < p && ('\t' === (l = t.charAt(h)) || ' ' === l); ) h++
        if ('<' !== t.charAt(h)) return
        ;(o = -1 === (o = t.indexOf('\n', h + 1)) ? p : o),
          (i = t.slice(h, o)),
          (a = -1),
          (s = d.length)
        for (; ++a < s; )
          if (d[a][0].test(i)) {
            c = d[a]
            break
          }
        if (!c) return
        if (n) return c[2]
        if (((h = o), !c[1].test(i)))
          for (; h < p; ) {
            if (
              ((o = -1 === (o = t.indexOf('\n', h + 1)) ? p : o),
              (i = t.slice(h + 1, o)),
              c[1].test(i))
            ) {
              i && (h = o)
              break
            }
            h = o
          }
        return (u = t.slice(0, h)), e(u)({ type: 'html', value: u })
      }
    },
    'u3i/': function (e, t, n) {
      'use strict'
      var r = n('g1+e')
      function o(e, t, n, r) {
        if ('remove' === r) n.children.splice(t, 1)
        else if ('unwrap' === r) {
          var o = [t, 1]
          e.children && (o = o.concat(e.children)),
            Array.prototype.splice.apply(n.children, o)
        }
      }
      ;(t.ofType = function (e, t) {
        return function (t) {
          return (
            e.forEach(function (e) {
              return r(t, e, n, !0)
            }),
            t
          )
        }
        function n(e, n, r) {
          r && o(e, n, r, t)
        }
      }),
        (t.ifNotMatch = function (e, t) {
          return function (e) {
            return r(e, n, !0), e
          }
          function n(n, r, i) {
            i && !e(n, r, i) && o(n, r, i, t)
          }
        })
    },
    uYhK: function (e, t, n) {
      'use strict'
      var r = n('/qNp')
      function o() {}
      ;(e.exports = a), (o.prototype = Error.prototype), (a.prototype = new o())
      var i = a.prototype
      function a(e, t, n) {
        var o, i, a
        'string' === typeof t && ((n = t), (t = null)),
          (o = (function (e) {
            var t,
              n = [null, null]
            'string' === typeof e &&
              (-1 === (t = e.indexOf(':'))
                ? (n[1] = e)
                : ((n[0] = e.slice(0, t)), (n[1] = e.slice(t + 1))))
            return n
          })(n)),
          (i = r(t) || '1:1'),
          (a = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          t && t.position && (t = t.position),
          t && (t.start ? ((a = t), (t = t.start)) : (a.start = t)),
          e.stack && ((this.stack = e.stack), (e = e.message)),
          (this.message = e),
          (this.name = i),
          (this.reason = e),
          (this.line = t ? t.line : null),
          (this.column = t ? t.column : null),
          (this.location = a),
          (this.source = o[0]),
          (this.ruleId = o[1])
      }
      ;(i.file = ''),
        (i.name = ''),
        (i.reason = ''),
        (i.message = ''),
        (i.stack = ''),
        (i.fatal = null),
        (i.column = null),
        (i.line = null)
    },
    uuyv: function (e, t, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('d+Jj')
      ;(e.exports = c), (c.notInList = !0), (c.notInBlock = !0)
      var i = '\n',
        a = '\t',
        l = ' ',
        s = ']'
      function c(e, t, n) {
        for (
          var r,
            c,
            p,
            h,
            d,
            m,
            g,
            v,
            y = this,
            b = y.options.commonmark,
            w = 0,
            k = t.length,
            A = '';
          w < k && ((h = t.charAt(w)) === l || h === a);

        )
          (A += h), w++
        if ('[' === (h = t.charAt(w))) {
          for (w++, A += h, p = ''; w < k && (h = t.charAt(w)) !== s; )
            '\\' === h && ((p += h), w++, (h = t.charAt(w))), (p += h), w++
          if (p && t.charAt(w) === s && ':' === t.charAt(w + 1)) {
            for (
              m = p, w = (A += p + s + ':').length, p = '';
              w < k && ((h = t.charAt(w)) === a || h === l || h === i);

            )
              (A += h), w++
            if (((p = ''), (r = A), '<' === (h = t.charAt(w)))) {
              for (w++; w < k && u((h = t.charAt(w))); ) (p += h), w++
              if ((h = t.charAt(w)) === u.delimiter) (A += '<' + p + h), w++
              else {
                if (b) return
                ;(w -= p.length + 1), (p = '')
              }
            }
            if (!p) {
              for (; w < k && f((h = t.charAt(w))); ) (p += h), w++
              A += p
            }
            if (p) {
              for (
                g = p, p = '';
                w < k && ((h = t.charAt(w)) === a || h === l || h === i);

              )
                (p += h), w++
              if (
                ((d = null),
                '"' === (h = t.charAt(w))
                  ? (d = '"')
                  : "'" === h
                  ? (d = "'")
                  : '(' === h && (d = ')'),
                d)
              ) {
                if (!p) return
                for (
                  w = (A += p + h).length, p = '';
                  w < k && (h = t.charAt(w)) !== d;

                ) {
                  if (h === i) {
                    if ((w++, (h = t.charAt(w)) === i || h === d)) return
                    p += i
                  }
                  ;(p += h), w++
                }
                if ((h = t.charAt(w)) !== d) return
                ;(c = A), (A += p + h), w++, (v = p), (p = '')
              } else (p = ''), (w = A.length)
              for (; w < k && ((h = t.charAt(w)) === a || h === l); )
                (A += h), w++
              return (h = t.charAt(w)) && h !== i
                ? void 0
                : !!n ||
                    ((r = e(r).test().end),
                    (g = y.decode.raw(y.unescape(g), r, { nonTerminated: !1 })),
                    v &&
                      ((c = e(c).test().end),
                      (v = y.decode.raw(y.unescape(v), c))),
                    e(A)({
                      type: 'definition',
                      identifier: o(m),
                      title: v || null,
                      url: g,
                    }))
            }
          }
        }
      }
      function u(e) {
        return '>' !== e && '[' !== e && e !== s
      }
      function f(e) {
        return '[' !== e && e !== s && !r(e)
      }
      u.delimiter = '>'
    },
    v0oL: function (e, t, n) {
      'use strict'
      var r = n('5t69'),
        o = n('U6jy'),
        i = n('JWB8')
      function a(e) {
        var t = r(i)
        ;(t.prototype.options = o(
          t.prototype.options,
          this.data('settings'),
          e
        )),
          (this.Parser = t)
      }
      ;(e.exports = a), (a.Parser = i)
    },
    vKFC: function (e, t, n) {
      'use strict'
      var r = n('uYhK'),
        o = n('SZPq')
      e.exports = o
      var i = o.prototype
      function a(e, t, n) {
        var o = this.path,
          i = new r(e, t, n)
        return (
          o && ((i.name = o + ':' + i.name), (i.file = o)),
          (i.fatal = !1),
          this.messages.push(i),
          i
        )
      }
      ;(i.message = a),
        (i.info = function () {
          var e = this.message.apply(this, arguments)
          return (e.fatal = null), e
        }),
        (i.fail = function () {
          var e = this.message.apply(this, arguments)
          throw ((e.fatal = !0), e)
        }),
        (i.warn = a)
    },
    vPdy: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        var t,
          n = 0,
          o = 0,
          i = e.charAt(n),
          a = {}
        for (; i in r; )
          (o += t = r[i]),
            t > 1 && (o = Math.floor(o / t) * t),
            (a[o] = n),
            (i = e.charAt(++n))
        return { indent: o, stops: a }
      }
      var r = { ' ': 1, '\t': 4 }
    },
    vRNQ: function (e, t, n) {
      e.exports = {
        container: 'Home_container__1EcsU',
        main: 'Home_main__1x8gC',
      }
    },
    vvrU: function (e, t, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('RjOF'),
        i = n('vPdy')
      e.exports = function (e, t) {
        var n,
          a,
          l,
          s,
          c = e.split('\n'),
          u = c.length + 1,
          f = 1 / 0,
          p = []
        c.unshift(o(' ', t) + '!')
        for (; u--; )
          if (((a = i(c[u])), (p[u] = a.stops), 0 !== r(c[u]).length)) {
            if (!a.indent) {
              f = 1 / 0
              break
            }
            a.indent > 0 && a.indent < f && (f = a.indent)
          }
        if (f !== 1 / 0)
          for (u = c.length; u--; ) {
            for (l = p[u], n = f; n && !(n in l); ) n--
            ;(s = 0 !== r(c[u]).length && f && n !== f ? '\t' : ''),
              (c[u] = s + c[u].slice(n in l ? l[n] + 1 : 0))
          }
        return c.shift(), c.join('\n')
      }
    },
    wnOJ: function (e, t, n) {
      var r = n('UfUV')
      e.exports = function () {
        return function (e) {
          return (
            r(e, 'list', function (e, t) {
              var n,
                r,
                o = 0
              for (n = 0, r = t.length; n < r; n++)
                'list' === t[n].type && (o += 1)
              for (n = 0, r = e.children.length; n < r; n++) {
                var i = e.children[n]
                ;(i.index = n), (i.ordered = e.ordered)
              }
              e.depth = o
            }),
            e
          )
        }
      }
    },
    xkQk: function (e, t, n) {
      'use strict'
      var r = n('EBzq')
      ;(e.exports = i), (i.wrap = r)
      var o = [].slice
      function i() {
        var e = [],
          t = {
            run: function () {
              var t = -1,
                n = o.call(arguments, 0, -1),
                i = arguments[arguments.length - 1]
              if ('function' !== typeof i)
                throw new Error('Expected function as last argument, not ' + i)
              function a(l) {
                var s = e[++t],
                  c = o.call(arguments, 0),
                  u = c.slice(1),
                  f = n.length,
                  p = -1
                if (l) i(l)
                else {
                  for (; ++p < f; )
                    (null !== u[p] && void 0 !== u[p]) || (u[p] = n[p])
                  ;(n = u),
                    s ? r(s, a).apply(null, n) : i.apply(null, [null].concat(n))
                }
              }
              a.apply(null, [null].concat(n))
            },
            use: function (n) {
              if ('function' !== typeof n)
                throw new Error('Expected `fn` to be a function, not ' + n)
              return e.push(n), t
            },
          }
        return t
      }
    },
    ywx8: function (e, t, n) {
      'use strict'
      var r = n('PZRn'),
        o = 'Welcome',
        i = 'Performance',
        a = 'Leadership',
        l = 'Frontend',
        s = 'JavaScript'
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
          category: l,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.github,
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
          category: i,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.github,
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
          category: o,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.github,
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
          category: a,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.medium,
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
          category: l,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.medium,
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
          category: s,
          author: 'Daw-Chih Liou',
          avatar: '/optimized/portrait-sm.png',
          social: r.a.medium,
          external: !0,
          publisherUrl: 'https://medium.com/',
        },
      ]
    },
  },
  [['/EDR', 0, 1, 5, 2]],
])

_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    '/EDR': function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('23aj')
        },
      ])
    },
    '/qNp': function (t, e, n) {
      'use strict'
      var r = {}.hasOwnProperty
      function o(t) {
        return (
          (t && 'object' === typeof t) || (t = {}),
          a(t.line) + ':' + a(t.column)
        )
      }
      function i(t) {
        return (
          (t && 'object' === typeof t) || (t = {}), o(t.start) + '-' + o(t.end)
        )
      }
      function a(t) {
        return t && 'number' === typeof t ? t : 1
      }
      t.exports = function (t) {
        if (!t || 'object' !== typeof t) return null
        if (r.call(t, 'position') || r.call(t, 'type')) return i(t.position)
        if (r.call(t, 'start') || r.call(t, 'end')) return i(t)
        if (r.call(t, 'line') || r.call(t, 'column')) return o(t)
        return null
      }
    },
    '044C': function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        var n = t.indexOf('**', e),
          r = t.indexOf('__', e)
        if (-1 === r) return n
        if (-1 === n) return r
        return r < n ? r : n
      }
    },
    '1T8B': function (t, e, n) {
      'use strict'
      var r =
          '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\u0000-\\u0020]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
        o = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>'
      ;(e.openCloseTag = new RegExp('^(?:' + r + '|' + o + ')')),
        (e.tag = new RegExp(
          '^(?:' +
            r +
            '|' +
            o +
            '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
        ))
    },
    '1db3': function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('ZWk2')
      t.exports = function (t) {
        return (
          (i.raw = function (t, i, a) {
            return o(t, r(a, { position: e(i), warning: n }))
          }),
          i
        )
        function e(e) {
          for (var n = t.offset, r = e.line, o = []; ++r && r in n; )
            o.push((n[r] || 0) + 1)
          return { start: e, indent: o }
        }
        function n(e, n, r) {
          3 !== r && t.file.message(e, n)
        }
        function i(r, i, a) {
          o(r, {
            position: e(i),
            warning: n,
            text: a,
            reference: a,
            textContext: t,
            referenceContext: t,
          })
        }
      }
    },
    '1iAE': function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e = 'string' === typeof t ? t.charCodeAt(0) : t
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
      }
    },
    '22pC': function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        return function (e, n) {
          var i,
            a,
            l,
            s,
            c,
            u = this,
            f = u.offset,
            h = [],
            p = u[t + 'Methods'],
            d = u[t + 'Tokenizers'],
            m = n.line,
            g = n.column
          if (!e) return h
          ;(C.now = b), (C.file = u.file), v('')
          for (; e; ) {
            for (
              i = -1, a = p.length, s = !1;
              ++i < a &&
              (!(l = d[p[i]]) ||
                (l.onlyAtStart && !u.atStart) ||
                (l.notInList && u.inList) ||
                (l.notInBlock && u.inBlock) ||
                (l.notInLink && u.inLink) ||
                ((c = e.length), l.apply(u, [C, e]), !(s = c !== e.length)));

            );
            s || u.file.fail(new Error('Infinite loop'), C.now())
          }
          return (u.eof = b()), h
          function v(t) {
            for (var e = -1, n = t.indexOf('\n'); -1 !== n; )
              m++, (e = n), (n = t.indexOf('\n', n + 1))
            ;-1 === e ? (g += t.length) : (g = t.length - e),
              m in f && (-1 !== e ? (g += f[m]) : g <= f[m] && (g = f[m] + 1))
          }
          function y() {
            var t = [],
              e = m + 1
            return function () {
              for (var n = m + 1; e < n; ) t.push((f[e] || 0) + 1), e++
              return t
            }
          }
          function b() {
            var t = { line: m, column: g }
            return (t.offset = u.toOffset(t)), t
          }
          function k(t) {
            ;(this.start = t), (this.end = b())
          }
          function w(t) {
            e.substring(0, t.length) !== t &&
              u.file.fail(
                new Error(
                  'Incorrectly eaten value: please report this warning on http://git.io/vg5Ft'
                ),
                b()
              )
          }
          function A() {
            var t = b()
            return e
            function e(e, n) {
              var r = e.position,
                o = r ? r.start : t,
                i = [],
                a = r && r.end.line,
                l = t.line
              if (((e.position = new k(o)), r && n && r.indent)) {
                if (((i = r.indent), a < l)) {
                  for (; ++a < l; ) i.push((f[a] || 0) + 1)
                  i.push(t.column)
                }
                n = i.concat(n)
              }
              return (e.position.indent = n || []), e
            }
          }
          function x(t, e) {
            var n = e ? e.children : h,
              i = n[n.length - 1]
            return (
              i &&
                t.type === i.type &&
                t.type in r &&
                o(i) &&
                o(t) &&
                (t = r[t.type].call(u, i, t)),
              t !== i && n.push(t),
              u.atStart && 0 !== h.length && u.exitStart(),
              t
            )
          }
          function C(t) {
            var n = y(),
              r = A(),
              o = b()
            return (
              w(t),
              (i.reset = a),
              (a.test = l),
              (i.test = l),
              (e = e.substring(t.length)),
              v(t),
              (n = n()),
              i
            )
            function i(t, e) {
              return r(x(r(t), e), n)
            }
            function a() {
              var n = i.apply(null, arguments)
              return (m = o.line), (g = o.column), (e = t + e), n
            }
            function l() {
              var n = r({})
              return (m = o.line), (g = o.column), (e = t + e), n.position
            }
          }
        }
      }
      var r = {
        text: function (t, e) {
          return (t.value += e.value), t
        },
        blockquote: function (t, e) {
          if (this.options.commonmark) return e
          return (t.children = t.children.concat(e.children)), t
        },
      }
      function o(t) {
        var e, n
        return (
          'text' !== t.type ||
          !t.position ||
          ((e = t.position.start),
          (n = t.position.end),
          e.line !== n.line || n.column - e.column === t.value.length)
        )
      }
    },
    '23aj': function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'default', function () {
          return F
        })
      var r = n('q1tI'),
        o = n.n(r),
        i = n('8Kt/'),
        a = n.n(i),
        l = n('vRNQ'),
        s = n.n(l),
        c = n('jjhM'),
        u = n.n(c)
      function f(t) {
        var e,
          n,
          r = ''
        if ('string' === typeof t || 'number' === typeof t) r += t
        else if ('object' === typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (n = f(t[e])) && (r && (r += ' '), (r += n))
          else for (e in t) t[e] && (r && (r += ' '), (r += e))
        return r
      }
      var h = function () {
          for (var t, e, n = 0, r = ''; n < arguments.length; )
            (t = arguments[n++]) && (e = f(t)) && (r && (r += ' '), (r += e))
          return r
        },
        p = o.a.createElement
      function d() {
        return p(
          'div',
          {
            className: u.a.hero,
            title: 'Daw-Chih is a software engineer, ux designer, and mentor.',
          },
          p(
            'h1',
            null,
            p(
              'span',
              { className: h(u.a.title, u.a.heroTitle, u.a.heroTitle_1) },
              p(
                'span',
                { className: h(u.a.title, u.a.animatedTitle_1) },
                'software engineer'
              )
            ),
            p(
              'span',
              { className: h(u.a.title, u.a.heroTitle, u.a.heroTitle_2) },
              p(
                'span',
                { className: h(u.a.title, u.a.animatedTitle_2) },
                'ux designer'
              )
            ),
            p(
              'span',
              { className: h(u.a.title, u.a.heroTitle, u.a.heroTitle_3) },
              p(
                'span',
                { className: h(u.a.title, u.a.animatedTitle_3) },
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
      function k() {
        return b(
          'div',
          { className: g.a.wrap, title: 'about me' },
          b('img', {
            src: 'portrait.png',
            alt: 'Portait',
            className: g.a.portrait,
          }),
          b(
            'p',
            null,
            'Hi there',
            b(
              'span',
              { role: 'img', 'aria-label': 'waving emoji' },
              '\ud83d\udc4b'
            ),
            b('br', null),
            "My name is Daw-Chih and I'm a software engineer, UX advocate, and mentor who is dedicated to Web engineering. My background in Human Centered Computing has led me to work with startups and public companies across North America, Asia, and Europe. I'm passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience."
          ),
          b(
            'div',
            { className: g.a.socials },
            b(
              'a',
              { href: y.a.linkedin, target: '_blank', rel: 'noreferrer' },
              b(v.b, { size: '1.25em' })
            ),
            b(
              'a',
              { href: y.a.github, target: '_blank', rel: 'noreferrer' },
              b(v.a, { size: '1.25em' })
            ),
            b(
              'a',
              { href: y.a.medium, target: '_blank', rel: 'noreferrer' },
              b(v.c, { size: '1.25em' })
            ),
            b(
              'a',
              { href: y.a.twitter, target: '_blank', rel: 'noreferrer' },
              b(v.d, { size: '1.25em' })
            )
          )
        )
      }
      function w(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
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
        O = o.a.createElement
      function T() {
        return O(
          'div',
          { className: _.a.wrap, title: 'recommendation from others' },
          O(
            'div',
            { className: _.a.smallerWrap },
            O('h1', null, 'See what people say about me')
          ),
          O(
            'div',
            { className: _.a.grid, title: 'what people say about me' },
            x.map(function (t, e) {
              var n
              return O(
                'div',
                { className: _.a.card, key: t.title },
                O(
                  'a',
                  { href: y.a.linkedin, target: '_blank', rel: 'noreferrer' },
                  O('p', null, '" ', t.quote, ' "'),
                  O(
                    'div',
                    { className: _.a.cardAction },
                    O(
                      'span',
                      {
                        className: h(
                          _.a.avatar,
                          ((n = {}),
                          w(n, _.a.avatarColorBlue, 0 === e),
                          w(n, _.a.avatarColorRed, 1 === e),
                          w(n, _.a.avatarColorYellow, 2 === e),
                          n)
                        ),
                      },
                      0 === e && O(A.b, null),
                      1 === e && O(A.e, null),
                      2 === e && O(A.a, null)
                    ),
                    O('span', { className: _.a.description }, t.title)
                  ),
                  O(
                    'div',
                    { className: _.a.footer },
                    O('span', null, 'See more on Linkedin')
                  )
                )
              )
            })
          )
        )
      }
      var j = [
          {
            title: 'react-use-pip',
            description: 'React Hook for Picture in Picture.',
            image: '/logo-react-use-pip.svg',
            link: 'https://dawchihliou.github.io/react-use-pip/',
          },
          {
            title: 'cz-conventional-changelog-with-jiraid-detection',
            description:
              'Prompts for conventional changelog standard with an Jira ID auto-detection',
            image: '/logo-npm.png',
            link:
              'https://github.com/DawChihLiou/cz-conventional-changelog-with-jiraid-detection',
          },
          {
            title: 'Spes',
            description:
              "Reading turned my life around, and I believe it can turn yours too. There're so many books full of wisdom but it's hard to find yourself a book among the overwhelming options. So I'm giving away a book every month to a subscriber and help you find your next book to read. Sign up! Hopefully you'll be inspired too:)",
            image: '/logo-spes.png',
            link: 'https://spes.me/',
          },
        ],
        E = n('j9mF'),
        I = n.n(E),
        N = o.a.createElement
      function P() {
        return N(
          'div',
          {
            className: I.a.wrap,
            title: 'my open source and none-profit projects',
          },
          N(
            'div',
            { className: I.a.description },
            N('h1', null, 'Some of my Open Source projects'),
            N(
              'p',
              null,
              "I've spent over 8 years woking on Web engineering, mostly building features and taking care of architectures for client facing products and enterprise software for public tech companies and Fortune 500 enterprises."
            ),
            N(
              'p',
              null,
              "I've been working on open source and non-profit projects too! It brings me so much joy contributing back to the community."
            ),
            N(
              'p',
              null,
              'I enjoy building tooling around testing, documentation, and CI/CD to improve developer experience. On top of solid coding and automation, nothing makes me happier than creating a meaningful product with thoughtful user experience and great performance.'
            )
          ),
          N(
            'div',
            { className: I.a.list },
            j.map(function (t) {
              return N(
                'div',
                { key: t.title, className: I.a.item },
                N(
                  'div',
                  { className: I.a.itemImage },
                  N('img', { src: t.image, alt: t.description })
                ),
                N(
                  'div',
                  { className: I.a.itemDescription },
                  N(
                    'h2',
                    null,
                    N(
                      'a',
                      { href: t.link, target: '_blank', rel: 'noreferrer' },
                      t.title
                    )
                  ),
                  N('p', null, t.description)
                )
              )
            })
          ),
          N(
            'a',
            {
              href: y.a.github,
              target: '_blank',
              rel: 'noreferrer',
              className: I.a.link,
            },
            'See more on GitHub'
          )
        )
      }
      var S = n('IujW'),
        H = n.n(S),
        L = n('psyO'),
        R = n.n(L),
        B = o.a.createElement
      function z() {
        return B(
          'div',
          { className: R.a.wrap },
          B('h1', null, 'Tech that I love'),
          B(H.a, {
            source:
              '![](https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&labelColor=121212&color=007ACC)\n![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&labelColor=121212&color=F7DF1E)\n![](https://img.shields.io/badge/Code-Java-informational?style=flat&logo=java&logoColor=white&labelColor=121212&color=007396)\n![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&labelColor=121212&color=61DAFB)\n![](https://img.shields.io/badge/Code-ReactiveX-informational?style=flat&logo=reactivex&logoColor=white&labelColor=121212&color=B7178C)\n![](https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&labelColor=121212&color=764ABC)\n![](https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=node.js&logoColor=white&labelColor=121212&color=339933)\n![](https://img.shields.io/badge/Code-GraphQL-informational?style=flat&logo=graphql&logoColor=white&labelColor=121212&color=E10098)\n![](https://img.shields.io/badge/Code-TypeORM-informational?style=flat&logo=typeorm&logoColor=white&labelColor=121212&color=DD1100)\n![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&labelColor=121212&color=1572B6)\n![](https://img.shields.io/badge/Code-Sass-informational?style=flat&logo=sass&logoColor=white&labelColor=121212&color=CC6699)\n![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&labelColor=121212&color=E34F26)\n![](https://img.shields.io/badge/Code-Vue.js-informational?style=flat&logo=vue.js&logoColor=white&labelColor=121212&color=4FC08D)\n![](https://img.shields.io/badge/Tool-Webpack-informational?style=flat&logo=webpack&logoColor=white&labelColor=121212&color=8DD6F9)\n![](https://img.shields.io/badge/Tool-Babel-informational?style=flat&logo=babel&logoColor=white&labelColor=121212&color=F9DC3E)\n![](https://img.shields.io/badge/Tool-Jest-informational?style=flat&logo=jest&logoColor=white&labelColor=121212&color=C21325)\n![](https://img.shields.io/badge/Tool-Cypress-informational?style=flat&logo=cypress&logoColor=white&labelColor=121212&color=17202C)\n![](https://img.shields.io/badge/Tool-Next.js-informational?style=flat&logo=next.js&logoColor=white&labelColor=121212&color=000000)\n![](https://img.shields.io/badge/Tool-Vercel-informational?style=flat&logo=vercel&logoColor=white&labelColor=121212&color=000000)\n![](https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&labelColor=121212&color=336791)\n![](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&labelColor=121212&color=2496ED)\n![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=github&logoColor=white&labelColor=121212&color=181717)\n![](https://img.shields.io/badge/Tools-GitHub_Actions-informational?style=flat&logo=github-actions&logoColor=white&labelColor=121212&color=2088FF)\n![](https://img.shields.io/badge/Tools-Storybook-informational?style=flat&logo=storybook&logoColor=white&labelColor=121212&color=FF4785)\n![](https://img.shields.io/badge/Tools-Sketch-informational?style=flat&logo=sketch&logoColor=white&labelColor=121212&color=F7B500)\n![](https://img.shields.io/badge/Cloud-Amazon_AWS-informational?style=flat&logo=amazon-aws&logoColor=white&labelColor=121212&color=232F3E)\n![](https://img.shields.io/badge/Cloud-Google_Cloud-informational?style=flat&logo=google-cloud&logoColor=white&labelColor=121212&color=4285F4)\n![](https://img.shields.io/badge/CDN-Akamai-informational?style=flat&logo=akamai&logoColor=white&labelColor=121212&color=1293D8)\n',
          })
        )
      }
      var q = o.a.createElement
      function F() {
        return q(
          'div',
          { className: s.a.container },
          q(
            a.a,
            null,
            q('title', null, 'Daw-Chih liou'),
            q('link', { rel: 'icon', href: '/favicon.ico' })
          ),
          q(
            'main',
            { className: s.a.main },
            q(d, null),
            q(k, null),
            q(T, null),
            q(P, null),
            q(z, null)
          )
        )
      }
    },
    '2a+b': function (t, e, n) {
      'use strict'
      var r = n('IPAr')
      t.exports = function (t, e, n) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u,
          f,
          h,
          p,
          d,
          m,
          g,
          v,
          y,
          b,
          k,
          w,
          A,
          x,
          C,
          _,
          O,
          T
        if (!this.options.gfm) return
        ;(o = 0), (w = 0), (c = e.length + 1), (u = [])
        for (; o < c; ) {
          if (
            ((_ = e.indexOf('\n', o)),
            (O = e.indexOf('|', o + 1)),
            -1 === _ && (_ = e.length),
            -1 === O || O > _)
          ) {
            if (w < 2) return
            break
          }
          u.push(e.slice(o, _)), w++, (o = _ + 1)
        }
        ;(l = u.join('\n')),
          (i = u.splice(1, 1)[0] || []),
          (o = 0),
          (c = i.length),
          w--,
          (a = !1),
          (d = [])
        for (; o < c; ) {
          if ('|' === (h = i.charAt(o))) {
            if (((p = null), !1 === a)) {
              if (!1 === T) return
            } else d.push(a), (a = !1)
            T = !1
          } else if ('-' === h) (p = !0), (a = a || null)
          else if (':' === h)
            a = 'left' === a ? 'center' : p && null === a ? 'right' : 'left'
          else if (!r(h)) return
          o++
        }
        !1 !== a && d.push(a)
        if (d.length < 1) return
        if (n) return !0
        ;(k = -1),
          (x = []),
          (C = t(l).reset({ type: 'table', align: d, children: x }))
        for (; ++k < w; ) {
          for (
            A = u[k],
              s = { type: 'tableRow', children: [] },
              k && t('\n'),
              t(A).reset(s, C),
              c = A.length + 1,
              o = 0,
              f = '',
              m = '',
              g = !0,
              v = null,
              y = null;
            o < c;

          )
            if ('\t' !== (h = A.charAt(o)) && ' ' !== h) {
              if ('' === h || '|' === h)
                if (g) t(h)
                else {
                  if (h && y) {
                    ;(f += h), o++
                    continue
                  }
                  ;(!m && !h) ||
                    g ||
                    ((l = m),
                    f.length > 1 &&
                      (h
                        ? ((l += f.slice(0, f.length - 1)),
                          (f = f.charAt(f.length - 1)))
                        : ((l += f), (f = ''))),
                    (b = t.now()),
                    t(l)(
                      {
                        type: 'tableCell',
                        children: this.tokenizeInline(m, b),
                      },
                      s
                    )),
                    t(f + h),
                    (f = ''),
                    (m = '')
                }
              else if (
                (f && ((m += f), (f = '')),
                (m += h),
                '\\' === h && o !== c - 2 && ((m += A.charAt(o + 1)), o++),
                '`' === h)
              ) {
                for (v = 1; A.charAt(o + 1) === h; ) (m += h), o++, v++
                y ? v >= y && (y = 0) : (y = v)
              }
              ;(g = !1), o++
            } else m ? (f += h) : t(h), o++
          k || t('\n' + i)
        }
        return C
      }
    },
    '3+Nb': function (t, e, n) {
      'use strict'
      t.exports = {
        position: !0,
        gfm: !0,
        commonmark: !1,
        footnotes: !1,
        pedantic: !1,
        blocks: n('VHls'),
      }
    },
    '36yr': function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        return t.indexOf('`', e)
      }
    },
    '3GlI': function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e = String(t),
          n = e.length
        for (; '\n' === e.charAt(--n); );
        return e.slice(0, n + 1)
      }
    },
    '3m36': function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('q1tI'),
        i = parseInt((o.version || '16').slice(0, 2), 10) >= 16,
        a = o.createElement
      function l(t, e) {
        return a(t, s(e), e.children)
      }
      function s(t) {
        return t['data-sourcepos']
          ? { 'data-sourcepos': t['data-sourcepos'] }
          : {}
      }
      t.exports = {
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
        tableCell: function (t) {
          var e = t.align ? { textAlign: t.align } : void 0,
            n = s(t)
          return a(
            t.isHeader ? 'th' : 'td',
            e ? r({ style: e }, n) : n,
            t.children
          )
        },
        root: function (t) {
          var e = !t.className,
            n = (e && o.Fragment) || 'div'
          return a(n, e ? null : t, t.children)
        },
        text: function (t) {
          return i ? t.children : a('span', null, t.children)
        },
        list: function (t) {
          var e = s(t)
          null !== t.start &&
            1 !== t.start &&
            void 0 !== t.start &&
            (e.start = t.start.toString())
          return a(t.ordered ? 'ol' : 'ul', e, t.children)
        },
        listItem: function (t) {
          var e = null
          if (null !== t.checked && void 0 !== t.checked) {
            var n = t.checked
            e = a('input', { type: 'checkbox', checked: n, readOnly: !0 })
          }
          return a('li', s(t), e, t.children)
        },
        definition: function () {
          return null
        },
        heading: function (t) {
          return a('h'.concat(t.level), s(t), t.children)
        },
        inlineCode: function (t) {
          return a('code', s(t), t.children)
        },
        code: function (t) {
          var e = t.language && 'language-'.concat(t.language),
            n = a('code', e ? { className: e } : null, t.value)
          return a('pre', s(t), n)
        },
        html: function (t) {
          if (t.skipHtml) return null
          var e = t.isBlock ? 'div' : 'span'
          if (t.escapeHtml) {
            var n = o.Fragment || e
            return a(n, null, t.value)
          }
          var r = { dangerouslySetInnerHTML: { __html: t.value } }
          return a(e, r)
        },
        virtualHtml: function (t) {
          return a(t.tag, s(t), t.children)
        },
        parsedHtml: function (t) {
          return t['data-sourcepos']
            ? o.cloneElement(t.element, {
                'data-sourcepos': t['data-sourcepos'],
              })
            : t.element
        },
      }
    },
    '48q5': function (t, e, n) {
      'use strict'
      var r = n('tpqs')
      t.exports = function (t, e) {
        if ('string' !== typeof t) return t
        if (0 === t.length) return t
        var n = r.basename(t, r.extname(t)) + e
        return r.join(r.dirname(t), n)
      }
    },
    '4MqD': function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        return function () {
          var r = n || this,
            o = r[t]
          return (r[t] = !e), i
          function i() {
            r[t] = o
          }
        }
      }
    },
    '5T4m': function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        var r, o, i, a, l, s, c, u, f, h
        if (n) return !0
        ;(r = this.inlineMethods),
          (a = r.length),
          (o = this.inlineTokenizers),
          (i = -1),
          (f = e.length)
        for (; ++i < a; )
          'text' !== (u = r[i]) &&
            o[u] &&
            ((c = o[u].locator) || t.file.fail('Missing locator: `' + u + '`'),
            -1 !== (s = c.call(this, e, 1)) && s < f && (f = s))
        ;(l = e.slice(0, f)),
          (h = t.now()),
          this.decode(l, h, function (e, n, r) {
            t(r || e)({ type: 'text', value: e })
          })
      }
    },
    '5t69': function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('P7XM')
      t.exports = function (t) {
        var e, n, i
        for (n in (o(l, t), o(a, l), (e = l.prototype)))
          (i = e[n]) &&
            'object' === typeof i &&
            (e[n] = 'concat' in i ? i.concat() : r(i))
        return l
        function a(e) {
          return t.apply(this, e)
        }
        function l() {
          return this instanceof l ? t.apply(this, arguments) : new a(arguments)
        }
      }
    },
    '62+j': function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('d+Jj')
      ;(t.exports = a), (a.notInList = !0), (a.notInBlock = !0)
      var i = /^( {4}|\t)?/gm
      function a(t, e, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          h,
          p,
          d,
          m,
          g,
          v,
          y = this.offset
        if (this.options.footnotes) {
          for (
            a = 0, l = e.length, s = '', c = t.now(), u = c.line;
            a < l && ((d = e.charAt(a)), r(d));

          )
            (s += d), a++
          if ('[' === e.charAt(a) && '^' === e.charAt(a + 1)) {
            for (
              a = (s += '[^').length, h = '';
              a < l && ']' !== (d = e.charAt(a));

            )
              '\\' === d && ((h += d), a++, (d = e.charAt(a))), (h += d), a++
            if (h && ']' === e.charAt(a) && ':' === e.charAt(a + 1)) {
              if (n) return !0
              for (
                m = o(h), a = (s += h + ']:').length;
                a < l && ('\t' === (d = e.charAt(a)) || ' ' === d);

              )
                (s += d), a++
              for (
                c.column += s.length,
                  c.offset += s.length,
                  h = '',
                  f = '',
                  p = '';
                a < l;

              ) {
                if ('\n' === (d = e.charAt(a))) {
                  for (p = d, a++; a < l && '\n' === (d = e.charAt(a)); )
                    (p += d), a++
                  for (h += p, p = ''; a < l && ' ' === (d = e.charAt(a)); )
                    (p += d), a++
                  if (0 === p.length) break
                  h += p
                }
                h && ((f += h), (h = '')), (f += d), a++
              }
              return (
                (s += f),
                (f = f.replace(i, function (t) {
                  return (y[u] = (y[u] || 0) + t.length), u++, ''
                })),
                (g = t(s)),
                (v = this.enterBlock()),
                (f = this.tokenizeBlock(f, c)),
                v(),
                g({ type: 'footnoteDefinition', identifier: m, children: f })
              )
            }
          }
        }
      }
    },
    '6MDH': function (t, e, n) {
      'use strict'
      var r = n('g1+e')
      function o(t) {
        delete t.position
      }
      function i(t) {
        t.position = void 0
      }
      t.exports = function (t, e) {
        return r(t, e ? o : i), t
      }
    },
    '6dBs': function (t, e, n) {
      'use strict'
      var r = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        l = function (t) {
          return 'function' === typeof Array.isArray
            ? Array.isArray(t)
            : '[object Array]' === o.call(t)
        },
        s = function (t) {
          if (!t || '[object Object]' !== o.call(t)) return !1
          var e,
            n = r.call(t, 'constructor'),
            i =
              t.constructor &&
              t.constructor.prototype &&
              r.call(t.constructor.prototype, 'isPrototypeOf')
          if (t.constructor && !n && !i) return !1
          for (e in t);
          return 'undefined' === typeof e || r.call(t, e)
        },
        c = function (t, e) {
          i && '__proto__' === e.name
            ? i(t, e.name, {
                enumerable: !0,
                configurable: !0,
                value: e.newValue,
                writable: !0,
              })
            : (t[e.name] = e.newValue)
        },
        u = function (t, e) {
          if ('__proto__' === e) {
            if (!r.call(t, e)) return
            if (a) return a(t, e).value
          }
          return t[e]
        }
      t.exports = function t() {
        var e,
          n,
          r,
          o,
          i,
          a,
          f = arguments[0],
          h = 1,
          p = arguments.length,
          d = !1
        for (
          'boolean' === typeof f &&
            ((d = f), (f = arguments[1] || {}), (h = 2)),
            (null == f || ('object' !== typeof f && 'function' !== typeof f)) &&
              (f = {});
          h < p;
          ++h
        )
          if (null != (e = arguments[h]))
            for (n in e)
              (r = u(f, n)),
                f !== (o = u(e, n)) &&
                  (d && o && (s(o) || (i = l(o)))
                    ? (i
                        ? ((i = !1), (a = r && l(r) ? r : []))
                        : (a = r && s(r) ? r : {}),
                      c(f, { name: n, newValue: t(d, a, o) }))
                    : 'undefined' !== typeof o &&
                      c(f, { name: n, newValue: o }))
        return f
      }
    },
    '7MxR': function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('6MDH')
      t.exports = function () {
        var t,
          e = String(this.file),
          n = { line: 1, column: 1, offset: 0 },
          a = r(n)
        65279 === (e = e.replace(i, '\n')).charCodeAt(0) &&
          ((e = e.slice(1)), a.column++, a.offset++)
        ;(t = {
          type: 'root',
          children: this.tokenizeBlock(e, a),
          position: { start: n, end: this.eof || r(n) },
        }),
          this.options.position || o(t, !0)
        return t
      }
      var i = /\r\n|\r/g
    },
    '7XrY': function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        var n = t.indexOf('\n', e)
        for (; n > e && ' ' === t.charAt(n - 1); ) n--
        return n
      }
    },
    '8oxB': function (t, e) {
      var n,
        r,
        o = (t.exports = {})
      function i() {
        throw new Error('setTimeout has not been defined')
      }
      function a() {
        throw new Error('clearTimeout has not been defined')
      }
      function l(t) {
        if (n === setTimeout) return setTimeout(t, 0)
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0)
        try {
          return n(t, 0)
        } catch (e) {
          try {
            return n.call(null, t, 0)
          } catch (e) {
            return n.call(this, t, 0)
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : i
        } catch (t) {
          n = i
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : a
        } catch (t) {
          r = a
        }
      })()
      var s,
        c = [],
        u = !1,
        f = -1
      function h() {
        u &&
          s &&
          ((u = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && p())
      }
      function p() {
        if (!u) {
          var t = l(h)
          u = !0
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++f < e; ) s && s[f].run()
            ;(f = -1), (e = c.length)
          }
          ;(s = null),
            (u = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t)
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t)
              try {
                r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            })(t)
        }
      }
      function d(t, e) {
        ;(this.fun = t), (this.array = e)
      }
      function m() {}
      ;(o.nextTick = function (t) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        c.push(new d(t, e)), 1 !== c.length || u || l(p)
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
        (o.listeners = function (t) {
          return []
        }),
        (o.binding = function (t) {
          throw new Error('process.binding is not supported')
        }),
        (o.cwd = function () {
          return '/'
        }),
        (o.chdir = function (t) {
          throw new Error('process.chdir is not supported')
        }),
        (o.umask = function () {
          return 0
        })
    },
    '9Z5P': function (t, e, n) {
      'use strict'
      var r = n('g1+e')
      function o(t) {
        var e = t.children
        ;(t.children = [
          {
            type: 'tableHead',
            align: t.align,
            children: [e[0]],
            position: e[0].position,
          },
        ]),
          e.length > 1 &&
            t.children.push({
              type: 'tableBody',
              align: t.align,
              children: e.slice(1),
              position: {
                start: e[1].position.start,
                end: e[e.length - 1].position.end,
              },
            })
      }
      t.exports = function (t) {
        return r(t, 'table', o), t
      }
    },
    ACGk: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        var n = t.indexOf('[', e),
          r = t.indexOf('![', e)
        if (-1 === r) return n
        return n < r ? n : r
      }
    },
    BEtg: function (t, e) {
      function n(t) {
        return (
          !!t.constructor &&
          'function' === typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        )
      }
      t.exports = function (t) {
        return (
          null != t &&
          (n(t) ||
            (function (t) {
              return (
                'function' === typeof t.readFloatLE &&
                'function' === typeof t.slice &&
                n(t.slice(0, 0))
              )
            })(t) ||
            !!t._isBuffer)
        )
      }
    },
    DCCt: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('obXZ'),
        i = n('IPAr'),
        a = n('W8QB')
      ;(t.exports = l), (l.locator = a)
      function l(t, e, n) {
        var a,
          l,
          s,
          c,
          u,
          f,
          h,
          p = 0,
          d = e.charAt(p)
        if (
          ('*' === d || '_' === d) &&
          ((l = this.options.pedantic),
          (u = d),
          (s = d),
          (f = e.length),
          p++,
          (c = ''),
          (d = ''),
          !l || !i(e.charAt(p)))
        )
          for (; p < f; ) {
            if (((h = d), (d = e.charAt(p)) === s && (!l || !i(h)))) {
              if ((d = e.charAt(++p)) !== s) {
                if (!r(c) || h === s) return
                if (!l && '_' === s && o(d)) {
                  c += s
                  continue
                }
                return (
                  !!n ||
                  ((a = t.now()).column++,
                  a.offset++,
                  t(u + c + s)({
                    type: 'emphasis',
                    children: this.tokenizeInline(c, a),
                  }))
                )
              }
              c += s
            }
            l || '\\' !== d || ((c += d), (d = e.charAt(++p))), (c += d), p++
          }
      }
    },
    DNXe: function (t, e, n) {
      'use strict'
      var r = n('ZWk2'),
        o = n('IPAr'),
        i = n('DuHW')
      ;(t.exports = s), (s.locator = i), (s.notInLink = !0)
      var a = ['http://', 'https://', 'mailto:'],
        l = a.length
      function s(t, e, n) {
        var i, s, c, u, f, h, p, d, m, g, v, y
        if (this.options.gfm) {
          for (i = '', u = -1, d = l; ++u < d; )
            if (((h = a[u]), (p = e.slice(0, h.length)).toLowerCase() === h)) {
              i = p
              break
            }
          if (i) {
            for (
              u = i.length, d = e.length, m = '', g = 0;
              u < d &&
              ((c = e.charAt(u)), !o(c) && '<' !== c) &&
              (('.' !== c &&
                ',' !== c &&
                ':' !== c &&
                ';' !== c &&
                '"' !== c &&
                "'" !== c &&
                ')' !== c &&
                ']' !== c) ||
                ((v = e.charAt(u + 1)) && !o(v))) &&
              (('(' !== c && '[' !== c) || g++,
              (')' !== c && ']' !== c) || !(--g < 0));

            )
              (m += c), u++
            if (m) {
              if (((s = i += m), 'mailto:' === h)) {
                if (-1 === (f = m.indexOf('@')) || f === d - 1) return
                s = s.substr('mailto:'.length)
              }
              return (
                !!n ||
                ((y = this.enterLink()),
                (s = this.tokenizeInline(s, t.now())),
                y(),
                t(i)({
                  type: 'link',
                  title: null,
                  url: r(i, { nonTerminated: !1 }),
                  children: s,
                }))
              )
            }
          }
        }
      }
    },
    DuHW: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        var n,
          o = r.length,
          i = -1,
          a = -1
        if (!this.options.gfm) return -1
        for (; ++i < o; )
          -1 !== (n = t.indexOf(r[i], e)) && (n < a || -1 === a) && (a = n)
        return a
      }
      var r = ['https://', 'http://', 'mailto:']
    },
    EBzq: function (t, e, n) {
      'use strict'
      var r = [].slice
      t.exports = function (t, e) {
        var n
        return function () {
          var e,
            a = r.call(arguments, 0),
            l = t.length > a.length
          l && a.push(o)
          try {
            e = t.apply(null, a)
          } catch (s) {
            if (l && n) throw s
            return o(s)
          }
          l ||
            (e && 'function' === typeof e.then
              ? e.then(i, o)
              : e instanceof Error
              ? o(e)
              : i(e))
        }
        function o() {
          n || ((n = !0), e.apply(null, arguments))
        }
        function i(t) {
          o(null, t)
        }
      }
    },
    Fhq4: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        return t.indexOf('~~', e)
      }
    },
    FxOa: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        return t.indexOf('\\', e)
      }
    },
    Gdbo: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        if (t) throw t
      }
    },
    GyeZ: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        return function (n) {
          var r,
            o = 0,
            i = n.indexOf('\\'),
            a = t[e],
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
    'I7+u': function (t, e, n) {
      'use strict'
      function r(t) {
        if ('string' === typeof t)
          return (function (t) {
            return e
            function e(e) {
              return Boolean(e && e.type === t)
            }
          })(t)
        if (null === t || void 0 === t) return a
        if ('object' === typeof t) return ('length' in t ? i : o)(t)
        if ('function' === typeof t) return t
        throw new Error('Expected function, string, or object as test')
      }
      function o(t) {
        return function (e) {
          var n
          for (n in t) if (e[n] !== t[n]) return !1
          return !0
        }
      }
      function i(t) {
        var e = (function (t) {
            for (var e = [], n = t.length, o = -1; ++o < n; ) e[o] = r(t[o])
            return e
          })(t),
          n = e.length
        return function () {
          var t = -1
          for (; ++t < n; ) if (e[t].apply(this, arguments)) return !0
          return !1
        }
      }
      function a() {
        return !0
      }
      t.exports = r
    },
    IPAr: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        return o.test('number' === typeof t ? r(t) : t.charAt(0))
      }
      var r = String.fromCharCode,
        o = /\s/
    },
    IRYA: function (t, e) {
      var n = Object.prototype.toString
      t.exports = function (t) {
        return '[object String]' === n.call(t)
      }
    },
    IoeE: function (t, e, n) {
      'use strict'
      t.exports = function t(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return (e.children || []).reduce(function (e, n) {
          return (
            'definition' === n.type &&
              (e[n.identifier] = { href: n.url, title: n.title }),
            t(n, e)
          )
        }, n)
      }
    },
    IujW: function (t, e, n) {
      'use strict'
      function r(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e]
              return n
            }
          })(t) ||
          (function (t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t)
          })(t) ||
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
        h = n('9Z5P'),
        p = n('IoeE'),
        d = n('Nw8X'),
        m = n('3m36'),
        g = n('h9ck'),
        v = Object.keys(m),
        y = function (t) {
          var e = t.source || t.children || '',
            n = t.parserOptions
          if (t.allowedTypes && t.disallowedTypes)
            throw new Error(
              'Only one of `allowedTypes` and `disallowedTypes` should be defined'
            )
          var r = o(m, t.renderers),
            l = [[a, n]].concat(t.plugins || []).reduce(b, i()),
            d = l.parse(e),
            y = o(t, { renderers: r, definitions: p(d) }),
            k = (function (t) {
              var e = [h, s()],
                n = t.disallowedTypes
              t.allowedTypes &&
                (n = v.filter(function (e) {
                  return 'root' !== e && -1 === t.allowedTypes.indexOf(e)
                }))
              var r = t.unwrapDisallowed ? 'unwrap' : 'remove'
              n && n.length > 0 && e.push(u.ofType(n, r))
              t.allowNode && e.push(u.ifNotMatch(t.allowNode, r))
              var o = !t.escapeHtml && !t.skipHtml,
                i = (t.astPlugins || []).some(function (t) {
                  return (Array.isArray(t) ? t[0] : t).identity === g.HtmlParser
                })
              o && !i && e.push(c)
              return t.astPlugins ? e.concat(t.astPlugins) : e
            })(t),
            w = l.runSync(d),
            A = k.reduce(function (t, e) {
              return e(t, y)
            }, w)
          return f(A, y)
        }
      function b(t, e) {
        return Array.isArray(e) ? t.use.apply(t, r(e)) : t.use(e)
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
        (t.exports = y)
    },
    J5yW: function (t, e, n) {
      'use strict'
      var r = n('1iAE'),
        o = n('ZONP')
      t.exports = function (t) {
        return r(t) || o(t)
      }
    },
    JWB8: function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('4MqD'),
        i = n('K4Ni'),
        a = n('GyeZ'),
        l = n('1db3'),
        s = n('22pC')
      function c(t, e) {
        ;(this.file = e),
          (this.offset = {}),
          (this.options = r(this.options)),
          this.setOptions({}),
          (this.inList = !1),
          (this.inBlock = !1),
          (this.inLink = !1),
          (this.atStart = !0),
          (this.toOffset = i(e).toOffset),
          (this.unescape = a(this, 'escape')),
          (this.decode = l(this))
      }
      t.exports = c
      var u = c.prototype
      function f(t) {
        var e,
          n = []
        for (e in t) n.push(e)
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
    JqBK: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        return String(t).replace(/\s+/g, ' ')
      }
    },
    K4Ni: function (t, e, n) {
      'use strict'
      function r(t) {
        return function (e) {
          var n = -1,
            r = t.length
          if (e < 0) return {}
          for (; ++n < r; )
            if (t[n] > e)
              return { line: n + 1, column: e - (t[n - 1] || 0) + 1, offset: e }
          return {}
        }
      }
      function o(t) {
        return function (e) {
          var n = e && e.line,
            r = e && e.column
          if (!isNaN(n) && !isNaN(r) && n - 1 in t)
            return (t[n - 2] || 0) + r - 1 || 0
          return -1
        }
      }
      t.exports = function (t) {
        var e = (function (t) {
          var e = [],
            n = t.indexOf('\n')
          for (; -1 !== n; ) e.push(n + 1), (n = t.indexOf('\n', n + 1))
          return e.push(t.length + 1), e
        })(String(t))
        return { toPosition: r(e), toOffset: o(e) }
      }
    },
    L7av: function (t, e, n) {
      t.exports = {
        wrap: 'Intro_wrap__3FL8Y',
        portrait: 'Intro_portrait__2lmQ3',
        socials: 'Intro_socials__2yu0Q',
      }
    },
    MNGI: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('ACGk')
      ;(t.exports = s), (s.locator = o)
      var i = {}.hasOwnProperty,
        a = { '"': '"', "'": "'" },
        l = {}
      function s(t, e, n) {
        var o,
          s,
          c,
          u,
          f,
          h,
          p,
          d,
          m,
          g,
          v,
          y,
          b,
          k,
          w,
          A,
          x,
          C,
          _,
          O = '',
          T = 0,
          j = e.charAt(0),
          E = this.options.pedantic,
          I = this.options.commonmark,
          N = this.options.gfm
        if (
          ('!' === j && ((m = !0), (O = j), (j = e.charAt(++T))),
          '[' === j && (m || !this.inLink))
        ) {
          for (
            O += j,
              w = '',
              T++,
              y = e.length,
              k = 0,
              (x = t.now()).column += T,
              x.offset += T;
            T < y;

          ) {
            if (((h = j = e.charAt(T)), '`' === j)) {
              for (s = 1; '`' === e.charAt(T + 1); ) (h += j), T++, s++
              c ? s >= c && (c = 0) : (c = s)
            } else if ('\\' === j) T++, (h += e.charAt(T))
            else if ((c && !N) || '[' !== j) {
              if ((!c || N) && ']' === j) {
                if (!k) {
                  if (!E)
                    for (; T < y && ((j = e.charAt(T + 1)), r(j)); )
                      (h += j), T++
                  if ('(' !== e.charAt(T + 1)) return
                  ;(h += '('), (o = !0), T++
                  break
                }
                k--
              }
            } else k++
            ;(w += h), (h = ''), T++
          }
          if (o) {
            for (g = w, O += w + h, T++; T < y && ((j = e.charAt(T)), r(j)); )
              (O += j), T++
            if (
              ((j = e.charAt(T)), (d = I ? l : a), (w = ''), (u = O), '<' === j)
            ) {
              for (T++, u += '<'; T < y && '>' !== (j = e.charAt(T)); ) {
                if (I && '\n' === j) return
                ;(w += j), T++
              }
              if ('>' !== e.charAt(T)) return
              ;(O += '<' + w + '>'), (A = w), T++
            } else {
              for (
                j = null, h = '';
                T < y && ((j = e.charAt(T)), !h || !i.call(d, j));

              ) {
                if (r(j)) {
                  if (!E) break
                  h += j
                } else {
                  if ('(' === j) k++
                  else if (')' === j) {
                    if (0 === k) break
                    k--
                  }
                  ;(w += h),
                    (h = ''),
                    '\\' === j && ((w += '\\'), (j = e.charAt(++T))),
                    (w += j)
                }
                T++
              }
              ;(A = w), (T = (O += w).length)
            }
            for (w = ''; T < y && ((j = e.charAt(T)), r(j)); ) (w += j), T++
            if (((j = e.charAt(T)), (O += w), w && i.call(d, j)))
              if ((T++, (O += j), (w = ''), (v = d[j]), (f = O), I)) {
                for (; T < y && (j = e.charAt(T)) !== v; )
                  '\\' === j && ((w += '\\'), (j = e.charAt(++T))),
                    T++,
                    (w += j)
                if ((j = e.charAt(T)) !== v) return
                for (
                  b = w, O += w + j, T++;
                  T < y && ((j = e.charAt(T)), r(j));

                )
                  (O += j), T++
              } else
                for (h = ''; T < y; ) {
                  if ((j = e.charAt(T)) === v)
                    p && ((w += v + h), (h = '')), (p = !0)
                  else if (p) {
                    if (')' === j) {
                      ;(O += w + v + h), (b = w)
                      break
                    }
                    r(j) ? (h += j) : ((w += v + h + j), (h = ''), (p = !1))
                  } else w += j
                  T++
                }
            if (')' === e.charAt(T))
              return (
                !!n ||
                ((O += ')'),
                (A = this.decode.raw(this.unescape(A), t(u).test().end, {
                  nonTerminated: !1,
                })),
                b &&
                  ((f = t(f).test().end),
                  (b = this.decode.raw(this.unescape(b), f))),
                (_ = { type: m ? 'image' : 'link', title: b || null, url: A }),
                m
                  ? (_.alt = this.decode.raw(this.unescape(g), x) || null)
                  : ((C = this.enterLink()),
                    (_.children = this.tokenizeInline(g, x)),
                    C()),
                t(O)(_))
              )
          }
        }
      }
      ;(l['"'] = '"'), (l["'"] = "'"), (l['('] = ')')
    },
    'MQ5/': function (t, e, n) {
      'use strict'
      t.exports = a
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
      function a(t) {
        var e = t || {}
        return e.commonmark ? i : e.gfm ? o : r
      }
      ;(a.default = r), (a.gfm = o), (a.commonmark = i)
    },
    NBu1: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        return t.indexOf('<', e)
      }
    },
    NiDC: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('ZONP'),
        i = n('3GlI'),
        a = n('cmLN')
      t.exports = function (t, e, n) {
        var l,
          s,
          c,
          u,
          f,
          h = this.options,
          p = h.commonmark,
          d = h.gfm,
          m = this.blockTokenizers,
          g = this.interruptParagraph,
          v = e.indexOf('\n'),
          y = e.length
        for (; v < y; ) {
          if (-1 === v) {
            v = y
            break
          }
          if ('\n' === e.charAt(v + 1)) break
          if (p) {
            for (u = 0, l = v + 1; l < y; ) {
              if ('\t' === (c = e.charAt(l))) {
                u = 4
                break
              }
              if (' ' !== c) break
              u++, l++
            }
            if (u >= 4) {
              v = e.indexOf('\n', v + 1)
              continue
            }
          }
          if (((s = e.slice(v + 1)), a(g, m, this, [t, s, !0]))) break
          if (
            m.list.call(this, t, s, !0) &&
            (this.inList || p || (d && !o(r.left(s).charAt(0))))
          )
            break
          if (
            ((l = v),
            -1 !== (v = e.indexOf('\n', v + 1)) && '' === r(e.slice(l, v)))
          ) {
            v = l
            break
          }
        }
        if (((s = e.slice(0, v)), '' === r(s))) return t(s), null
        if (n) return !0
        return (
          (f = t.now()),
          (s = i(s)),
          t(s)({ type: 'paragraph', children: this.tokenizeInline(s, f) })
        )
      }
    },
    Nw8X: function (t, e, n) {
      'use strict'
      var r = ['http', 'https', 'mailto', 'tel']
      t.exports = function (t) {
        var e = (t || '').trim(),
          n = e.charAt(0)
        if ('#' === n || '/' === n) return e
        var o = e.indexOf(':')
        if (-1 === o) return e
        for (var i = r.length, a = -1; ++a < i; ) {
          var l = r[a]
          if (o === l.length && e.slice(0, l.length).toLowerCase() === l)
            return e
        }
        return (-1 !== (a = e.indexOf('?')) && o > a) ||
          (-1 !== (a = e.indexOf('#')) && o > a)
          ? e
          : 'javascript:void(0)'
      }
    },
    Nx7O: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('RjOF'),
        i = n('ZONP'),
        a = n('vPdy'),
        l = n('vvrU'),
        s = n('cmLN')
      t.exports = function (t, e, n) {
        var o,
          a,
          l,
          c,
          u,
          f,
          h,
          p,
          y,
          b,
          k,
          w,
          A,
          x,
          C,
          _,
          O,
          T,
          j,
          E,
          I,
          N,
          P,
          S,
          H = this.options.commonmark,
          L = this.options.pedantic,
          R = this.blockTokenizers,
          B = this.interruptList,
          z = 0,
          q = e.length,
          F = null,
          D = 0
        for (; z < q; ) {
          if ('\t' === (c = e.charAt(z))) D += 4 - (D % 4)
          else {
            if (' ' !== c) break
            D++
          }
          z++
        }
        if (D >= 4) return
        if (((c = e.charAt(z)), (o = H ? g : m), !0 === d[c])) (u = c), (l = !1)
        else {
          for (l = !0, a = ''; z < q && ((c = e.charAt(z)), i(c)); )
            (a += c), z++
          if (((c = e.charAt(z)), !a || !0 !== o[c])) return
          ;(F = parseInt(a, 10)), (u = c)
        }
        if (' ' !== (c = e.charAt(++z)) && '\t' !== c) return
        if (n) return !0
        ;(z = 0), (x = []), (C = []), (_ = [])
        for (; z < q; ) {
          for (
            f = e.indexOf('\n', z),
              h = z,
              p = !1,
              S = !1,
              -1 === f && (f = q),
              P = z + 4,
              D = 0;
            z < q;

          ) {
            if ('\t' === (c = e.charAt(z))) D += 4 - (D % 4)
            else {
              if (' ' !== c) break
              D++
            }
            z++
          }
          if (
            (D >= 4 && (S = !0),
            O && D >= O.indent && (S = !0),
            (c = e.charAt(z)),
            (y = null),
            !S)
          ) {
            if (!0 === d[c]) (y = c), z++, D++
            else {
              for (a = ''; z < q && ((c = e.charAt(z)), i(c)); ) (a += c), z++
              ;(c = e.charAt(z)),
                z++,
                a && !0 === o[c] && ((y = c), (D += a.length + 1))
            }
            if (y)
              if ('\t' === (c = e.charAt(z))) (D += 4 - (D % 4)), z++
              else if (' ' === c) {
                for (P = z + 4; z < P && ' ' === e.charAt(z); ) z++, D++
                z === P && ' ' === e.charAt(z) && ((z -= 3), (D -= 3))
              } else '\n' !== c && '' !== c && (y = null)
          }
          if (y) {
            if (!L && u !== y) break
            p = !0
          } else
            H || S || ' ' !== e.charAt(h)
              ? H && O && (S = D >= O.indent || D > 4)
              : (S = !0),
              (p = !1),
              (z = h)
          if (
            ((k = e.slice(h, f)),
            (b = h === z ? k : e.slice(z, f)),
            ('*' === y || '_' === y || '-' === y) &&
              R.thematicBreak.call(this, t, k, !0))
          )
            break
          if (((w = A), (A = !r(b).length), S && O))
            (O.value = O.value.concat(_, k)), (C = C.concat(_, k)), (_ = [])
          else if (p)
            0 !== _.length && (O.value.push(''), (O.trail = _.concat())),
              (O = { value: [k], indent: D, trail: [] }),
              x.push(O),
              (C = C.concat(_, k)),
              (_ = [])
          else if (A) {
            if (w) break
            _.push(k)
          } else {
            if (w) break
            if (s(B, R, this, [t, k, !0])) break
            ;(O.value = O.value.concat(_, k)), (C = C.concat(_, k)), (_ = [])
          }
          z = f + 1
        }
        ;(I = t(C.join('\n')).reset({
          type: 'list',
          ordered: l,
          start: F,
          loose: null,
          children: [],
        })),
          (T = this.enterList()),
          (j = this.enterBlock()),
          (E = !1),
          (z = -1),
          (q = x.length)
        for (; ++z < q; )
          (O = x[z].value.join('\n')),
            (N = t.now()),
            (O = t(O)(v(this, O, N), I)).loose && (E = !0),
            (O = x[z].trail.join('\n')),
            z !== q - 1 && (O += '\n'),
            t(O)
        return T(), j(), (I.loose = E), I
      }
      var c = /\n\n(?!\s*$)/,
        u = /^\[([ \t]|x|X)][ \t]/,
        f = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
        h = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
        p = /^( {1,4}|\t)?/gm,
        d = { '*': !0, '+': !0, '-': !0 },
        m = { '.': !0 },
        g = {}
      function v(t, e, n) {
        var r,
          o,
          i = t.offset,
          a = t.options.pedantic ? y : b,
          l = null
        return (
          (e = a.apply(null, arguments)),
          t.options.gfm &&
            (r = e.match(u)) &&
            ((o = r[0].length),
            (l = 'x' === r[1].toLowerCase()),
            (i[n.line] += o),
            (e = e.slice(o))),
          {
            type: 'listItem',
            loose: c.test(e) || '\n' === e.charAt(e.length - 1),
            checked: l,
            children: t.tokenizeBlock(e, n),
          }
        )
      }
      function y(t, e, n) {
        var r = t.offset,
          o = n.line
        return (e = e.replace(h, i)), (o = n.line), e.replace(p, i)
        function i(t) {
          return (r[o] = (r[o] || 0) + t.length), o++, ''
        }
      }
      function b(t, e, n) {
        var r,
          i,
          s,
          c,
          u,
          h,
          p,
          d = t.offset,
          m = n.line
        for (
          c = (e = e.replace(f, function (t, e, n, a, l) {
            ;(i = e + n + a),
              (s = l),
              Number(n) < 10 && i.length % 2 === 1 && (n = ' ' + n)
            return (r = e + o(' ', n.length) + a) + s
          })).split('\n'),
            (u = l(e, a(r).indent).split('\n'))[0] = s,
            d[m] = (d[m] || 0) + i.length,
            m++,
            h = 0,
            p = c.length;
          ++h < p;

        )
          (d[m] = (d[m] || 0) + c[h].length - u[h].length), m++
        return u.join('\n')
      }
      ;(g['.'] = !0), (g[')'] = !0)
    },
    O5o4: function (t, e, n) {
      t.exports = {
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
    P7XM: function (t, e) {
      'function' === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })))
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e
              var n = function () {}
              ;(n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.prototype.constructor = t)
            }
          })
    },
    RjOF: function (t, e, n) {
      'use strict'
      var r,
        o = ''
      t.exports = function (t, e) {
        if ('string' !== typeof t) throw new TypeError('expected a string')
        if (1 === e) return t
        if (2 === e) return t + t
        var n = t.length * e
        if (r !== t || 'undefined' === typeof r) (r = t), (o = '')
        else if (o.length >= n) return o.substr(0, n)
        for (; n > o.length && e > 1; ) 1 & e && (o += t), (e >>= 1), (t += t)
        return (o = (o += t).substr(0, n))
      }
    },
    RsFJ: function (t, e) {
      ;((e = t.exports = function (t) {
        return t.replace(/^\s*|\s*$/g, '')
      }).left = function (t) {
        return t.replace(/^\s*/, '')
      }),
        (e.right = function (t) {
          return t.replace(/\s*$/, '')
        })
    },
    SZPq: function (t, e, n) {
      'use strict'
      ;(function (e) {
        var r = n('tpqs'),
          o = n('48q5'),
          i = n('BEtg')
        t.exports = c
        var a = {}.hasOwnProperty,
          l = c.prototype
        l.toString = function (t) {
          var e = this.contents || ''
          return i(e) ? e.toString(t) : String(e)
        }
        var s = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']
        function c(t) {
          var n, r, o
          if (t) {
            if ('string' === typeof t || i(t)) t = { contents: t }
            else if ('message' in t && 'messages' in t) return t
          } else t = {}
          if (!(this instanceof c)) return new c(t)
          for (
            this.data = {},
              this.messages = [],
              this.history = [],
              this.cwd = e.cwd(),
              r = -1,
              o = s.length;
            ++r < o;

          )
            (n = s[r]), a.call(t, n) && (this[n] = t[n])
          for (n in t) -1 === s.indexOf(n) && (this[n] = t[n])
        }
        function u(t, e) {
          if (-1 !== t.indexOf(r.sep))
            throw new Error(
              '`' + e + '` cannot be a path: did not expect `' + r.sep + '`'
            )
        }
        function f(t, e) {
          if (!t) throw new Error('`' + e + '` cannot be empty')
        }
        function h(t, e) {
          if (!t)
            throw new Error('Setting `' + e + '` requires `path` to be set too')
        }
        Object.defineProperty(l, 'path', {
          get: function () {
            return this.history[this.history.length - 1]
          },
          set: function (t) {
            f(t, 'path'), t !== this.path && this.history.push(t)
          },
        }),
          Object.defineProperty(l, 'dirname', {
            get: function () {
              return 'string' === typeof this.path
                ? r.dirname(this.path)
                : void 0
            },
            set: function (t) {
              h(this.path, 'dirname'),
                (this.path = r.join(t || '', this.basename))
            },
          }),
          Object.defineProperty(l, 'basename', {
            get: function () {
              return 'string' === typeof this.path
                ? r.basename(this.path)
                : void 0
            },
            set: function (t) {
              f(t, 'basename'),
                u(t, 'basename'),
                (this.path = r.join(this.dirname || '', t))
            },
          }),
          Object.defineProperty(l, 'extname', {
            get: function () {
              return 'string' === typeof this.path
                ? r.extname(this.path)
                : void 0
            },
            set: function (t) {
              var e = t || ''
              if ((u(e, 'extname'), h(this.path, 'extname'), e)) {
                if ('.' !== e.charAt(0))
                  throw new Error('`extname` must start with `.`')
                if (-1 !== e.indexOf('.', 1))
                  throw new Error('`extname` cannot contain multiple dots')
              }
              this.path = o(this.path, e)
            },
          }),
          Object.defineProperty(l, 'stem', {
            get: function () {
              return 'string' === typeof this.path
                ? r.basename(this.path, this.extname)
                : void 0
            },
            set: function (t) {
              f(t, 'stem'),
                u(t, 'stem'),
                (this.path = r.join(
                  this.dirname || '',
                  t + (this.extname || '')
                ))
            },
          })
      }.call(this, n('8oxB')))
    },
    Sce3: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('ZWk2'),
        i = n('NBu1')
      ;(t.exports = l), (l.locator = i), (l.notInLink = !0)
      var a = 'mailto:'.length
      function l(t, e, n) {
        var i, l, s, c, u, f, h, p, d, m, g
        if ('<' === e.charAt(0)) {
          for (
            this,
              i = '',
              l = e.length,
              s = 0,
              c = '',
              f = !1,
              h = '',
              s++,
              i = '<';
            s < l &&
            ((u = e.charAt(s)),
            !(
              r(u) ||
              '>' === u ||
              '@' === u ||
              (':' === u && '/' === e.charAt(s + 1))
            ));

          )
            (c += u), s++
          if (c) {
            if (((h += c), (c = ''), (h += u = e.charAt(s)), s++, '@' === u))
              f = !0
            else {
              if (':' !== u || '/' !== e.charAt(s + 1)) return
              ;(h += '/'), s++
            }
            for (; s < l && ((u = e.charAt(s)), !r(u) && '>' !== u); )
              (c += u), s++
            if (((u = e.charAt(s)), c && '>' === u))
              return (
                !!n ||
                ((d = h += c),
                (i += h + u),
                (p = t.now()).column++,
                p.offset++,
                f &&
                  ('mailto:' === h.slice(0, a).toLowerCase()
                    ? ((d = d.substr(a)), (p.column += a), (p.offset += a))
                    : (h = 'mailto:' + h)),
                (m = this.inlineTokenizers),
                (this.inlineTokenizers = { text: m.text }),
                (g = this.enterLink()),
                (d = this.tokenizeInline(d, p)),
                (this.inlineTokenizers = m),
                g(),
                t(i)({
                  type: 'link',
                  title: null,
                  url: o(h, { nonTerminated: !1 }),
                  children: d,
                }))
              )
          }
        }
      }
    },
    Syd7: function (t, e, n) {
      'use strict'
      var r = n('3GlI')
      t.exports = function (t, e, n) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u,
          f,
          h,
          p,
          d,
          m = this.options,
          g = e.length + 1,
          v = 0,
          y = ''
        if (!m.gfm) return
        for (; v < g && (' ' === (a = e.charAt(v)) || '\t' === a); )
          (y += a), v++
        if (((p = v), '~' !== (a = e.charAt(v)) && '`' !== a)) return
        v++, (i = a), (o = 1), (y += a)
        for (; v < g && (a = e.charAt(v)) === i; ) (y += a), o++, v++
        if (o < 3) return
        for (; v < g && (' ' === (a = e.charAt(v)) || '\t' === a); )
          (y += a), v++
        ;(l = ''), (s = '')
        for (; v < g && '\n' !== (a = e.charAt(v)) && '~' !== a && '`' !== a; )
          ' ' === a || '\t' === a ? (s += a) : ((l += s + a), (s = '')), v++
        if ((a = e.charAt(v)) && '\n' !== a) return
        if (n) return !0
        ;((d = t.now()).column += y.length),
          (d.offset += y.length),
          (y += l),
          (l = this.decode.raw(this.unescape(l), d)),
          s && (y += s)
        ;(s = ''), (f = ''), (h = ''), (c = ''), (u = '')
        for (; v < g; )
          if (
            ((a = e.charAt(v)),
            (c += f),
            (u += h),
            (f = ''),
            (h = ''),
            '\n' === a)
          ) {
            for (
              c ? ((f += a), (h += a)) : (y += a), s = '', v++;
              v < g && ' ' === (a = e.charAt(v));

            )
              (s += a), v++
            if (((f += s), (h += s.slice(p)), !(s.length >= 4))) {
              for (s = ''; v < g && (a = e.charAt(v)) === i; ) (s += a), v++
              if (((f += s), (h += s), !(s.length < o))) {
                for (
                  s = '';
                  v < g && (' ' === (a = e.charAt(v)) || '\t' === a);

                )
                  (f += a), (h += a), v++
                if (!a || '\n' === a) break
              }
            }
          } else (c += a), (h += a), v++
        return t((y += c + f))({ type: 'code', lang: l || null, value: r(u) })
      }
    },
    TOwV: function (t, e, n) {
      'use strict'
      t.exports = n('qT12')
    },
    U6jy: function (t, e) {
      t.exports = function () {
        for (var t = {}, e = 0; e < arguments.length; e++) {
          var r = arguments[e]
          for (var o in r) n.call(r, o) && (t[o] = r[o])
        }
        return t
      }
      var n = Object.prototype.hasOwnProperty
    },
    'UV+P': function (t, e, n) {
      'use strict'
      var r = n('q1tI'),
        o = n('U6jy'),
        i = n('TOwV'),
        a = {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 },
        }
      function l(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          c = e.renderers[t.type]
        void 0 === t.position && (t.position = (n.node && n.node.position) || a)
        var u = t.position.start,
          f = [t.type, u.line, u.column, o].join('-')
        if (!i.isValidElementType(c))
          throw new Error(
            'Renderer for type `'.concat(
              t.type,
              '` not defined or is not renderable'
            )
          )
        var h = s(t, f, e, c, n, o)
        return r.createElement(c, h, h.children || p() || void 0)
        function p() {
          return (
            t.children &&
            t.children.map(function (n, r) {
              return l(n, e, { node: t, props: h }, r)
            })
          )
        }
      }
      function s(t, e, n, i, a, s) {
        var u,
          f = { key: e },
          h = 'string' === typeof i
        n.sourcePos &&
          t.position &&
          (f['data-sourcepos'] = [
            (u = t.position).start.line,
            ':',
            u.start.column,
            '-',
            u.end.line,
            ':',
            u.end.column,
          ]
            .map(String)
            .join('')),
          n.rawSourcePos && !h && (f.sourcePosition = t.position),
          n.includeNodeIndex &&
            a.node &&
            a.node.children &&
            !h &&
            ((f.index = a.node.children.indexOf(t)),
            (f.parentChildCount = a.node.children.length))
        var p =
          null !== t.identifier && void 0 !== t.identifier
            ? n.definitions[t.identifier] || {}
            : null
        switch (t.type) {
          case 'root':
            c(f, { className: n.className })
            break
          case 'text':
            ;(f.nodeKey = e), (f.children = t.value)
            break
          case 'heading':
            f.level = t.depth
            break
          case 'list':
            ;(f.start = t.start),
              (f.ordered = t.ordered),
              (f.tight = !t.loose),
              (f.depth = t.depth)
            break
          case 'listItem':
            ;(f.checked = t.checked),
              (f.tight = !t.loose),
              (f.ordered = t.ordered),
              (f.index = t.index),
              (f.children = (function (t, e) {
                if (t.loose) return t.children
                if (e.node && t.index > 0 && e.node.children[t.index - 1].loose)
                  return t.children
                return (function (t) {
                  return t.children.reduce(function (t, e) {
                    return t.concat(
                      'paragraph' === e.type ? e.children || [] : [e]
                    )
                  }, [])
                })(t)
              })(t, a).map(function (e, r) {
                return l(e, n, { node: t, props: f }, r)
              }))
            break
          case 'definition':
            c(f, { identifier: t.identifier, title: t.title, url: t.url })
            break
          case 'code':
            c(f, { language: t.lang && t.lang.split(/\s/, 1)[0] })
            break
          case 'inlineCode':
            ;(f.children = t.value), (f.inline = !0)
            break
          case 'link':
            c(f, {
              title: t.title || void 0,
              target:
                'function' === typeof n.linkTarget
                  ? n.linkTarget(t.url, t.children, t.title)
                  : n.linkTarget,
              href: n.transformLinkUri
                ? n.transformLinkUri(t.url, t.children, t.title)
                : t.url,
            })
            break
          case 'image':
            c(f, {
              alt: t.alt || void 0,
              title: t.title || void 0,
              src: n.transformImageUri
                ? n.transformImageUri(t.url, t.children, t.title, t.alt)
                : t.url,
            })
            break
          case 'linkReference':
            c(
              f,
              o(p, {
                href: n.transformLinkUri ? n.transformLinkUri(p.href) : p.href,
              })
            )
            break
          case 'imageReference':
            c(f, {
              src:
                n.transformImageUri && p.href
                  ? n.transformImageUri(p.href, t.children, p.title, t.alt)
                  : p.href,
              title: p.title || void 0,
              alt: t.alt || void 0,
            })
            break
          case 'table':
          case 'tableHead':
          case 'tableBody':
            f.columnAlignment = t.align
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
            f.tag = t.tag
            break
          case 'html':
            ;(f.isBlock = t.position.start.line !== t.position.end.line),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml)
            break
          case 'parsedHtml':
            var d
            t.children &&
              (d = t.children.map(function (e, r) {
                return l(e, n, { node: t, props: f }, r)
              })),
              (f.escapeHtml = n.escapeHtml),
              (f.skipHtml = n.skipHtml),
              (f.element = (function (t, e) {
                var n = t.element
                if (Array.isArray(n)) {
                  var o = r.Fragment || 'div'
                  return r.createElement(o, null, n)
                }
                if (n.props.children || e) {
                  var i = r.Children.toArray(n.props.children).concat(e)
                  return r.cloneElement(n, null, i)
                }
                return r.cloneElement(n, null)
              })(t, d))
            break
          default:
            c(f, o(t, { type: void 0, position: void 0, children: void 0 }))
        }
        return !h && t.value && (f.value = t.value), f
      }
      function c(t, e) {
        for (var n in e) 'undefined' !== typeof e[n] && (t[n] = e[n])
      }
      t.exports = l
    },
    UfUV: function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        var r = []
        'function' === typeof e && ((n = e), (e = null))
        function o(t) {
          var i
          return (
            (e && t.type !== e) || (i = n(t, r.concat())),
            t.children && !1 !== i
              ? (function (t, e) {
                  var n,
                    i = t.length,
                    a = -1
                  r.push(e)
                  for (; ++a < i; ) if ((n = t[a]) && !1 === o(n)) return !1
                  return r.pop(), !0
                })(t.children, t)
              : i
          )
        }
        o(t)
      }
    },
    VHls: function (t) {
      t.exports = JSON.parse(
        '["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]'
      )
    },
    W8QB: function (t, e, n) {
      'use strict'
      t.exports = function (t, e) {
        var n = t.indexOf('*', e),
          r = t.indexOf('_', e)
        if (-1 === r) return n
        if (-1 === n) return r
        return r < n ? r : n
      }
    },
    WtKE: function (t, e, n) {
      'use strict'
      var r
      t.exports = function (t) {
        var e,
          n = '&' + t + ';'
        if (
          (((r = r || document.createElement('i')).innerHTML = n),
          59 === (e = r.textContent).charCodeAt(e.length - 1) && 'semi' !== t)
        )
          return !1
        return e !== n && e
      }
    },
    YjuW: function (t, e, n) {
      'use strict'
      var r = Object.prototype.toString
      t.exports = function (t) {
        var e
        return (
          '[object Object]' === r.call(t) &&
          (null === (e = Object.getPrototypeOf(t)) ||
            e === Object.getPrototypeOf({}))
        )
      }
    },
    Z87L: function (t) {
      t.exports = JSON.parse(
        '{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}'
      )
    },
    'ZEx/': function (t, e, n) {
      'use strict'
      var r = n('6dBs'),
        o = n('Gdbo'),
        i = n('vKFC'),
        a = n('xkQk'),
        l = n('IRYA'),
        s = n('YjuW')
      t.exports = (function t() {
        var e = [],
          n = a(),
          y = {},
          b = !1,
          k = -1
        return (
          (w.data = function (t, e) {
            if (l(t))
              return 2 === arguments.length
                ? (m('data', b), (y[t] = e), w)
                : (u.call(y, t) && y[t]) || null
            if (t) return m('data', b), (y = t), w
            return y
          }),
          (w.freeze = A),
          (w.attachers = e),
          (w.use = function (t) {
            var n
            if ((m('use', b), null === t || void 0 === t));
            else if ('function' === typeof t) l.apply(null, arguments)
            else {
              if ('object' !== typeof t)
                throw new Error('Expected usable value, not `' + t + '`')
              'length' in t ? a(t) : o(t)
            }
            n && (y.settings = r(y.settings || {}, n))
            return w
            function o(t) {
              a(t.plugins), t.settings && (n = r(n || {}, t.settings))
            }
            function i(t) {
              if ('function' === typeof t) l(t)
              else {
                if ('object' !== typeof t)
                  throw new Error('Expected usable value, not `' + t + '`')
                'length' in t ? l.apply(null, t) : o(t)
              }
            }
            function a(t) {
              var e, n
              if (null === t || void 0 === t);
              else {
                if ('object' !== typeof t || !('length' in t))
                  throw new Error('Expected a list of plugins, not `' + t + '`')
                for (e = t.length, n = -1; ++n < e; ) i(t[n])
              }
            }
            function l(t, n) {
              var o = x(t)
              o
                ? (s(o[1]) && s(n) && (n = r(o[1], n)), (o[1] = n))
                : e.push(c.call(arguments))
            }
          }),
          (w.parse = function (t) {
            var e,
              n = i(t)
            if ((A(), p('parse', (e = w.Parser)), h(e)))
              return new e(String(n), n).parse()
            return e(String(n), n)
          }),
          (w.stringify = function (t, e) {
            var n,
              r = i(e)
            if ((A(), d('stringify', (n = w.Compiler)), g(t), h(n)))
              return new n(t, r).compile()
            return n(t, r)
          }),
          (w.run = C),
          (w.runSync = function (t, e) {
            var n,
              r = !1
            return C(t, e, i), v('runSync', 'run', r), n
            function i(t, e) {
              ;(r = !0), o(t), (n = e)
            }
          }),
          (w.process = _),
          (w.processSync = function (t) {
            var e,
              n = !1
            return (
              A(),
              p('processSync', w.Parser),
              d('processSync', w.Compiler),
              _((e = i(t)), r),
              v('processSync', 'process', n),
              e
            )
            function r(t) {
              ;(n = !0), o(t)
            }
          }),
          w
        )
        function w() {
          for (var n = t(), o = e.length, i = -1; ++i < o; )
            n.use.apply(null, e[i])
          return n.data(r(!0, {}, y)), n
        }
        function A() {
          var t, r, o, i
          if (b) return w
          for (; ++k < e.length; )
            (r = (t = e[k])[0]),
              null,
              !1 !== (o = t[1]) &&
                (!0 === o && (t[1] = void 0),
                'function' === typeof (i = r.apply(w, t.slice(1))) && n.use(i))
          return (b = !0), (k = 1 / 0), w
        }
        function x(t) {
          for (var n, r = e.length, o = -1; ++o < r; )
            if ((n = e[o])[0] === t) return n
        }
        function C(t, e, r) {
          if (
            (g(t),
            A(),
            r || 'function' !== typeof e || ((r = e), (e = null)),
            !r)
          )
            return new Promise(o)
          function o(o, a) {
            n.run(t, i(e), function (e, n, i) {
              ;(n = n || t), e ? a(e) : o ? o(n) : r(null, n, i)
            })
          }
          o(null, r)
        }
        function _(t, e) {
          if ((A(), p('process', w.Parser), d('process', w.Compiler), !e))
            return new Promise(n)
          function n(n, r) {
            var o = i(t)
            f.run(w, { file: o }, function (t) {
              t ? r(t) : n ? n(o) : e(null, o)
            })
          }
          n(null, e)
        }
      })().freeze()
      var c = [].slice,
        u = {}.hasOwnProperty,
        f = a()
          .use(function (t, e) {
            e.tree = t.parse(e.file)
          })
          .use(function (t, e, n) {
            t.run(e.tree, e.file, function (t, r, o) {
              t ? n(t) : ((e.tree = r), (e.file = o), n())
            })
          })
          .use(function (t, e) {
            e.file.contents = t.stringify(e.tree, e.file)
          })
      function h(t) {
        return (
          'function' === typeof t &&
          (function (t) {
            var e
            for (e in t) return !0
            return !1
          })(t.prototype)
        )
      }
      function p(t, e) {
        if ('function' !== typeof e)
          throw new Error('Cannot `' + t + '` without `Parser`')
      }
      function d(t, e) {
        if ('function' !== typeof e)
          throw new Error('Cannot `' + t + '` without `Compiler`')
      }
      function m(t, e) {
        if (e)
          throw new Error(
            [
              'Cannot invoke `' + t + '` on a frozen processor.\nCreate a new ',
              'processor first, by invoking it: use `processor()` instead of ',
              '`processor`.',
            ].join('')
          )
      }
      function g(t) {
        if (!t || !l(t.type)) throw new Error('Expected node, got `' + t + '`')
      }
      function v(t, e, n) {
        if (!n)
          throw new Error('`' + t + '` finished async. Use `' + e + '` instead')
      }
    },
    ZONP: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e = 'string' === typeof t ? t.charCodeAt(0) : t
        return e >= 48 && e <= 57
      }
    },
    ZWk2: function (t, e, n) {
      'use strict'
      var r = n('m2n9'),
        o = n('Z87L'),
        i = n('ZONP'),
        a = n('fjrl'),
        l = n('J5yW'),
        s = n('WtKE')
      t.exports = function (t, e) {
        var n,
          i,
          a = {}
        e || (e = {})
        for (i in h) (n = e[i]), (a[i] = null === n || void 0 === n ? h[i] : n)
        ;(a.position.indent || a.position.start) &&
          ((a.indent = a.position.indent || []),
          (a.position = a.position.start))
        return (function (t, e) {
          var n,
            i,
            a,
            h,
            w,
            A,
            x,
            C,
            _,
            O,
            T,
            j,
            E,
            I,
            N,
            P,
            S,
            H,
            L,
            R = e.additional,
            B = e.nonTerminated,
            z = e.text,
            q = e.reference,
            F = e.warning,
            D = e.textContext,
            U = e.referenceContext,
            M = e.warningContext,
            $ = e.position,
            J = e.indent || [],
            W = t.length,
            Z = 0,
            V = -1,
            X = $.column || 1,
            G = $.line || 1,
            Y = '',
            Q = []
          'string' === typeof R && (R = R.charCodeAt(0))
          ;(P = K()), (C = F ? tt : f), Z--, W++
          for (; ++Z < W; )
            if ((10 === w && (X = J[V] || 1), 38 === (w = t.charCodeAt(Z)))) {
              if (
                9 === (x = t.charCodeAt(Z + 1)) ||
                10 === x ||
                12 === x ||
                32 === x ||
                38 === x ||
                60 === x ||
                x !== x ||
                (R && x === R)
              ) {
                ;(Y += u(w)), X++
                continue
              }
              for (
                j = E = Z + 1,
                  L = E,
                  35 === x
                    ? ((L = ++j),
                      88 === (x = t.charCodeAt(L)) || 120 === x
                        ? ((I = d), (L = ++j))
                        : (I = m))
                    : (I = p),
                  n = '',
                  T = '',
                  h = '',
                  N = v[I],
                  L--;
                ++L < W && N((x = t.charCodeAt(L)));

              )
                (h += u(x)), I === p && c.call(r, h) && ((n = h), (T = r[h]))
              ;(a = 59 === t.charCodeAt(L)) &&
                (L++, (i = I === p && s(h)) && ((n = h), (T = i))),
                (H = 1 + L - E),
                (a || B) &&
                  (h
                    ? I === p
                      ? (a && !T
                          ? C(5, 1)
                          : (n !== h &&
                              ((H = 1 + (L = j + n.length) - j), (a = !1)),
                            a ||
                              ((_ = n ? 1 : 3),
                              e.attribute
                                ? 61 === (x = t.charCodeAt(L))
                                  ? (C(_, H), (T = null))
                                  : l(x)
                                  ? (T = null)
                                  : C(_, H)
                                : C(_, H))),
                        (A = T))
                      : (a || C(2, H),
                        b((A = parseInt(h, g[I])))
                          ? (C(7, H), (A = u(65533)))
                          : A in o
                          ? (C(6, H), (A = o[A]))
                          : ((O = ''),
                            k(A) && C(6, H),
                            A > 65535 &&
                              ((O += u(((A -= 65536) >>> 10) | 55296)),
                              (A = 56320 | (1023 & A))),
                            (A = O + u(A))))
                    : I !== p && C(4, H)),
                A
                  ? (et(),
                    (P = K()),
                    (Z = L - 1),
                    (X += L - E + 1),
                    Q.push(A),
                    (S = K()).offset++,
                    q && q.call(U, A, { start: P, end: S }, t.slice(E - 1, L)),
                    (P = S))
                  : ((h = t.slice(E - 1, L)),
                    (Y += h),
                    (X += h.length),
                    (Z = L - 1))
            } else
              10 === w && (G++, V++, (X = 0)),
                w === w ? ((Y += u(w)), X++) : et()
          return Q.join('')
          function K() {
            return { line: G, column: X, offset: Z + ($.offset || 0) }
          }
          function tt(t, e) {
            var n = K()
            ;(n.column += e), (n.offset += e), F.call(M, y[t], n, t)
          }
          function et() {
            Y &&
              (Q.push(Y), z && z.call(D, Y, { start: P, end: K() }), (Y = ''))
          }
        })(t, a)
      }
      var c = {}.hasOwnProperty,
        u = String.fromCharCode,
        f = Function.prototype,
        h = {
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
        p = 'named',
        d = 'hexadecimal',
        m = 'decimal',
        g = { hexadecimal: 16, decimal: 10 },
        v = {}
      ;(v[p] = l), (v[m] = i), (v[d] = a)
      var y = {}
      function b(t) {
        return (t >= 55296 && t <= 57343) || t > 1114111
      }
      function k(t) {
        return (
          (t >= 1 && t <= 8) ||
          11 === t ||
          (t >= 13 && t <= 31) ||
          (t >= 127 && t <= 159) ||
          (t >= 64976 && t <= 65007) ||
          65535 === (65535 & t) ||
          65534 === (65535 & t)
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
    akNn: function (t, e, n) {
      'use strict'
      var r = n('IPAr')
      t.exports = function (t, e, n) {
        var o,
          i,
          a,
          l,
          s = e.charAt(0)
        if ('\n' !== s) return
        if (n) return !0
        ;(l = 1), (o = e.length), (i = s), (a = '')
        for (; l < o && ((s = e.charAt(l)), r(s)); )
          (a += s), '\n' === s && ((i += a), (a = '')), l++
        t(i)
      }
    },
    c6LQ: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('ACGk'),
        i = n('d+Jj')
      ;(t.exports = a), (a.locator = o)
      function a(t, e, n) {
        var o,
          a,
          l,
          s,
          c,
          u,
          f,
          h,
          p = e.charAt(0),
          d = 0,
          m = e.length,
          g = '',
          v = '',
          y = 'link',
          b = 'shortcut'
        if (
          ('!' === p && ((y = 'image'), (v = p), (p = e.charAt(++d))),
          '[' === p)
        ) {
          if (
            (d++,
            (v += p),
            (u = ''),
            this.options.footnotes && '^' === e.charAt(d))
          ) {
            if ('image' === y) return
            ;(v += '^'), d++, (y = 'footnote')
          }
          for (h = 0; d < m; ) {
            if ('[' === (p = e.charAt(d))) (f = !0), h++
            else if (']' === p) {
              if (!h) break
              h--
            }
            '\\' === p && ((u += '\\'), (p = e.charAt(++d))), (u += p), d++
          }
          if (((g = u), (o = u), ']' === (p = e.charAt(d)))) {
            for (d++, g += p, u = ''; d < m && ((p = e.charAt(d)), r(p)); )
              (u += p), d++
            if (((p = e.charAt(d)), 'footnote' !== y && '[' === p)) {
              for (
                a = '', u += p, d++;
                d < m && '[' !== (p = e.charAt(d)) && ']' !== p;

              )
                '\\' === p && ((a += '\\'), (p = e.charAt(++d))), (a += p), d++
              ']' === (p = e.charAt(d))
                ? ((b = a ? 'full' : 'collapsed'), (u += a + p), d++)
                : (a = ''),
                (g += u),
                (u = '')
            } else {
              if (!o) return
              a = o
            }
            if ('full' === b || !f)
              return (
                (g = v + g),
                'link' === y && this.inLink
                  ? null
                  : !!n ||
                    ('footnote' === y && -1 !== o.indexOf(' ')
                      ? t(g)({
                          type: 'footnote',
                          children: this.tokenizeInline(o, t.now()),
                        })
                      : (((l = t.now()).column += v.length),
                        (l.offset += v.length),
                        (s = {
                          type: y + 'Reference',
                          identifier: i((a = 'full' === b ? a : o)),
                        }),
                        ('link' !== y && 'image' !== y) ||
                          (s.referenceType = b),
                        'link' === y
                          ? ((c = this.enterLink()),
                            (s.children = this.tokenizeInline(o, l)),
                            c())
                          : 'image' === y &&
                            (s.alt =
                              this.decode.raw(this.unescape(o), l) || null),
                        t(g)(s)))
              )
          }
        }
      }
    },
    cFAA: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('36yr')
      ;(t.exports = i), (i.locator = o)
      function i(t, e, n) {
        for (
          var o, i, a, l, s, c, u, f, h = e.length, p = 0, d = '', m = '';
          p < h && '`' === e.charAt(p);

        )
          (d += '`'), p++
        if (d) {
          for (s = d, l = p, d = '', f = e.charAt(p), a = 0; p < h; ) {
            if (
              ((c = f),
              (f = e.charAt(p + 1)),
              '`' === c ? (a++, (m += c)) : ((a = 0), (d += c)),
              a && '`' !== f)
            ) {
              if (a === l) {
                ;(s += d + m), (u = !0)
                break
              }
              ;(d += m), (m = '')
            }
            p++
          }
          if (!u) {
            if (l % 2 !== 0) return
            d = ''
          }
          if (n) return !0
          for (o = '', i = '', h = d.length, p = -1; ++p < h; )
            (c = d.charAt(p)),
              r(c) ? (i += c) : (i && (o && (o += i), (i = '')), (o += c))
          return t(s)({ type: 'inlineCode', value: o })
        }
      }
    },
    cVWj: function (t, e, n) {
      'use strict'
      var r = n('g1+e'),
        o = 'virtualHtml',
        i = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
        a = /^<(\/?)([a-z]+)\s*>$/
      t.exports = function (t) {
        var e, n
        return (
          r(
            t,
            'html',
            function (t, r, l) {
              n !== l && ((e = []), (n = l))
              var s = (function (t) {
                var e = t.value.match(i)
                return !!e && e[1]
              })(t)
              if (s)
                return (
                  l.children.splice(r, 1, {
                    type: 'virtualHtml',
                    tag: s,
                    position: t.position,
                  }),
                  !0
                )
              var c = (function (t, e) {
                var n = t.value.match(a)
                return !!n && { tag: n[2], opening: !n[1], node: t }
              })(t)
              if (!c) return !0
              var u = (function (t, e) {
                var n = t.length
                for (; n--; ) if (t[n].tag === e) return t.splice(n, 1)[0]
                return !1
              })(e, c.tag)
              return (
                u
                  ? l.children.splice(
                      r,
                      0,
                      (function (t, e, n) {
                        var r = n.children.indexOf(t.node),
                          i = n.children.indexOf(e.node),
                          a = n.children.splice(r, i - r + 1).slice(1, -1)
                        return {
                          type: o,
                          children: a,
                          tag: t.tag,
                          position: {
                            start: t.node.position.start,
                            end: e.node.position.end,
                            indent: [],
                          },
                        }
                      })(c, u, l)
                    )
                  : c.opening || e.push(c),
                !0
              )
            },
            !0
          ),
          t
        )
      }
    },
    cmLN: function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n, r) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u = ['pedantic', 'commonmark'],
          f = u.length,
          h = t.length,
          p = -1
        for (; ++p < h; ) {
          for (o = t[p], i = o[1] || {}, a = o[0], l = -1, c = !1; ++l < f; )
            if (void 0 !== i[(s = u[l])] && i[s] !== n.options[s]) {
              c = !0
              break
            }
          if (!c && e[a].apply(n, r)) return !0
        }
        return !1
      }
    },
    'd+Jj': function (t, e, n) {
      'use strict'
      var r = n('JqBK')
      t.exports = function (t) {
        return r(t).toLowerCase()
      }
    },
    egI8: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('Fhq4')
      ;(t.exports = i), (i.locator = o)
      function i(t, e, n) {
        var o,
          i,
          a,
          l = '',
          s = '',
          c = '',
          u = ''
        if (
          this.options.gfm &&
          '~' === e.charAt(0) &&
          '~' === e.charAt(1) &&
          !r(e.charAt(2))
        )
          for (
            o = 1, i = e.length, (a = t.now()).column += 2, a.offset += 2;
            ++o < i;

          ) {
            if ('~' === (l = e.charAt(o)) && '~' === s && (!c || !r(c)))
              return (
                !!n ||
                t('~~' + u + '~~')({
                  type: 'delete',
                  children: this.tokenizeInline(u, a),
                })
              )
            ;(u += s), (c = s), (s = l)
          }
      }
    },
    fjrl: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e = 'string' === typeof t ? t.charCodeAt(0) : t
        return (
          (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || (e >= 48 && e <= 57)
        )
      }
    },
    'g1+e': function (t, e, n) {
      'use strict'
      t.exports = l
      var r = n('gcql'),
        o = r.CONTINUE,
        i = r.SKIP,
        a = r.EXIT
      function l(t, e, n, o) {
        'function' === typeof e &&
          'function' !== typeof n &&
          ((o = n), (n = e), (e = null)),
          r(
            t,
            e,
            function (t, e) {
              var r = e[e.length - 1],
                o = r ? r.children.indexOf(t) : null
              return n(t, o, r)
            },
            o
          )
      }
      ;(l.CONTINUE = o), (l.SKIP = i), (l.EXIT = a)
    },
    g1k0: function (t, e, n) {
      'use strict'
      var r = n('1iAE'),
        o = n('NBu1'),
        i = n('1T8B').tag
      ;(t.exports = s), (s.locator = o)
      var a = /^<a /i,
        l = /^<\/a>/i
      function s(t, e, n) {
        var o,
          s,
          c = e.length
        if (
          !('<' !== e.charAt(0) || c < 3) &&
          ((o = e.charAt(1)),
          (r(o) || '?' === o || '!' === o || '/' === o) && (s = e.match(i)))
        )
          return (
            !!n ||
            ((s = s[0]),
            !this.inLink && a.test(s)
              ? (this.inLink = !0)
              : this.inLink && l.test(s) && (this.inLink = !1),
            t(s)({ type: 'html', value: s }))
          )
      }
    },
    gcql: function (t, e, n) {
      'use strict'
      t.exports = o
      var r = n('I7+u')
      function o(t, e, n, o) {
        var a
        function l(t, r, s) {
          var c,
            u = []
          return ((e && !a(t, r, s[s.length - 1] || null)) ||
            false !== (u = i(n(t, s)))[0]) &&
            t.children &&
            'skip' !== u[0] &&
            false ===
              (c = i(
                (function (t, e) {
                  var n,
                    r = -1,
                    i = o ? -1 : 1,
                    a = (o ? t.length : r) + i
                  for (; a > r && a < t.length; ) {
                    if (false === (n = l(t[a], a, e))[0]) return n
                    a = 'number' === typeof n[1] ? n[1] : a + i
                  }
                })(t.children, s.concat(t))
              ))[0]
            ? c
            : u
        }
        'function' === typeof e &&
          'function' !== typeof n &&
          ((o = n), (n = e), (e = null)),
          (a = r(e)),
          l(t, null, [])
      }
      function i(t) {
        return null !== t && 'object' === typeof t && 'length' in t
          ? t
          : 'number' === typeof t
          ? [true, t]
          : [t]
      }
      ;(o.CONTINUE = true), (o.SKIP = 'skip'), (o.EXIT = false)
    },
    h9ck: function (t, e, n) {
      'use strict'
      e.HtmlParser =
        'undefined' === typeof Symbol
          ? '__RMD_HTML_PARSER__'
          : Symbol('__RMD_HTML_PARSER__')
    },
    j9mF: function (t, e, n) {
      t.exports = {
        wrap: 'Project_wrap__1JMyH',
        description: 'Project_description__8arnJ',
        list: 'Project_list__YVJ_N',
        item: 'Project_item__9Y-or',
        itemImage: 'Project_itemImage__28RRT',
        itemDescription: 'Project_itemDescription__2eewd',
        link: 'Project_link__2N4d_',
      }
    },
    jjhM: function (t, e, n) {
      t.exports = {
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
    kDuX: function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        var r,
          o,
          i,
          a = this.options,
          l = e.length + 1,
          s = -1,
          c = t.now(),
          u = '',
          f = ''
        for (; ++s < l; ) {
          if (' ' !== (r = e.charAt(s)) && '\t' !== r) {
            s--
            break
          }
          u += r
        }
        i = 0
        for (; ++s <= l; ) {
          if ('#' !== (r = e.charAt(s))) {
            s--
            break
          }
          ;(u += r), i++
        }
        if (i > 6) return
        if (!i || (!a.pedantic && '#' === e.charAt(s + 1))) return
        ;(l = e.length + 1), (o = '')
        for (; ++s < l; ) {
          if (' ' !== (r = e.charAt(s)) && '\t' !== r) {
            s--
            break
          }
          o += r
        }
        if (!a.pedantic && 0 === o.length && r && '\n' !== r) return
        if (n) return !0
        ;(u += o), (o = ''), (f = '')
        for (; ++s < l && (r = e.charAt(s)) && '\n' !== r; )
          if (' ' === r || '\t' === r || '#' === r) {
            for (; ' ' === r || '\t' === r; ) (o += r), (r = e.charAt(++s))
            for (; '#' === r; ) (o += r), (r = e.charAt(++s))
            for (; ' ' === r || '\t' === r; ) (o += r), (r = e.charAt(++s))
            s--
          } else (f += o + r), (o = '')
        return (
          (c.column += u.length),
          (c.offset += u.length),
          t((u += f + o))({
            type: 'heading',
            depth: i,
            children: this.tokenizeInline(f, c),
          })
        )
      }
    },
    kmJ7: function (t, e, n) {
      'use strict'
      var r = n('RjOF'),
        o = n('3GlI')
      t.exports = function (t, e, n) {
        var r,
          a,
          l,
          s = -1,
          c = e.length,
          u = '',
          f = '',
          h = '',
          p = ''
        for (; ++s < c; )
          if (((r = e.charAt(s)), l))
            if (((l = !1), (u += h), (f += p), (h = ''), (p = ''), '\n' === r))
              (h = r), (p = r)
            else
              for (u += r, f += r; ++s < c; ) {
                if (!(r = e.charAt(s)) || '\n' === r) {
                  ;(p = r), (h = r)
                  break
                }
                ;(u += r), (f += r)
              }
          else if (
            ' ' === r &&
            e.charAt(s + 1) === r &&
            e.charAt(s + 2) === r &&
            e.charAt(s + 3) === r
          )
            (h += i), (s += 3), (l = !0)
          else if ('\t' === r) (h += r), (l = !0)
          else {
            for (a = ''; '\t' === r || ' ' === r; )
              (a += r), (r = e.charAt(++s))
            if ('\n' !== r) break
            ;(h += a + r), (p += r)
          }
        if (f) return !!n || t(u)({ type: 'code', lang: null, value: o(f) })
      }
      var i = r(' ', 4)
    },
    lebq: function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        var o,
          i,
          a,
          l,
          s,
          c = t.now(),
          u = e.length,
          f = -1,
          h = ''
        for (; ++f < u; ) {
          if (' ' !== (a = e.charAt(f)) || f >= 3) {
            f--
            break
          }
          h += a
        }
        ;(o = ''), (i = '')
        for (; ++f < u; ) {
          if ('\n' === (a = e.charAt(f))) {
            f--
            break
          }
          ' ' === a || '\t' === a ? (i += a) : ((o += i + a), (i = ''))
        }
        if (
          ((c.column += h.length),
          (c.offset += h.length),
          (h += o + i),
          (a = e.charAt(++f)),
          (l = e.charAt(++f)),
          '\n' !== a || !r[l])
        )
          return
        ;(h += a), (i = l), (s = r[l])
        for (; ++f < u; ) {
          if ((a = e.charAt(f)) !== l) {
            if ('\n' !== a) return
            f--
            break
          }
          i += a
        }
        if (n) return !0
        return t(h + i)({
          type: 'heading',
          depth: s,
          children: this.tokenizeInline(o, c),
        })
      }
      var r = {}
      ;(r['='] = 1), (r['-'] = 2)
    },
    lgF9: function (t, e, n) {
      'use strict'
      var r = n('7XrY')
      ;(t.exports = o), (o.locator = r)
      function o(t, e, n) {
        for (var r, o = e.length, i = -1, a = ''; ++i < o; ) {
          if ('\n' === (r = e.charAt(i))) {
            if (i < 2) return
            return !!n || t((a += r))({ type: 'break' })
          }
          if (' ' !== r) return
          a += r
        }
      }
    },
    m2n9: function (t) {
      t.exports = JSON.parse(
        '{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}'
      )
    },
    mcUT: function (t, e, n) {
      'use strict'
      var r = n('FxOa')
      function o(t, e, n) {
        var r, o
        if (
          '\\' === e.charAt(0) &&
          ((r = e.charAt(1)), -1 !== this.escape.indexOf(r))
        )
          return (
            !!n ||
            ((o = '\n' === r ? { type: 'break' } : { type: 'text', value: r }),
            t('\\' + r)(o))
          )
      }
      ;(t.exports = o), (o.locator = r)
    },
    obXZ: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        return o.test('number' === typeof t ? r(t) : t.charAt(0))
      }
      var r = String.fromCharCode,
        o = /\w/
    },
    psyO: function (t, e, n) {
      t.exports = { wrap: 'SkillSet_wrap__3eBOh' }
    },
    qPMR: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('IPAr'),
        i = n('044C')
      ;(t.exports = a), (a.locator = i)
      function a(t, e, n) {
        var i,
          a,
          l,
          s,
          c,
          u,
          f,
          h = 0,
          p = e.charAt(h)
        if (
          ('*' === p || '_' === p) &&
          e.charAt(++h) === p &&
          ((a = this.options.pedantic),
          (c = (l = p) + l),
          (u = e.length),
          h++,
          (s = ''),
          (p = ''),
          !a || !o(e.charAt(h)))
        )
          for (; h < u; ) {
            if (
              ((f = p),
              (p = e.charAt(h)) === l &&
                e.charAt(h + 1) === l &&
                (!a || !o(f)) &&
                (p = e.charAt(h + 2)) !== l)
            ) {
              if (!r(s)) return
              return (
                !!n ||
                (((i = t.now()).column += 2),
                (i.offset += 2),
                t(c + s + c)({
                  type: 'strong',
                  children: this.tokenizeInline(s, i),
                }))
              )
            }
            a || '\\' !== p || ((s += p), (p = e.charAt(++h))), (s += p), h++
          }
      }
    },
    qT12: function (t, e, n) {
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
        h = r ? Symbol.for('react.concurrent_mode') : 60111,
        p = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        m = r ? Symbol.for('react.suspense_list') : 60120,
        g = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        y = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        k = r ? Symbol.for('react.responder') : 60118,
        w = r ? Symbol.for('react.scope') : 60119
      function A(t) {
        if ('object' === typeof t && null !== t) {
          var e = t.$$typeof
          switch (e) {
            case o:
              switch ((t = t.type)) {
                case f:
                case h:
                case a:
                case s:
                case l:
                case d:
                  return t
                default:
                  switch ((t = t && t.$$typeof)) {
                    case u:
                    case p:
                    case v:
                    case g:
                    case c:
                      return t
                    default:
                      return e
                  }
              }
            case i:
              return e
          }
        }
      }
      function x(t) {
        return A(t) === h
      }
      ;(e.AsyncMode = f),
        (e.ConcurrentMode = h),
        (e.ContextConsumer = u),
        (e.ContextProvider = c),
        (e.Element = o),
        (e.ForwardRef = p),
        (e.Fragment = a),
        (e.Lazy = v),
        (e.Memo = g),
        (e.Portal = i),
        (e.Profiler = s),
        (e.StrictMode = l),
        (e.Suspense = d),
        (e.isAsyncMode = function (t) {
          return x(t) || A(t) === f
        }),
        (e.isConcurrentMode = x),
        (e.isContextConsumer = function (t) {
          return A(t) === u
        }),
        (e.isContextProvider = function (t) {
          return A(t) === c
        }),
        (e.isElement = function (t) {
          return 'object' === typeof t && null !== t && t.$$typeof === o
        }),
        (e.isForwardRef = function (t) {
          return A(t) === p
        }),
        (e.isFragment = function (t) {
          return A(t) === a
        }),
        (e.isLazy = function (t) {
          return A(t) === v
        }),
        (e.isMemo = function (t) {
          return A(t) === g
        }),
        (e.isPortal = function (t) {
          return A(t) === i
        }),
        (e.isProfiler = function (t) {
          return A(t) === s
        }),
        (e.isStrictMode = function (t) {
          return A(t) === l
        }),
        (e.isSuspense = function (t) {
          return A(t) === d
        }),
        (e.isValidElementType = function (t) {
          return (
            'string' === typeof t ||
            'function' === typeof t ||
            t === a ||
            t === h ||
            t === s ||
            t === l ||
            t === d ||
            t === m ||
            ('object' === typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === g ||
                t.$$typeof === c ||
                t.$$typeof === u ||
                t.$$typeof === p ||
                t.$$typeof === b ||
                t.$$typeof === k ||
                t.$$typeof === w ||
                t.$$typeof === y))
          )
        }),
        (e.typeOf = A)
    },
    qUik: function (t, e, n) {
      'use strict'
      var r = n('U6jy'),
        o = n('MQ5/'),
        i = n('3+Nb')
      t.exports = function (t) {
        var e,
          n,
          a = this.options
        if (null == t) t = {}
        else {
          if ('object' !== typeof t)
            throw new Error('Invalid value `' + t + '` for setting `options`')
          t = r(t)
        }
        for (e in i) {
          if (
            (null == (n = t[e]) && (n = a[e]),
            ('blocks' !== e && 'boolean' !== typeof n) ||
              ('blocks' === e && 'object' !== typeof n))
          )
            throw new Error(
              'Invalid value `' + n + '` for setting `options.' + e + '`'
            )
          t[e] = n
        }
        return (this.options = t), (this.escape = o(t)), this
      }
    },
    rUY8: function (t, e, n) {
      'use strict'
      t.exports = function (t, e, n) {
        var r,
          o,
          i,
          a,
          l = -1,
          s = e.length + 1,
          c = ''
        for (; ++l < s && ('\t' === (r = e.charAt(l)) || ' ' === r); ) c += r
        if ('*' !== r && '-' !== r && '_' !== r) return
        ;(o = r), (c += r), (i = 1), (a = '')
        for (; ++l < s; )
          if ((r = e.charAt(l)) === o) i++, (c += a + o), (a = '')
          else {
            if (' ' !== r)
              return i >= 3 && (!r || '\n' === r)
                ? ((c += a), !!n || t(c)({ type: 'thematicBreak' }))
                : void 0
            a += r
          }
      }
    },
    soWj: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('cmLN')
      t.exports = function (t, e, n) {
        var i,
          a,
          l,
          s,
          c,
          u,
          f,
          h,
          p,
          d = this.offset,
          m = this.blockTokenizers,
          g = this.interruptBlockquote,
          v = t.now(),
          y = v.line,
          b = e.length,
          k = [],
          w = [],
          A = [],
          x = 0
        for (; x < b && (' ' === (a = e.charAt(x)) || '\t' === a); ) x++
        if ('>' !== e.charAt(x)) return
        if (n) return !0
        x = 0
        for (; x < b; ) {
          for (
            s = e.indexOf('\n', x), f = x, h = !1, -1 === s && (s = b);
            x < b && (' ' === (a = e.charAt(x)) || '\t' === a);

          )
            x++
          if (
            ('>' === e.charAt(x)
              ? (x++, (h = !0), ' ' === e.charAt(x) && x++)
              : (x = f),
            (c = e.slice(x, s)),
            !h && !r(c))
          ) {
            x = f
            break
          }
          if (!h && ((l = e.slice(x)), o(g, m, this, [t, l, !0]))) break
          ;(u = f === x ? c : e.slice(f, s)),
            A.push(x - f),
            k.push(u),
            w.push(c),
            (x = s + 1)
        }
        ;(x = -1), (b = A.length), (i = t(k.join('\n')))
        for (; ++x < b; ) (d[y] = (d[y] || 0) + A[x]), y++
        return (
          (p = this.enterBlock()),
          (w = this.tokenizeBlock(w.join('\n'), v)),
          p(),
          i({ type: 'blockquote', children: w })
        )
      }
    },
    tpqs: function (t, e, n) {
      ;(function (t) {
        function n(t, e) {
          for (var n = 0, r = t.length - 1; r >= 0; r--) {
            var o = t[r]
            '.' === o
              ? t.splice(r, 1)
              : '..' === o
              ? (t.splice(r, 1), n++)
              : n && (t.splice(r, 1), n--)
          }
          if (e) for (; n--; n) t.unshift('..')
          return t
        }
        function r(t, e) {
          if (t.filter) return t.filter(e)
          for (var n = [], r = 0; r < t.length; r++)
            e(t[r], r, t) && n.push(t[r])
          return n
        }
        ;(e.resolve = function () {
          for (
            var e = '', o = !1, i = arguments.length - 1;
            i >= -1 && !o;
            i--
          ) {
            var a = i >= 0 ? arguments[i] : t.cwd()
            if ('string' !== typeof a)
              throw new TypeError('Arguments to path.resolve must be strings')
            a && ((e = a + '/' + e), (o = '/' === a.charAt(0)))
          }
          return (
            (o ? '/' : '') +
              (e = n(
                r(e.split('/'), function (t) {
                  return !!t
                }),
                !o
              ).join('/')) || '.'
          )
        }),
          (e.normalize = function (t) {
            var i = e.isAbsolute(t),
              a = '/' === o(t, -1)
            return (
              (t = n(
                r(t.split('/'), function (t) {
                  return !!t
                }),
                !i
              ).join('/')) ||
                i ||
                (t = '.'),
              t && a && (t += '/'),
              (i ? '/' : '') + t
            )
          }),
          (e.isAbsolute = function (t) {
            return '/' === t.charAt(0)
          }),
          (e.join = function () {
            var t = Array.prototype.slice.call(arguments, 0)
            return e.normalize(
              r(t, function (t, e) {
                if ('string' !== typeof t)
                  throw new TypeError('Arguments to path.join must be strings')
                return t
              }).join('/')
            )
          }),
          (e.relative = function (t, n) {
            function r(t) {
              for (var e = 0; e < t.length && '' === t[e]; e++);
              for (var n = t.length - 1; n >= 0 && '' === t[n]; n--);
              return e > n ? [] : t.slice(e, n - e + 1)
            }
            ;(t = e.resolve(t).substr(1)), (n = e.resolve(n).substr(1))
            for (
              var o = r(t.split('/')),
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
          (e.sep = '/'),
          (e.delimiter = ':'),
          (e.dirname = function (t) {
            if (('string' !== typeof t && (t += ''), 0 === t.length)) return '.'
            for (
              var e = t.charCodeAt(0),
                n = 47 === e,
                r = -1,
                o = !0,
                i = t.length - 1;
              i >= 1;
              --i
            )
              if (47 === (e = t.charCodeAt(i))) {
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
              : t.slice(0, r)
          }),
          (e.basename = function (t, e) {
            var n = (function (t) {
              'string' !== typeof t && (t += '')
              var e,
                n = 0,
                r = -1,
                o = !0
              for (e = t.length - 1; e >= 0; --e)
                if (47 === t.charCodeAt(e)) {
                  if (!o) {
                    n = e + 1
                    break
                  }
                } else -1 === r && ((o = !1), (r = e + 1))
              return -1 === r ? '' : t.slice(n, r)
            })(t)
            return (
              e &&
                n.substr(-1 * e.length) === e &&
                (n = n.substr(0, n.length - e.length)),
              n
            )
          }),
          (e.extname = function (t) {
            'string' !== typeof t && (t += '')
            for (
              var e = -1, n = 0, r = -1, o = !0, i = 0, a = t.length - 1;
              a >= 0;
              --a
            ) {
              var l = t.charCodeAt(a)
              if (47 !== l)
                -1 === r && ((o = !1), (r = a + 1)),
                  46 === l
                    ? -1 === e
                      ? (e = a)
                      : 1 !== i && (i = 1)
                    : -1 !== e && (i = -1)
              else if (!o) {
                n = a + 1
                break
              }
            }
            return -1 === e ||
              -1 === r ||
              0 === i ||
              (1 === i && e === r - 1 && e === n + 1)
              ? ''
              : t.slice(e, r)
          })
        var o =
          'b' === 'ab'.substr(-1)
            ? function (t, e, n) {
                return t.substr(e, n)
              }
            : function (t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n)
              }
      }.call(this, n('8oxB')))
    },
    tvOo: function (t, e, n) {
      'use strict'
      var r = n('1T8B').openCloseTag
      t.exports = function (t, e, n) {
        var o,
          i,
          a,
          l,
          s,
          c,
          u,
          f = this.options.blocks,
          h = e.length,
          p = 0,
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
        for (; p < h && ('\t' === (l = e.charAt(p)) || ' ' === l); ) p++
        if ('<' !== e.charAt(p)) return
        ;(o = -1 === (o = e.indexOf('\n', p + 1)) ? h : o),
          (i = e.slice(p, o)),
          (a = -1),
          (s = d.length)
        for (; ++a < s; )
          if (d[a][0].test(i)) {
            c = d[a]
            break
          }
        if (!c) return
        if (n) return c[2]
        if (((p = o), !c[1].test(i)))
          for (; p < h; ) {
            if (
              ((o = -1 === (o = e.indexOf('\n', p + 1)) ? h : o),
              (i = e.slice(p + 1, o)),
              c[1].test(i))
            ) {
              i && (p = o)
              break
            }
            p = o
          }
        return (u = e.slice(0, p)), t(u)({ type: 'html', value: u })
      }
    },
    'u3i/': function (t, e, n) {
      'use strict'
      var r = n('g1+e')
      function o(t, e, n, r) {
        if ('remove' === r) n.children.splice(e, 1)
        else if ('unwrap' === r) {
          var o = [e, 1]
          t.children && (o = o.concat(t.children)),
            Array.prototype.splice.apply(n.children, o)
        }
      }
      ;(e.ofType = function (t, e) {
        return function (e) {
          return (
            t.forEach(function (t) {
              return r(e, t, n, !0)
            }),
            e
          )
        }
        function n(t, n, r) {
          r && o(t, n, r, e)
        }
      }),
        (e.ifNotMatch = function (t, e) {
          return function (t) {
            return r(t, n, !0), t
          }
          function n(n, r, i) {
            i && !t(n, r, i) && o(n, r, i, e)
          }
        })
    },
    uYhK: function (t, e, n) {
      'use strict'
      var r = n('/qNp')
      function o() {}
      ;(t.exports = a), (o.prototype = Error.prototype), (a.prototype = new o())
      var i = a.prototype
      function a(t, e, n) {
        var o, i, a
        'string' === typeof e && ((n = e), (e = null)),
          (o = (function (t) {
            var e,
              n = [null, null]
            'string' === typeof t &&
              (-1 === (e = t.indexOf(':'))
                ? (n[1] = t)
                : ((n[0] = t.slice(0, e)), (n[1] = t.slice(e + 1))))
            return n
          })(n)),
          (i = r(e) || '1:1'),
          (a = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          e && e.position && (e = e.position),
          e && (e.start ? ((a = e), (e = e.start)) : (a.start = e)),
          t.stack && ((this.stack = t.stack), (t = t.message)),
          (this.message = t),
          (this.name = i),
          (this.reason = t),
          (this.line = e ? e.line : null),
          (this.column = e ? e.column : null),
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
    uuyv: function (t, e, n) {
      'use strict'
      var r = n('IPAr'),
        o = n('d+Jj')
      ;(t.exports = i), (i.notInList = !0), (i.notInBlock = !0)
      function i(t, e, n) {
        for (
          var r,
            i,
            s,
            c,
            u,
            f,
            h,
            p,
            d = this.options.commonmark,
            m = 0,
            g = e.length,
            v = '';
          m < g && (' ' === (c = e.charAt(m)) || '\t' === c);

        )
          (v += c), m++
        if ('[' === (c = e.charAt(m))) {
          for (m++, v += c, s = ''; m < g && ']' !== (c = e.charAt(m)); )
            '\\' === c && ((s += c), m++, (c = e.charAt(m))), (s += c), m++
          if (s && ']' === e.charAt(m) && ':' === e.charAt(m + 1)) {
            for (
              f = s, m = (v += s + ']:').length, s = '';
              m < g && ('\t' === (c = e.charAt(m)) || ' ' === c || '\n' === c);

            )
              (v += c), m++
            if (((s = ''), (r = v), '<' === (c = e.charAt(m)))) {
              for (m++; m < g && a((c = e.charAt(m))); ) (s += c), m++
              if ((c = e.charAt(m)) === a.delimiter) (v += '<' + s + c), m++
              else {
                if (d) return
                ;(m -= s.length + 1), (s = '')
              }
            }
            if (!s) {
              for (; m < g && l((c = e.charAt(m))); ) (s += c), m++
              v += s
            }
            if (s) {
              for (
                h = s, s = '';
                m < g &&
                ('\t' === (c = e.charAt(m)) || ' ' === c || '\n' === c);

              )
                (s += c), m++
              if (
                ((u = null),
                '"' === (c = e.charAt(m))
                  ? (u = '"')
                  : "'" === c
                  ? (u = "'")
                  : '(' === c && (u = ')'),
                u)
              ) {
                if (!s) return
                for (
                  m = (v += s + c).length, s = '';
                  m < g && (c = e.charAt(m)) !== u;

                ) {
                  if ('\n' === c) {
                    if ((m++, '\n' === (c = e.charAt(m)) || c === u)) return
                    s += '\n'
                  }
                  ;(s += c), m++
                }
                if ((c = e.charAt(m)) !== u) return
                ;(i = v), (v += s + c), m++, (p = s), (s = '')
              } else (s = ''), (m = v.length)
              for (; m < g && ('\t' === (c = e.charAt(m)) || ' ' === c); )
                (v += c), m++
              return (c = e.charAt(m)) && '\n' !== c
                ? void 0
                : !!n ||
                    ((r = t(r).test().end),
                    (h = this.decode.raw(this.unescape(h), r, {
                      nonTerminated: !1,
                    })),
                    p &&
                      ((i = t(i).test().end),
                      (p = this.decode.raw(this.unescape(p), i))),
                    t(v)({
                      type: 'definition',
                      identifier: o(f),
                      title: p || null,
                      url: h,
                    }))
            }
          }
        }
      }
      function a(t) {
        return '>' !== t && '[' !== t && ']' !== t
      }
      function l(t) {
        return '[' !== t && ']' !== t && !r(t)
      }
      a.delimiter = '>'
    },
    v0oL: function (t, e, n) {
      'use strict'
      var r = n('5t69'),
        o = n('U6jy'),
        i = n('JWB8')
      function a(t) {
        var e = r(i)
        ;(e.prototype.options = o(
          e.prototype.options,
          this.data('settings'),
          t
        )),
          (this.Parser = e)
      }
      ;(t.exports = a), (a.Parser = i)
    },
    vKFC: function (t, e, n) {
      'use strict'
      var r = n('uYhK'),
        o = n('SZPq')
      t.exports = o
      var i = o.prototype
      function a(t, e, n) {
        var o = this.path,
          i = new r(t, e, n)
        return (
          o && ((i.name = o + ':' + i.name), (i.file = o)),
          (i.fatal = !1),
          this.messages.push(i),
          i
        )
      }
      ;(i.message = a),
        (i.info = function () {
          var t = this.message.apply(this, arguments)
          return (t.fatal = null), t
        }),
        (i.fail = function () {
          var t = this.message.apply(this, arguments)
          throw ((t.fatal = !0), t)
        }),
        (i.warn = a)
    },
    vPdy: function (t, e, n) {
      'use strict'
      t.exports = function (t) {
        var e,
          n = 0,
          o = 0,
          i = t.charAt(n),
          a = {}
        for (; i in r; )
          (o += e = r[i]),
            e > 1 && (o = Math.floor(o / e) * e),
            (a[o] = n),
            (i = t.charAt(++n))
        return { indent: o, stops: a }
      }
      var r = { ' ': 1, '\t': 4 }
    },
    vRNQ: function (t, e, n) {
      t.exports = {
        container: 'Home_container__1EcsU',
        main: 'Home_main__1x8gC',
      }
    },
    vvrU: function (t, e, n) {
      'use strict'
      var r = n('RsFJ'),
        o = n('RjOF'),
        i = n('vPdy')
      t.exports = function (t, e) {
        var n,
          a,
          l,
          s,
          c = t.split('\n'),
          u = c.length + 1,
          f = 1 / 0,
          h = []
        c.unshift(o(' ', e) + '!')
        for (; u--; )
          if (((a = i(c[u])), (h[u] = a.stops), 0 !== r(c[u]).length)) {
            if (!a.indent) {
              f = 1 / 0
              break
            }
            a.indent > 0 && a.indent < f && (f = a.indent)
          }
        if (f !== 1 / 0)
          for (u = c.length; u--; ) {
            for (l = h[u], n = f; n && !(n in l); ) n--
            ;(s = 0 !== r(c[u]).length && f && n !== f ? '\t' : ''),
              (c[u] = s + c[u].slice(n in l ? l[n] + 1 : 0))
          }
        return c.shift(), c.join('\n')
      }
    },
    wnOJ: function (t, e, n) {
      var r = n('UfUV')
      t.exports = function () {
        return function (t) {
          return (
            r(t, 'list', function (t, e) {
              var n,
                r,
                o = 0
              for (n = 0, r = e.length; n < r; n++)
                'list' === e[n].type && (o += 1)
              for (n = 0, r = t.children.length; n < r; n++) {
                var i = t.children[n]
                ;(i.index = n), (i.ordered = t.ordered)
              }
              t.depth = o
            }),
            t
          )
        }
      }
    },
    xkQk: function (t, e, n) {
      'use strict'
      var r = n('EBzq')
      ;(t.exports = i), (i.wrap = r)
      var o = [].slice
      function i() {
        var t = [],
          e = {
            run: function () {
              var e = -1,
                n = o.call(arguments, 0, -1),
                i = arguments[arguments.length - 1]
              if ('function' !== typeof i)
                throw new Error('Expected function as last argument, not ' + i)
              function a(l) {
                var s = t[++e],
                  c = o.call(arguments, 0),
                  u = c.slice(1),
                  f = n.length,
                  h = -1
                if (l) i(l)
                else {
                  for (; ++h < f; )
                    (null !== u[h] && void 0 !== u[h]) || (u[h] = n[h])
                  ;(n = u),
                    s ? r(s, a).apply(null, n) : i.apply(null, [null].concat(n))
                }
              }
              a.apply(null, [null].concat(n))
            },
            use: function (n) {
              if ('function' !== typeof n)
                throw new Error('Expected `fn` to be a function, not ' + n)
              return t.push(n), e
            },
          }
        return e
      }
    },
  },
  [['/EDR', 0, 1, 4, 2]],
])

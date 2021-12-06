;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [805],
  {
    3905: function (a, b, c) {
      'use strict'
      c.d(b, {
        kt: function () {
          return m
        },
      })
      var d = c(7294)
      function e(a, b, c) {
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
      function f() {
        return (f =
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
      function g(a, b) {
        var c = Object.keys(a)
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a)
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable
            })),
            c.push.apply(c, d)
        }
        return c
      }
      function h(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {}
          b % 2
            ? g(Object(c), !0).forEach(function (b) {
                e(a, b, c[b])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
            : g(Object(c)).forEach(function (b) {
                Object.defineProperty(
                  a,
                  b,
                  Object.getOwnPropertyDescriptor(c, b)
                )
              })
        }
        return a
      }
      var i = d.createContext({}),
        j = function (a) {
          var b = d.useContext(i),
            c = b
          return a && (c = 'function' == typeof a ? a(b) : h(h({}, b), a)), c
        },
        k = {
          inlineCode: 'code',
          wrapper: function (a) {
            var b = a.children
            return d.createElement(d.Fragment, {}, b)
          },
        },
        l = d.forwardRef(function (a, b) {
          var c = a.components,
            e = a.mdxType,
            f = a.originalType,
            g = a.parentName,
            i = (function (a, b) {
              if (null == a) return {}
              var c,
                d,
                e = (function (a, b) {
                  if (null == a) return {}
                  var c,
                    d,
                    e = {},
                    f = Object.keys(a)
                  for (d = 0; d < f.length; d++)
                    (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
                  return e
                })(a, b)
              if (Object.getOwnPropertySymbols) {
                var f = Object.getOwnPropertySymbols(a)
                for (d = 0; d < f.length; d++)
                  (c = f[d]),
                    !(b.indexOf(c) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(a, c) &&
                      (e[c] = a[c])
              }
              return e
            })(a, ['components', 'mdxType', 'originalType', 'parentName']),
            l = j(c),
            m = e,
            n = l[''.concat(g, '.').concat(m)] || l[m] || k[m] || f
          return c
            ? d.createElement(n, h(h({ ref: b }, i), {}, { components: c }))
            : d.createElement(n, h({ ref: b }, i))
        })
      function m(a, b) {
        var c = arguments,
          e = b && b.mdxType
        if ('string' == typeof a || e) {
          var f = c.length,
            g = new Array(f)
          g[0] = l
          var h = {}
          for (var i in b) hasOwnProperty.call(b, i) && (h[i] = b[i])
          ;(h.originalType = a),
            (h.mdxType = 'string' == typeof a ? a : e),
            (g[1] = h)
          for (var j = 2; j < f; j++) g[j] = c[j]
          return d.createElement.apply(null, g)
        }
        return d.createElement.apply(null, c)
      }
      l.displayName = 'MDXCreateElement'
    },
    8111: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/use-webp-for-better-ux',
        function () {
          return c(7144)
        },
      ])
    },
    6089: function (a, b, c) {
      'use strict'
      c.d(b, {
        Z: function () {
          return l
        },
      })
      var d = c(5893)
      c(7294)
      var e = c(9008),
        f = c(7747),
        g = c.n(f),
        h = c(5699),
        i = c(9754),
        j = c.n(i)
      function k() {
        return (0, d.jsxs)('article', {
          className: j().wrap,
          children: [
            (0, d.jsx)('img', {
              src: '/optimized/portrait-sm.png',
              alt: 'Daw-Chih Liou',
              className: j().avatar,
              loading: 'lazy',
            }),
            (0, d.jsxs)('div', {
              children: [
                (0, d.jsx)('a', {
                  href: h.Z.home,
                  className: j().author,
                  children: (0, d.jsx)('span', { children: 'Daw-Chih Liou' }),
                }),
                (0, d.jsx)('p', { children: h.Z.description }),
              ],
            }),
          ],
        })
      }
      function l(a) {
        var b = a.children,
          c = a.title,
          f = a.description,
          i = a.url,
          j = a.cover,
          l = a.coverWidth,
          m = a.coverHeight,
          n = a.hideAuthor
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(e.default, {
              children: [
                (0, d.jsx)('title', { children: c }),
                (0, d.jsx)('meta', { name: 'description', content: f }),
                (0, d.jsx)('meta', { property: 'og:title', content: c }),
                (0, d.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, d.jsx)('meta', {
                  property: 'og:url',
                  content: void 0 === i ? '' : i,
                }),
                (0, d.jsx)('meta', { property: 'og:description', content: f }),
                (0, d.jsx)('meta', {
                  property: 'og:image',
                  content: ''.concat(h.Z.home).concat(void 0 === j ? '' : j),
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:width',
                  content: void 0 === l ? '' : l,
                }),
                (0, d.jsx)('meta', {
                  property: 'og:image:height',
                  content: void 0 === m ? '' : m,
                }),
                (0, d.jsx)('meta', { property: 'og:image:alt', content: f }),
              ],
            }),
            (0, d.jsx)('article', {
              children: (0, d.jsx)('div', {
                className: g().container,
                children: (0, d.jsxs)('div', {
                  className: g().wrap,
                  children: [b, !n && (0, d.jsx)(k, {})],
                }),
              }),
            }),
          ],
        })
      }
    },
    7144: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          meta: function () {
            return f
          },
          default: function () {
            return i
          },
        }),
        c(7294)
      var d = c(3905),
        e = c(6089),
        f = {
          title: 'Using WebP for Better User Experience',
          description:
            "WebP is a modern image format that provides outstanding image quality with smaller image size. I'll show you how much you can benefit from it and how to setup your project for optimal developer experience.",
          url: '/articles/use-webp-for-better-ux',
          cover: 'optimized/portfolio-snapshot.png',
          category: 'Performance',
          coverWidth: '1411',
          coverHeight: '682',
        },
        g = { meta: f },
        h = function (a) {
          var b = a.children
          return (0, d.kt)(
            e.Z,
            {
              title: f.title,
              description: f.description,
              cover: f.cover,
              url: f.url,
              coverWidth: f.coverWidth,
              coverHeight: f.coverHeight,
            },
            b
          )
        }
      function i(a) {
        var b = a.components,
          c = (function (a, b) {
            if (null == a) return {}
            var c,
              d,
              e = (function (a, b) {
                if (null == a) return {}
                var c,
                  d,
                  e = {},
                  f = Object.keys(a)
                for (d = 0; d < f.length; d++)
                  (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
                return e
              })(a, b)
            if (Object.getOwnPropertySymbols) {
              var f = Object.getOwnPropertySymbols(a)
              for (d = 0; d < f.length; d++)
                (c = f[d]),
                  !(b.indexOf(c) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(a, c) &&
                    (e[c] = a[c])
            }
            return e
          })(a, ['components'])
        return (0, d.kt)(
          h,
          Object.assign({}, g, c, { components: b, mdxType: 'MDXLayout' }),
          (0, d.kt)(
            'h1',
            Object.assign({}, { id: 'using-webp-for-better-user-experience' }),
            'Using WebP for Better User Experience'
          ),
          (0, d.kt)('img', {
            src: '/optimized/portfolio-snapshot.png',
            alt: 'Portfolio snapshot',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)('h2', Object.assign({}, { id: 'tldr' }), 'TL;DR'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://developers.google.com/speed/webp' }
                ),
                'WebP'
              ),
              ' is a modern image format that provides amazing ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://www.keycdn.com/support/lossy-vs-lossless' }
                ),
                'lossless and lossy compression'
              ),
              '.'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'WebP makes images richer and smaller.'
            ),
            (0, d.kt)('li', { parentName: 'ul' }, 'WebP makes web faster.'),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              "We don't have to convert our images to WebP ourselves. We have tools for that."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://caniuse.com/?search=webp' }
                ),
                'Not all browsers support WebP format'
              ),
              " so you'll need fallback images."
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'Check out ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  {
                    href:
                      'https://github.com/DawChihLiou/dawchihliou.github.io',
                  }
                ),
                'source code'
              ),
              ' on GitHub.'
            )
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'what-is-wrong' }),
            'What Is Wrong?'
          ),
          (0, d.kt)(
            'p',
            null,
            "As I'm re-making ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://dawchihliou.github.io/' }
              ),
              'my portfolio'
            ),
            ', there is something nagging that bothers me.\nI have a ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '128x128'),
            ' portait photo displayed on the top of my portfolio that is ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '251.35KB'),
            ".\nIt's way too big for its size and takes too long to download and that has a direct impact on my Lighthouse report."
          ),
          (0, d.kt)(
            'p',
            null,
            'It might not seem like a big deal. Afterall, a lot of people are enjoying high-speed WIFI and modern browsers.\nBut I want my portfolio to be ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/',
                }
              ),
              (0, d.kt)('strong', { parentName: 'a' }, 'mobile-first')
            ),
            ".\nIt's important to me that my content can reach to audience that are using cellular data and mobile devices with ease."
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'next-gen-image-format' }),
            'next-gen Image Format'
          ),
          (0, d.kt)(
            'p',
            null,
            'There are many ways to tackle image delivery and optimization such as using services like ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://cloudinary.com/' }
              ),
              'Cloudinary'
            ),
            ".\nWhat I'm looking for is a way to serve self-hosted static assets to reduce complexity of the project and a process that would work with release workflow."
          ),
          (0, d.kt)(
            'blockquote',
            null,
            (0, d.kt)(
              'p',
              { parentName: 'blockquote' },
              'So I want to generate optimized images in ',
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'p' },
                  { href: 'https://web.dev/uses-webp-images/' }
                ),
                'next-gen format'
              ),
              ' during build time.'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'Amond all the format options, ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://caniuse.com/?search=webp' }
              ),
              'WebP is the most widely supported'
            ),
            ". So let's see how to make it work!"
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'integrate-webp-image-in-project' }),
            'Integrate WebP Image in Project'
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'You can find the ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/DawChihLiou/dawchihliou.github.io' }
              ),
              'source code on GitHub'
            ),
            ".\nThere are code snippets in this article and you could always reference them in the source code if you're interested."
          ),
          (0, d.kt)('hr', null),
          (0, d.kt)(
            'p',
            null,
            'We can first ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://web.dev/codelab-serve-images-webp/' }
              ),
              'follow the instruction'
            ),
            ' to generate WebP images with command line.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              'cwebp -q ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '75'
              ),
              ' raw/portrait.png -o optimized/portrait.webp\n'
            )
          ),
          (0, d.kt)('p', null, "Let's compare the file size."),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'Raw PNG image: ',
              (0, d.kt)('inlineCode', { parentName: 'li' }, '251.35KB')
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              'Generated WebP image: ',
              (0, d.kt)('inlineCode', { parentName: 'li' }, '5.3KB')
            )
          ),
          (0, d.kt)(
            'p',
            null,
            "That's a ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '97.89%'),
            " reduction right off the bat. Let's have a look at the image quality."
          ),
          (0, d.kt)('img', {
            src: '/optimized/webp-comparison.png',
            alt: 'PNG and WebP comparison',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            'If we zoom in a little, we can actually see the difference between the two compression algorithms.\nThe WebP format overall quality is very desirable, even with the quality of ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '75'),
            ' (',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '0'),
            ' is the worst, ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '100'),
            ' is the best).'
          ),
          (0, d.kt)(
            'p',
            null,
            'Now we can use the generated image in the code.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-jsx' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-jsx' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// components/Intro'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'img'
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'src'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.webp',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'alt'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'Daw-Chih',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    "'"
                  ),
                  's portait',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'We can have a look at the download time from Network.'
          ),
          (0, d.kt)('img', {
            src: '/optimized/network.png',
            alt: 'WebP in Network',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            'It takes about 1 millisecond to download the image. We just proved how effective WebP can be for our web performance.'
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'do-we-have-to-use-the-command' }),
            'Do We Have to Use The Command?'
          ),
          (0, d.kt)(
            'p',
            null,
            "It's not very convenient to convert images with the command.\nWhat we are looking for is to host all the images in ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/raw'),
            ' directory and output WebP images in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/optimized'),
            ' directory.\nLuckly I found something cool. ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://github.com/imagemin/imagemin' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'imagemin')
            ),
            ' is a npm library that minifies images.\nIt offers a handy ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/package/imagemin-webp' }
              ),
              'WebP imagemin plugin'
            ),
            ' and all we need to do is to create a JavaScript file,'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imagemin ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminWebp ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-webp'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate webp images inside of destination directory\n */'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'raw/*.{jpg,png}'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'optimized'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminWebp'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' quality',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '75'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, 'and run'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-bash' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              'node lib/webp.js\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'to take all the raw images and generate WebP images in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/optimized'),
            '.'
          ),
          (0, d.kt)(
            'h2',
            Object.assign({}, { id: 'not-all-browsers-support-webp-format' }),
            'Not All Browsers Support WebP Format'
          ),
          (0, d.kt)(
            'p',
            null,
            "So we need fallback images to support wider range of browsers. Let's first optimize our raw images with their original formats.\nThere are two ",
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'imagemin plugins'),
            ' we can use:'
          ),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://www.npmjs.com/package/imagemin-pngquant' }
                ),
                (0, d.kt)(
                  'inlineCode',
                  { parentName: 'a' },
                  'imagemin-pngquant'
                )
              ),
              ': for PNG images'
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                Object.assign(
                  { parentName: 'li' },
                  { href: 'https://github.com/imagemin/imagemin-jpegtran' }
                ),
                (0, d.kt)(
                  'inlineCode',
                  { parentName: 'a' },
                  'imagemin-jpegtran'
                )
              ),
              ': for JPEG images'
            )
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminJpegtran ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-jpegtran'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminPngquant ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-pngquant'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate optimized fallback images\n */'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'raw/*.{jpg,png}'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'optimized'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminJpegtran'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminPngquant'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n      quality',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.6'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.8'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)('p', null, 'Now we are ready to add fallback images.'),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-jsx' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-jsx' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// components/Intro'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'picture'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '>'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'source'
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'srcSet'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.webp',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'type'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'image/webp',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'source'
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'srcSet'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.png',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'type'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'image/png',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'img'
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'src'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.png',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'alt'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'Daw-Chih',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    "'"
                  ),
                  's portait',
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token tag' }
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  (0, d.kt)(
                    'span',
                    Object.assign(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '</'
                  ),
                  'picture'
                ),
                (0, d.kt)(
                  'span',
                  Object.assign(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '>'
                )
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'At this point, we can really compare all image qualities.'
          ),
          (0, d.kt)(
            'h5',
            Object.assign(
              {},
              { id: 'png-left-and-optimized-png-right-comparison' }
            ),
            'PNG (left) and optimized PNG (right) comparison'
          ),
          (0, d.kt)('img', {
            src: '/optimized/png-comparison.png',
            alt: 'PNG and optimized PNG comparison',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'h5',
            Object.assign({}, { id: 'png-left-and-webp-right-comparison' }),
            'PNG (left) and WebP (right) comparison'
          ),
          (0, d.kt)('img', {
            src: '/optimized/webp-comparison.png',
            alt: 'PNG and WebP comparison',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)(
            'p',
            null,
            'If you are looking for optimizing SVG files, you can achieve it with ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/package/imagemin-svgo' }
              ),
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'imagemin-svgo')
            ),
            '.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminSvgo ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-svgo'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate optimized svg files\n */'
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'public/raw/*.svg'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'optimized'"
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminSvgo'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' removeViewBox',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'h2',
            Object.assign(
              {},
              { id: 'we-are-ready-to-integrate-with-workflow-automation' }
            ),
            'We Are Ready to Integrate with Workflow Automation'
          ),
          (0, d.kt)(
            'p',
            null,
            'In our ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'package.json'),
            ', add the following scripts.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-ts' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-ts' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"scripts"'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"image"'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"node lib/webp.js"'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"prepare"'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"yarn image"'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'The ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'prepare'),
            ' script will execute after installation. This will allow us to build our image assets in the workflows of our choice.'
          ),
          (0, d.kt)(
            'p',
            null,
            'For example, to deploy my portfolio with GitHub Actions to GitHub Pages as a static site, a workflow looks like this.'
          ),
          (0, d.kt)(
            'pre',
            Object.assign({}, { className: 'language-yml' }),
            (0, d.kt)(
              'code',
              Object.assign(
                { parentName: 'pre' },
                { className: 'language-yml' }
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'jobs'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n  ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'deploy'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'runs-on'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' ubuntu',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'latest\n    ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'steps'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'uses'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' actions/checkout@v2\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Install dependencies 🐥\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' yarn install\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Export static assets 📦\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'run'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' yarn build ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token important' }
                ),
                '&&'
              ),
              ' yarn export\n\n      ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              ' ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'name'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' Deploy to GitHub Pages 🚀\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'uses'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' JamesIves/github',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'pages',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'deploy',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'action@3.6.2\n        ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'with'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              '\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'GITHUB_TOKEN'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' $',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' secrets.GITHUB_TOKEN ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'BRANCH'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' gh',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '-'
              ),
              'pages\n          ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token key atrule' }
                ),
                'FOLDER'
              ),
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ':'
              ),
              ' out ',
              (0, d.kt)(
                'span',
                Object.assign(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '# contains all static assets'
              ),
              '\n'
            )
          ),
          (0, d.kt)(
            'p',
            null,
            'In the "Install dependencies" step, the job installs the dependencies, and then generate the optimized images.\nThe images will be deployed alongside with the other assets in ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '/out'),
            ' directory.'
          ),
          (0, d.kt)('h2', Object.assign({}, { id: 'to-sum-up' }), 'To Sum up'),
          (0, d.kt)(
            'p',
            null,
            'WebP is designed for web. The image quality and size is very desirable especially for mobile users.\nWith the right tooling, generating WebP image can work seemlessly with automation.\nAs long as we make sure that the fallback images are in place, our audience can benefit tremendously from the boost of speed and better enjoy our content.'
          ),
          (0, d.kt)(
            'h5',
            Object.assign(
              {},
              { id: 'lighthouse-report-with-optimized-webp-images' }
            ),
            'Lighthouse report with optimized WebP images'
          ),
          (0, d.kt)('img', {
            src: '/optimized/lighthouse-report.png',
            alt: 'Lighthouse report',
            width: '100%',
            loading: 'lazy',
          }),
          (0, d.kt)('hr', null),
          (0, d.kt)('p', null, 'Here you have it! Thanks for reading through.'),
          (0, d.kt)(
            'p',
            null,
            'I hope I made it as straight forward as possible to grasp.\nIf you have thoughts or there’s something not clear to you, feel free to drop a comment below, or connect with me on ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://twitter.com/dawchihliou' }
              ),
              'twitter'
            ),
            '!'
          ),
          (0, d.kt)(
            'p',
            null,
            "If you're wondering how to test Redux Observable, I wrote an ariticle ",
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                { href: 'https://itnext.io/better-marble-test-70c7676a1e2' }
              ),
              '"Writing Better Marble Tests for Redux Observable and TypeScript"'
            ),
            " just for you.\nIt's a comprehensive guide to walk you through the thought process."
          ),
          (0, d.kt)(
            'p',
            null,
            'If you’re a fan of functional programming, check out ',
            (0, d.kt)(
              'a',
              Object.assign(
                { parentName: 'p' },
                {
                  href:
                    'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
                }
              ),
              'this article that I wrote about Transducers'
            ),
            '.\nIt’s a step by step reasoning on writing a transducer and it touches on key ideas about functional programming.'
          ),
          (0, d.kt)('p', null, 'Happy coding!')
        )
      }
      i.isMDXComponent = !0
    },
    7747: function (a) {
      a.exports = {
        container: 'Article_container__q__L3',
        wrap: 'Article_wrap__LZypL',
      }
    },
    9754: function (a) {
      a.exports = { wrap: 'Author_wrap__s8DeE', avatar: 'Author_avatar__j6KIn' }
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      return a((a.s = 8111))
    }),
      (_N_E = a.O())
  },
])

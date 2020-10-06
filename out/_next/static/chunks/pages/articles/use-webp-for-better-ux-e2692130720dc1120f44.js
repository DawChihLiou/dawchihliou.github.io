_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    AKUr: function (e, a, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/use-webp-for-better-ux',
        function () {
          return t('ClDf')
        },
      ])
    },
    ClDf: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'meta', function () {
          return r
        }),
        t.d(a, 'default', function () {
          return l
        })
      var n = t('wx14'),
        c = t('Ff2n'),
        s = t('q1tI'),
        o = t.n(s),
        p = t('7ljp'),
        m = t('2JHi'),
        r =
          (o.a.createElement,
          {
            title: 'Using WebP for Better User Experience',
            description:
              "WebP is a modern image format that provides outstanding image quality with smaller image size. I'll show you how much you can benefit from it and how to setup your project for optimal developer experience.",
            url: '/articles/use-webp-for-better-ux',
            cover: 'optimized/portfolio-snapshot.png',
            category: 'Performance',
            coverWidth: '1411',
            coverHeight: '682',
          }),
        i = { meta: r },
        b = function (e) {
          var a = e.children
          return Object(p.a)(
            m.a,
            {
              title: r.title,
              description: r.description,
              cover: r.cover,
              url: r.url,
              coverWidth: r.coverWidth,
              coverHeight: r.converHeight,
            },
            a
          )
        }
      function l(e) {
        var a = e.components,
          t = Object(c.a)(e, ['components'])
        return Object(p.a)(
          b,
          Object(n.a)({}, i, t, { components: a, mdxType: 'MDXLayout' }),
          Object(p.a)(
            'h1',
            { id: 'using-webp-for-better-user-experience' },
            'Using WebP for Better User Experience'
          ),
          Object(p.a)('img', {
            src: '/optimized/portfolio-snapshot.png',
            alt: 'Portfolio snapshot',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)('h2', { id: 'tldr' }, 'TL;DR'),
          Object(p.a)(
            'ul',
            null,
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'li' },
                  { href: 'https://developers.google.com/speed/webp' }
                ),
                'WebP'
              ),
              ' is a modern image format that provides amazing ',
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'li' },
                  { href: 'https://www.keycdn.com/support/lossy-vs-lossless' }
                ),
                'lossless and lossy compression'
              ),
              '.'
            ),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              'WebP makes images richer and smaller.'
            ),
            Object(p.a)('li', { parentName: 'ul' }, 'WebP makes web faster.'),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              "We don't have to convert our images to WebP ourselves. We have tools for that."
            ),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'li' },
                  { href: 'https://caniuse.com/?search=webp' }
                ),
                'Not all browsers support WebP format'
              ),
              " so you'll need fallback images."
            ),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              'Check out ',
              Object(p.a)(
                'a',
                Object(n.a)(
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
          Object(p.a)('hr', null),
          Object(p.a)('h2', { id: 'what-is-wrong' }, 'What Is Wrong?'),
          Object(p.a)(
            'p',
            null,
            "As I'm re-making ",
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://dawchihliou.github.io/' }
              ),
              'my portfolio'
            ),
            ', there is something nagging that bothers me.\nI have a ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '128x128'),
            ' portait photo displayed on the top of my portfolio that is ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '251.35KB'),
            ".\nIt's way too big and takes too long to download and that has a direct impact on my Lighthouse report."
          ),
          Object(p.a)(
            'p',
            null,
            'It might seem like not a big deal. Afterall, a lot of people are enjoying high-speed WIFI and modern browsers.\nBut I want my portfolio to be ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                {
                  href:
                    'https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/',
                }
              ),
              Object(p.a)('strong', { parentName: 'a' }, 'mobile-first')
            ),
            ".\nIt's important to me that my content can reach to audience that are using cellular data and mobile devices with ease."
          ),
          Object(p.a)(
            'h2',
            { id: 'next-gen-image-format' },
            'next-gen Image Format'
          ),
          Object(p.a)(
            'p',
            null,
            'There are many ways to tackle image delivery and optimization such as using services like ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://cloudinary.com/' }
              ),
              'Cloudinary'
            ),
            ".\nWhat I'm looking for is to serve static assets myself to reduce complexity of the project and a process that would work with release workflow."
          ),
          Object(p.a)(
            'blockquote',
            null,
            Object(p.a)(
              'p',
              { parentName: 'blockquote' },
              'So I want to generate optimized images in ',
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'p' },
                  { href: 'https://web.dev/uses-webp-images/' }
                ),
                'next-gen format'
              ),
              ' during build time.'
            )
          ),
          Object(p.a)(
            'p',
            null,
            'Amond all the format options, ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://caniuse.com/?search=webp' }
              ),
              'WebP is the most widely supported'
            ),
            ". So let's see how to make it work!"
          ),
          Object(p.a)(
            'h2',
            { id: 'integrate-webp-image-in-project' },
            'Integrate WebP Image in Project'
          ),
          Object(p.a)('hr', null),
          Object(p.a)(
            'p',
            null,
            'You can find the ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://github.com/DawChihLiou/dawchihliou.github.io' }
              ),
              'source code on GitHub'
            ),
            ".\nThere are code snippets in this article and you could always reference them in the source code if you're interested."
          ),
          Object(p.a)('hr', null),
          Object(p.a)(
            'p',
            null,
            'We can first ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://web.dev/codelab-serve-images-webp/' }
              ),
              'follow the instruction'
            ),
            ' to generate WebP images with command line.'
          ),
          Object(p.a)(
            'pre',
            { className: 'language-bash' },
            Object(p.a)(
              'code',
              Object(n.a)(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              'cwebp -q ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '75'
              ),
              ' raw/portrait.png -o optimized/portrait.webp\n'
            )
          ),
          Object(p.a)('p', null, "Let's compare the file size."),
          Object(p.a)(
            'ul',
            null,
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              'Raw PNG image: ',
              Object(p.a)('inlineCode', { parentName: 'li' }, '251.35KB')
            ),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              'Generated WebP image: ',
              Object(p.a)('inlineCode', { parentName: 'li' }, '5.3KB')
            )
          ),
          Object(p.a)(
            'p',
            null,
            "That's a ",
            Object(p.a)('inlineCode', { parentName: 'p' }, '97.89%'),
            " reduction right off the bat. Let's have a look at the image quality."
          ),
          Object(p.a)('img', {
            src: '/optimized/webp-comparison.png',
            alt: 'PNG and WebP comparison',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)(
            'p',
            null,
            'If we zoom in a little, we can actually see the difference between the two compression algorithms.\nThe WebP format overall quality is very desirable, even with the quality of ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '75'),
            ' (',
            Object(p.a)('inlineCode', { parentName: 'p' }, '0'),
            ' is the worst, ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '100'),
            ' is the best).'
          ),
          Object(p.a)(
            'p',
            null,
            'Now we can use the generated image in the code.'
          ),
          Object(p.a)(
            'pre',
            { className: 'language-jsx' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-jsx' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// components/Intro'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'img'
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'src'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.webp',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'alt'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'Daw-Chih',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    "'"
                  ),
                  's portait',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              '\n'
            )
          ),
          Object(p.a)(
            'p',
            null,
            'We can have a look at the download time from Network.'
          ),
          Object(p.a)('img', {
            src: '/optimized/network.png',
            alt: 'WebP in Network',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)(
            'p',
            null,
            'It takes about 1 millisecond to download the image. We just proved how effective WebP can be for our web performance.'
          ),
          Object(p.a)(
            'h2',
            { id: 'do-we-have-to-use-the-command' },
            'Do We Have to Use The Command?'
          ),
          Object(p.a)(
            'p',
            null,
            "It's not very convenient to convert images with the command.\nWhat we are looking for is to host all the images in ",
            Object(p.a)('inlineCode', { parentName: 'p' }, '/raw'),
            ' directory and output WebP images in ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '/optimized'),
            ' directory.\nLuckly I found something cool. ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://github.com/imagemin/imagemin' }
              ),
              Object(p.a)('inlineCode', { parentName: 'a' }, 'imagemin')
            ),
            ' is a npm library that minifies images.\nIt offers a handy ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/package/imagemin-webp' }
              ),
              'WebP imagemin plugin'
            ),
            ' and all we need to do is to create a JavaScript file,'
          ),
          Object(p.a)(
            'pre',
            { className: 'language-ts' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-ts' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imagemin ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminWebp ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-webp'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate webp images inside of destination directory\n */'
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'raw/*.{jpg,png}'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'optimized'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminWebp'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' quality',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '75'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          Object(p.a)('p', null, 'and run'),
          Object(p.a)(
            'pre',
            { className: 'language-bash' },
            Object(p.a)(
              'code',
              Object(n.a)(
                { parentName: 'pre' },
                { className: 'language-bash' }
              ),
              'node lib/webp.js\n'
            )
          ),
          Object(p.a)(
            'p',
            null,
            'to take all the raw images and generate WebP images in ',
            Object(p.a)('inlineCode', { parentName: 'p' }, '/optimized'),
            '.'
          ),
          Object(p.a)(
            'h2',
            { id: 'not-all-browsers-support-webp-format' },
            'Not All Browsers Support WebP Format'
          ),
          Object(p.a)(
            'p',
            null,
            "So we need fallback images to support wider range of browsers. Let's first optimize our raw images with their original formats.\nThere are two ",
            Object(p.a)('inlineCode', { parentName: 'p' }, 'imagemin plugins'),
            ' we can use:'
          ),
          Object(p.a)(
            'ul',
            null,
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'li' },
                  { href: 'https://www.npmjs.com/package/imagemin-pngquant' }
                ),
                Object(p.a)(
                  'inlineCode',
                  { parentName: 'a' },
                  'imagemin-pngquant'
                )
              ),
              ': for PNG images'
            ),
            Object(p.a)(
              'li',
              { parentName: 'ul' },
              Object(p.a)(
                'a',
                Object(n.a)(
                  { parentName: 'li' },
                  { href: 'https://github.com/imagemin/imagemin-jpegtran' }
                ),
                Object(p.a)(
                  'inlineCode',
                  { parentName: 'a' },
                  'imagemin-jpegtran'
                )
              ),
              ': for JPEG images'
            )
          ),
          Object(p.a)(
            'pre',
            { className: 'language-ts' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-ts' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminJpegtran ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-jpegtran'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminPngquant ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-pngquant'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate optimized fallback images\n */'
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'raw/*.{jpg,png}'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'optimized'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              '\n    ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminJpegtran'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminPngquant'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n      quality',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.6'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token number' }
                ),
                '0.8'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n    ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          Object(p.a)('p', null, 'Now we are ready to add fallback images.'),
          Object(p.a)(
            'pre',
            { className: 'language-jsx' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-jsx' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// components/Intro'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'picture'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '>'
                )
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'source'
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'srcSet'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.webp',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'type'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'image/webp',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'source'
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'srcSet'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.png',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'type'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'image/png',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n  '
              ),
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '<'
                  ),
                  'img'
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'src'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'optimized/portrait.png',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-name' }
                  ),
                  'alt'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token attr-value' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation attr-equals' }
                    ),
                    '='
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  ),
                  'Daw-Chih',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    "'"
                  ),
                  's portait',
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '"'
                  )
                ),
                ' ',
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '/>'
                )
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token plain-text' }
                ),
                '\n'
              ),
              Object(p.a)(
                'span',
                Object(n.a)({ parentName: 'code' }, { className: 'token tag' }),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token tag' }
                  ),
                  Object(p.a)(
                    'span',
                    Object(n.a)(
                      { parentName: 'span' },
                      { className: 'token punctuation' }
                    ),
                    '</'
                  ),
                  'picture'
                ),
                Object(p.a)(
                  'span',
                  Object(n.a)(
                    { parentName: 'span' },
                    { className: 'token punctuation' }
                  ),
                  '>'
                )
              ),
              '\n'
            )
          ),
          Object(p.a)(
            'p',
            null,
            'At this point, we can really compare all image qualities.'
          ),
          Object(p.a)(
            'h5',
            { id: 'png-left-and-optimized-png-right-comparison' },
            'PNG (left) and optimized PNG (right) comparison'
          ),
          Object(p.a)('img', {
            src: '/optimized/png-comparison.png',
            alt: 'PNG and optimized PNG comparison',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)(
            'h5',
            { id: 'png-left-and-webp-right-comparison' },
            'PNG (left) and WebP (right) comparison'
          ),
          Object(p.a)('img', {
            src: '/optimized/webp-comparison.png',
            alt: 'PNG and WebP comparison',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)(
            'p',
            null,
            'If you are looking for optimizing SVG files, you can achieve it with ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://www.npmjs.com/package/imagemin-svgo' }
              ),
              Object(p.a)('inlineCode', { parentName: 'a' }, 'imagemin-svgo')
            ),
            '.'
          ),
          Object(p.a)(
            'pre',
            { className: 'language-ts' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-ts' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token comment' }
                ),
                '// lib/webp.js'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'const'
              ),
              ' imageminSvgo ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                '='
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token keyword' }
                ),
                'require'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'imagemin-svgo'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token doc-comment comment' }
                ),
                '/**\n * generate optimized svg files\n */'
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imagemin'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'public/raw/*.svg'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  destination',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                "'public/optimized'"
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  plugins',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '['
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token function' }
                ),
                'imageminSvgo'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '('
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              ' removeViewBox',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token boolean' }
                ),
                'false'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ']'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ')'
              ),
              '\n'
            )
          ),
          Object(p.a)(
            'h2',
            { id: 'we-are-ready-to-integrate-with-workflow-automation' },
            'We Are Ready to Integrate with Workflow Automation'
          ),
          Object(p.a)(
            'p',
            null,
            'In our ',
            Object(p.a)('inlineCode', { parentName: 'p' }, 'package.json'),
            ', add the following scripts.'
          ),
          Object(p.a)(
            'pre',
            { className: 'language-ts' },
            Object(p.a)(
              'code',
              Object(n.a)({ parentName: 'pre' }, { className: 'language-ts' }),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"scripts"'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '{'
              ),
              '\n  ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"image"'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"node lib/webp.js"'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n  ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"prepare"'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token operator' }
                ),
                ':'
              ),
              ' ',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token string' }
                ),
                '"yarn image"'
              ),
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                ','
              ),
              '\n',
              Object(p.a)(
                'span',
                Object(n.a)(
                  { parentName: 'code' },
                  { className: 'token punctuation' }
                ),
                '}'
              ),
              '\n'
            )
          ),
          Object(p.a)(
            'p',
            null,
            'The ',
            Object(p.a)('inlineCode', { parentName: 'p' }, 'prepare'),
            ' script will execute after installation. This will allow us to build our image assets in the workflows of our choice.'
          ),
          Object(p.a)('h2', { id: 'to-sum-up' }, 'To Sum up'),
          Object(p.a)(
            'p',
            null,
            'WebP is designed for web. The image quality and size is very desirable especially for mobile users.\nWith the right tooling, generating WebP image can work seemlessly with automation.\nAs long as we make sure that the fallback images are in place, our audience can benefit tremendously from the boost of speed and better enjoy our content.'
          ),
          Object(p.a)(
            'h5',
            { id: 'lighthouse-report-with-optimized-webp-images' },
            'Lighthouse report with optimized WebP images'
          ),
          Object(p.a)('img', {
            src: '/optimized/lighthouse-report.png',
            alt: 'Lighthouse report',
            width: '100%',
            loading: 'lazy',
          }),
          Object(p.a)('hr', null),
          Object(p.a)(
            'p',
            null,
            'Here you have it! Thanks for reading through.'
          ),
          Object(p.a)(
            'p',
            null,
            'I hope I made it as straight forward as possible to grasp.\nIf you have thoughts or there\u2019s something not clear to you, feel free to drop a comment below, or connect with me on ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://twitter.com/dawchihliou' }
              ),
              'twitter'
            ),
            '!'
          ),
          Object(p.a)(
            'p',
            null,
            "If you're wondering how to test Redux Observable, I wrote an ariticle ",
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                { href: 'https://itnext.io/better-marble-test-70c7676a1e2' }
              ),
              '"Writing Better Marble Tests for Redux Observable and TypeScript"'
            ),
            " just for you.\nIt's a comprehensive guide to walk you through the thought process."
          ),
          Object(p.a)(
            'p',
            null,
            'If you\u2019re a fan of functional programming, check out ',
            Object(p.a)(
              'a',
              Object(n.a)(
                { parentName: 'p' },
                {
                  href:
                    'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
                }
              ),
              'this article that I wrote about Transducers'
            ),
            '.\nIt\u2019s a step by step reasoning on writing a transducer and it touches on key ideas about functional programming.'
          ),
          Object(p.a)('p', null, 'Happy coding!')
        )
      }
      l.isMDXComponent = !0
    },
  },
  [['AKUr', 0, 1, 4]],
])

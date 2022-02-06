;(self.__BUILD_MANIFEST = (function (a, b) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [
      a,
      'static/chunks/78e521c3-ddb0195bbc3aa1f5.js',
      b,
      'static/chunks/24-333af93bf5428a8f.js',
      'static/css/94c31b189e54b521.css',
      'static/chunks/pages/index-1fd524f6b1ea61b3.js',
    ],
    '/_error': ['static/chunks/pages/_error-d742f979193aeae4.js'],
    '/articles': [
      a,
      b,
      'static/css/b084efbe0f624134.css',
      'static/chunks/pages/articles-9da57a520a378615.js',
    ],
    '/articles/[slug]': [
      'static/css/d886348a0f635b75.css',
      'static/chunks/pages/articles/[slug]-86478ad7ebd04442.js',
    ],
    '/now': [
      'static/css/0018c274a537ef81.css',
      'static/chunks/pages/now-47236bef94c9ded3.js',
    ],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/articles',
      '/articles/[slug]',
      '/now',
    ],
  }
})(
  'static/chunks/ef87329b-e04d9365c7286ed1.js',
  'static/chunks/169-37deb4e99bf805ce.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()

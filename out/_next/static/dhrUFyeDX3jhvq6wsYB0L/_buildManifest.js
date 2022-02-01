;(self.__BUILD_MANIFEST = (function (a, b) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [
      a,
      'static/chunks/78e521c3-ddb0195bbc3aa1f5.js',
      b,
      'static/chunks/24-333af93bf5428a8f.js',
      'static/css/78eda12f28812824.css',
      'static/chunks/pages/index-5ec31904b1216505.js',
    ],
    '/_error': ['static/chunks/pages/_error-d742f979193aeae4.js'],
    '/articles': [
      a,
      b,
      'static/css/b084efbe0f624134.css',
      'static/chunks/pages/articles-fda5bcc9f9ab6d4f.js',
    ],
    '/articles/[slug]': [
      'static/css/d886348a0f635b75.css',
      'static/chunks/pages/articles/[slug]-26501c0d66d6484e.js',
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
  'static/chunks/ef87329b-36cb7858b125951f.js',
  'static/chunks/568-3449dc58da68f3f3.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()

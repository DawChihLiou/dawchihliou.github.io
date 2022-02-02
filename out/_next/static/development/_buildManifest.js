self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/articles': ['static\u002Fchunks\u002Fpages\u002Farticles.js'],
  '/articles/[slug]': [
    'static\u002Fchunks\u002Fpages\u002Farticles\u002F[slug].js',
  ],
  sortedPages: [
    '\u002F_app',
    '\u002F_error',
    '\u002Farticles',
    '\u002Farticles\u002F[slug]',
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()

self.__BUILD_MANIFEST = {
  __rewrites: [],
  '/': ['static\u002Fchunks\u002Fpages\u002Findex.js'],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/articles': ['static\u002Fchunks\u002Fpages\u002Farticles.js'],
  '/articles/helloworld': [
    'static\u002Fchunks\u002Fpages\u002Farticles\u002Fhelloworld.js',
  ],
  '/articles/use-webp-for-better-ux': [
    'static\u002Fchunks\u002Fpages\u002Farticles\u002Fuse-webp-for-better-ux.js',
  ],
  '/now': ['static\u002Fchunks\u002Fpages\u002Fnow.js'],
  sortedPages: [
    '\u002F',
    '\u002F_app',
    '\u002F_error',
    '\u002Farticles',
    '\u002Farticles\u002Fhelloworld',
    '\u002Farticles\u002Fuse-webp-for-better-ux',
    '\u002Fnow',
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()

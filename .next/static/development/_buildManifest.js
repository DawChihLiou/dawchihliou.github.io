self.__BUILD_MANIFEST = {
  __rewrites: [],
  '/': ['static\u002Fchunks\u002Fpages\u002Findex.js'],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/now': ['static\u002Fchunks\u002Fpages\u002Fnow.js'],
  '/publications': ['static\u002Fchunks\u002Fpages\u002Fpublications.js'],
  sortedPages: [
    '\u002F',
    '\u002F_app',
    '\u002F_error',
    '\u002Fnow',
    '\u002Fpublications',
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()

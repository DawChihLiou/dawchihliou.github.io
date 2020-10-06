const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')
const imageminWebp = require('imagemin-webp')
const imageminSvgo = require('imagemin-svgo')

;(async () => {
  /**
   * generate optimized fallback images
   */
  await imagemin(['public/raw/*.{jpg,png}'], {
    destination: 'public/optimized',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  })
  /**
   * generate webp images
   */
  await imagemin(['public/raw/*.{jpg,png}'], {
    destination: 'public/optimized',
    plugins: [imageminWebp({ quality: 75 })],
  })
  /**
   * generate optimized svg
   */
  await imagemin(['public/raw/*.svg'], {
    destination: 'public/optimized',
    plugins: [imageminSvgo({ removeViewBox: false })],
  })
})()

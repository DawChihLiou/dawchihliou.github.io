import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'
import imageminWebp from 'imagemin-webp'
import imageminSvgo from 'imagemin-svgo'

async function generate() {
  /**
   * generate optimized fallback images
   */
  await imagemin(['public/{raw,articles}/**/*.{jpg,png}'], {
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
  await imagemin(['public/{raw,articles}/**/*.{jpg,png}'], {
    destination: 'public/optimized',
    plugins: [imageminWebp({ quality: 75 })],
  })
  /**
   * generate optimized svg
   */
  await imagemin(['public/{raw,articles}/**/*.svg'], {
    destination: 'public/optimized',
    plugins: [imageminSvgo({ removeViewBox: false })],
  })
}

generate()

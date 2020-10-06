import socials from '../utils/socials'

const category = {
  welcome: 'Welcome',
  performance: 'Performance',
}

export default [
  {
    date: 'Octobor 6, 2020',
    publisher: '',
    title: 'Using WebP for Better User Experience',
    description:
      "WebP is a modern image format that provides outstanding image quality with smaller image size. I'll show you how much you can benefit from it and how to setup your project for optimal developer experience.",
    url: '/articles/use-webp-for-better-ux',
    cover: 'optimized/portfolio-snapshot.png',
    category: category.performance,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
  },
  {
    date: 'September 29, 2020',
    publisher: '',
    title: 'Hello World☀️',
    description:
      "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
    url: '/articles/helloworld',
    cover: '/optimized/portrait-sm.png',
    category: category.welcome,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
  },
]

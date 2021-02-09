import socials from '../utils/socials'

const category = {
  welcome: 'Welcome',
  performance: 'Performance',
}

export default [
  {
    date: 'February 9, 2021',
    publisher: 'trivago',
    title: 'Rethinking the Next-gen Analytics Web App at trivago',
    description:
      "How trivago Frontend Engineering revamped the company's Business Intelligence web application. After almost a decade, we decided to rebuild our in-house Business Intelligence web application to better support the organization. We successfully completed the project because we fundamentally challenged and re-thought all aspects of the project.",
    url:
      'https://tech.trivago.com/2021/02/09/rethinking-the-next-gen-analytics-web-app-at-trivago/',
    cover:
      'https://tech.trivago.com/img/posts/rethinknextgenanalyticswebappattrivago/image3.png',
    category: '',
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
    external: true,
  },
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
    external: false,
  },
  {
    date: 'September 29, 2020',
    publisher: '',
    title: 'Hello World☀️',
    description:
      "Thank you so much for being interested in my articles! I'll use this space to write about web technologies. Hopefully it'll unblock you and give you a little dose of inspiration. Stay tuned!",
    url: '/articles/helloworld',
    cover: '/optimized/portrait.png',
    category: category.welcome,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
    external: false,
  },
]

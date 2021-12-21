import socials from '../utils/socials'

const category = {
  welcome: 'Welcome',
  performance: 'Performance',
  leadership: 'Leadership',
  frontend: 'Frontend',
  backend: 'Backend',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
}

export default [
  {
    date: 'December 21, 2021',
    publisher: '',
    title: 'Road to Engineering Leadership',
    description: '',
    url: '/articles/road-to-engineering-leadership',
    cover: 'optimized/writing-your-own-cli.png',
    category: category.leadership,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
    external: false,
    publisherUrl: '',
  },
  {
    date: 'December 6, 2021',
    publisher: '',
    title: 'Writing Your Own TypeScript CLI',
    description:
      "Writing CLIs feels like a super power💯 You can write one too! I'll show you how to develop a CLI with TypeScript step by step and demonstrate how you can apply your CLI in CD/CI pipelines. We're going to uncover the power of Google Lighthouse and many more amazing npm packages!",
    url: '/articles/writing-your-own-typescript-cli',
    cover: 'optimized/writing-your-own-cli.png',
    category: category.typescript,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
    external: false,
    publisherUrl: '',
  },
  {
    date: 'February 9, 2021',
    publisher: 'trivago tech blog',
    title: 'Rethinking the Next-gen Analytics Web App at trivago',
    description:
      "How trivago Frontend Engineering revamped the company's Business Intelligence web application. After almost a decade, we decided to rebuild our in-house Business Intelligence web application to better support the organization. We successfully completed the project because we fundamentally challenged and re-thought all aspects of the project.",
    url:
      'https://tech.trivago.com/2021/02/09/rethinking-the-next-gen-analytics-web-app-at-trivago/',
    cover:
      'https://tech.trivago.com/img/posts/rethinknextgenanalyticswebappattrivago/image3.png',
    category: category.frontend,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.github,
    external: true,
    publisherUrl: 'https://tech.trivago.com/',
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
    publisherUrl: '',
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
    publisherUrl: '',
  },
  {
    date: 'March 18, 2020',
    publisher: 'Medium',
    title: '3 Principles to Triumph Your Software Project',
    description:
      'Practical experience that shapes billion dollar enterprise. I have been very fortunate to take a part in important topics at trivago. We have brought groundbreaking changes in accommodation search. It was clear that our data-informed approach is the foundation to innovation. I want to share with you our learnings.',
    url:
      'https://medium.com/@dawchihliou/3-principles-to-triumph-your-software-project-38cc0951b64f',
    cover: '',
    category: category.leadership,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.medium,
    external: true,
    publisherUrl: 'https://medium.com/',
  },
  {
    date: 'November 6, 2019',
    publisher: 'ITNEXT',
    title: 'Writing Better Marble Tests for Redux Observable and TypeScript',
    description:
      'Marble testing is a brilliant way to test observables. It focuses on the behaviors of observables over time. The combination of test assertion and marble diagram let us visualize the progression of emitted values over time.',
    url: 'https://itnext.io/better-marble-test-70c7676a1e2',
    cover: '',
    category: category.frontend,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.medium,
    external: true,
    publisherUrl: 'https://itnext.io/',
  },
  {
    date: 'September 25, 2018',
    publisher: 'Medium',
    title: 'Intuitive Transducer in JavaScript',
    description:
      'What is transducing? Simply put, it’s a data transformation process without creating intermediate products. It’s like a pipeline. It’s your data on one end, and the pipeline transforms the data and produce your output on the other end.',
    url:
      'https://medium.com/@dawchihliou/intuitive-transducer-in-javascript-f358d3fe53d',
    cover: '',
    category: category.javascript,
    author: 'Daw-Chih Liou',
    avatar: '/optimized/portrait-sm.png',
    social: socials.medium,
    external: true,
    publisherUrl: 'https://medium.com/',
  },
]

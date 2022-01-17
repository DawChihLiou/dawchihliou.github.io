import socials from '../utils/socials'
import { allArticles } from '.contentlayer/data'

const category = {
  welcome: 'Welcome',
  performance: 'Performance',
  leadership: 'Leadership',
  frontend: 'Frontend',
  backend: 'Backend',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  rust: 'Rust',
}

type Writing = {
  date: string
  publisher: string
  title: string
  description: string
  url: string
  cover: string
  category: string
  author: string
  avatar: string
  social: string
  external: boolean
  publisherUrl: string
}

const originals = allArticles.map<Writing>((a) => ({
  date: a.publishedAt,
  publisher: '',
  title: a.title,
  description: a.description,
  url: `/articles/${a.slug}`,
  cover: a.cover,
  category: a.category,
  author: 'Daw-Chih Liou',
  avatar: '/optimized/portrait-sm.png',
  social: socials.github,
  external: false,
  publisherUrl: '',
}))

const externals: Writing[] = [
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

const writings = originals
  .concat(externals)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

export default writings

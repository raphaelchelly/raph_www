const siteMetadata = {
  title: "Raphaël Chelly - Digital marketing project manager",
  author: 'Raphaël Chelly',
  headerTitle: 'Raphaël Chelly',
  description: 'Portfolio of a digital marketing guy who codes a bit.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://raph.vercel.app/',
  siteRepo: 'https://github.com/raphaelchelly/raph_www',
  siteLogo: '/static/images/raph-logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hi@raphaelchelly.com',
  github: 'https://github.com/raphaelchelly',
  twitter: 'https://twitter.com/raphael_chelly',
  linkedin: 'https://linkedin.com/raphael.chelly',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata

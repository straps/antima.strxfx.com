// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  themeConfig: {
    smoothScroll: false,
    locales: {
      "/": {
        nav: [
          { text: "🏠 Home", link: "/" },
          { text: "📖 Guide", link: "/guide/" },
          { text: "Telegram", link: "https://t.me/antimartingale" }
        ]
      },
      "/it/": {
        nav: [
          { text: "🏠 Home", link: "/it/" },
          { text: "📖 Guida", link: "/it/guida/" },
          { text: "Telegram", link: "https://t.me/antimartingale" }
        ],
        sidebar: {
          '/it/guida/': [{
            title: 'Guida',
            collapsable: false,
            children: [
              '',
              'inst',
              ]
            }]
        }
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Antimartingale 🤖 Expert Advisor",
      description: "Automated trading for MT4"
    },
    "/it/": {
      lang: "it-IT",
      title: "Antimartingala 🤖 Expert Advisor",
      description: "Trading automatico per MT4"
    }
  }
}

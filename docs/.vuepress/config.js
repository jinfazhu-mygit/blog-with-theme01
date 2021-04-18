const moment = require('moment');
moment.locale("zh-cn");

module.exports={
  theme: 'reco',
  themeConfig: {
    //最后更新时间、logo
    lastUpdated: '更新时间:',
    logo: '/assets/img/logo.png',
    //导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Category', link: '/category/' },
      { text: 'MyProject', link: '/myproject/' },
      { //需完善
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'AboutMe', link: '/aboutme/' },
    ],
    //侧边栏

    //插件
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            return moment(timestamp).format('LLLL')
          }
        }
      ]
    ]
  }
}
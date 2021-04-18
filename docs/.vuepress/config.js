const moment = require('moment');


module.exports={
  base: "/blog-with-theme01/",
  theme: 'reco',
  themeConfig: {
    //最后更新时间、logo
    lastUpdated: '更新时间:',
    logo: '/assets/img/logo.png',
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/category/' },
      { text: '我的项目', link: '/myproject/' },
      { //需完善
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/language/chinese/' },
          { text: 'English', link: '/language/japanese/' }
        ]
      },
      { 
        text: '友情链接',
        ariaLabel: 'Other Links',
        items: [
          { text: 'MyGithub', link: 'https://github.com/jinfazhu-mygit' },
          { text: 'gitee', link: 'https://gitee.com/' },
        ]
      },
      { text: '关于我', link: '/aboutme/' },
    ],
    //侧边栏

    //插件
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {

            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    //语言
    
  }
}
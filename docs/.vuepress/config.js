const moment = require('moment');


module.exports={
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
      {
        text: '友情链接',
        ariaLabel: 'Other Links',
        items: [
          { text: 'MyGithub', link: 'https://github.com/jinfazhu-mygit' },
          { text: 'gitee', link: 'https://gitee.com/' },
          { text: 'aliyun', link: 'https://aliyun.com/' },
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
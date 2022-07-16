/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "4.26/index.html",
    "revision": "87a453c4245502ec5b9e617e68f6391a"
  },
  {
    "url": "404.html",
    "revision": "12ba392b173113b8d9cdb06873d09a27"
  },
  {
    "url": "迭代器、生成器、async、await/index.html",
    "revision": "546d137d3e4bd75033329a03105ee511"
  },
  {
    "url": "服务器部署及常用操作/index.html",
    "revision": "c051cc191c4947073988ad629513139d"
  },
  {
    "url": "缓存相关知识/index.html",
    "revision": "9219a80781961d03e2b5dcedc8813206"
  },
  {
    "url": "截至6.8学习感悟/index.html",
    "revision": "c379fdb3dd9dd9943ec1ff80a6630528"
  },
  {
    "url": "面试题目归档/index.html",
    "revision": "98e8a3f620c46a707c81e76b3f7a2ee7"
  },
  {
    "url": "面试相关题/index.html",
    "revision": "be02a2cd82b94491f42198b9d270003e"
  },
  {
    "url": "牛客小知识/index.html",
    "revision": "3e466af71ae68cba47c23426c1115378"
  },
  {
    "url": "排序算法部分/index.html",
    "revision": "db365d40f9e1a7f6b34c82f1431e63c9"
  },
  {
    "url": "上传静态页面至阿里云/index.html",
    "revision": "6427376af2bc9596ca2a2c9fb5c237c4"
  },
  {
    "url": "手写防抖、节流、深拷贝、事件总线/index.html",
    "revision": "6ff8671cc6a6c72099b91dac2ebdb40a"
  },
  {
    "url": "原生微信小程序/index.html",
    "revision": "20688ff1df0b452a2e516545e1c86f72"
  },
  {
    "url": "about/index.html",
    "revision": "cf0c03f83fffdf78d28ace249608ef31"
  },
  {
    "url": "AJAX基础/index.html",
    "revision": "69e8cfc6c5138ec81652b15063cc4966"
  },
  {
    "url": "assets/css/0.styles.8e30a8d9.css",
    "revision": "27d7f8701369a375ac69fe904bf743bb"
  },
  {
    "url": "assets/icon/分类.png",
    "revision": "ff50f01052f09eccd45f247c74f4bf11"
  },
  {
    "url": "assets/icon/链接.png",
    "revision": "bd811ee4a2852a2e64a4247b41e8b5f7"
  },
  {
    "url": "assets/icon/首页.png",
    "revision": "54862277a72b2beb2aa9c68c4235b002"
  },
  {
    "url": "assets/icon/我 的.png",
    "revision": "5312489a682d63f8056f2d47af89b62f"
  },
  {
    "url": "assets/icon/项目.png",
    "revision": "2da288355956c6e97bc91ceefde2509f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/blogImg/vue项目一般结构.jpg",
    "revision": "febcdd9bc3022995ae14ac66f6b969fe"
  },
  {
    "url": "assets/img/blogImg/vue项目一般目录结构，及数据请求函数封装.jpg",
    "revision": "35dd61a6579ddbba2579120e859b90f3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "20089907738d86a2a116bb2fadc2fcc8"
  },
  {
    "url": "assets/js/1.033a5405.js",
    "revision": "bfa0f61c022e53aaea498c9dd9042bc7"
  },
  {
    "url": "assets/js/10.3a3f96bf.js",
    "revision": "ccbed122fcef8a5e7006a714e62a396a"
  },
  {
    "url": "assets/js/11.0ae322e7.js",
    "revision": "89e14813a0864d9d368648076c95932b"
  },
  {
    "url": "assets/js/12.88b2c1e6.js",
    "revision": "d5f0d8665b6d6da56aa0c760e7c61c8e"
  },
  {
    "url": "assets/js/13.227aa194.js",
    "revision": "6567d9e0d312f9be3f5041d741275e93"
  },
  {
    "url": "assets/js/14.8e0aaebe.js",
    "revision": "125a388b84c96e2f547fb4c81b440c9a"
  },
  {
    "url": "assets/js/15.2cbc3721.js",
    "revision": "dbd77ba83dba4181b92e234503d3bbed"
  },
  {
    "url": "assets/js/16.083343ae.js",
    "revision": "83b7dc424507aa192c313b602d1d294d"
  },
  {
    "url": "assets/js/17.8c5cb031.js",
    "revision": "846e5591b363e916f6bade8950227e22"
  },
  {
    "url": "assets/js/18.40cab7f6.js",
    "revision": "8a6c958f41950df57f4c4316183a3a5c"
  },
  {
    "url": "assets/js/19.3a4f5ffc.js",
    "revision": "21b01ee4e71e3c56d544a8f698b5122a"
  },
  {
    "url": "assets/js/20.cb4f81b9.js",
    "revision": "848b58ee847e1385c303e05a252192ca"
  },
  {
    "url": "assets/js/21.c373fff1.js",
    "revision": "924dd11c50477696a10b38380bd09eb1"
  },
  {
    "url": "assets/js/22.6ba030d6.js",
    "revision": "678787d69c266fc020e103867c244f66"
  },
  {
    "url": "assets/js/23.132421fb.js",
    "revision": "c781b72e784a70061f2e01639170f50c"
  },
  {
    "url": "assets/js/24.b9d8d9df.js",
    "revision": "f08a571c1af05d9b28a01648f9af7293"
  },
  {
    "url": "assets/js/25.9ca0db2c.js",
    "revision": "7116e2094169c1a56e80b568a6a00b21"
  },
  {
    "url": "assets/js/26.5fb8a3bf.js",
    "revision": "3a8660a7adaf3d1db625baf6c073e36a"
  },
  {
    "url": "assets/js/27.ca81463d.js",
    "revision": "161a11fb447f765329b983b7fafd645a"
  },
  {
    "url": "assets/js/28.cc4bf3d4.js",
    "revision": "310aab1595d489bf598a448108315746"
  },
  {
    "url": "assets/js/29.b5f74b3e.js",
    "revision": "9bef384f08ba3ded405a6681573dfe75"
  },
  {
    "url": "assets/js/3.ca75947f.js",
    "revision": "edc9adeb03211e2a23144fa35f9430fe"
  },
  {
    "url": "assets/js/30.a959a3df.js",
    "revision": "f97f3a7e0e8ba1062c871b5580f7489b"
  },
  {
    "url": "assets/js/31.616c19ec.js",
    "revision": "239d20df48c7e76fc4f5e0cd2c673b8d"
  },
  {
    "url": "assets/js/32.d3cc0ae9.js",
    "revision": "12745eacbcaf6067b92024220d3c5b1e"
  },
  {
    "url": "assets/js/33.f3b0d843.js",
    "revision": "8faeb2db5d58cd70343af9ee6ac130af"
  },
  {
    "url": "assets/js/34.94149fb3.js",
    "revision": "ad15762c5971cf0780141d245459590e"
  },
  {
    "url": "assets/js/35.75375502.js",
    "revision": "c81ff921d00e16be954e546ad3136efe"
  },
  {
    "url": "assets/js/36.34d882f0.js",
    "revision": "96494e235578387dc676b15b439b2258"
  },
  {
    "url": "assets/js/37.64e69f4d.js",
    "revision": "3ea4c7623cc88b5931478440a49f6945"
  },
  {
    "url": "assets/js/38.67f10714.js",
    "revision": "925b457d7a1595a370b8cbc63311bf13"
  },
  {
    "url": "assets/js/39.37137fde.js",
    "revision": "094f4ff043e5118fd813e2632cf80126"
  },
  {
    "url": "assets/js/4.db5ceb41.js",
    "revision": "57521dbc42c2f94aa43e0131638be393"
  },
  {
    "url": "assets/js/40.3d124770.js",
    "revision": "c023c24fbf0dfd6a59ffe25010c82d1a"
  },
  {
    "url": "assets/js/41.346349e9.js",
    "revision": "d859b2a4500efde468e1c3c5ad4b8e04"
  },
  {
    "url": "assets/js/42.93413784.js",
    "revision": "88ace3c29cc098f029ba79dc51ab780f"
  },
  {
    "url": "assets/js/43.85d0acf1.js",
    "revision": "d92b0de8bc73ef63b88cdf3f40894c2a"
  },
  {
    "url": "assets/js/44.b98089ee.js",
    "revision": "a74c385539b4e4c4b01a21e9db0c1e81"
  },
  {
    "url": "assets/js/45.1db5c557.js",
    "revision": "263879963c619c4fd6e1019aa2508524"
  },
  {
    "url": "assets/js/46.02584110.js",
    "revision": "51ddc90f62530933b90e21066fe24021"
  },
  {
    "url": "assets/js/47.ff82c61b.js",
    "revision": "6ec5f46444af94c594dd32ddc4fbae1b"
  },
  {
    "url": "assets/js/48.48214bda.js",
    "revision": "9ddaebce00e747cefbb9ddef21b7928d"
  },
  {
    "url": "assets/js/49.e02930a3.js",
    "revision": "e79f6b4f04cb125e6e4b3b5ed0642c4c"
  },
  {
    "url": "assets/js/5.89112bda.js",
    "revision": "8f92a78c5d09758269027decd3760858"
  },
  {
    "url": "assets/js/50.28d716b7.js",
    "revision": "0d26388701ddf3618e13f2de7e066550"
  },
  {
    "url": "assets/js/51.5544ef79.js",
    "revision": "246600b5bef1fe45e307b2bdbb3a0e56"
  },
  {
    "url": "assets/js/52.4305e0c1.js",
    "revision": "14a27c58165222ec693ce154440b1962"
  },
  {
    "url": "assets/js/53.cdd106ad.js",
    "revision": "b92300195a05774675811ba14dd9a04f"
  },
  {
    "url": "assets/js/54.44eb4c5b.js",
    "revision": "736babc89a5e3e3602b24dd8b1a0e972"
  },
  {
    "url": "assets/js/55.4af9c2b5.js",
    "revision": "dc32f55206a5f50dd55b2c602e7c1ea3"
  },
  {
    "url": "assets/js/6.3ebcd7da.js",
    "revision": "f30d65fafa7945a59692814705bb903e"
  },
  {
    "url": "assets/js/7.67174f27.js",
    "revision": "545e10f265b25b2f10654d7557ab5d69"
  },
  {
    "url": "assets/js/8.1022287e.js",
    "revision": "a4b0366beed653e5e010b54ab975b9c1"
  },
  {
    "url": "assets/js/9.191f7d91.js",
    "revision": "9595d0c46cf4f41dd1c3f8c2f91c233f"
  },
  {
    "url": "assets/js/app.ae0bee8a.js",
    "revision": "5ce921d9c138573fcad89c2acafb6dbf"
  },
  {
    "url": "bg06.jpg",
    "revision": "d3f0679eb20ca5644d489d6f95d165e7"
  },
  {
    "url": "categories/分类/index.html",
    "revision": "9277bc3cd68d3aa5d8cab35774355faa"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "db6ad93cb78f9894d541b44ff60af61d"
  },
  {
    "url": "categories/我的前端路线/index.html",
    "revision": "1d9b8caef409af681be66fdce7d1c88e"
  },
  {
    "url": "categories/我的前端路线/page/2/index.html",
    "revision": "58556ac59d73d641b58369eb9b44fc92"
  },
  {
    "url": "categories/我的前端路线/page/3/index.html",
    "revision": "e5f7a99180f883199efeaea5fa50041c"
  },
  {
    "url": "categories/我的前端路线/page/4/index.html",
    "revision": "d79d50d162ccb0741a136191f6c99dc4"
  },
  {
    "url": "categories/我的项目/index.html",
    "revision": "b6ebd49aa3da75f6f155a03ebf356101"
  },
  {
    "url": "categories/index.html",
    "revision": "04db4892cdfa7b7c1090a48c8188dad9"
  },
  {
    "url": "category/index.html",
    "revision": "e77fc3a495444d59e1ec58a372e4f211"
  },
  {
    "url": "cookie,session和token应用/index.html",
    "revision": "9f12ebfbae9cbf6678b34be6ff445592"
  },
  {
    "url": "cssSupplement/index.html",
    "revision": "c70ed8b8fcda6b940813948b76392c02"
  },
  {
    "url": "ES6/index.html",
    "revision": "62a8d60ecb62dc0fd5b2e4a7c5e91ca4"
  },
  {
    "url": "ES6新特性/index.html",
    "revision": "3f1dbef867a26766fe601b007c33b1b3"
  },
  {
    "url": "ES7、8、9、10、11、12/index.html",
    "revision": "35e18bc3059d2e980f731b4b0e37f983"
  },
  {
    "url": "Git/index.html",
    "revision": "72b7838afb21c6f4bd265810902d9558"
  },
  {
    "url": "github.png",
    "revision": "72b04f175d96fcc48feb2dd8cae6ed04"
  },
  {
    "url": "headicon.jpg",
    "revision": "fb28e5ace9fed612ee6235788c1493dd"
  },
  {
    "url": "html,css/index.html",
    "revision": "999ab746b7b24274c618f970535ec8f7"
  },
  {
    "url": "HTML5/index.html",
    "revision": "fcd3a3e138a517d9c63b67908d87ea52"
  },
  {
    "url": "index.html",
    "revision": "a1c763315fb503d5790df7e769acc8e2"
  },
  {
    "url": "JavaScript高级/index.html",
    "revision": "0a630714965328fc879fa78c879b8259"
  },
  {
    "url": "js/baidu.js",
    "revision": "baa080e3c16fe64be534e7c44e4d7fcb"
  },
  {
    "url": "JS防抖与节流，watch监听，路由监听，$attrs/index.html",
    "revision": "e0ebcd45014dde4499a97da5ccbcfc32"
  },
  {
    "url": "JS面向对象/index.html",
    "revision": "13785fc122183ecdbfa3cd10a1cb70da"
  },
  {
    "url": "JS模块化(CommonJS，ES Module)相关/index.html",
    "revision": "79651521236f15936c53e6eb298c3bdf"
  },
  {
    "url": "koa框架/index.html",
    "revision": "b8980d51271218fce81149291f754667"
  },
  {
    "url": "markdown/index.html",
    "revision": "2f1c6a0fba82f319a62fb2d4ddf71839"
  },
  {
    "url": "myproject01/index.html",
    "revision": "8f0e49d9d6b690e46e2fde3828ffb4a5"
  },
  {
    "url": "Mysql/index.html",
    "revision": "2297aa5328de2c76ed583341688009f8"
  },
  {
    "url": "naruto.jpg",
    "revision": "317a5a2a1ea3ffc1f7b55347ce8ae7c3"
  },
  {
    "url": "node.js/index.html",
    "revision": "38aafabfbd6df68379d0e3ffa80290e1"
  },
  {
    "url": "Node.js复学/index.html",
    "revision": "2e937e846d84ee09d13e6d80058e54b1"
  },
  {
    "url": "Node中使用mysql及sequelize基本用法/index.html",
    "revision": "6ee243fec44a14064f833e4835120319"
  },
  {
    "url": "Promise用法详解及手写Promise/index.html",
    "revision": "858f402bc27de69c297dbae0fd70f465"
  },
  {
    "url": "QQ.jpg",
    "revision": "dcaf5708dcbd199c63bab01410224089"
  },
  {
    "url": "React基础/index.html",
    "revision": "bd5cd3a3c89a1fe86101cec89f868324"
  },
  {
    "url": "React脚手架组件化开发/index.html",
    "revision": "b959b7a0c2b0b6c7f3f2420c016975d7"
  },
  {
    "url": "react中axios的使用/index.html",
    "revision": "05bdc9a7e84aa63f7682246248cd20c0"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "e20323ae2ac04afa7d856fef621f4ae6"
  },
  {
    "url": "tag/服务器/index.html",
    "revision": "6681db6d7e9f2ac9ce5e7e4d856f7559"
  },
  {
    "url": "tag/关于我/index.html",
    "revision": "6fc1bf077368ee3494c54f8947588928"
  },
  {
    "url": "tag/浏览器缓存/index.html",
    "revision": "fe827ff8b6adf7238780024e3886a9f9"
  },
  {
    "url": "tag/排序算法/index.html",
    "revision": "313117fd03bc8d4c906d3ef3030e30fb"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "df0eadcc4c0870cb82db265dd084ebf2"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "e8fafc69cb77e9b0bcfc2a0ef8f93e8a"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "53cfb7ab4d37ee88d7046052124aca09"
  },
  {
    "url": "tag/原型/index.html",
    "revision": "f80f708f95420e069aaaa2691bc45e54"
  },
  {
    "url": "tag/ajax/index.html",
    "revision": "21a80ef55073fba8fff9efbaebc457cc"
  },
  {
    "url": "tag/cookie/index.html",
    "revision": "98fab3c2d17c8bf532200c2bb6c0b951"
  },
  {
    "url": "tag/ES新语法/index.html",
    "revision": "1449a5ef8a1fed7d63878895c801b273"
  },
  {
    "url": "tag/git/index.html",
    "revision": "89c45a3e04181efdd678c2f925681d60"
  },
  {
    "url": "tag/html,css/index.html",
    "revision": "f909a652c7bbad9cb7ba894dd92a0b83"
  },
  {
    "url": "tag/index.html",
    "revision": "adfcaa69c69820e46b07fbecfde20c0a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "5dfb82c258d05b0a5c92b1da15af9a17"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "cf38d8bf50b93f84f2d7ff8b83fdb3e6"
  },
  {
    "url": "tag/javascript/page/3/index.html",
    "revision": "dd13d8475f31a0725e382c542f554ff6"
  },
  {
    "url": "tag/koa/index.html",
    "revision": "6f41c92afb33d1d8fc98e990d6fce61c"
  },
  {
    "url": "tag/learning notes/index.html",
    "revision": "1eaf160623be1b99bf3b155024e52e40"
  },
  {
    "url": "tag/markdown grammar/index.html",
    "revision": "1bb01330ef65f4c83d363212b486cc81"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "e3b3fccabea86917c08e6e953b646a94"
  },
  {
    "url": "tag/node.js/index.html",
    "revision": "6c2e0239be45b8bde751588ccaa9fe8e"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "5c28e65449e8382e6a5301c06abce80b"
  },
  {
    "url": "tag/React/index.html",
    "revision": "531ec5bcb29368d9d4e3355e8fc199ed"
  },
  {
    "url": "tag/session/index.html",
    "revision": "249a228cec329ef918c35dbbbac38e63"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "f747d4f59c0d2862f4b1d7a7d677b9f9"
  },
  {
    "url": "tag/token/index.html",
    "revision": "217e6fa5c10b250d4e9e8a8d803465ff"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "499ca34e90d72e5bb3c7e84a5577db10"
  },
  {
    "url": "tag/vue响应式原理/index.html",
    "revision": "201740cf392fa2737e2b2358c4d9ab37"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "aa04f401a7b3d36734571bd351cf900c"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f43da5073d6a09aaaa911fb0fd568a2"
  },
  {
    "url": "tuya-006.jpg",
    "revision": "155ed0efa3440ded276bc8bb72b980cb"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "3fce152ed866e4c556cf88cb8b97a7be"
  },
  {
    "url": "vue响应式原理(Proxy代理与Reflect反射)/index.html",
    "revision": "a279046707bbe8e6d17c88aefcb0fbe9"
  },
  {
    "url": "vue小知识点问答(基础)/index.html",
    "revision": "1931809ffb91e4666df1b236c6446b90"
  },
  {
    "url": "VueRouter+VueX/index.html",
    "revision": "66c39138b43a1adfed39ca076dec689f"
  },
  {
    "url": "webpack/index.html",
    "revision": "5eb9508074fedc3c6687c89fd6fed880"
  },
  {
    "url": "WX.jpg",
    "revision": "71abd160c53ab19a49ff08690494af11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

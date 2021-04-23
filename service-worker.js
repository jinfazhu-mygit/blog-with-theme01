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
    "url": "404.html",
    "revision": "57d5ea67eebeb7f5411be79d17b460e0"
  },
  {
    "url": "aboutme/index.html",
    "revision": "42063553a1afe630c88be266d78eeb6e"
  },
  {
    "url": "assets/css/0.styles.8c301371.css",
    "revision": "7b9ce76697a9cf012935da4514acc4c9"
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
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "20089907738d86a2a116bb2fadc2fcc8"
  },
  {
    "url": "assets/js/1.cd3f2ab1.js",
    "revision": "25b71cafdd0e235c949e460624111413"
  },
  {
    "url": "assets/js/10.580e804f.js",
    "revision": "46287461d5f7b6413d858b1ce9b77992"
  },
  {
    "url": "assets/js/11.70d6d236.js",
    "revision": "c4d8434f0c5f2ebd28053467e6d48b39"
  },
  {
    "url": "assets/js/12.cfaffa8f.js",
    "revision": "5f894425c3fa6a9b4f62b8d943126797"
  },
  {
    "url": "assets/js/13.7c29c5df.js",
    "revision": "431c2f57eaee55637ec4ed553ee248aa"
  },
  {
    "url": "assets/js/14.7582e509.js",
    "revision": "47ee502e8499427ebdbdd63970544c31"
  },
  {
    "url": "assets/js/15.76cf095a.js",
    "revision": "3f385022389de490f7c6c914e4cf178f"
  },
  {
    "url": "assets/js/16.cb039cef.js",
    "revision": "4fdace10762ecad1a935164ab9040634"
  },
  {
    "url": "assets/js/3.dfd9dcb8.js",
    "revision": "6a0e6948d300c8de1dc32495671d2028"
  },
  {
    "url": "assets/js/4.cab7a83e.js",
    "revision": "a10b8a4979a33f122ae9c9b98f0812d1"
  },
  {
    "url": "assets/js/5.964b9a83.js",
    "revision": "e77fc4af7cc2660983287daa34356a21"
  },
  {
    "url": "assets/js/6.311f505b.js",
    "revision": "69e84167e6d132d6bf36ee8567bab30e"
  },
  {
    "url": "assets/js/7.cce1f1fe.js",
    "revision": "c83eefab580b490190f8eaee25d1fe74"
  },
  {
    "url": "assets/js/8.9387dc96.js",
    "revision": "42c4543af4d4c90fe2f9d8e081bcfe1e"
  },
  {
    "url": "assets/js/9.fd28f36d.js",
    "revision": "1176558e27434f5c6b839826814f1226"
  },
  {
    "url": "assets/js/app.6e65d32e.js",
    "revision": "6a0c008eb471c4cb2fd7333bec998759"
  },
  {
    "url": "bg01.jpg",
    "revision": "2cb749a9e7fc541b29e3e86563f4ed96"
  },
  {
    "url": "bg02.jpg",
    "revision": "dc676f2c27b34081c2405371a068ace0"
  },
  {
    "url": "bg03.jpg",
    "revision": "47c187919434b3508979c136fa15a851"
  },
  {
    "url": "bg05.jpg",
    "revision": "3c9d899bdd0c94929d5603c52b1693d2"
  },
  {
    "url": "bg06.jpg",
    "revision": "d3f0679eb20ca5644d489d6f95d165e7"
  },
  {
    "url": "categories/分类/index.html",
    "revision": "3f919bfcdbeb19e228dd7a02a7411d8c"
  },
  {
    "url": "categories/关于我/index.html",
    "revision": "ad5709289e6c172b981306cdbd7769d6"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "97ecd35a956ef1a92ad4fb220c7e1153"
  },
  {
    "url": "categories/index.html",
    "revision": "6b0b4de0535269329e0c4f4e900f1201"
  },
  {
    "url": "category/index.html",
    "revision": "08e2978ccf758aedaaeb96b7c5fcb5d8"
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
    "url": "index.html",
    "revision": "dbb0460e8a452b0b800de6a2e9d10d6e"
  },
  {
    "url": "markdown/index.html",
    "revision": "6fe03167ce817ad60a6f7b69487e0540"
  },
  {
    "url": "myproject/index.html",
    "revision": "b329c45580f20044a22026a9a64b0096"
  },
  {
    "url": "naruto.jpg",
    "revision": "317a5a2a1ea3ffc1f7b55347ce8ae7c3"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "8ab709ca68b055bc9b9dc63601c07053"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "89d122d577ae3887d5d19ae2d7e3e0c6"
  },
  {
    "url": "tag/index.html",
    "revision": "29f2de3c94059b129204f5771aea5c24"
  },
  {
    "url": "tag/markdown grammar/index.html",
    "revision": "74f1d1e43dcedad656c0722ff0fdefd2"
  },
  {
    "url": "tag/self introduction/index.html",
    "revision": "e9a2666f45d9c33e6d9cc3114179f18d"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4011fbb32294ae1f591d8dd92badb2d"
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

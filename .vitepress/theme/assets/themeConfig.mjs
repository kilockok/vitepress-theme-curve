// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "清凤小栈",
    // 站点描述
    description: "Kilock For You",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://清凤.fun",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "清凤",
      cover: "/images/logo/logo.webp",
      email: "qff45688@gmail.com",
      link: "https://清凤.fun",
    },
  },
  // 备案信息
  icp: "浙ICP备NotFound号",
  // 建站日期
  since: "2025-08-03",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://清凤.fun/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
        { text: "效率工具", link: "/pages/tools", icon: "tools" },
      ],
    },
    // {
    //   text: "友链",
    //   items: [
    //     { text: "友链鱼塘", link: "/pages/friends", icon: "fish" },
    //     { text: "友情链接", link: "/pages/link", icon: "people" },
    //   ],
    // },
    {
      text: "我的",
      items: [
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
        // { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "https://清凤.fun",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "博客镜像站",
          url: "https://backup.清凤.fun/",
        },
      ],
    },
    {
      name: "服务",
      list: [
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
        //   name: "起始页",
        //   url: "https://nav.imsyy.top/",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
        //   name: "今日热榜",
        //   url: "https://hot.imsyy.top/",
        // },
        {
          icon: "images/logo/logo.webp",
          name: "站点监测",
          url: "https://status.清凤.fun/",
        },
      ],
    },
    {
      name: "项目",
      list: [
        //{
        //   icon: "/images/logo/logo.webp",
        //   name: "Curve",
        //   url: "https://github.com/imsyy/vitepress-theme-curve",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
        //   name: "SPlayer",
        //   url: "https://github.com/imsyy/SPlayer",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
        //   name: "Snavigation",
        //   url: "https://github.com/imsyy/SPlayer",
        // },
        // {
        //   icon: "/images/logo/logo.webp",
        //   name: "Home",
        //   url: "https://github.com/imsyy/home",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
        //   name: "DailyHotApi",
        //   url: "https://github.com/imsyy/DailyHotApi",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
        //   name: "site-status",
        //   url: "https://github.com/imsyy/site-status",
        // },
        // {
        //   icon: "/images/logo/logo.webp",
        //   name: "Curve",
        //   url: "https://github.com/imsyy/vitepress-theme-curve",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
        //   name: "SPlayer",
        //   url: "https://github.com/imsyy/SPlayer",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
        //   name: "Snavigation",
        //   url: "https://github.com/imsyy/SPlayer",
        // },
        {
          icon: "/images/logo/logo.webp",
          name: "数字分身",
          url: "https://qqqqqf-q.github.io/Qing-Digital-Self/",
        },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
        //   name: "DailyHotApi",
        //   url: "https://github.com/imsyy/DailyHotApi",
        // },
        // {
        //   icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
        //   name: "site-status",
        //   url: "https://github.com/imsyy/site-status",
        // },

      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: false,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
      // 默认封面(随机展示)
      defaultCover: [
        'https://example.com/1.avif',
        'https://example.com/2.avif',
        'https://example.com/3.avif'
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:qff45688@gmail.com",
      },
      {
        icon: "github",
        link: "https://www.github.com/qqqqqf-q",
      },
      {
        icon: "telegram",
        link: "https://t.me/@qqfqffq",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/473155258",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=731052835",
      },
      {
        icon: "twitter-x",
        link: "https://x.com/qqqqqf5",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "本站源码", link: "https://github.com/kilockok/vitepress-theme-curve", newTab: true },
          { text: "数字分身", link: "https://qqqqqf-q.github.io/Qing-Digital-Self/", newTab: true },
          { text: "freqtrade", link: "https://github.com/freqtrade/freqtrade", newTab: true },
        ],
      },
      {
        text: "专栏",
        items: [
          { text: "技术分享", link: "/pages/categories/技术分享" },
          { text: "我的项目", link: "/pages/project" },
          { text: "效率工具", link: "/pages/tools" },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "畅所欲言", link: "/pages/message" },
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
        ],
      },
      {
        text: "服务",
        items: [
          { text: "站点状态", link: "https://status.清凤.fun/", newTab: true },
          // { text: "一个导航", link: "https://nav.imsyy.top/", newTab: true },
          { text: "站点订阅", link: "https://清凤.fun/rss.xml", newTab: true },
          {
            text: "反馈投诉",
            link: "https://res.abeim.cn/api/qq/?qq=731052835",
            newTab: true,
          },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "清凤小栈",
      server: "https://artalk.xn--l9qq99d.fun:23366",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "这里记录了<strong>清凤</strong>的日常与点滴，也许偶尔会透露一些<strong>crazy</strong>的思绪，还有一些<strong>奇奇怪怪</strong>的东西。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "CakeDay",
        date: "2025-11-15",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  // friends: {
  //   // 友链朋友圈
  //   circleOfFriends: "",
  //   // 动态友链
  //   dynamicLink: {
  //     server: "",
  //     app_token: "",
  //     table_id: "",
  //   },
  // },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
 rewardData: {
  enable: false,
  // 微信二维码
  wechat: "#",
  //   // 支付宝二维码
  alipay: "#",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "3N0a1HWCvYjfeBG7",
  },
};

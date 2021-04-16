module.exports = {
    "title": "Bob's Blog",
    "description": "记录，成为更好的自己",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/logo.png"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        valineConfig: {
            appId: 'avRiUJxDwiJ9uhYDIaMJpOxB-gzGzoHsz', // your appId
            appKey: 'ag4r1ix4kS1tclcYsh4A66U3', // your appKey
        },
        "nav": [{
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Docs",
                "icon": "reco-message",
                "items": [{
                    "text": "vuepress-reco",
                    "link": "/docs/theme-reco/"
                }]
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                    "text": "GitHub",
                    "link": "https://github.com/recoluan",
                    "icon": "reco-github"
                }]
            }
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [{
                "title": "react",
                "desc": "react中文网站",
                "email": "1837639921@qq.com",
                "logo": "/react.jpg",
                "link": "https://react.docschina.org/"
            },
            {
                "title": "vue",
                "desc": "vue官网",
                "logo": "/vue.jpg",
                "avatar": "/vue.jpg",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "Progress every day",
        "authorAvatar": "/avatar.jpg",
        "record": "xxxx",
        "startYear": "2017"
    },
    "markdown": {
        "lineNumbers": true
    },
    "plugins": [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["koharu"],
                clean: false,
                messages: {
                    welcome: '欢迎来到我的博客',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                }
            }
        ],
        ["sakura", { //页面樱花插件
            num: 30, // 默认数量
            show: true,
            zIndex: 2,
            img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
            }
        }],
        ['go-top'],
        ["ribbon-animation", {
            size: 90, // 默认数据
            opacity: 0.3, //  透明度
            zIndex: -1, //  层级
            opt: {
                // 色带HSL饱和度
                colorSaturation: "80%",
                // 色带HSL亮度量
                colorBrightness: "60%",
                // 带状颜色不透明度
                colorAlpha: 0.65,
                // 在HSL颜色空间中循环显示颜色的速度有多快
                colorCycleSpeed: 6,
                // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                verticalPosition: "center",
                // 到达屏幕另一侧的速度有多快
                horizontalSpeed: 200,
                // 在任何给定时间，屏幕上会保留多少条带
                ribbonCount: 2,
                // 添加笔划以及色带填充颜色
                strokeSize: 0,
                // 通过页面滚动上的因子垂直移动色带
                parallaxAmount: -0.5,
                // 随着时间的推移，为每个功能区添加动画效果
                animateSections: true
            },
            ribbonShow: false, //  点击彩带  true显示  false为不显示
            ribbonAnimationShow: true // 滑动彩带
        }]
    ]
}
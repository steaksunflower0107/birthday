// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "希望奥利啾新的一岁呀",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "健康开心，平安喜乐",  // 同上...
        "也要继续朝着自己想成为的啾",
        "一步一脚印迈去！",
        "希望以后的生日呀",
        "我们两个得常常一起过啦~",
        "两年来有可多奥利啾了~",
        "有可爱好玩啾",
        "美美性感啾",
        "气气鼓鼓啾",
        "还有被白辣手摧花的啾~",
        "都是弥足珍贵的呐~",
        "希望今后我们的开心会因彼此而加倍",
        "难过和失意会因彼此而减半",
        "继续一起指教和陪伴下去了！",
        "21岁生日快乐奥利啾啾啾啾啾啾啾啾啾啾啾！！！",
        "继续一起成长叭！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "希望奥利啾新的一岁呀": "./imgs/flowerFace.jpg",
        "健康开心，平安喜乐": "./imgs/gin.jpg",
        "也要继续朝着自己想成为的啾": "./imgs/ideal.jpg",
        "一步一脚印迈去！": "./imgs/hardwork.jpg",
        "希望以后的生日呀": "./imgs/wish.jpg",
        "我们两个得常常一起过啦~": "./imgs/together.jpg",
        "两年来有可多奥利啾了~": "./imgs/pre.jpg",
        "有可爱好玩啾": "./imgs/cute.jpg",
        "美美性感啾": "./imgs/beauty.jpg",
        "气气鼓鼓啾": "./imgs/angry.jpg",
        "还有被白辣手摧花的啾~": "./imgs/horriable.jpg",
        "都是弥足珍贵的呐~": "./imgs/value.jpg",
        "希望今后我们的开心会因彼此而加倍": "./imgs/happy.jpg",
        "难过和失意会因彼此而减半": "./imgs/sad.jpg",
        "继续一起指教和陪伴下去了！": "./imgs/company.jpg",
        "21岁生日快乐奥利啾啾啾啾啾啾啾啾啾啾啾！！！": "./imgs/last.jpg",
        "继续一起成长叭！": "./imgs/grow.jpg",
    },

    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "嘘~小寿星要来啦~",
        play: "嘿嘿，来点氛围感啦！",
        bannar_coming: "是不是太单调了哇>_<？",
        balloons_flying: "美好的心愿都起飞吧~",
        cake_fadein: "小寿星的生日怎么能没有蛋糕咧？^_^",
        light_candle: "快许个愿叭~",
        wish_message: "21岁小寿星！奥~利~啾~！生日快乐！",
        story: "继续点下去叭~*_*"
    },

    // 结束语
    loveText: '喜欢嘿嘿和啾的白~'
};

// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts = [
      {
        date: "Sep 20 2016",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/4.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        author: "林白衣"
      },
      {
        date: "Sep 20 2017",
        title: "唧唧复唧唧",
        imgSrc: "/images/post/sls.jpg",
        avatar: "/images/avatar/5.png",
        content: "唧唧复唧唧,木兰当户织,不闻机杼声,唯闻女叹息,问女何所似问女何所忆,女亦无所思,女亦无所忆,昨日见军帖,可汗大点兵,兵书十二卷,卷卷有爷名,阿爷无大儿,木兰无长兄,宁为市鞍马,从此替爷征.",
        reading: "212",
        collection: "196",
        author: "林白衣"
      }
    ]
    this.setData({
      post_key:posts
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
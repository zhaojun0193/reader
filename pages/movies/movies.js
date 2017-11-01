var app = getApp();
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:{},
    comingSoon:{},
    top250:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var doubanBaseUrl = app.globalData.doubanBaseUrl;

    var pageUrl = '?start=0&count=3';

    //正在热映URL
    var inTheatersUrl = doubanBaseUrl+'/v2/movie/in_theaters';
    //即将上映
    var comingSoonUrl = doubanBaseUrl+'/v2/movie/coming_soon';
    //top250
    var top250Url = doubanBaseUrl+'/v2/movie/top250'; 
    
    this.getMovieListData(inTheatersUrl + pageUrl, 'inTheaters', '正在热映')
    this.getMovieListData(comingSoonUrl + pageUrl,'comingSoon','即将上映')
    this.getMovieListData(top250Url + pageUrl,'top250','Top250')
  },


  getMovieListData: function (url, settdkey, categoryTitle){
    var that = this;
    wx.request({
      url: url,
      data:{},
      method: 'GET',
      header: {
        'Content-Type': 'application/xml'
      },
      success:function(res){
        that.processDoubanData(res.data, settdkey, categoryTitle)
      },
      fail:function(){
        console.log('errors')
      }
    })
  },

  processDoubanData:function(moviesDouban, settdkey, categoryTitle){
    var movies = [];
    for(var index in moviesDouban.subjects){
      var subject = moviesDouban.subjects[index];
      var title = subject.title;
      if(title.length >=6 ){
        title = title.substring(0,6)+'...';
      } 

      var temp = {
        stars: util.converToStarsArray(subject.rating.stars),
        title : title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        id : subject.id
      }
      movies.push(temp)
    }

    /**
     * ----
     */
    var readData = {};
    readData[settdkey] = {
      categoryTitle: categoryTitle,
      movies:movies
    };
    this.setData(readData);

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
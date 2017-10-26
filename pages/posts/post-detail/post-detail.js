var postData = require('../../../data/posts-data.js')
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
    var postId = options.id;
    this.data.postId = postId; 
    var detail = postData.postList[postId];
    // console.log(data);
    this.setData({
      postData : detail 
    });

    //获取文章是否被收藏
    var postsCollected = wx.getStorageSync('posts_collected');
    //判断是否有缓存
    if(postsCollected){
      this.setData({
        collected: postsCollected[this.data.postId]
      })
    }else{
      postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }
  },

 //收藏事件
  onCollectedTap:function(){
    // console.log('collect')
    //判断当前文章是否被收藏
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.postId];
    console.log(postCollected)
    postCollected = !postCollected;
    postsCollected[this.data.postId] = postCollected;
    wx.setStorageSync('posts_collected', postsCollected);
    this.setData({
      collected: postCollected
    })

    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功'
    })
    
  }
})
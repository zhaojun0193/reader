var postData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic : false
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
    
  },

  //分享事件
  onShareTap:function(){
    // var shareList = [
    //   '分享给朋友',
    //   '分享到群聊'
    // ]
    // wx.showActionSheet({
    //   itemList: shareList,
    //   itemColor: '#405f80'
    // })
    this.onShareAppMessage();
  },
  onShareAppMessage:function(){
    return {
      title: this.data.postData.title,
      desc: this.data.postData.title,
      path: '/pages/posts/post-detail/post-detail?id=' + this.data.postId,
    }
  },

  //音乐播放事件
  musicTap:function(){
    var isPlayMusic = this.data.isPlayingMusic;
    var postData = this.data.postData;
    // console.log(postData);
    if(isPlayMusic){
      //暂停音乐播放
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic : false
      })
    }else{
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})
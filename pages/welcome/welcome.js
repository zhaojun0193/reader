Page({
  onTap:function(){
    // wx.navigateTo({
    //   url: '../posts/post',
    // });
    //跳转带有tab页的页面 需要使用wx.switchTab()方法
    wx.switchTab({
      url: '../posts/post',
    })
  }
})
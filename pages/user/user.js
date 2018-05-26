// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: getApp().globalData.bg0,
    imageUrl:'../../icon/user.png',
    wdl:false,
    ydl:true,
    img:''

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log('onload')
var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (e) {
        console.log(e)
        that.setData({
          wdl: true,
          ydl: false,
         
          imageUrl: e.data.avatarUrl
          

        })
      },
  
    })
  
  },
 
  login:function(e){
    var that = this
    
    
    
    
    wx.navigateTo({
      url: '/pages/index/index?bg=' + that.data.bg,
    })
  },

  
   


 


  set_bg: function (e) {
    var that = this
    wx.navigateTo({
      url: '/pages/choose_bg/choose_bg'
    })
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
    var that = this
    console.log('onshow')
    wx.getStorage({
      key: 'userInfo',
      success: function (e) {
        console.log(e)
        that.setData({
          wdl: true,
          ydl: false,
          imageUrl: e.data.avatarUrl

        })
      }
    })
  
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
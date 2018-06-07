// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imageUrl: '../../icon/user.png',
    wdl: false,
    ydl: true,
    img: '',
    name: '',
    login: false,
    loginout: true


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (e) {
        console.log(e)
        that.setData({
          wdl: true,
          ydl: false,

          imageUrl: e.data.avatarUrl,
          name: e.data.nickName,
          login: true,
          loginout: false
        })
      },

    })

  },

  login: function (e) {
    var that = this
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },


  logout: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '退出后，将无法查询课表哦！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.setData({

            imageUrl: '../../icon/user.png',
            name: '',

            login: false,
            loginout: true

          })
          wx.clearStorage();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
          imageUrl: e.data.avatarUrl,
          login: true,
          loginout: false

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
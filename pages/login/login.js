var app = getApp();
Page({

  data: {
    school: '',
    school_num: '',
    school_pas: '',
    varify: '',
    url: '',
    list: '',
    name: '',
  },


  onLoad: function (e) {
    //console.log(e)
    var that = this
    wx.showToast({
      title: '登录信息是你的学号和教务密码！',
      icon: 'none',
      duration: 2000
    })
    that.setData({
      school: e.school,
    })
    if (that.data.school == '沈阳化工大学') {
      wx.request({
        url: 'https://edu.proflu.cn/syuct',
        header: {
          'content-type': 'application/octet-stream',
        },
        success: function (e) {
          console.log(e)
          that.setData({
            url: e.data
          })
        }
      })
    }else{
      wx.request({
        url: 'https://edu.proflu.cn/xpu',
        header: {
          'content-type': 'application/octet-stream',
        },
        success: function (e) {
          console.log(e)
          that.setData({
            url: e.data
          })
        }
      })

    }
  },
  bindKeyInput1: function (e) {
    var that = this
    that.setData({
      school_num: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    var that = this
    that.setData({
      school_pas: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    var that = this
    that.setData({
      varify: e.detail.value
    })

  },

  getUserInfo: function (e) {
    var that = this
    var user = e.detail.userInfo
    if (that.data.school == '沈阳化工大学') {
      wx.showLoading({
        title: '登录中',
      })
      wx.request({
        url: 'https://edu.proflu.cn/syuct', 
        method: 'POST',
        data: {
          user: that.data.school_num,
          password: that.data.school_pas,
          yzm: that.data.varify,
          file:that.data.url
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (e) {
          wx.hideLoading()
          console.log(e)
          if (e.data == '用户名或密码错误') {
            wx.showModal({ title: '登录失败', content: '请检查信息，重新输入', showCancel: false })
          }
          else {
            wx.showToast({ title: '已登录', icon: 'success', duration: 1500 });
            that.setData({
              list: e.data
            })
            wx.setStorage({
              key: 'userInfo',
              data: user
            })
            wx.setStorageSync('list', that.data.list)
            wx.switchTab({
              // url: '/pages/schedule/schedule'
              url: '/pages/user/user'

            })

          }
        },
        fail: function (e) {
          wx.hideLoading()
          console.log('请求不成功' + e)
          wx.showModal({ title: '登录失败', content: '请检查网络设置!', showCancel: false });
        }

      })
    } else {
      wx.showLoading({
        title: '登录中',
      })

      wx.request({
        url: 'https://edu.proflu.cn/xpu',
        data: {
          user: that.data.school_num,
          password: that.data.school_pas,
          yzm: that.data.varify,
          file: that.data.url
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'// 默认值
        },

        success: function (e) {
          wx.hideLoading()
          console.log(e)
          if (e.data == '用户名或密码错误') {
            wx.showModal({ title: '登录失败', content: '请检查信息，重新输入', showCancel: false })
          }
          else {
            wx.showToast({ title: '已登录', icon: 'success', duration: 1500 });
            that.setData({
              list: e.data
            })
            wx.setStorage({
              key: 'userInfo',
              data: user
            })
            wx.setStorageSync('list', that.data.list)
            wx.switchTab({
              // url: '/pages/schedule/schedule'
              url: '/pages/user/user'

            })

          }
        },
        fail: function (e) {
          wx.hideLoading()
          wx.hideLoading()
          console.log('请求不成功' + e)
          wx.showModal({ title: '登录失败', content: '请检查网络设置!', showCancel: false });
        }

      })
    }

  },
  cancel: function (e) {
    wx.switchTab({
      url: '/pages/user/user'
    })
  }
})
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录

    // wx.login({
    //   success: function (loginCode) {
    //     var appid = 'wx6dcff2f0f1a73aeb'; //填写微信小程序appid  
    //     var secret = 'd0347ee63b4454fa34d3b38b667c3e5f'; //填写微信小程序secret  

    //     //调用request请求api转换登录凭证  
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx6dcff2f0f1a73aeb&secret=d0347ee63b4454fa34d3b38b667c3e5f&grant_type=authorization_code&js_code=' + loginCode.code,
    //       header: {
    //         'content-type': 'application/json'
    //       },
    //       success: function (res) {
    //         console.log(res.data.openid) //获取openid  
    //         wx.setStorageSync('openid', res.data.openid)
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6dcff2f0f1a73aeb&secret=d0347ee63b4454fa34d3b38b667c3e5f',
    //   success: function (e) {
    //     console.log(e)
    //     wx.setStorageSync('access_token', e.data.access_token)
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,

  }
})
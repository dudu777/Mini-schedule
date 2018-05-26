var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: '',
    school_num: '',
    school_pas: '',
    varify: '',
    url: '',
    list: '',
    bg: getApp().globalData.bg0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    var that = this

    that.setData({
      school: e.school,
      url: 'http://202.199.115.46/(ww2obv451xzcpd45tywivv55)/CheckCode.aspx',
      bg: e.bg
    })

    if (that.data.school == '沈阳化工大学') {

      //console.log('请求沈阳化工大学接口')

    } else {
      //请求先工程大学接口
      // wx.request({
      //   url: '',
      // })
      console.log('请求先工程大学接口')
    }
  },
  bindKeyInput1: function (e) {
    console.log(e)

    var that = this

    that.setData({
      school_num: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    console.log(e)
    var that = this
    that.setData({
      school_pas: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    console.log(e)
    var that = this

    // if (e.detail.value.length < 4) {
    //   wx.showModal({
    //     content: '请输入正确的验证码',
    //     success: function (res) {
    //       if (res.confirm) {
    //         console.log('用户点击确定')
    //         that.setData({
    //           url: 'http://202.199.115.46/(ww2obv451xzcpd45tywivv55)/CheckCode.aspx'
    //         })
    //       } else if (res.cancel) {
    //         console.log('用户点击取消')
    //       }
    //     }
    //   })
    // } else {
      that.setData({
        varify: e.detail.value
      })

    // }
  },
  getUserInfo: function (e) {
    console.log(e)

    var that = this
    var user = e.detail.userInfo

    wx.navigateTo({
      url: '/pages/index/index?bg=' + that.data.bg + '&user=' + user,


    })




  },
  getUserInfo: function (e) {
    var that = this
    var user = e.detail.userInfo
    if (that.data.school == '沈阳化工大学') {
      wx.request({
        url: 'http://edu.proflu.cn/syuct',

        method: 'POST',
        data: {
          user: '1621040218',
          password: 'jingxin123...',
          yzm: that.data.varify
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (e) {
          console.log(e.statusCode )
          if (e.statusCode == 200) {


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
            that.getuserInfo()

          } else {
            console.log('更新页面重新输入')

          }


        },

      })


    } else {

      wx.request({
        url: 'http://edu.proflu.cn/xpu',
        data: {
          user: '41603030130',
          password: 'dupingping1215',
          yzm: that.data.varify
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },

        success: function (e) {
          if (e.statusCode == 200) {

            that.setData({
              list: e.data
            })
            wx.setStorage({
              key: 'userInfo',
              data: user
            })
            wx.setStorageSync('list', that.data.list)
            wx.switchTab({
              url: '/pages/user/user'

            })

          } else {
            console.log('更新页面重新输入')

    
          }



        }





        })
    




  
  }











},
  
  

})
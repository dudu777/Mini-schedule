var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    // wlist: [
    //   { "xqj": 1, "skjc": 1, "skcd": 2, "kcmc": "创业基础@6#303" },
    //   { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 2, "skjc": 1, "skcd": 2,"kcmc":"高等数学@教A-301"},
    //   { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
    //   { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学@教A-301" },

    //   { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },





    // ],

  },
  onLoad: function (e) {

    var that = this


    wx.getStorage({
      key: 'list',
      success: function (e) {
        console.log(e)

        wx.showLoading({
          title: '加载中',
          mask: true
        })
        var list = wx.getStorageSync('list')
        setTimeout(function () {
          that.setData({
            wlist: [
              { "xqj": 1, "skjc": 1, "skcd": 2, "kcmc": list.Monday[1].name + list.Monday[1].local },
              { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": list.Monday[2].name + list.Monday[2].local },
              { "xqj": 1, "skjc": 5, "skcd": 2, "kcmc": list.Monday[3].name + list.Monday[3].local },
              { "xqj": 1, "skjc": 7, "skcd": 2, "kcmc": list.Monday[4].name + list.Monday[4].local },

              { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": list.Tuesday[1].name + list.Tuesday[1].local },
              { "xqj": 2, "skjc": 3, "skcd": 2, "kcmc": list.Tuesday[2].name + list.Tuesday[2].local },
              { "xqj": 2, "skjc": 5, "skcd": 2, "kcmc": list.Tuesday[3].name + list.Tuesday[3].local },
              { "xqj": 2, "skjc": 7, "skcd": 2, "kcmc": list.Tuesday[4].name + list.Tuesday[4].local },

              { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": list.Wednesday[1].name + list.Wednesday[1].local },

              { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": list.Wednesday[1].name + list.Wednesday[1].local },

              { "xqj": 4, "skjc": 1, "skcd": 2, "kcmc": list.Thursday[1].name + list.Thursday[1].local },
              { "xqj": 4, "skjc": 3, "skcd": 2, "kcmc": list.Thursday[2].name + list.Thursday[2].local },
              { "xqj": 4, "skjc": 5, "skcd": 4, "kcmc": list.Thursday[3].name + list.Thursday[3].local },

              { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": list.Friday[1].name + list.Friday[1].local },
              { "xqj": 5, "skjc": 3, "skcd": 2, "kcmc": list.Friday[2].name + list.Friday[2].local },
              { "xqj": 5, "skjc": 5, "skcd": 2, "kcmc": list.Friday[3].name + list.Friday[3].local },
              { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": list.Friday[4].name + list.Friday[4].local },
              { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": list.Friday[4].name + list.Friday[4].local },

            ]
          })
        }, 200)
        setTimeout(function () {
          wx.hideLoading()
        }, 200)
      },
      fail: function (e) {
        console.log('12')
        wx.showModal({
          title: '提示',
          content: '登录之后，才可查成绩哦！',
          confirmText:'去登陆',
          
          success: function (res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/user/user'

              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  onShow: function () {
    var that = this
    console.log('onshow')

    wx.getStorage({
      key: 'list',
      success: function (e) {
        console.log(e)

        // wx.showLoading({
        //   title: '加载中',
        //   mask: true
        // })

        var list = wx.getStorageSync('list')

        console.log(list.Monday[1].name)

        // setTimeout(function () {
          that.setData({
            wlist: [
              { "xqj": 1, "skjc": 1, "skcd": 2, "kcmc": list.Monday[1].name + list.Monday[1].local },
              { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": list.Monday[2].name + list.Monday[2].local },
              { "xqj": 1, "skjc": 5, "skcd": 2, "kcmc": list.Monday[3].name + list.Monday[3].local },
              { "xqj": 1, "skjc": 7, "skcd": 2, "kcmc": list.Monday[4].name + list.Monday[4].local },

              // {"xqj": 1, "skjc": 9, "skcd": 2, "kcmc": e.data.Monday[5].name + e.data.Monday[5].local},


















              {
                "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": list.Tuesday[1].name + list.Tuesday[1].local
              },
              { "xqj": 2, "skjc": 3, "skcd": 2, "kcmc": list.Tuesday[2].name + list.Tuesday[2].local },
              { "xqj": 2, "skjc": 5, "skcd": 2, "kcmc": list.Tuesday[3].name + list.Tuesday[3].local },
              { "xqj": 2, "skjc": 7, "skcd": 2, "kcmc": list.Tuesday[4].name + list.Tuesday[4].local },









              { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": list.Wednesday[1].name + list.Wednesday[1].local },

              { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": list.Wednesday[1].name + list.Wednesday[1].local },











              { "xqj": 4, "skjc": 1, "skcd": 2, "kcmc": list.Thursday[1].name + list.Thursday[1].local },
              { "xqj": 4, "skjc": 3, "skcd": 2, "kcmc": list.Thursday[2].name + list.Thursday[2].local },
              { "xqj": 4, "skjc": 5, "skcd": 4, "kcmc": list.Thursday[3].name + list.Thursday[3].local },




              { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": list.Friday[1].name + list.Friday[1].local },
              { "xqj": 5, "skjc": 3, "skcd": 2, "kcmc": list.Friday[2].name + list.Friday[2].local },
              { "xqj": 5, "skjc": 5, "skcd": 2, "kcmc": list.Friday[3].name + list.Friday[3].local },
              { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": list.Friday[4].name + list.Friday[4].local },
              { "xqj": 5, "skjc": 7, "skcd": 2, "kcmc": list.Friday[4].name + list.Friday[4].local },




            ]

          })
        // }, 2000)
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 2000)


      },
      fail: function (e) {
        console.log('12')



      }


    })




  }
})

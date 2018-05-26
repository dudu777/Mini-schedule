var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '沈阳化工大学' },
      {value: '西安工程大学' }
    ],
    school:'',
    bg: getApp().globalData.bg0
  },

  onLoad: function (e) {
  
    console.log(e)
    var that = this
    that.setData({
      bg:e.bg
    })

    
  },

  //选择学校
  radioChange: function (e) {
    var that = this
    //console.log( e.detail.value)
    that.setData({
      school: e.detail.value
    })
   // console.log(that.data.school)
  },

//确认信息
sure:function(e){
  var that =this
  wx.navigateTo({
    url: '/pages/login/login?school='+that.data.school+'&pg='+that.data.bg,
  })
}
 
 
})
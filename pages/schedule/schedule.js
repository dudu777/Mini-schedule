// pages/schedule/schedule.js
import * as dateUtil from '../../utils/date'
import { getInArray, indexOfArray } from '../../utils/util'
let app = getApp()
let today = new Date()
let curFirstWeekDate // 当前周的第一天
let weekInfoList // 周信息列表
let curWeekIndex // 当前周索引
let weekCourseList // 周课程列表
let formatWeekDate = function (date) {
  return date.getDate() + '日'
}

Page({

  data: {
    todayIndex: -1, // 当天索引0-6，-1表示不在当前周
    curMonth: '', // 当前月份
    curWeek: '', // 当前周数
    curweek: '',
    curTitle: '', // 当前周标题
    weekLabels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    weekDates: [], // 周日期列表
    tasklist: [],// 课程列表
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"], 
    access_token: wx.getStorageSync('access_token'),
    // local_time:new Data(),
    // local_week:''

  },

  /**
   * 上一周
   */
  prevWeekHandler: function (event) {
    this.updateWeeks(dateUtil.getDiffDate(curFirstWeekDate, -7))
  },

  /**
   * 下一周
   */
  nextWeekHandler: function (event) {
    this.updateWeeks(dateUtil.getDiffDate(curFirstWeekDate, 7))
  },
  share:{



  },

  /**
   * 反馈
   */
  feedbackHandler: function (event) {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  //上课提醒
  // message:function(e){
  //   var that = this
  //   wx.request({
  //     url: 'https://api.weixin.qq.com/cgi-bin/wxopen/template/list?access_token='+that.data.access_token,
  //     method:'POST',
  //     data: {
  //       "offset": 0,
  //       "count": 5
  //     },
  //     success:function(e){
  //       console.log(e)
  // //发送模板消息
  // wx.request({
  //   url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+that.data.access_token,
  //   method:'POST',
  //   data: {
  //     touser: wx.getStorageSync('openid'),
  //     template_id: "HkRWIsWoxyhsqkCxA3jHvi76h_lT30smLkR7SiZ3e3s",

  //   page: "index",
  //   form_id: "FORMID",
  //   data: {
  //       keyword1: {
  //         "value": "339208499"
  //       },
  //       "keyword2": {
  //         "value": "2015年01月05日 12:30"
  //       },
  //       "keyword3": {
  //         "value": "粤海喜来登酒店"
  //       },
  //       "keyword4": {
  //         "value": "广州市天河区天河路208号"
  //       }
  //     },
  //     "emphasis_keyword": "keyword1.DATA",
  //     "page": "index",
  //     "form_id": "FORMID",
  //     "data": {
  //       "keyword1": {
  //         "value": "339208499"
  //       },
  //       "keyword2": {
  //         "value": "2015年01月05日 12:30"
  //       },
  //       "keyword3": {
  //         "value": "粤海喜来登酒店"
  //       },
  //       "keyword4": {
  //         "value": "广州市天河区天河路208号"
  //       }
  //     },
  //     "emphasis_keyword": "keyword1.DATA"},
  //     success:function(e){
  //       console.log(e)
  //     }

  // })

  //     }
  //   })
  // },

  updateWeeks: function (date) {
    var that = this
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.getStorage({
      key: 'list',
      success: function (e) {
        wx.hideLoading()
        //是否当前天
        let todayIndex = -1
        if (date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && dateUtil.getMonthWeekth(date) == dateUtil.getMonthWeekth(today)) {
          todayIndex = dateUtil.formatWeekOrder(today.getDay())
        }

        // 获取当前周日期
        curFirstWeekDate = dateUtil.getWeekFirstDate(date)
        let curMonth = curFirstWeekDate.getMonth() + 1
        let weekDates = []
        let tmpFirstDate = new Date(curFirstWeekDate)
        for (var i = 0; i < 7; i++) {
          if (i == 0) {
            weekDates.push(formatWeekDate(curFirstWeekDate))
          } else {
            weekDates.push(formatWeekDate(dateUtil.getDiffDate(tmpFirstDate, 1)))
          }
        }
        let curWeek = '第' + dateUtil.getYearWeekth(date) + '周'
        let curTitle = '17-18学年春季'
        let curweek = dateUtil.getYearWeekth(date)
        var list = wx.getStorageSync('list')
        let tasklist = weekCourseList = [

          { id: 0, day: 0, start: 1, sections: 2, course: list.Monday[1].name, place: list.Monday[1].local, lstart: list.Monday[1].week_start, lend: list.Monday[1].week_end, is_week: list.Monday[1].is_weeks },
          { id: 1, day: 0, start: 3, sections: 2, course: list.Monday[2].name, place: list.Monday[2].local, lstart: list.Monday[2].week_start, lend: list.Monday[2].week_end, is_week: list.Monday[2].is_weeks },
          { id: 2, day: 0, start: 5, sections: 2, course: list.Monday[3].name, place: list.Monday[3].local, lstart: list.Monday[3].week_start, lend: list.Monday[3].week_end, is_week: list.Monday[3].is_weeks },
          { id: 3, day: 0, start: 7, sections: 2, course: list.Monday[4].name, place: list.Monday[4].local, lstart: list.Monday[4].week_start, lend: list.Monday[4].week_end, is_week: list.Monday[4].is_weeks },
          { id: 4, day: 0, start: 9, sections: 2, course: list.Monday[5].name, place: list.Monday[5].local, lstart: list.Monday[5].week_start, lend: list.Monday[5].week_end, is_week: list.Monday[5].is_weeks },


          { id: 5, day: 1, start: 1, sections: 2, course: list.Tuesday[1].name, place: list.Tuesday[1].local, lstart: list.Tuesday[1].week_start, lend: list.Tuesday[1].week_end, is_week: list.Tuesday[1].is_weeks },
          { id: 6, day: 1, start: 3, sections: 2, course: list.Tuesday[2].name, place: list.Tuesday[2].local, lstart: list.Tuesday[2].week_start, lend: list.Tuesday[2].week_end, is_week: list.Tuesday[2].is_weeks },
          { id: 7, day: 1, start: 5, sections: 2, course: list.Tuesday[3].name, place: list.Tuesday[3].local, lstart: list.Tuesday[3].week_start, lend: list.Tuesday[3].week_end, is_week: list.Tuesday[3].is_weeks },

          { id: 8, day: 1, start: 7, sections: 2, course: list.Tuesday[4].name, place: list.Tuesday[4].local, lstart: list.Tuesday[4].week_start, lend: list.Tuesday[4].week_end, is_week: list.Tuesday[4].is_weeks },

          { id: 9, day: 1, start: 9, sections: 2, course: list.Tuesday[5].name, place: list.Tuesday[5].local, lstart: list.Tuesday[5].week_start, lend: list.Tuesday[5].week_end, is_week: list.Tuesday[5].is_weeks },



          { id: 10, day: 2, start: 1, sections: 2, course: list.Wednesday[1].name, place: list.Wednesday[1].local, lstart: list.Wednesday[1].week_start, lend: list.Wednesday[1].week_end, is_week: list.Wednesday[1].is_weeks },
          { id: 11, day: 2, start: 3, sections: 2, course: list.Wednesday[2].name, place: list.Wednesday[2].local, lstart: list.Wednesday[2].week_start, lend: list.Wednesday[2].week_end, is_week: list.Wednesday[2].is_weeks },
          { id: 12, day: 2, start: 5, sections: 2, course: list.Wednesday[3].name, place: list.Wednesday[3].local, lstart: list.Wednesday[3].week_start, lend: list.Wednesday[3].week_end, is_week: list.Wednesday[3].is_weeks },
          { id: 13, day: 2, start: 7, sections: 2, course: list.Wednesday[4].name, place: list.Wednesday[4].local, lstart: list.Wednesday[4].week_start, lend: list.Wednesday[4].week_end, is_week: list.Wednesday[4].is_weeks },
          { id: 14, day: 2, start: 9, sections: 2, course: list.Wednesday[5].name, place: list.Wednesday[5].local, lstart: list.Wednesday[5].week_start, lend: list.Wednesday[5].week_end, is_week: list.Wednesday[5].is_weeks },

          { id: 15, day: 3, start: 1, sections: 2, course: list.Thursday[1].name, place: list.Thursday[1].local, lstart: list.Thursday[1].week_start, lend: list.Thursday[1].week_end, is_week: list.Thursday[1].is_weeks },
          { id: 16, day: 3, start: 3, sections: 2, course: list.Thursday[2].name, place: list.Thursday[2].local, lstart: list.Thursday[2].week_start, lend: list.Thursday[2].week_end, is_week: list.Thursday[2].is_weeks },
          { id: 17, day: 3, start: 5, sections: 2, course: list.Thursday[3].name, place: list.Thursday[3].local, lstart: list.Thursday[3].week_start, lend: list.Thursday[3].week_end, is_week: list.Thursday[3].is_weeks },
          { id: 18, day: 3, start: 7, sections: 2, course: list.Thursday[4].name, place: list.Thursday[4].local, lstart: list.Thursday[4].week_start, lend: list.Thursday[4].week_end, is_week: list.Thursday[4].is_weeks },
          { id: 19, day: 3, start: 9, sections: 2, course: list.Thursday[5].name, place: list.Thursday[5].local, lstart: list.Thursday[5].week_start, lend: list.Thursday[5].week_end, is_week: list.Thursday[5].is_weeks },

          { id: 20, day: 4, start: 1, sections: 2, course: list.Friday[1].name, place: list.Friday[1].local, lstart: list.Friday[1].week_start, lend: list.Friday[1].week_end, is_week: list.Friday[1].is_weeks },
          { id: 21, day: 4, start: 3, sections: 2, course: list.Friday[2].name, place: list.Friday[2].local, lstart: list.Friday[2].week_start, lend: list.Friday[2].week_end, is_week: list.Friday[2].is_weeks },
          { id: 22, day: 4, start: 5, sections: 2, course: list.Friday[3].name, place: list.Friday[3].local, lstart: list.Friday[3].week_start, lend: list.Friday[2].week_end, is_week: list.Friday[3].is_weeks },
          { id: 23, day: 4, start: 7, sections: 2, course: list.Friday[4].name, place: list.Friday[4].local, lstart: list.Friday[4].week_start, lend: list.Friday[4].week_end, is_week: list.Friday[4].is_weeks },
          { id: 24, day: 4, start: 9, sections: 2, course: list.Friday[5].name, place: list.Friday[5].local, lstart: list.Friday[5].week_start, lend: list.Friday[5].week_end, is_week: list.Friday[5].is_weeks },

          { id: 25, day: 5, start: 1, sections: 2, course: list.Saturday[1].name, place: list.Saturday[1].local, lstart: list.Saturday[1].week_start, lend: list.Saturday[1].week_end, is_week: list.Saturday[1].is_weeks },
          { id: 26, day: 5, start: 3, sections: 2, course: list.Saturday[2].name, place: list.Saturday[2].local, lstart: list.Saturday[2].week_start, lend: list.Saturday[2].week_end, is_week: list.Saturday[2].is_weeks },
          { id: 27, day: 5, start: 5, sections: 2, course: list.Saturday[3].name, place: list.Saturday[3].local, lstart: list.Saturday[3].week_start, lend: list.Saturday[3].week_end, is_week: list.Saturday[3].is_weeks },
          { id: 28, day: 5, start: 7, sections: 2, course: list.Saturday[4].name, place: list.Saturday[4].local, lstart: list.Saturday[4].week_start, lend: list.Saturday[4].week_end, is_week: list.Saturday[4].is_weeks },
          { id: 29, day: 5, start: 9, sections: 2, course: list.Saturday[5].name, place: list.Saturday[5].local, lstart: list.Saturday[5].week_start, lend: list.Saturday[5].week_end, is_week: list.Saturday[5].is_weeks },


          { id: 30, day: 6, start: 1, sections: 2, course: list.Sunday[1].name, place: list.Sunday[1].local, lstart: list.Sunday[1].week_start, lend: list.Sunday[1].week_end, is_week: list.Sunday[1].is_weeks },
          { id: 31, day: 6, start: 3, sections: 2, course: list.Sunday[2].name, place: list.Sunday[2].local, lstart: list.Sunday[2].week_start, lend: list.Sunday[2].week_end, is_week: list.Sunday[2].is_weeks },
          { id: 32, day: 6, start: 5, sections: 2, course: list.Sunday[3].name, place: list.Sunday[3].local, lstart: list.Sunday[3].week_start, lend: list.Sunday[3].week_end, is_week: list.Sunday[3].is_weeks },
          { id: 33, day: 6, start: 7, sections: 2, course: list.Sunday[4].name, place: list.Sunday[4].local, lstart: list.Sunday[4].week_start, lend: list.Sunday[4].week_end, is_week: list.Sunday[4].is_weeks },
          { id: 34, day: 6, start: 9, sections: 2, course: list.Sunday[5].name, place: list.Sunday[5].local, lstart: list.Sunday[5].week_start, lend: list.Sunday[5].week_end, is_week: list.Sunday[5].is_weeks },
        ]

        that.setData({
          todayIndex,
          curMonth,
          curWeek,
          curweek,
          weekDates,
          curTitle,
          tasklist
        })
        console.log(list.Tuesday[4].name)
      },
      fail: function (e) {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '登录之后，才可查成绩哦！',
          confirmText: '去登陆',
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
    wx.showLoading({
      title: '加载中',
    })
    this.updateWeeks(today)
  }

})
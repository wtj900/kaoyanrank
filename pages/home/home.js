// pages/home/home.js

var userinfo = wx.getStorageSync('userinfo')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: userinfo,
    isLogin: false
  },
  onGetUserInfo: function(e) {
    wx.setStorageSync('userinfo', e.detail.userInfo)
    this.setData({
      isLogin: true,
      userinfo: e.detail.userInfo
    })
    wx.setNavigationBarTitle({
      title: '中公考研排名'
    })
  },
  goToEstimate: function() {
    wx.removeStorageSync('userinfo')
    this.setData({
      isLogin: false,
      userinfo: null
    })
    wx.setNavigationBarTitle({
      title: '微信登录'
    })
    console.log("goToEstimate");
  },
  goToGetCourse: function() {
    console.log("goToGetCourse");
  },
  goToInterviewGroup: function() {
    console.log("goToInterviewGroup");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (userinfo) {
      wx.setNavigationBarTitle({
        title: '中公考研排名'
      })
      this.setData({
        isLogin: true
      })
    } else {
      wx.setNavigationBarTitle({
        title: '微信登录'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log(userinfo)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
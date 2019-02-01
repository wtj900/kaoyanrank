// pages/home/home.js

const userinfo = wx.getStorageSync('userinfo')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: userinfo
  },

  changeUserInfo(userinfo) {
    this.setData({
      userinfo: userinfo
    })
    wx.setNavigationBarTitle({
      title: userinfo == null ? '微信登录' : '中公考研排名'
    })
  },

  /**
   * 登录，获取用户信息
   */
  onGetUserInfo: function(e) {
    wx.setStorageSync('userinfo', e.detail.userInfo)
    this.changeUserInfo(e.detail.userInfo);
  },

  /**
   * 估分排名
   */
  goToEstimate: function() {
    wx.removeStorageSync('userinfo')
    this.changeUserInfo(null);
    console.log("goToEstimate");
  },

  /**
   * 领取推荐课程
   */
  goToGetCourse: function() {
    console.log("goToGetCourse");
  },

  /**
   * 各省复试群
   */
  goToInterviewGroup: function() {
    console.log("goToInterviewGroup");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.changeUserInfo(userinfo)
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
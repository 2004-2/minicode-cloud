// miniprogram/pages/userCenter/userCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // userInfo authorization status
    userInfoAuthed: false,
    // userInfo
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.setData({
            userInfoAuthed: true
          })
          wx.getUserInfo({
            success(res) {
              // load userInfo onLoad if user has authorized before
              that.setData({
                userInfo: res.userInfo
              })
              console.log(res.userInfo)
            }
          })
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
   * update userInfo onShow
   */
  onShow: function () {
    let that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        // if userInfo is not authorized, reset userInfo
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            userInfoAuthed: false,
            userInfo: {}
          })
        }
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

  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    // update userInfo and auth status
    this.setData({
      userInfoAuthed: true,
      userInfo: e.detail.userInfo
    })
  },

  openAuthSetting() {
    wx.openSetting()
  },

  showClearDataDialog() {
    wx.showModal({
      title: "清除数据",
      content: "确认要清除该账户的所有数据吗？",
      success(res) {
        if (res.confirm) {
          console.log("confirm")
        } else {
          console.log("cancel")
        }
      }
    })
  }
})
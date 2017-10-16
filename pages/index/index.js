//index.js
//获取应用实例
var app = getApp();
var touchStartPos = [];
Page({
  data: {
    motto: 'Hello World 测试',
    userInfo: {},
    podcastList: [],
    hideSearchCancel: true,
    hideSearchClear: true,
    searchInputValue: '',
    searchInputFocus: false
  },
  //事件处理函数
  openno1: function(){
    console.log("open no1");
    wx.navigateTo({
      url: '../no1/no1'
    })
  },

})

// test1
// test2

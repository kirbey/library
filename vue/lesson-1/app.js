var app = new Vue({
  el:'#app',
  data:{
    name: "许爸爸",
    age: "30",
    website: "http://www.baidu.com",
    websiteTag: "<a href='http://www.baidu.com'>百度</a>"
  },
  methods:{
    greet: function(time){
      return 'good' + ' ' + time + ' ' + this.name + '!'
    },
    add: function(inc){
      this.age += inc;
    },
    sebtrate: function(dec){
      this.age -= dec;
    }
  }
})
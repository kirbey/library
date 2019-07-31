var app = new Vue({
  el:'#app',
  data:{
    name: "许爸爸"
  },
  methods:{
    greet: function(time){
      return 'good' + ' ' + time + ' ' + this.name + '!'
    }
  }
})
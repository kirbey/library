let n
初始化()
setInterval(() =>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current enter').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave current').addClass('enter')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter leave').addClass('current')
  n += 1
  console.log(n)
},1000)

function x(n){
  if(n>3){
    n = n%3
    if (n === 0){
      n = 3
    }
  }
  return n
}

function 初始化(){
  n = 1
  $(`.images > img:nth-child(1)`).addClass('current')
    .siblings().addClass('enter')
}
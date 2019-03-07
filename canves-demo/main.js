var yyy = document.getElementById('xxx');

setCanvasSize()

window.onresize = function(){
  setCanvasSize()
}
function setCanvasSize(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  yyy.width = pageWidth
  yyy.height = pageHeight
}

var eraserEnabled = false
eraser.onclick = function(){
  eraserEnabled = true
  actions.className = 'actions x'
}
brush.onclick = function(){
  eraserEnabled = false
  actions.className = 'actions'
}

listenToUser(yyy)
function listenToUser(canvas){
  var context = canvas.getContext('2d');

  var using = false
  var lastPoint = {x: undefined, y: undefined}
  if(document.body.ontouchstart !== undefined){
    canvas.ontouchstart = function(aaa){
      console.log('开始摸我了')
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      using = true
      if (eraserEnabled) {
  
        context.clearRect(x-5, y-5, 10, 10)
      }else{
  
        lastPoint = {"x":x, "y":y}
      }
    }
    canvas.ontouchmove = function(aaa){
      console.log('move')
      var x = aaa.clientX
      var y = aaa.clientY
      if (!using){return}
   
      if(eraserEnabled){  
   
        context.clearRect(x-5, y-5, 10, 10)
   
      }else{ 
        var newPoint = {"x":x, "y":y}
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(aaa){
      using = false
    }
     function drawCircle(x, y, radius){
      context.beginPath()
      context.fillStyle = 'black'
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }
  
  
    function drawLine(x1,y1,x2,y2){
      context.beginPath();
      context.strokeStyle = 'black'
      context.moveTo(x1,y1)
      context.lineWidth = 5
      context.lineTo(x2,y2)
      context.stroke()
      context.closePath()
    }
  }else{
    canvas.onmousedown = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if (eraserEnabled) {
  
        context.clearRect(x-5, y-5, 10, 10)
      }else{
  
        lastPoint = {"x":x, "y":y}
      }
    }
    canvas.onmousemove = function(aaa){
      var x = aaa.clientX
      var y = aaa.clientY
      if (!using){return}
  
      if(eraserEnabled){  
  
        context.clearRect(x-5, y-5, 10, 10)
  
      }else{
  
        var newPoint = {"x":x, "y":y}
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
  
      }
    }
    canvas.onmouseup = function(aaa){
      using = false
    }
    function drawCircle(x, y, radius){
      context.beginPath()
      context.fillStyle = 'black'
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }
  
  
    function drawLine(x1,y1,x2,y2){
      context.beginPath();
      context.strokeStyle = 'black'
      context.moveTo(x1,y1)
      context.lineWidth = 5
      context.lineTo(x2,y2)
      context.stroke()
      context.closePath()
    }
  
  }


  }

/*
var text = "body{color: red;}";
var html = Prism.highlight(text, Prism.languages.css);
console.log(html)
*/


var result = `/*
* 面试官你好我是许珂
* 我将以动画简历得方式介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

*{
  transition: all 1s;
} 
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border: 1px solid red;
  padding: 16px;
}

/* 接下来我需要代码高亮 */

.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}
.token.function {
  color: #DD4A68;
}
/*加点3D效果*/
#code{
  transform: rotate(360deg);
}
/*我需要一张白纸*/

`
var n = 0
var id = setInterval(() => {
  n += 1
  code.innerHTML = result.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
  styleTag.innerHTML = result.substring(0, n)
  if (n >= result.length) {
    window.clearInterval(id)
  }
}, 50)
var text = "html{color: red;}";
var css = Prism.highlight(text, Prism.languages.css)
console.log(css)

var result =  `
/*
* 会动的简历
*/
*{
    transition: all 1s;
}
html{
    background: rgb(222,222,222);
}
#code{
    border: 1px solid red;
    padding: 16px;
}
`
var n = 0

var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0 , n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0 , n)
    if(n >= result.length){
        window.clearInterval(id)
    }
},100)
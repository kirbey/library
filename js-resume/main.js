function writeCode(code){
    let domCode = document.querySelector('#code')
    let n = 0 
    let id = setInterval(() => {
        n += 1 
        domCode.innerHTML = Prism.highlight(code.substring(0 , n), Prism.languages.css)
        styleTag.innerHTML = result.substring(0 , n)
    },50)
    if(n >= result.length){
        window.clearInterval(id)
        fn.call()
    }
}





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

writeCode(result,() => {
    fn2()
})
/*
var n = 0

var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0 , n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0 , n)
    if(n >= result.length){
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
},50)
*/
function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult){
    var result = `
#paper{
    background: red;
    width: 100px;
    height: 100px;
}    
    `
    var n = 0
    var id = setInterval(() => {
        n += 1
        code.innerHTML = preResult + result.substring(0 , n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0 , n)
        if(n >= result.length){
            window.clearInterval(id)
        }
    },50)
}
var fs = require('fs')
var path = require('path')
const verb = process.argv[2]
const content = process.argv[3]

if(verb === 'add'){
    fs.stat('D:\\library\\nodejs\\todo\\db', function(err, stat){
        if(err === null){
            const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
            const list = JSON.parse(fileContent);
            const task = content
            list.push([task, false])
            fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))
            console.log(list)
        }else if(err.code === 'ENOENT'){
            fs.writeFileSync('D:\\library\\nodejs\\todo\\db', '')
            const list = []
            const task = content
            list.push([task, false])
            fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))
            console.log(list)
        }else{
            console.log('Something other error: ',err.code);
        }
    });
}else if(verb === 'list'){
    const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
    const list = JSON.parse(fileContent);
    console.log(list)
}


var fs = require('fs')
var path = require('path')
const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]

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
}else if(verb === 'delete'){
    const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
    const list = JSON.parse(fileContent);
    const n = content
    list.splice(n - 1, 1)
    fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))
    console.log(list)
}else if(verb === 'done'){
    const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
    const list = JSON.parse(fileContent);
    const n = content
    list[n-1][1] = true
    fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))
    console.log(list)
}else if(verb === 'edit'){
    const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
    const list = JSON.parse(fileContent);
    const n = content
    list[n-1][0] = content2
    fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))
    console.log(list)
}


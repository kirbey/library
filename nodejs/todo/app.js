var fs = require('fs')
var path = require('path')
const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]
const dbPath = 'D:\\library\\nodejs\\todo\\db'

function save (list){
    fs.writeFileSync(dbPath, JSON.stringify(list))
}

function fetch (){
    const fileContent = fs.readFileSync(dbPath).toString()
    const list = JSON.parse(fileContent);
    return list
}

if (verb === 'add') {
    fs.stat(dbPath, function (err, stat) {
        if (err === null) {
            const list = fetch()
            const task = content
            list.push([task, false])
            save(list)
            console.log(list)
        } else if (err.code === 'ENOENT') {
            fs.writeFileSync(dbPath, '')
            const list = []
            const task = content
            list.push([task, false])
            save(list)
            console.log(list)
        } else {
            console.log('Something other error: ', err.code);
        }
    });
} else if (verb === 'list') {
    const list = fetch()
    console.log(list)
} else if (verb === 'delete') {
    const list = fetch()
    const n = content
    list.splice(n - 1, 1)
    save(list)
    console.log(list)
} else if (verb === 'done') {
    const list = fetch()
    const n = content
    list[n - 1][1] = true
    save(list)
    console.log(list)
} else if (verb === 'edit') {
    const list = fetch()
    const n = content
    list[n - 1][0] = content2
    save(list)
    console.log(list)
}


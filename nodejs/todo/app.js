var fs = require('fs')

const fileContent = fs.readFileSync('D:\\library\\nodejs\\todo\\db').toString()
const list = JSON.parse(fileContent);

const verb = process.argv[2]
const content = process.argv[3]

const task = content
list.push(task)

fs.writeFileSync('D:\\library\\nodejs\\todo\\db', JSON.stringify(list))

console.log(list)
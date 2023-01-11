const os = require('os')


const first = fs.readFileSync('./content.txt', 'utf8')
const second = fs.readFileSync('./second.txt', 'utf8')

console.log(first, second)

fs.writeFileSync('./newfile.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

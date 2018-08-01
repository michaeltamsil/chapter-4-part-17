let fs = require('fs')

// Asynchronous read
fs.readFile('input.txt', ( err, data ) => {
    if (err) {
        return console.error(err);
    }
    console.log('Asynchronous read: ' + data.toString())
})

// Synchronous read
let data = fs.readFileSync('input.txt')
console.log('Synchronouse read: ' + data.toString())
console.log('Program ended');
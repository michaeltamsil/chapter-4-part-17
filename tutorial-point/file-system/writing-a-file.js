let fs = require('fs');

console.log('Going to write into existing file');
fs.writeFile('ainput.txt', 'Simply Easy Learning!', err => {
    if (err) {
        return console.error(err)
    }

    console.log('Data written successfully!')
    console.log('Let\'s read newly written data' );
    fs.readFile('ibnput.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log('Asynchronous read: ' + data.toString())
    })
})
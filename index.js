const express = require('express')
const os = require('os');

const app = express();
const port = 3000;
const host = 'http://localhost'

console.log(`Platform : ${os.platform()}`);
console.log(`Free Memory : ${os.freemem()/(1024*1024*1024)}`)
console.log(`Total Memory : ${os.totalmem()/(1024*1024*1024)}`)

app.get('*', (req, res) => {
    res.send(`Server Os Type is ${os.type()}`)
})

app.listen(port, () => {
    console.log(`Im listining on ${host} : ${port}`);
})
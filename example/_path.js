/**
 * Created by lenovo on 2018/2/5.
 */
const path = require('path');
const fs = require('fs');

let dist = path.join(__dirname, '../example');

// console.log(fs.existsSync(path.join(dist, 'server.js')));
console.log(process.env.NODE_ENV)

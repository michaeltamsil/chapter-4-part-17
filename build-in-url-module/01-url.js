let url = require('url');
let addr = 'www.google.com?name=Haidar';
let q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.name);
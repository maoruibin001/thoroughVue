/**
 * Created by lenovo on 2018/2/2.
 */
const express = require('express');

const app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3002");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use((req, res, next) => {
  console.log(22);
  next();
});
app.get('/', (req, res) => {
  res.send('hell world');
});

app.delete('/', (req, res) => {
  res.send('hello world, delete');
})

app.listen(3002);

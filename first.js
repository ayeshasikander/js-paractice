// var http = require("http");
// // var dt = require("./myfirstmodule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("heeeeeeeeeeeeeeeeee"+ req.url);
//         // res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
//   })
//   .listen(8080);

// console.log("Server running at http://127.0.0.1:8080/");

var http=require('http');
var url=require('url');
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
  console.log("Server running at http://127.0.0.1:8080/");
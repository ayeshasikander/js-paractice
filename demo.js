var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    // fs.appendFile("demo.html","hello content",function(err){
    //     if(err) throw err;
    //     console.log("The file has been saved!");
    // })
    // fs.readFile("demo.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   return res.end();
    // });
    fs.open("demo.txt","w",function(err){
        if(err) throw err;
        console.log("The file has been saved!");
    })
  })
  .listen(8080);
console.log("Server running at http://127.0.0.1:8080/");
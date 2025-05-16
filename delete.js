var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.unlink("demo.txt",function(err){
        if(err) throw err;
        console.log("The file has been deleted!");
    })
}).listen(8080);
console.log("Server running at http://127.0.0.1:8080/");
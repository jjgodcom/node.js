var connect = require("connect");
var http = require("http");

var app = connect(); 

function about(req,res){
    console.log('사용자가 about 페이지를 요청함');
}
function email(req,res){
    console.log('사용자가 email 페이지를 요청함');
}

app.use('/about', about);
app.use('/email', email);

http.createServer(app).listen(8888);
console.log("서버가 작동 중");
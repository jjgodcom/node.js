var http = require("http"); //http 모듈을 불러온다

function onRequest(request,response){
    console.log("사용자가 request 합니다." + request.url);
    response.writeHead(200, {"Context-Type":"text/plain"}); // 200은 정상적으로 접속이 되었다고 하는것
    response.write("this is server response(data...)");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("서버가 실행 됨");
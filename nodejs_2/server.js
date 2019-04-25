var http = require("http"); //http 모듈을 불러온다
var fs = require("fs"); // 파일 시스템 모듈을 불러온다. 파일을 읽고쓰고지울수있는 중요한 코어 모듈이다

// 404에러(웹페이지 없을때)
function send404Response(response){
    response.writeHead(404,{"Content-type":"text/plain"});
    response.write("404 Error: Opps!!!!");
    response.end();
}
// 사용자 요구에 응답 처리
function onRequest(request,response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        //없는 파일을 찾는경우
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("서버가 실행 됨");
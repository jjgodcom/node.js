var fs = require('fs');

//readFileSync
// console.log("A");
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log("C");

//readFile
//Sync가 없으면 비동기적 방식이다.
//비동기 일때는 3째에는 반드시 함수가 필요하다.
console.log("A");
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){ //err은 에러가 있다면 에러를 전달
    console.log(result);
});
console.log("C"); 
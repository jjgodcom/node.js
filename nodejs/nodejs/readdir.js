var testFolder = './data'; //현제 실행하고 있는 경로 기준으로 파일을 찾아야 한다.
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});
// funciton a(){
//     console.log('a');
// }
// a();
//익명함수이다
// function(){

// }
var a = function(){
    console.log("a");
}

function slowfunc(callback){
    callback();
}

slowfunc(a);
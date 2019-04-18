function f123(){
    console.log(1);
    console.log(1);
    console.log(1);
}
f123();
console.log("--");
f123();
console.log("--");

 // round() 라는 함수는 반올림해줌
console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
console.log("--");

function sum(first){ // parameter
    console.log(first);
  }
   
  sum(2,4); // argument
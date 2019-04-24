//배열은 순서대로 넣으면된다
var members = ['egg','tag','g1'];
console.log(members[1]); //tag
console.log("--");
//객체는 각각의 데이터에 고유의 이름을 준다
var roles = {
    'pro':'me',
    'des':'k88',
    'manage':'su'
};
console.log(roles.des); // k88
console.log(roles['des']); // k88
console.log("--");
var i = 0;
while(i< members.length){
    console.log("array>"+members[i]);
    i=i+1;
}
console.log("--");
// name 은 식별자를 가지고 옴
// 값을 가져오려면 roles[name]
for(var name in roles){
    console.log("object>"+name,"valeue>"+roles[name]);
}
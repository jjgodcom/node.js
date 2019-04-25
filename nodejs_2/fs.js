var fs = require("fs");

fs.writeFileSync("food.txt","나는 감자가 좋아요"); //food.txt라는 파일를 생성하고 내용은 감자가 나온다.
console.log(fs.readFileSync("food.txt").toString()); //food.txt.라는 파일의 내용을 읽는다.
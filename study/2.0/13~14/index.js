//데이터 타입 변환 

let age = parseInt(prompt("몇살?"));

while(isNaN(age)){
    age = parseInt(prompt("몇살?"));
    if(!isNaN(age)){
        console.log("당신의 나이는 : "+ age);
    }else{
        console.log("숫자를 입력하세요.")
    }
}
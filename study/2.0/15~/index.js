//시뮬레이션 : 술을 사는 사람이 미성년자거나 고령자라면?
//이전 버전에서는 반복적으로 물어보고,if문 가기전에 끝나버리는 버리는 버그 발생 -> 버그 수정
const limit = {
    age : function (age){
        if(age <= 19){
            console.log("죄송합니다, 미성년자에게는 술을 팔 수 없어요.");
        }else if (age <= 70){
            console.log("술을 제공해 드리겠습니다.");
        }else{
            console.log("술을 줄이실 나이일 것 같습니다. 약주 하시는 것은 어떨까요?");
        }
    },
}

let age = parseInt(prompt("나이가 어떻게 됩니까? 신분증을 보여주세요."));

if(isNaN(age)){
    while(isNaN(age)){
        age = parseInt(prompt("나이가 어떻게 됩니까? 숫자로 말해주세요."));
        if(!isNaN(age)){
            limit.age(age);
        }
    }
}else{
    limit.age(age);
}



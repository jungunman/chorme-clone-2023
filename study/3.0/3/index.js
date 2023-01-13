//Events

const bgColor = document.querySelector("body");
const clickBtn = document.querySelector(".btns .change__background-color");
let isChange = false;

//배경 색 및 글자 바꾸기 (한번 바꾸면 끝난다는 단점이 있었음.)
// function click_btn(){
//     clickBtn.style.backgroundColor = "wheat";
//     clickBtn.style.color = "black";
//     bgColor.style.backgroundColor = "tomato";
// }

//배경색 및 글자 계속 바꾸기 ( 계속 바뀌도록 수정)
function backgroundColorChangeBtn(){
    if(isChange){
        clickBtn.style.backgroundColor = "tomato";
        clickBtn.style.color = "wheat";
        bgColor.style.backgroundColor = "wheat";
        isChange = false;
    }else{
        clickBtn.style.backgroundColor = "wheat";
        clickBtn.style.color = "tomato";
        bgColor.style.backgroundColor = "tomato";
        isChange = true;
    }
}

//"click" 이벤트 발생시 click_btn 함수 실행
clickBtn.addEventListener("click",backgroundColorChangeBtn);

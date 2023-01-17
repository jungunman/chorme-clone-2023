//Events
const clickCount = document.querySelector(".title .click__count");
const bgColor = document.querySelector("body");
const clickBtn = document.querySelector(".btns .change__background-color");
let isChange = false;
let count = 0;

console.dir(clickBtn);

//배경색 및 글자 계속 바꾸기 ( 계속 바뀌도록 수정)
function backgroundColorChangeBtn(){
    if(isChange){
        clickBtn.style.backgroundColor = "tomato";
        clickBtn.style.color = "wheat";
        bgColor.style.backgroundColor = "wheat";
        count += 1;
        clickCount.innerText = count;
        isChange = false;
    }else{
        clickBtn.style.backgroundColor = "wheat";
        clickBtn.style.color = "tomato";
        bgColor.style.backgroundColor = "tomato";
        count += 1;
        clickCount.innerText = count;
        isChange = true;
    }
}

function handleMouseEnter(){
    clickBtn.innerText = "올려서 텍스트 바뀜";
}
function handleMouseLeave(){
    clickBtn.innerText = "배경색 바꾸기";
}


//"click" 이벤트 발생시 click_btn 함수 실행
clickBtn.addEventListener("click",backgroundColorChangeBtn);
// 마우스를 해당 엘리먼트에 올려놨을 때 event 감지
clickBtn.addEventListener("mouseenter",handleMouseEnter);
// 마우스를 해당 엘리먼트로부터 떠났을 때 event 감지
clickBtn.addEventListener("mouseleave",handleMouseLeave);
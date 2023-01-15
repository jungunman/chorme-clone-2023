const titleSpan = document.querySelector(".title span");

//js에서 CSS를 직접 관여하지 않고 CLassName 을 변경하여 같은 실행행위를 가지기
//span의 sexy-font를 지워버리는 경우가 발생.
function handleClick(){
    const clickedClass = "clicked";
    if(titleSpan.className === clickedClass){
        titleSpan.className = "";
    }else{
        titleSpan.className = clickedClass;
    }
    
}

titleSpan.addEventListener("click",handleClick);
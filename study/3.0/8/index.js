const titleSpan = document.querySelector(".title span");


//span의 sexy-font를 지워버리는 경우가 발생.
//해결 방법 : classList를 사용한다.
function handleClick(){
    //토글을 사용하면 아래 코드를 한줄로 만들 수 있다.
    titleSpan.classList.toggle("clicked")
    
    // const clickedClass = "clicked";
    // if(titleSpan.classList.contains(clickedClass)){
    //     titleSpan.classList.remove(clickedClass);
    // }else{
    //     titleSpan.classList.add(clickedClass);
    // }
    
}

titleSpan.addEventListener("click",handleClick);
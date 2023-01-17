const titleSpan = document.querySelector(".title span");


function handleClick(){
    if(titleSpan.style.color ==="blue"){
        titleSpan.style.color ="tomato";
    }else{
        titleSpan.style.color ="blue";
    }
    
}

titleSpan.addEventListener("click",handleClick);
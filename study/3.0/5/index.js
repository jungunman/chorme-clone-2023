//Events
const title = document.querySelector(".title span");

function handleWindowCopy(){
    alert("복사함!");
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    title.innerText = "복사해보시면 어떨까요?";
}
function handleWindowOffline(){
    alert("와이파이가 연결되어있지 않습니다.");
}
function handleWindowOnline(){
    alert("와이파이가 연결되어있습니다..");
}

//복사했을 때 이벤트 발생
window.addEventListener("copy",handleWindowCopy);
//화면의 크기를 바꿨을 때 발생
window.addEventListener("resize",handleWindowResize);
//와이파이 연결이 안되어있을 경우 이벤트 발생
window.addEventListener("offline",handleWindowOffline);
//와이파이 연결이 되어있을 경우 이벤트 발생
window.addEventListener("online",handleWindowOnline);
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");



//이 행위들을 HTML에서 옵션으로 추가 가능하다.
//required, maxlength,minlength 등등
// function handleLoginBtnClick(){
//     const loginInputValue = loginInput.value;
//     if(loginInputValue === ""){
//         console.log("이름을 입력해주세요.");
//     }else if(loginInputValue.length >= 15){
//         console.log("이름이 너무 깁니다.");
//     }else {
//         console.log(loginInputValue);
//     }
// } 
// loginButton.addEventListener("click",handleLoginBtnClick);
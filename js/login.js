const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingUser = document.querySelector(".greeting-user");
let userName;
const HIDDEN = "hidden"
const USER_NAME_KEY = "userName";

//로그인이 되어 있는가?
isLogin();

function isLogin(){
    userName = localStorage.getItem(USER_NAME_KEY);
    if(userName !== null){
        loginForm.classList.toggle(HIDDEN);
        greetingUser.classList.toggle(HIDDEN);
        greetingUser.innerText = `안녕, ${userName}`;
    }
}

function handleLogin(event){
    event.preventDefault();
    localStorage.setItem(USER_NAME_KEY,loginInput.value);
    isLogin();
}

loginForm.addEventListener("submit", handleLogin);
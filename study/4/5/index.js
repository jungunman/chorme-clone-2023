//localstorage에 정보 저장하기.

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const loginText = document.querySelector("h1");
const USER_NAME_KEY = "userName";

//유저 정보 데이터
let userName;

//페이지 로딩 되자마자 로그인이 되어있는 지 확인
isLogin();

function isLogin() {
  //유저가 로그인 했는가?
  userName = localStorage.getItem(USER_NAME_KEY);
  if (userName !== null) {
    loginText.innerText = `어서오세요, ${userName} 님.`;
    loginForm.classList.add("hidden");
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USER_NAME_KEY, loginInput.value);
  isLogin();
}
loginForm.addEventListener("submit", onLoginSubmit);

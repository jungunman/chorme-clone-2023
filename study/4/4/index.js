//예시로, 로그인 상태가 아니라면, 로그인하라고 TEXT가 나오고,
//로그인을 했다면, 인사하는 법

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const loginText = document.querySelector("h1");
let userName;

//로그인 시 주석 해제
// userName = "Woong";

//페이지 로딩 되자마자 로그인이 되어있는 지 확인 ==> 나중엔 쿠키,세션이나 JWT 사용
isLogin();

function isLogin(userName) {
  userName = userName;
  if (userName !== undefined) {
    loginText.innerText = `어서오세요, ${userName} 님.`;
    loginForm.classList.add("hidden");
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  isLogin(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);

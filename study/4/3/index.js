const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");
const hiddenText = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  //   console.log(event);
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);

  //username 표시하기
  if (username.length >= 1) {
    hiddenText.classList.remove(HIDDEN_CLASSNAME);
    // hiddenText.innerText = "어서오세요, " + username + "님.";
    hiddenText.innerText = `어서오세요,  ${username}님.`; //새로운 방식
  }
}
loginForm.addEventListener("submit", onLoginSubmit);

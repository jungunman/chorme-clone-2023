const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");


function onLoginSubmit(){
    // console.log(loginInput.value);
    event.preventDefault();
    console.log(event);
} 
 loginForm.addEventListener("submit",onLoginSubmit);
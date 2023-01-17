//Class 이름으로 엘리먼트 접근 및 변경

//div 추가 전 엘리먼트 객체 접근하기
// const alert = document.getElementsByClassName("alert")[0];
// alert.innerText = "JS!"
// console.dir(alert);

// const outDivTitle = document.querySelector("h1.title");
// const inDivTitle = document.querySelector(".title h1");
// console.log(inDivTitle);
// console.log(outDivTitle);

// outDivTitle.innerText = "DIV 밖의 자바스크립트";
// inDivTitle.innerText = "DIV 안의 자바스크립트";

//여러개의 타이틀중 하나만 꺼낸다.
const title = document.querySelector(".title h1");
console.log(title);

// 여러개의 타이틀 중 모두 꺼낸다.
const titles = document.querySelectorAll(".title h1");
console.log(titles);
for (let index = 0; index < titles.length; index++) {
    console.log(titles[index]);
}
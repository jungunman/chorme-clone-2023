const backgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const pickBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

const createBackground = document.createElement("img");
createBackground.src = `./background/${pickBackground}`;
createBackground.className = "background";
// createBackground.classList.toggle("bg");

document.body.appendChild(createBackground);
//맨앞에 html 코드 추가하기
// document.body.prepend(createBackground);

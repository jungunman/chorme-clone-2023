//함수 만드는 방법
//인사하는 함수 적용 전

console.log("안녕 난 민수야");
console.log("안녕 난 철수야");
console.log("안녕 난 영구야");
console.log("안녕 난 에헤야");
console.log("안녕 난 류웅이야");
// #문제 - 반복되는 문자열과, console.log가 중복되고 있음.

//인사하는 함수 적용 후
const person = {
  names: ["민수", "철수", "영구", "에헤", "류웅"],
  ages: [21, 22, 23, 24, 28],
  sayHello: function (names, ages) {
    for (let i = 0; i < names.length; i++) {
      console.log(
        "안녕, 난 person 오브젝트 안에 있는" +
          names[i] +
          "이고, " +
          ages[i] +
          " 살이야"
      );
    }
  },
};

function sayHello(names, ages) {
  for (let i = 0; i < names.length; i++) {
    console.log("안녕, 난 " + names[i] + "이고, " + ages[i] + " 살이야");
  }
}

sayHello(person.names, person.ages);
person.sayHello(person.names, person.ages);

//##################호기심 에러 모음###############

//매개 변수 보다 적은 인자값을 넘겨주게 되면
// sayHello(person.names);
// index.js:19 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//     at sayHello (index.js:19:52)
//     at index.js:25:1
// undefined값을 배열 인덱스로 찾으려해서 뜨는 타입 에러

//undefined일 경우 배열이 되는가?
// console.log(undefined[1]);
//안 되는 것으로 판명

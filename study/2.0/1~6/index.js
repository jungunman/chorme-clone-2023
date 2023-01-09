// 예전에 썼던 변수 선언 명령어 var대신
// let = 변수 선언
// const = 상수 선언을 사용하여
// 변수를 재선언 하는 것을 막읍시다.

// 자바스크립트에서는 카멜케이스를
// 파이썬에서는 스네이크 케이스를 사용하자

//캐릭터 능력치를 비유로 object 설명
//예시 1
const playerName = "Woong";
const playerFat = false;
const playerCash = 100000;
const playerItems = ["모니터", "본체", "마우스", "키보드"];

console.log("소지품 : " + playerItems);

//변수로만 사용하면 엄청 불편하다. player의 반복이기도 하며,
//리스트의 몇번 째 항목이 이름인지 돈인지 설명이 없어 코드 해석에 불편
//주석으로 설명이 가능하지만 비효율적
//예시 2
const player2 = ["Woong", false, 100000, "모니터", "본체", "마우스", "키보드"];
console.log("player 2 : " + player2);

//object로 가져올경우
const player3 = {
  name: "Woong",
  Fat: false,
  cash: 1000000,
  items: ["모니터", "본체", "마우스", "키보드"],
};
console.log("player name : " + player3.name);

//상수인 player3을 다른 값으로 바꿀 경우 에러
// player3 = false;
// console.log("error : " + player3);

//똑같은 object로 바꿔도 오류
// player3 = {
//   nora: false,
//   annora: "Yes",
//   doing: "study",
// };
// console.log("error : " + player3);

//플레이어 이름 업데이트
player3.name = "Ryu";
console.log("player3 : " + player3.name);

//플레이어 능력치 추가
player3.luck = "Very Good!";
console.log("player3 : " + player3.luck);

//플레이어 능력치 삭제
delete player3.luck;
console.log("player3 : " + player3.luck);

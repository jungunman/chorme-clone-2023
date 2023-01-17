//Returns
//결과값을 함수 내부에서 찍어내서 결과로 도출하는 것이 아닌
//함수의 return으로 값을 넘겨주는 방법
const calculate = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

const plusResult = calculate.plus(2, 3);
const minusResult = calculate.minus(plusResult, 10);

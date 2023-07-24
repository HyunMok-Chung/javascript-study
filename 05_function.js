// 함수 선언식
// function 키워드를 이용해서 선언

function add(num1, num2) {
  return num1 + num2
}

function addLog(num1, num2) {
  console.log(num1 + num2)
}
console.log(add(10, 20))
console.log(addLog(15, 15))  // return 이 없기때문에 undefined 가 출력됨


// 함수 표현식
// 표현식: 어떤 특정한 값으로 귀결되는 코드 (값으로 결과가 나타나는 코드)
// 변수를 선언하고, 해당 변수에 함수를 할당하는 방식
const subtract = function (num1, num2) {
  return num1 - num2
}
console.log(subtract(20, 10))

// 함수 선언식은 함수의 Hoisting 이 발생하지만, 표현식은 발생하지 않는다.


// JavaScript 함수의 인자 전달 방법
// 1. 함수 인자의 기본값을 설정할 수 있음
const greeting = function (name = 'Anonymous') {
  return `Hi, ${name}`
}
console.log(greeting('Hyunmok'))
console.log(greeting())

// 2. 매개변수와 인자의 갯수 불일치 허용 (JavaScript 함수 특징 중 하나)
const divide = function (num1, num2) {
  return num1 / num2
}
// 4개 모두 문법적으로는 오류가 없음
console.log(divide())  // 출력: NaN
console.log(divide(1))  // 출력: NaN
console.log(divide(1, 2))  // 출력: 0.5
console.log(divide(1, 2, 3))  // 출력: 0.5

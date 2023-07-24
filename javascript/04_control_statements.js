// JavaScript 에서 Object 는 Map 과 유사
// Java 에서는 Map.entrySet -> Map.Entry (Key : Value) = 다소 복잡
const person = {
  firstName: 'Hyunmok',
  lastName: 'Chung',
  'phone number': '010-1234-5678'
}
// JavaScript 에서는
// for ... in 반복문을 사용,
// 객체를 키를 기준으로 순회
// for ... in 반복문: 객체(Object)를 순회할 때 사용할 수 있는 반복문
for (const key in person) {
  console.log(key)
  console.log(person[key])
}


const numbers = [10, 20, 30]
// for ... of 반복문 사용
// for ... of 반복문: 반복 가능한 객체를 순회할 때, 주로 배열을 순회할 때 사용
for (const number of numbers) {
  console.log(number)
}
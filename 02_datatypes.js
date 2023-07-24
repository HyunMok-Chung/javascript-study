// JSON
// JavaScript 자료형 정리

// Number
// 숫자를 나타내는 모든 자료형
// 정수, 실수, 무한대, 숫자 아님
const length = 5
const size = 10

// 실수
const temperature = 36.5
const distance = 3.5
// 부동소수점도 직접 대입 가능
const floatPoint = 2.998e8
// 무한대
const infinite = Infinity
const infNegative = -Infinity

// Not a number (NaN)
// 숫자가 표현되어야 하는 계산 또는 함수의 결과가 숫자가 아닐때
// 만들어지는 대응 숫자
const parseFail = parseInt('a')
const sqrtnegative = Math.sqrt(-1)
const calculateNan = 7 + NaN


// String
// 작은 따옴표('), 큰 따옴표(") 둘 다 문자열
const single = 'Hello JS'
const double = "Hello JS"
const concat = single + double // java 처럼 문자열 연결 가능
console.log(concat)
const paragrapg = 'this \nis \nnewLine'
console.log(paragrapg)
// Backtick(`)을 사용해 Template Literal 을 만들 수 있음.
const name = 'Hyunmok'
const message = `Hello, ${name}!!!`
console.log(message)


// Boolean
// 참 거짓 형
const isNumber = true
const isString = false


// null & undefined
// null: 어떤 데이터가 의도적으로 비어졌을 경우 사용하는 데이터
let answer = null
console.log(answer)

// undefined: 값이 정의되지 않을때, 임시적으로 데이터가 비어 버릴때 나오는 데이터
let answerNotDefined
console.log(answerNotDefined)
// 둘이 공존하는건 설계 오류. 타입도 다르게 나옴
console.log(typeof null)
console.log(typeof undefined)


// Object
// JSON 의 Object 를 부르는 말과 동일
const person = {
  firstName: 'Hyunmok',
  lastName: 'Chung',
  // 띄어쓰기나 - _ 를 쓰고 싶을때는 명시적으로 '', ""를 써줘야함
  'phone number': '010-1234-1234'
}
// 객체의 요소에 접근할 때는 '.' 또는 '[]'를 사용한다
console.log(person.firstName) // Hyunmok
console.log(person.lastName) // Chung
console.log(person['lastName'])
console.log(person['phone number'])


// Array
// 순서가 보장되는 배열
// 각 요소를 ',' 기준으로 분리해서 정의
const numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[numbers.length - 1])

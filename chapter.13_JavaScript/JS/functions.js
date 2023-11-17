/*
  * 함수(functions)
  - 작업의 묶음
  - 코드를 반복해서 작성하는 비효율을 줄일 수 있음
*/

// * 함수 선언문
// function multiply(a, b){
//   return a * b ;
// }

// console.log(multiply(10,5));

// let result = multiply(435, 24);

// console.log(result);

// * 함수 표현식
// let multiply = function (a , b) {
//   return a * b ;
// };

// console.log(multiply(10,5));

// * 변수 키워드 - var, let, const

/* 
  * var
    case.1
      var a = 10; => 전역 변수 / while(){var a = 10000;} => 지역변수로 while문 안에서만 사용되어야 하지만 js특성상 var로 정의된 변수는 전역적으로 참조하기 때문에 오류를 일으킬 가능성이 있음
    case.2 - 호이스팅 : 코드를 실행하기 전에 선언문을 해당 범위의 맨 위로 이동시키는 과정
 */

// case.1
// var a = 10;

// while(true){
//   var a = 10000;
//   break;
// }

// console.log(a);

// case.2 호이스팅
// console.log(word);

// word = 'happy';

// console.log(word);

// var word;

/* 
  * let
    case.1
      블록 스코프안에서 사용된 변수는 바깥의 변수에 영향을 미치지 않음 => 변수가 덮어 씌어진다거나 하는 그런 현상을 막을 수 있음
    case.2 
      변수를 나중에 설정해줄 경우 호이스팅이 일어나지 않음 - 에러 발생 
      순차적으로 변수를 선언해 줘야함
 */

// case.1
// let a = 10;

// while(true){
//   let a = 10000;
//   break;
// }

// console.log(a);

// case.2 
// console.log(word);

// word = 'happy';

// console.log(word);

// let word;


/* 
  * const
    case.1
    const의 경우 변하지 않는 변수일 경우 사용 - 재할당을 하려고 하면 에러가 발생함
    case.2 
    const로 선언된 변수에 할당된 객체의 내용을 수정할 수 있지만 객체 자체 수정은 불가능함
 */

// case.1
// const b = 2;
// console.log(b);
// b = 3;

// case.2 
// const student = {
//   grade : 1,
//   class : 3
// };

// student.grade = 2;
// console.log(student);

// student = {
//   num : 20123,
//   grade : 2
// };
// console.log(student);

// * 화살표 함수

// let plus = (a,b) => {
//   return a + b;
// };

// let plus = (a,b) => a + b ;

// console.log(plus(2,3));

// let print = word => {
//   console.log(word);
// }

// print('hello!');

// let myfunction = () => {
//   return 1;
// }

// console.log(myfunction());




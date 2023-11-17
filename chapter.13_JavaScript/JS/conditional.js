/*
  *  제어문 (control flow)
  * 1. 조건문
  * 2. 반복문
 */

let a = 0;

// * if...else
// if (a > 2){
//   console.log('a > 2');
// } else {
//   console.log('a <= 2');
// }

// * if...else if...else
// if (a > 2){
//   console.log('a > 2');
// } else if (a === 2 ){
//   console.log('a = 2');
// } else if (a === 0 ){
//   console.log('a = 0');
// } else if (a < 2 ){
//   console.log('a < 2');
// }
// let a = 0일때, else if(a === 0) 과  else if(a < 2) 와 같이 둘다 true값이 나오는 조건식이 여러개일 경우 상위 조건식만 가지고 판단함 

// * switch

let mbti = 'INTJ';
let val;

// switch (mbti) {
//   case 'INTJ':
//     val = 'INTJ'
//   ;
//   case 'ENTJ':
//     val = 'ENTJ'
//     ;
//   case 'INFJ':
//     val = 'INFJ'
//     ;
//   default: 
//   val = '유요한 값이 아닙니다.'
// }

// * console.log(val); 의 결과 = 유효한 값이 아닙니다.
// * switch문의 경우 if문과 다르게 break포인트를 설정해 주지 않으면 모든 case의 조건을 전부 판단 하기 때문에 최종 default의 값이 나오게 됨

switch (mbti) {
  case 'INTJ':
    val = 'INTJ';
    break;

  case 'ENTJ':
    val = 'ENTJ';
    break;

  case 'INFJ':
    val = 'INFJ';
    break;

  default: 
  val = '유요한 값이 아닙니다.'
}

// console.log(val)


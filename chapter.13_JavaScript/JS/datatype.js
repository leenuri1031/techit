/*
* 자료형

1. 기본형, 단순형, 원시형
  - number
  - string
  - boolean
  - null
  - symbol

2. 참조형, 객체(Object)
*/

// number
// 정수(integer), 실수 구분이 없음
var price = 10000;
console.log(price);

// string
// '' , "" 문자열 입력시 큰 따옴표, 작은 따옴표 다 사용 가능 하지만 통일해서 사용 해 줄것
var myName = "테킷";
console.log(myName);

var myName2 = "'태킷'";
console.log(myName2);

var myName3 = '"lion"';
console.log(myName3);

// boolean
var isTrue = true;
console.log(isTrue);

// var isTrue2 = True;
// console.log(isTrue2);
// * 불리언 true/false의 경우 대소문자를 구분하기 때문에 주의 할 것!

// undefined
var a;
console.log(a);
// * 변수 선언만 하고 할당이 되어 있지 않은 경우 undefined가 나옴

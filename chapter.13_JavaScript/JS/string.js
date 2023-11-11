// 문자열 선언
var greeting = 'Hello!';
var farewaell = 'Bye!';
var myname = 'Nuri';

// var sentence = greeting + myname ;
// console.log(sentence);
// 공백 없이 합쳐진 문자열이 출력됨

// 공백 추가방법 - 1
// var sentence2 = greeting + '' + myname ;
// console.log(sentence2);

// 공백 추가방법 - 2 (줄바꿈)
// var sentence3 = greeting + '\n' + myname ;
// console.log(sentence3);


// console.log(farewaell+2);
// * string + number를 출력할 경우 number를 암묵적형변환을 통해 문자열로 바꿔서 출력되기 때문에 string다음에 바로 붙어서 출력이 됨


// 이스케이프 시퀀스 
var sentence = greeting + '\n' + myname ;
// console.log(sentence);
var sentence2 = greeting + '\t' + myname ;
// console.log(sentence2);
// tab
var sentence3 = greeting + '\'' + myname ;
// console.log(sentence3);
var sentence4 = greeting + '\"' + myname ;
// console.log(sentence4);
var sentence5 = greeting + '\\' + myname ;
// console.log(sentence5);


// 템플릿 리터럴 
// * 멀티 라인으로 작업 가능해졌기 때문에 이스케이프 시퀀스로 작업할 필요가 없어짐
var a = `Hello!`;
// console.log(a);

var b =  `Hello!
Everyone`;
// console.log(b);

var price = 5000;
var coffeePrice = '이 커피는' + price + '원 입니다.';
// console.log(coffeePrice);
var coffeePrice2 =`이 커피는 ${price}원 입니다.`;
// console.log(coffeePrice2);
var coffeePrice3 =`이 커피는 ${2300 + 2000}원 입니다.`;
// console.log(coffeePrice3);


// 문자열 함수 
var abc = 'I am Iron man';

// * indexof : 문자열의 특정 값이 시작되는 위치를 나타내는 함수
console.log(abc.indexOf('man'));
console.log(abc.indexOf('I'));
// 컴퓨터 순서상 맨 처음 배열은 0번으로 표시


// * slice : 문자열의 일부를 잘라내어 출력하는 함수
console.log(abc.slice(0,4));

// * toUpperCase(), toLowerCase() : 문자열의 모든 문자를 대문자 혹은 소문자로 변환해주는 함수
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// * startsWith(), endsWith() : 문자열의 시작과 끝을 판별해 주는 함수
var efg = 'This is my wallet.'
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));
console.log(efg.endsWith('wallet.'));

// * includes()
console.log(efg.includes('is'));

// * 반복문(loop)

// * for() : 조건식 만큼 반복

// for (let i = 0; i < 10; i++){
//   console.log(i);
// }

// for (let i = 10; i > 0; i--){
//   console.log(i);
// }

// for(let i=0; i <10; i++){
//   for(let j=0; j<10; j++){
//     console.log(`${i}-${j}`);
//   }
// }

// * while : 조건식이 참일때만 반복 (조건에 따라 무한 반복이 되는 경우가 있기 때문에 추자 조건이 필요)

// let flag = 10;

// while (flag > 0){
//   console.log(flag);
//   flag--;
// }

// * do...while : while문 조건의 참, 거짓의 여부와 상관없이 do의 값을 먼저 출력 후 조건식 판단 
//  -> 조건식과 상관없이 무조건 한번의 로직을 출력해야 하는 경우 사용

let flag = 10;

// do{
//   console.log(flag);
//   flag--;
// } while (flag > 0);

do{
  console.log(flag);
  flag--;
} while (flag < 0);
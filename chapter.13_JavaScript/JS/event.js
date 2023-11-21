/*
* 이벤트(event)
  * 폼 이벤트 
    - 제출, 초기화

  * 마우스 이벤트
    - 클릭, 더블 클릭, 마우스 무브

  * 키보드 이벤트
    - keydown, keypress, keyup

* => on + 이벤트 타입

*/

let el = document.getElementById('brand-title');

let myFunc = function (){
  alert('addEventListener')
};

// el.addEventListener('click', myFunc);

// el.addEventListener('click', ()=>{
//   alert('click event!')
// });

let el = document.getElementById('birthday');

let result = document.getElementById('result');

let btn = document.getElementById('submit');

const today = new Date();

// console.log(today);
function calculateAge() {

  let birthDate = new Date(el.value);
  let age;

  if(today.getMonth() > birthDate.getMonth() || 
  (today.getMonth()=== birthDate.getMonth() && today.getDate() >= birthDate.getDate()
  )){
    age = today.getFullYear() - birthDate.getFullYear();
  } else{
    age = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  result.innerText = `귀하의 만 나이는 ${age} 입니다.`;
  return age;
}

btn.addEventListener('click', calculateAge);
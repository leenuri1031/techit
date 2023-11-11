/*
 * 배열(Array)
  - 복수의 데이터를 순서대로 담고있는 자료 구조
  - 배열의 순서는 0부터 시작
  - 배열은 객체
  - 키 => 인덱스 , 값 => 요소

 */

  let mbti = ['INTJ','INFJ','INTP','INFP'];
  // console.log(mbti[0]);
  // console.log(mbti.length);
  // * 배열.lenth : 배열의 요소 개수/ 길이를 나타내는 함수
  // mbti[4] = 'ENTJ';
  // console.log(mbti.length);
  // console.log(mbti[4]);
  // mbti[3] = 'ENTP';
  // console.log(mbti[3]);

  // * push() : 원본 배열 맨 뒤에 새로운 요소를 추가하는 함수
  // console.log(mbti.push('ENTJ','ENFJ'));
  // * 스프레드 문법 : 원본 배열을 훼손(변경)하지 않는 선에서 작업하는 방법
  // let newMbti = [...mbti, 'ENTJ','ENFJ'] ;
  // console.log(mbti);
  // console.log(newMbti);

  
  // * pop() : 원본 배열의 마지막 요소를 빼내는 함수
  // console.log(mbti.pop());
  // console.log(mbti);

  // * unshift() : 원본 배열 맨 앞에 새로운 요소를 추가하는 함수
  // console.log(mbti.unshift('ENTJ','ENFJ'));
  // console.log(mbti);
  // * 스프레드 문법 
  // let newMbti = ['ENTJ','ENFJ',...mbti] ;
  // console.log(mbti);
  // console.log(newMbti);

  // * shift() : 원본 배열 맨 앞 요소를 빼내는 함수
  // console.log(mbti.shift());
  // console.log(mbti);

  // * sclice() : 원본 배열의 일부를 복사해서 사용하고 싶을 때 
  // console.log(mbti.slice(0,2));
  // console.log(mbti.slice());
  // console.log(mbti.slice(-1));

  // * join() : 원본 배열의 모든 요소를 연결하여 하나의 문자열로 만드는 함수 - ()안에 구분해 주고싶은 기호를 넣어 연결 할 수 있음
  // console.log(mbti.join());
  // ,로 구분
  // console.log(mbti.join('-'));
  // -로 구분
  // console.log(mbti.join('|'));
  // |로 구분
  // console.log(mbti.join(''));
  // 어떠한 구분없이 합쳐짐

  // * sort() : 원본 배열의 요소를 적절하게 정렬해 반환 하는 함수
  console.log(mbti.sort());
  // 알파벳 순서대로 배열 정렬 - 기본적으로 오름차순으로 정렬됨

  // * reverse()


  // *

    
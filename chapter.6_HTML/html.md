# HTML(Hyper Text Mark up Language)

1. HTML

- 태그를 통해 텍스트에 생명을 불어 넣는 것
  <!-- * 태그를 붙이는 작업 -> 마크업(markup) -->
- HTML 요소 (element)
  <!-- * 내용과 내용을 감싸는 태그로 이루어짐 -->
  <!-- * 여는태그 + 내용 + 닫는태그 -->
  <!-- * ex) <p> lorem ipsum </p>-->
- HTML 속성 (Attribute)
  <!-- * html요소에 스타일을 적용하는 하나의 타겟을 특정하기 위한 방법으로 사용하거나 기타 웹브라우저에서 들어나지 않는 정보들을 넘겨주기 위해서 속성을 사용하기도 함  -->
  <!-- * ex) <p class="memo"> lorem ipsum </p>-->
  <!-- * <태그 속성이름="속성값"></태그> 의 형태로 사용되고 속성이 여러개일 경우 띄어쓰기를 통해 구분함 <태그 속성이름="속성값" 속성이름="속성값" 속성이름="속성값"></태그> -->
- HTML 주석
  <!-- * 코드가 브라우저에 반영되지 않게 하고 싶을때, 코드가 너무 많아 구분이 작업하기 어려워 구분이 필요할 때 사용 / 단 *.html을 브라우저로 불러올때 주석내용도 전부 포함하여 가져오기 때문에 남용하지 않을 것! -->
  <!-- * [여는꺽쇠 + 느낌표 + 대쉬*2 + 내용 + 대쉬*2 닫는 꺽쇠]의 형태로 되어 있으며 vs code에서는 단축키 ctrl+/로 사용 가능   -->
- HTML 문서구조
  <!-- * Boilerplate : 프로그램에서 일정한 양식을 띄고 있는 형태 - 반복적으로 사용되는 구성 -->
  <!-- * html은 크게 head부분과 body부분으로 나누어져 있음 -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  </body>
  </html>
- index.html
  <!-- * 대부분의 웹서버에서 가장 초기페이지를 불러올때 index파일을 가져오기 때문에 index파일을 만들어주는것이 좋음 -->

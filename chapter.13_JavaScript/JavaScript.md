# JavaScript

1.  <script></script> 스크립트 태그 위치

- 위치에 따라 내용이 변할 수 있기 때문에 스크립트 태그 위치가 어디에 있는지 매우 중요함

- 보통 <body></body>태그 다음에 오는 것이 좋음 : html파일이 완전히 파싱된 후에 JavaScript 파일을 읽을 수 있도록

- 목적이 있는<script></script>태그의 경우 <head></head> 안에 넣는 경우도 있으나 파일이 무거워서 읽는데 까지 오래걸리기 때문에 되도록이면 하단에 위치할 수 있도록 하는 것이 좋음
<!-- * <head></head>태그 안에 넣고싶을 경우 'defer'를 사용해서 나중에 읽어오도록 할 수 있음-->
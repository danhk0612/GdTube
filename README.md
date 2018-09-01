## Introduce

유튜브와 비슷하게 만들어보는 중입니다. (외형만)

## URL

- https://danhk0612.github.io/GdTube/

## Tech

이 사이트는 반응형 웹 디자인 기술이 적용됐습니다(될 예정입니다).
이하 사용된 기술 목록입니다.

- HTML
- CSS (included CSS3 & SASS)
- Javascript (included Jquery)
- Foundation Front-end Framework 6 (Customized)

## Screenshot

## 주요 내용

### https://danhk0612.github.io/GdTube/

- 메인 페이지
- 가로 폭이 1589px 이하일 경우 비디오 목록을 좌우로 스크롤 가능한 버튼 표시
- 가로 폭이 1023px 이하일 경우 좌측 사이드바를 메인컨텐츠 위에 표시 (메뉴 버튼 클릭시 토글)
- 해당 페이지 최초 접속 시 가로 폭이 700px 이하일 경우 모바일 페이지로 리다이렉트
- 비디오 클릭시 get방식으로 비디오 id값을 video.html 파일에 넘겨줌

### https://danhk0612.github.io/GdTube/m/

- 모바일 메인 페이지
- 비디오 목록을 2회에 걸쳐 좌우로 스크롤 가능한 버튼 표시
- 가로 폭이 560px 이하일 경우 비디오 목록을 카테고리당 하나씩 표시

### https://danhk0612.github.io/GdTube/video.html?v=LPcP3Oc9oiM

- 비디오 재생 페이지
- 가로 폭이 1023px 이하일 경우 비디오만 화면에 표시
- 좌측 사이드바는 기본 숨김, 메뉴버튼 클릭 시 토글하여 메인컨텐츠 위에 표시
- 해당 페이지 최초 접속 시 가로 폭이 700px 이하일 경우 모바일 페이지로 리다이렉트
- jquery ajax를 활용해서 /xml/video.xml의 비디오 리스트를 불러와 우측 비디오 추가 목록으로 표현

### https://danhk0612.github.io/GdTube/m/video.html?v=LPcP3Oc9oiM

- 모바일 비디오 재생 페이지

### 기타 공통

- SCSS를 활용해서 중복된 작업 최소화 및 유지보수 용이
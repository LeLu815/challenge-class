데이터 가저오기
통신
http
요청 / 응답
클라이언트 / 서버

request http 서버에게 보냄
response http 클라이언트에게 보냄

요청을 할 떄 필요한 정보
서버의 위치 : 주소
ip주소를 알지 못해서 domain 입력

주소 하나에 하나의 요청만 처리하기에는 좀 아까움
그래서 메서드를 나눠서 다앙한 기능을 추구함

- get, post, put, delete, patch

restfull api

- 위 메서드를 crud에 대응하게 끔 api를 구성하는 것
- 리소스의 위치 정보를 그대로 url 패스로 구성하는 것
- ex) get "https://www.api.com/post/100/comments/30"
- ex) post "https://www.api.com/post/100/comments/30"
- ex) put "https://www.api.com/post/100/comments/30"
- ex) delete "https://www.api.com/post/100/comments/30"
- ex) patch "https://www.api.com/post/100/comments/30"
  의미론적인 약속(규칙)을 만드는 것.

axios

- fetch에 비해 사용 편의성이 높다. (baseUrl 설정가능, 인스턴스화, 인터셉터, 자동으로 josn 객체 변환, http 메서드 이름과 대응하는 인스턴스 메서드 소유)

- 별도 설치를 해야한다 => 클라이언트 코드의 용량이 커진다. => 사용자의 인터넷 환경에 영향을 받는다.

fetch

- 자바스크립트 내장 기능.
- 설치를 안해도 된다. 모든 브라우저에서 기본적으로 호환이 된다.

- 외부 라이브러리들에 비해서 상대적으로 사용 편의성이 떨어진다.

axios.create

- 1. 나만의 인스턴스 => 커스텀 가능
- 2. 여러개 나만의 인스턴스 만들 수 있다.

api는 컴포넌트와 분리한다.
리액트 컴포넌트는 ui측면에만 관심이 있고
비즈니스 로직적인 부분에만 관심이 없다.

유지보수 측면에서 강한 코드 => 레이어를 구분한다!

- 클리아언트 상태 관리 vs 서버 상태 관리

  - 클라이언트 상태 관리를 위한 라이브러리 택 1
  - 서버 상태 관리를 위한 라이브러리 택 1

- 서버 상태 관리란?

- 리액트 쿼리도 context api를 이용해서 만듬
  useQuery와 useMutation

# 01.React란?

## 01. 소개

- 리액트는 UI(사용자 인터페이스) 제작을 도와주는 자바스크립트 라이브러리에요.
- 자바스크립트 라이브러이기 떄문에 cdn 등을 활용해서 간단하게 사용해 볼 수 있어요.

```jsx
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트 맛보기</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      const appEl = document.getElementById("app");
      const root = ReactDOM.createRoot(appEl);

      const Greeting = () => <h1>Hello World</h1>;

      root.render(<Greeting />);
    </script>
  </body>
</html>
```

## 02. 등장 배경

전통적인 웹 개발에서 HTML, css, JavaScript는 각각 구조, 스타일, 동작을 담당하는 역할을 해왔어요.
하지만 이러한 방식에는 몇 가지 한계가 있었어요.

1. 유지보수의 어려움 : 웹 애플리케이션이 커질수록 HTML,CSS, JavaScript 코드 간의 상호작용이 복잡해지고, 이를 유지보수하기가 어려워 졌어요.
2. DOM 조작의 비효율성 : JavaScript를 사용한 직접적인 DOM 조작은 성능 저하를 가져올 수 있어요.
   DOM은 웹 페이지의 구조를 나타내므로, 자주 변경될 경우 브라우저의 랜더링 성능이 크게 저하될 수 있거든요.
3. 재사용성 부족 : 전통적인 방식에는 코드의 재사용성이 낮고, 동일한 기능을 다른 부분에서 사용하기 위해 코드를 반복 작성해야 하는 경우가 많았어요.

# 02. React를 사용한 웹 개발과 기존 웹 개발의 차이점

## 01. MPA → SPA

<img src="./img/spaVSmpa.png">

- 전통적인 웹 개발 방식은 Multi Page Application을 제작하는 것
  - 리액트를 사용한 웹 개발 방식은 Single Page Application을 제작하는 것
  <ul>
  <li>SPA는 한 번의 페이지 로드로 전체 웹 서비스에 필요한 모든 콘텐츠를 동적으로 렌더링하는 웹 애플리케이션 방식이에요.</li>
  <li>사용자의 상호작용에 따라 필요한 부부만 JavaScript를 통해 갱신해요. 그래서 전체 페이지를 새로 불러오는 대신, 필요한 데이터만 주고받을 수 있죠.</li>
  <li>이 방식은 빠른 페이지 반응성과 부드러운 사용자 경험을 제공해줘요.</li>
  </ul>

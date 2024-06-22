export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      이것이 홈페이지
    </main>
  );
}

/*
맨 처음에 페이지에 접속했을 때
html 어디서 오지? => ssr 서버에서 그려서 온다
그려진 화면 내에서 Link 태그로 이동했을 때 => 새로운 html 어디서 그리지? => 클라이언트에서 그림
그려진 화면 내에서 a 태그로 페이지 이동했을 때 => 새로운 html 어디서 그리지? => 서버

*/

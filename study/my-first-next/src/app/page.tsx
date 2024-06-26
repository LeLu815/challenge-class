import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/posts">포스트 페이지로 가기</Link>
    </main>
  );
}

/**
 * 처음에 불러올 때는 서버사이드로 불러온다 -> 검색엔진최적화가 매우 중요하기 때문 (넥스트 이전에는 직접 만들어줘야 했다..)
 * 그 다음엔 기본적으로 클라이언트에서 계속 그려나간다(Link, a태그 아님!)
 */

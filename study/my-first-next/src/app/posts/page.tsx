import Link from "next/link";

function PostsPage() {
  return (
    <div>
      <h1>포스트 목록 페이지</h1>
      <ol>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <Link href={`/posts/${i}`}>{i}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default PostsPage;

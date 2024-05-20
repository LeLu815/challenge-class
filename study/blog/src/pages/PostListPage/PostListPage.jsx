import { Link, useLoaderData } from "react-router-dom";

function PostListPage() {
  const post = useLoaderData();

  return (
    <div>
      <h1>PostListPage</h1>
      <ol>
        {post.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        ))}
      </ol>
    </div>
  );
}
export default PostListPage;

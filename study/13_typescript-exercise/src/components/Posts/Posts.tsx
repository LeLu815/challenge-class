import { DefaultError, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const endPoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [], error } = useQuery<
    AxiosResponse<Post[]>,
    DefaultError,
    Post[]
  >({
    queryKey: ["posts"],
    queryFn: () => axios.get(endPoint),
    // queryFn에서 돌려준 데이터를 마지막으로 한번 더 가공해서 돌려주는 함수.
    select: (response) => response.data,
  });

  // // useState는 함수. 함수의 타입은 들어오는거 나가는거 두가지만 정하면 된다.
  // // 이 때 함수의 타입을 보다 다양하게 재사용하기 위해서 함수의 타입을 미리 제네릭하게 구성해 둘 수 있다.
  // // 함수의 타입도 매개변수룰 받는다는 것!
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   // 서버의 응답 형태는 컴퓨터는 모르지만 개발자는 알 수 있다.
  //   // 타입의 인자로 넣어주기
  //   axios.get<Post[]>(endPoint).then((response) => setPosts(response.data));
  // }, []);
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}] {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endPoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// useState는 함수 => 인풋 아웃풋만
// 이떄 함수의 타입을 보다 다양하게 재사용하기 위해서
// 함수의 타입을 제네릭하게 미리 구성해 둘 수 있다. => 함수의 타입도 매게변수를 받는다는 것을 의미한다!!
function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   axios.get<Post[]>(endPoint).then((response) => setPosts(response.data));
  //   // 서버에서 데이터를 보내줄 때 데이터의 타입들을 컴퓨터는 몰라요. 나는 알아요.
  // }, []);
  const { data: posts = [], error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endPoint).then((response) => response.data),
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}] {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;

// 타입스크립트는 코드 작성중이나 빌드할 때 에러를 알려준다!

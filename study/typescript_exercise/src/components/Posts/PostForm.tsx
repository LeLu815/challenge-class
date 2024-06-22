import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endPoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleElementRef = useRef<HTMLInputElement>(null);
  const BodyElementRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endPoint, data),
  });

  useQuery;
  const handleClickButton = async () => {
    const title = titleElementRef.current.value;
    const body = BodyElementRef.current.value;

    if (!title || !body) {
      return alert("데이터를 잘 준비해주세요!");
    }

    const data = { title: "some title", body: "some body" };
    await createPost(data);
  };

  return (
    <div className="flex flex-col">
      <input ref={titleElementRef} type="text" placeholder="제목" />
      <textarea ref={BodyElementRef} placeholder="내용" />
      <button onClick={handleClickButton} type="button">
        포스트 생성하기
      </button>
    </div>
  );
}

export default PostForm;

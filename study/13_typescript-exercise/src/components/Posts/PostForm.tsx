import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endPoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleElementRef = useRef<HTMLInputElement>(null);
  const bodyElementRef = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endPoint, data),
  });
  const handleClick = async () => {
    const title = titleElementRef.current?.value;
    const body = bodyElementRef.current?.value;
    if (!title || !body) return alert("데이터를 잘 준비해주세요!");
    const data = {
      title,
      body,
    };
    await createPost(data);
  };
  return (
    <div className="flex flex-col p-4 gap-2">
      <input
        ref={titleElementRef}
        className="border border-black"
        placeholder="제목"
      />
      <textarea
        ref={bodyElementRef}
        className="border border-black"
        placeholder="내용"
      />
      <button onClick={handleClick} className="border border-black">
        포스트 생성하기
      </button>
    </div>
  );
}

export default PostForm;

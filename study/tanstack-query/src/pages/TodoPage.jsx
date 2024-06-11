import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => axios.post(ENDPOINT, { value: variables }),
    // mutationFn의 결과값이 onSuccess의 인자로 들어온다!
    onSuccess: () => {
      alert("성공했어!");
    },
    onError: () => {
      alert("실패했어");
    },
  });
  const handleCikckButton1 = async () => {
    mutate(value);
  };
  const handleCikckButton2 = async () => {
    mutate(inputRef.current.value);
  };
  return (
    <Page>
      <div className="mb-2">
        <input
          type="text"
          className="border p-2"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={isPending}
        />
        <button
          className="bg-black text-white p-2 rounded"
          onClick={handleCikckButton1}
          disabled={isPending}
        >
          눌러주세요
        </button>
      </div>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="border p-2"
          disabled={isPending}
        />
        <button
          className="bg-black text-red-400 p-2 rounded"
          onClick={handleCikckButton2}
          disabled={isPending}
        >
          눌러주세요
        </button>
      </div>
    </Page>
  );
}

export default TodoPage;

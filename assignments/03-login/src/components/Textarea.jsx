import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";

import { add_action, update_action } from "../redux/reducers/memo.reducer";
import { fullFormat } from "../util/dateFormat";

function Textarea() {
  const [writing, setWriting] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { memoId } = useParams();
  const memo = useSelector((state) => state.memo);

  let memoContent;
  const currentLocation = location.pathname;
  if (currentLocation === "/") {
    memoContent = {
      createdAt: Date.now(),
      content: "",
    };
  } else {
    memoContent = memo.find((memoSignle) => memoSignle.id === memoId);
  }

  const handleChagneMemo = (e) => {
    if (currentLocation === "/") {
      const newId = uuidv4();
      setWriting(e.target.value);
      dispatch({
        type: add_action,
        payload: {
          id: newId,
          content: e.target.value,
        },
      });
      navigate(`/memo/${newId}`);
    } else {
      setWriting(e.target.value);
      dispatch({
        type: update_action,
        payload: {
          id: memoId,
          content: e.target.value,
        },
      });
    }
  };

  useEffect(() => {
    if (!memoContent && currentLocation !== "/") {
      alert("삭제된 메모입니다.");
      navigate("/");
    }
  }, [memoContent, navigate, currentLocation]);

  useEffect(() => {
    if (currentLocation !== "/" && memoContent) {
      setWriting(memoContent.content);
    }
  }, []);

  useEffect(() => {
    // 경로가 '/'로 바뀌면 state를 초기화
    if (location.pathname === "/") {
      setWriting("");
    }
    // '/memo/:memoId' 경로에서는 상태를 유지하므로, 여기서는 별도의 조건을 추가하지 않음
  }, [location.pathname]); // location.pathname이 변경될 때마다 이 효과를 실행
  return (
    <StArticle>
      {memoContent ? (
        <>
          <StTimeDiv>{fullFormat(memoContent.createdAt)}</StTimeDiv>
          <StMemoTextarea
            onChange={handleChagneMemo}
            value={writing}
            name=""
            id=""
          ></StMemoTextarea>
        </>
      ) : (
        <h1>삭제된 메모입니다.</h1>
      )}
    </StArticle>
  );
}

export default Textarea;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;
const StTimeDiv = styled.div`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;
const StMemoTextarea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

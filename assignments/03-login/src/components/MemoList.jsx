import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import { timeFormat } from "../util/dateFormat";

function MemoList() {
  const memoList = useSelector((state) => state.memo);
  const location = useLocation();
  const { memoId } = useParams();

  let newMemoList = [...memoList];

  if (location.pathname === "/") {
    newMemoList.push({
      id: "temperId",
      createdAt: Date.now(),
      content: "새로운 메모",
    });
  }

  return (
    <StMemoList>
      {newMemoList.reverse().map((memo) => (
        <Link
          to={memo.id === "temperId" ? "/" : `/memo/${memo.id}`}
          key={memo.id}
        >
          <StMemoLi $active={memo.id === "temperId" || memo.id === memoId}>
            <StMemoContent>
              {memo.content === "" ? "새로운 메모" : memo.content}
            </StMemoContent>
            <StMemoTime>{timeFormat(memo.createdAt)}</StMemoTime>
          </StMemoLi>
        </Link>
      ))}
    </StMemoList>
  );
}

export default MemoList;

const StMemoList = styled.ul`
  padding: 20px 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;

  a {
    text-decoration: none;
  }
`;

const StMemoLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 56px;
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? "rgb(255, 224, 127)" : "")};
  width: inherit;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 224, 127);
  }
`;

const StMemoContent = styled.div`
  margin: 0px 0px 2px;
  font-size: 17px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 20px;
  color: black;
`;

const StMemoTime = styled.div`
  font-size: 15px;
  color: rgb(64, 64, 64);
  display: flex;
  align-items: center;
  height: 20px;
`;

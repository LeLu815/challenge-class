import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { delete_action } from "../redux/reducers/memo.reducer";

function Controller() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memoId } = useParams();

  const memoList = useSelector((state) => state.memo);

  const onClickDelete = () => {
    if (location.pathname === "/") {
      if (memoList.length === 0) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return;
      } else {
        return navigate(-1);
      }
    } else {
      if (memoList.length === 1) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return;
      } else {
        dispatch({
          type: delete_action,
          payload: memoId,
        });
        const redirectId = memoList[memoList.length - 2].id;
        return navigate(`/memo/${redirectId}`);
      }
    }
  };
  return (
    <StHeader>
      <Link disabled={location.pathname === "/" ? false : true} to="/">
        새 매모 작성하기
      </Link>
      <button onClick={onClickDelete}>삭제</button>
    </StHeader>
  );
}

export default Controller;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;

  a {
    text-decoration: none;
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;
  }

  button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;
  }
`;

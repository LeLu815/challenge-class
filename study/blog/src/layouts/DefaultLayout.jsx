import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  // 컴포넌트의 생애주기와 의존성 배열에 담긴 값의 변화에 따라 함수를 실행해 주는 훅
  // mount -> upadate -> unmount
  useEffect(() => {
    // 마운트
    console.log("마운트");
    return () => {
      // 언마운트
      console.log("언마운트");
    };
  }, []);
  return (
    <div>
      {/* 기본동작 a 태그 => 새로 불러옴 (클라이언트 사이트 아님!) 그렇지만 a 태그로 랜더링이 된다! */}
      {/* <a href="/post">포스트 목록 페이지</a> */}
      <div>
        <Link to="/">홈 페이지</Link>
      </div>
      <div>
        <Link to="/post">포스트 목록 페이지</Link>
      </div>

      <div>
        <Link to="/post/2">포스트 상세 페이지</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;

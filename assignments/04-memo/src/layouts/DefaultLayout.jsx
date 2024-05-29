import { Outlet } from "react-router";
import styled from "styled-components";

import Textarea from "../components/Textarea";

function DefaultLayout() {
  return (
    <>
      <StDivForMargin />
      <StOuterBox>
        <StSideSection>
          <Outlet />
        </StSideSection>
        <Textarea />
      </StOuterBox>
    </>
  );
}

export default DefaultLayout;

const StDivForMargin = styled.div`
  height: 50px;
  width: 100%;
`;

const StOuterBox = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

const StSideSection = styled.section`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 27px;
  /* border-bottom: 1px solid #cccccc; */
  /* flex-wrap: wrap; */

  i {
    align-self: center;
  }
`;

export const Repository = styled.div`
  flex: 1;
  background: #fff;
  /* width: 100%; */

  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    margin-left: 5px;
    margin-right: 5px;
    justify-self: flex-start;
    align-self: center;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 7px;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }
`;

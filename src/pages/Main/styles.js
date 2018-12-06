import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const VerticalMenu = styled.div`
  width: 320px;
  align-self: flex-start;
  border-right: 1px solid #ccc;
  min-height: 100vh;
  /* height: 100%; */
  padding: 22px;
  background-color: #ffffff;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

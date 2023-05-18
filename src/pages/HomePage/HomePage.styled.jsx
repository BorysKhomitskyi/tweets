import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  max-width: 900px;
  font-size: 35px;
  font-weight: 900;
  color: #373737;
  & a {
    padding: 5px;
    &:hover {
      color: #373737;
      background-color: transparent;
    }
  }
`;

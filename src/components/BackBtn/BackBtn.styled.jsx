import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  max-width: 200px;
  margin: 0 auto;
  padding: 14px;
  font-weight: 600;
  font-size: 20px;
  line-height: calc(24 / 18);
  text-decoration: none;
  border-radius: 10px;
  border: solid 1px #373737;
  cursor: pointer;
  color: #373737;
  background-color: #EBD8FF;
  );
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #373737;
    background-color: #5CD3A8;
  }
`;

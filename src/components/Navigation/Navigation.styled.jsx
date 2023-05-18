import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 25px;
`;
export const Link = styled(NavLink)`
  font-weight: 900;
`;

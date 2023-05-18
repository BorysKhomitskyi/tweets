import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 5;
  top: -1px;
  padding: 30px 30px;
  display: flex;
  gap: 20px;
  font-size: 30px;
  background:linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  );
  & a {
    padding: 14px;
  width: 196px;
  height: 50px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-style: none;
  cursor: pointer;
  background-color: #EBD8FF;
  justify-content: center;    
  }
  & a.active {
    background-color: #5CD3A8;
  }
  & a:hover {
    background-color: #5CD3A8;
    color: #373737;
  }

`;

import { NavLink } from "react-router-dom";
import { Container } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <span>
        <NavLink to="/tweets">Tweet App</NavLink>
      </span>
    </Container>
  );
};

export default HomePage;

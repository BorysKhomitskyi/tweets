import PropTypes from "prop-types";
import { StyledLink } from "./BackBtn.styled";

const BackBtn = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

BackBtn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default BackBtn;


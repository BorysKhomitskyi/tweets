import { ThreeCircles} from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

const Loader = (page) => {
  if (page) {
    return (
      <LoaderBox>
        <ThreeCircles width="300" color="#5CD3A8" />
      </LoaderBox>
    );
  }
  return <ThreeCircles width="300" color="#5CD3A8" />;
};

export default Loader;

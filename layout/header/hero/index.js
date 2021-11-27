import HeroCtx from "./styled";
import propTypes from "prop-types";

const Hero = (props) => <HeroCtx></HeroCtx>;

Hero.propTypes = {
  title: propTypes.string,
};

export default Hero;

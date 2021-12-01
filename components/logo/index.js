import Image from "next/image";
import LogoContext from "./styled";
import propTypes from "prop-types";
import router from "next/router";

const Logo = (props) => (
  <LogoContext {...props}>
    <Image
      src="/logo.png"
      alt="Roundup's Logo"
      height={40}
      width={100}
      quality={100}
      objectFit="contain"
    />
  </LogoContext>
);

Logo.defaultProps = {
  onClick: () => router.push("/"),
};

Logo.propTypes = {
  mobile: propTypes.bool,
  onClick: propTypes.func,
};

export default Logo;

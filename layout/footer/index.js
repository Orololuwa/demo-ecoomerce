import Logo from "components/logo";
import Nav from "layout/nav";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import FooterCtx, { Flex_ } from "./styled";
import Flex from "components/flex";

const Footer = () => (
  <FooterCtx>
    <Flex_
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: "1rem 0" }}
    >
      <Logo className="logo" />
    </Flex_>
    <Flex_ style={{ padding: "1rem 0" }}>
      <article className="copy">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Copyright 2021. All rights reserved</p>
      </article>
      <span className="socials">
        <Flex justifyContent="flex-end" style={{ marginRight: "1rem" }}>
          <IoLogoFacebook size={25} className="socials-icon" />
          <IoLogoTwitter size={25} className="socials-icon" />
          <IoLogoInstagram size={25} className="socials-icon" />
        </Flex>
      </span>
    </Flex_>
  </FooterCtx>
);

export default Footer;

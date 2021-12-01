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
          CULTURATI, is a high-status fusion of cultural event, exhibition and
          award brand – cleverly tailored toward recognizing the tireless
          contributions of art luminaries in different creative endeavours.
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

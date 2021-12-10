import { useEffect, useState } from "react";
import HeaderContext, { Banner, Menu, Nav } from "./styled";
import Logo from "components/logo";
import Drawer from "components/drawer";
import CartButton from "./cartButton";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const onShow = () => setShowSideDrawer(true);
  const onClose = () => setShowSideDrawer(false);

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      if (scroll < 30){
        setShowBanner(true);
      }else setShowBanner(false)
    });
  });

  return (
    <HeaderContext>
      {showBanner && <Banner />}
      <Nav>
        <Menu size={25} onClick={onShow} />
        <Logo />
        <CartButton />
        <Drawer
          isOpen={showSideDrawer}
          onClose={onClose}
          placement="left"
          color="green"
        >
          <Logo style={{ margin: "1rem 1rem 2.5rem 1rem" }} />
        </Drawer>
      </Nav>
    </HeaderContext>
  );
};

export default Header;

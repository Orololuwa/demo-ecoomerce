import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

export const Menu = styled(IoMenuOutline)`
  color: ${({ theme }) => theme.colors.green[500]};
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors.green[700]};
  color: ${({ theme }) => theme.colors.white};
  height: 30px;
  width: 100%;
`;

export const Nav = styled.header`
  padding: 0.75rem 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  width: 100%;
  background: transparent;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 19px -5px ${({ theme }) => theme.colors.gray[200]};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: calc(100% - 15rem);
    transform: translateX(-50%);
    height: 0.5px;
    padding: 0 7.5rem;
    background: ${({ theme }) => theme.colors.gray[50]}aa;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: calc(100% - 10rem);
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: calc(100% - 5rem);
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem 5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 2.5rem;
  }
`;

const HeaderCtx = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export default HeaderCtx;

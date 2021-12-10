import styled from "styled-components";
import Section from "components/section";

const HeroCtx = styled(Section)`
  //background: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 0;
  padding-bottom: 6.5rem;

  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 0.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 0;
    padding-bottom: 6rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 0;
    padding-bottom: 5rem;
  }
`;

export default HeroCtx;

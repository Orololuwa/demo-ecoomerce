import styled from "styled-components";

const InnerCarouselItem = styled.div`
  position: relative;
  height: 20rem;
  width: 100%;
  margin: 7.5rem auto 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 17rem;
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 17rem;
    width: 100%;
    margin: 2.5rem auto 0 auto;
  }
`;

export default InnerCarouselItem;

import styled from "styled-components";

const InnerCarouselItem = styled.div`
  position: relative;
  height: 40rem;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 27rem;
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 27rem;
    width: 100%;
  }
`;

export default InnerCarouselItem;

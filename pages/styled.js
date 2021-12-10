import styled from "styled-components";

const HomeCtx = styled.div`
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    row-gap: 3.5rem;
    column-gap: 1rem;
    justify-items: center;
    padding: 5rem 2.5rem;

    // @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    //   grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    // }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    }
  }
`;

export default HomeCtx;

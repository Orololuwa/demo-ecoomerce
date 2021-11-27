import styled from "styled-components";

const HomeCtx = styled.div`
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(22.5%), 1fr));
    row-gap: 3.5rem;
    justify-items: center;
    padding-bottom: 5rem;
    padding-top: 5rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    }
  }
`;

export default HomeCtx;

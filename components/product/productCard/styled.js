import styled from "styled-components";

const ProductCardCtx = styled.div`
  text-align: center;
  button {
    width: 80%;
  }

  .price {
    font-weight: 500;
  }
`;

export const ImageCardCtx = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray[100]};
  height: 18rem;
  width: 18rem;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 15rem;
    width: 12rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 12.5rem;
    width: 12.5rem;
  }
`;

export default ProductCardCtx;

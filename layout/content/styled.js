import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[100]};
  margin-top: 50px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 100px;
  }
`;

export default Main;

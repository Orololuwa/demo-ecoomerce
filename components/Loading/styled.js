import styled, { keyframes } from "styled-components";

const load3 = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
`;

const load7 = keyframes`
0%,
80%,
100% {
  box-shadow: 0 2.5em 0 -1.3em;
}
40% {
  box-shadow: 0 2.5em 0 0;
}
`;

const LoadingCtx = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${load7} 1.8s infinite ease-in-out;
    animation: ${load7} 1.8s infinite ease-in-out;
  }
  & {
    color: #d87d4a;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`;

export const Loading2Ctx = styled.div`
  color: ${({ theme, color }) =>
    color === "white" ? "transparent" : theme.colors[color][500]};
  font-size: 10px;
  position: absolute;
  top: -${({ size }) => size};
  left: 50%;
  text-indent: -9999em;
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${load7} 1.8s infinite ease-in-out;
    animation: ${load7} 1.8s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }
  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
`;

export default LoadingCtx;

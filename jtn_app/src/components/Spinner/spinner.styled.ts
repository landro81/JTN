import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export type SpinnerSize = "normal" | "large" | "small";

interface Props {
  size?: SpinnerSize;
}

export const SpinnerBox = styled.div<Props>`
  width: ${(props) =>
    props.size === "large" ? 100 : props.size === "small" ? 40 : 80}px;
  height: ${(props) =>
    props.size === "large" ? 100 : props.size === "small" ? 40 : 80}px;
  animation: ${spin} 2s linear infinite;
  border-radius: 50%;
  border: ${(props) => (props.size === "small" ? 4 : 8)}px solid lightslategray;
  border-top: ${(props) => (props.size === "small" ? 4 : 8)}px solid lightgray;
  margin: auto;
  display: flex;
`;

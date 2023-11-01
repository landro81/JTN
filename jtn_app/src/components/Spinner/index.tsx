import { SpinnerBox, SpinnerSize } from "./spinner.styled";

interface Props {
  size?: SpinnerSize;
}

export const Spinner = ({ size = "normal" }: Props) => {
  return <SpinnerBox size={size} />;
};

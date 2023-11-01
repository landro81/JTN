import { FC } from "react";
import { ITypography } from "./types";
import * as st from "./styles";

const Typography: FC<ITypography> = ({
  variant,
  color,
  children,
  className,
}) => {
  const Component = variant ? st[variant] : st["Body"];

  return (
    <Component color={color} className={className}>
      {children}
    </Component>
  );
};

export default Typography;

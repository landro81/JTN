import { ReactNode } from "react";

export interface IStyledProps {
  color?: Colors;
  marginTop?: string;
  marginBottom?: string;
}

export interface ITypography {
  variant?: Variants;
  color?: Colors;
  children: ReactNode;
  className?: string;
  marginBottom?: string;
}

export type Variants =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "Lead"
  | "Body"
  | "BodySpan"
  | "Bold"
  | "Description"
  | "DescriptionSmall"
  | "DescriptionBold"
  | "DescriptionItalic";

export type Colors = string;

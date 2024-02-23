"use client";
import styled, { css } from "styled-components";
import { Colors, IStyledProps } from "./types";

const shared = (color?: Colors) => css`
  margin: 0;
  padding: 0;
  font-family: "helvetica";
  ${color ? `color: ${color}` : ""};
`;

export const H1 = styled.h1<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 3.125rem;
  font-weight: 900;
  line-height: 1.1;
`;

export const H2 = styled.h2<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.22;
`;

export const H3 = styled.h3<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.35;
`;

export const H4 = styled.h4<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.33;
`;

export const H5 = styled.h5<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.33;
`;

export const H6 = styled.h6<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.33;
`;

export const Lead = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.45;
`;

export const Body = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.975rem;
  font-weight: 350;
  line-height: 1.6;
`;

export const BodySpan = styled.span<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.875rem;
  font-weight: 350;
  line-height: 1.565;
`;

export const Bold = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.565;
`;

export const Description = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
`;

export const DescriptionItalic = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
  font-style: italic;
`;

export const DescriptionSmall = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.66rem;
  font-weight: 350;
  line-height: 1.5;
`;

export const DescriptionBold = styled.div<IStyledProps>`
  ${({ color }) => shared(color)};
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
`;

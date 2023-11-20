import styled, { DefaultTheme, css } from "styled-components";

type HeadingStyleProps = {
  $uppercase?: boolean;
  $colorDark?: boolean;
  size?: "big" | "medium" | "small" | "huge";
};

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1<HeadingStyleProps>`
  ${({ theme, $colorDark, size, $uppercase }) => css`
    color: ${$colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase($uppercase)};
  `}
`;

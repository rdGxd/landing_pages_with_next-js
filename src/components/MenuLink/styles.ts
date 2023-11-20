import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled(Link)`
  ${({ theme }) => css`
    display: inline-flex;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
    }
  `}
`;

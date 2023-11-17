import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  > img {
    height: 3rem;
  }
`;

import { Heading } from "../Heading/index";
import * as Styled from "./styles";

export type LogoLinkProps = {
  text: string;
  link: string;
  srcImg?: string;
};

export const LogoLink = ({ text, srcImg = "", link }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase colorDark={false} as="h2">
      <Styled.Container href={link}>{srcImg ? <img src={srcImg} alt={text} /> : text}</Styled.Container>
    </Heading>
  );
};

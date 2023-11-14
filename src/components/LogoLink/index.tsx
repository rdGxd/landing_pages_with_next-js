import Image from "next/image.js";
import { Heading } from "../Heading/index";
import * as Styled from "./styles";

export type PropsLogoLink = {
  text: string;
  srcImg: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = "", link }: PropsLogoLink) => {
  return (
    <Heading size="small" uppercase colorDark={false} as="h2">
      <Styled.Container href={link}>{srcImg ? <Image src={srcImg} alt={text} /> : text}</Styled.Container>
    </Heading>
  );
};

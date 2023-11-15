import Image from "next/image.js";
import { Heading } from "../Heading/index";
import * as Styled from "./styles";

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({ text, srcImg = "", link }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase colorDark={false} as="h2">
      <Styled.Container href={link}>
        {srcImg ? <Image src={srcImg} alt={text} width={100} height={100} /> : text}
      </Styled.Container>
    </Heading>
  );
};

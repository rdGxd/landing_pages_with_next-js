import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export type PropsFooter = {
  html: string;
};

export const Footer = ({ html }: PropsFooter) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

import { SectionContainer } from "../SectionContainer";
import * as Styled from "./styles";

export type PropsSectionBackground = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({ children, background = false, sectionId = "" }: PropsSectionBackground) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

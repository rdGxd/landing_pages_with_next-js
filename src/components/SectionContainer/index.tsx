import * as Styled from "./styles";

export type PropsSectionContainer = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: PropsSectionContainer) => {
  return <Styled.Container>{children}</Styled.Container>;
};

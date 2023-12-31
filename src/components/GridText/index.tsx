import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  grid: GridTextElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridText = ({ background = false, title, grid, description, sectionId = "" }: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

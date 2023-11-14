import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export type PropsImageGrid = {
  title: string;
  background: boolean;
  description: string;
  grid: [
    {
      altText: string;
      srcImg: string;
    },
  ];
  sectionId: string;
};

export const GridImage = ({ title, description, grid, background = false, sectionId = "" }: PropsImageGrid) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

import * as Styled from "./styles";

export type PropsTextComponent = {
  children: string;
};

export const TextComponent = ({ children }: PropsTextComponent) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

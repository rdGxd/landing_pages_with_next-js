import * as Styled from "./styles";

export type PropsMenuLink = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: PropsMenuLink) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

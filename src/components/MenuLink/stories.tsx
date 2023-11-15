import { MenuLink, MenuLinkProps } from ".";

const StoriesMenuLink = {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "MenuLink",
    link: "https://google.com.br",
    newTab: false,
  },
  argTypes: {
    children: { type: "string" },
    link: { type: "string" },
    newTab: { type: "boolean" },
  },
};

export const Template = (args: MenuLinkProps) => {
  return (
    <div style={{ display: "flex" }}>
      <MenuLink {...args} />
    </div>
  );
};

export default StoriesMenuLink;

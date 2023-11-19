import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MenuLink, MenuLinkProps } from ".";

export default {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "MenuLink",
    link: "https://google.com.br",
    newTab: false,
  },
} as Meta<typeof MenuLink>;

export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: "flex" }}>
      <MenuLink {...args} />
    </div>
  );
};

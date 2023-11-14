import { Meta, StoryObj } from "@storybook/react";
import { Menu, PropsMenu } from ".";

import linksMock from "../NavLinks/mock";

export default {
  title: "Menu",
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: "Logo",
      link: "#target",
      srcImg: "",
    },
  },
} as Meta;

export const Template: StoryObj<PropsMenu> = (args: PropsMenu) => {
  return (
    <div style={{ height: "300vh", background: "gray" }}>
      <Menu {...args} />
    </div>
  );
};

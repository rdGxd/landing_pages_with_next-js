import { Meta, Story } from "@storybook/react/types-6-0";
import { NavLinks, PropsNavLinks } from ".";
import links from "./mock";

export default {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: "" },
  },
} as Meta;

export const Template: Story<PropsNavLinks> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};

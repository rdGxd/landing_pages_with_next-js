import { Meta, StoryFn } from "@storybook/react";
import { GridContent, GridContentProps } from ".";
import mock from "./mock";

export default {
  title: "GridContent",
  component: GridContent,
  args: {
    ...mock,
  },
} as Meta<typeof GridContent>;

export const Template: StoryFn<GridContentProps> = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

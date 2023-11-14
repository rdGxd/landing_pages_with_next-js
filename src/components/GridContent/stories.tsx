import { mock } from "./mock";
import { GridContent, PropsGridContent } from ".";

export const storiesGridContent = {
  title: "GridContent",
  component: GridContent,
  args: {
    ...mock,
  },
};

export const Template = (args: PropsGridContent) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

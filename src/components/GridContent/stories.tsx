import { GridContent, PropsGridContent } from ".";
import { mock } from "./mock";

const storiesGridContent = {
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

export default storiesGridContent;

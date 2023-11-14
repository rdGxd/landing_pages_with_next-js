import { GridText, PropsGridText } from ".";

import { mock } from "./mock";

export const StoriesGridText = {
  title: "GridText",
  component: GridText,
  args: {
    ...mock,
  },
};

export const Template = (args: PropsGridText) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

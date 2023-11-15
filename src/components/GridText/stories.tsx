import { GridText, GridTextProps } from ".";

import mock from "./mock";

const StoriesGridText = {
  title: "GridText",
  component: GridText,
  args: {
    ...mock,
  },
};

export const Template = (args: GridTextProps) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

export default StoriesGridText;

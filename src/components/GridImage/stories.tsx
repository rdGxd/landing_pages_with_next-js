import { GridImage, PropsImageGrid } from ".";
import { mock } from "./mock";

export const storiesGridImage = {
  title: "GridImage",
  component: GridImage,
  args: mock,
};

export const Template = (args: PropsImageGrid) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};

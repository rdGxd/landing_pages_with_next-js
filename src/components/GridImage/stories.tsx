import { GridImage, PropsImageGrid } from ".";
import { mock } from "./mock";

const storiesGridImage = {
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

export default storiesGridImage;

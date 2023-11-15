import { GridImage, GridImageProps } from ".";
import mock from "./mock";

const storiesGridImage = {
  title: "GridImage",
  component: GridImage,
  args: mock,
};

export const Template = (args: GridImageProps) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};

export default storiesGridImage;

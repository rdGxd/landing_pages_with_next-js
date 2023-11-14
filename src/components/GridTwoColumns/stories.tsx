import { GridTwoColumns, PropsGridTwoColumns } from ".";
import { mock } from "./mock";

export const StoriesGridTwoColumns = {
  title: "GridTwoColum",
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args: PropsGridTwoColumns) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};

import { Base } from ".";
import { mock } from "./mock";

export default {
  title: "Base",
  component: Base,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

import { Base, PropsBase } from ".";
import { mock } from "./mock";

const mockBase = {
  title: "Base",
  component: Base,
  args: mock,
};

export const Template = (args: PropsBase) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

export default mockBase;

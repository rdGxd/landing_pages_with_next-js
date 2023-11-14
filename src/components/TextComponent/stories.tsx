import { PropsTextComponent, TextComponent } from ".";

const StoriesTextComponent = {
  title: "TextComponent",
  componente: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis aliquid doloribus ratione ab dolorem perferendis est.
    Ducimus animi, deleniti quibusdam sequi dignissimos quisquam ipsum temporibus nam odit incidunt voluptate nemo.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args: PropsTextComponent) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

export default StoriesTextComponent;

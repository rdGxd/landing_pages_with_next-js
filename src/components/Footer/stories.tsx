import { Footer, PropsFooter } from ".";

const footerStories = {
  title: "Footer",
  component: Footer,
  args: {
    html: "<p><a href='https://github.com/rdGxd'>Feito por Rodrigo Silva</a></p>",
  },
};

export const Template = (args: PropsFooter) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

export default footerStories;

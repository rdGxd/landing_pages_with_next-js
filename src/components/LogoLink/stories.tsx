import { LogoLink, LogoLinkProps } from ".";

const LogoLinkStories = {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "https://google.com.br",
  },
};

export const ImageOnly = (args: LogoLinkProps) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args: LogoLinkProps) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: "",
};

export default LogoLinkStories;

import { renderTheme } from "../../styles/render-theme";
import { GridTwoColumns } from ".";

import mock from "./mock";

describe("<GridTwoColumns />", () => {
  it("should render two column grid", () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

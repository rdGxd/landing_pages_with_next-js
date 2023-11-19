import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer html={"<h1>Olá</h1>"} />);
    expect(screen.getByRole("", { name: "Olá" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

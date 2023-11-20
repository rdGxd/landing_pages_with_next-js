import { renderTheme } from "@/styles/render-theme";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CloneMe } from ".";

describe("<CloneMe />", () => {
  it("should render", () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});

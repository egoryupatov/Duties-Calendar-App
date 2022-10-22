import { DutyCell } from "../DutyCell";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DutyCell", () => {
  it("renders and displays the date and engineer's name", () => {
    render(<DutyCell day={2} text={"Alexander Petrov"} />);
    expect(screen.getByText("2")).toBeVisible();
    expect(screen.getByText("Alexander Petrov")).toBeVisible();
  });
});

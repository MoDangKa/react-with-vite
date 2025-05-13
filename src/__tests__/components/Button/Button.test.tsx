import Button from "@/components/Button/Button";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("Button Component", () => {
  it("renders the button with the correct text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("executes onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    screen.getByText("Click Me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

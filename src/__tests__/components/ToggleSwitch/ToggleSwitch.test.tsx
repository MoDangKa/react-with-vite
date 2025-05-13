import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { useTheme } from "@/contexts/ThemeContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, Mock } from "vitest";

vi.mock("@/contexts/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

describe("ToggleSwitch Component", () => {
  it("renders the toggle switch", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
    });

    render(<ToggleSwitch />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles theme on click", () => {
    const toggleThemeMock = vi.fn();
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      toggleTheme: toggleThemeMock,
    });

    render(<ToggleSwitch />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});

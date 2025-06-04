import ToggleSwitchV1 from "@/components/ToggleSwitch/ToggleSwitchV1";
import { useTheme } from "@/contexts/ThemeContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, Mock } from "vitest";

vi.mock("@/contexts/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

describe("ToggleSwitchV1 Component", () => {
  it("renders the toggle switch", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
    });

    render(<ToggleSwitchV1 />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles theme on click", () => {
    const toggleThemeMock = vi.fn();
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      toggleTheme: toggleThemeMock,
    });

    render(<ToggleSwitchV1 />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import LoginForm from "@/components/forms/LoginForm/LoginForm";

describe("LoginForm Component", () => {
  it("renders the form with email and password fields", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
  });

  it("displays validation errors when form is submitted with empty fields", async () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Password must be at least 6 characters")
      ).toBeInTheDocument();
    });
  });

  //   it("displays validation error for invalid email format", async () => {
  //     render(<LoginForm />);

  //     fireEvent.input(screen.getByLabelText("Email"), {
  //       target: { value: "invalid-email" },
  //     });

  //     fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

  //     await waitFor(() => {
  //       expect(
  //         screen.getByText("Please enter a valid email")
  //       ).toBeInTheDocument();
  //     });
  //   });

  it("displays validation error for short password", async () => {
    render(<LoginForm />);

    fireEvent.input(screen.getByLabelText("Password"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(
        screen.getByText("Password must be at least 6 characters")
      ).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    const mockSubmit = vi.fn();
    vi.spyOn(console, "log").mockImplementation(mockSubmit);

    render(<LoginForm />);

    fireEvent.input(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.input(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith("Form submitted:", {
        email: "test@example.com",
        password: "password123",
      });
    });

    // Check if loading state is shown
    expect(screen.getByText("Processing...")).toBeInTheDocument();

    // Clean up
    vi.restoreAllMocks();
  });

  //   it("shows loading state during form submission", async () => {
  //     render(<LoginForm />);

  //     fireEvent.input(screen.getByLabelText("Email"), {
  //       target: { value: "test@example.com" },
  //     });

  //     fireEvent.input(screen.getByLabelText("Password"), {
  //       target: { value: "password123" },
  //     });

  //     fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

  //     expect(await screen.findByText("Processing...")).toBeInTheDocument();

  //     await waitFor(() => {
  //       expect(screen.queryByText("Processing...")).not.toBeInTheDocument();
  //     });
  //   });
});

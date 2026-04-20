import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

describe("Login Form Component", () => {

  beforeEach(() => {
    // Mock alert
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("RENDERS email, password fields and button", () => {
    render(<Form />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("ACCEPTS user input", () => {
    render(<Form />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);

    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "123456" } });

    expect(email.value).toBe("test@gmail.com");
    expect(password.value).toBe("123456");
  });

  it("SUBMITS form successfully", () => {
    render(<Form />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "123456" } });

    fireEvent.click(button);

    // Since we mocked alert, just check if it was called (optional)
    expect(window.alert).toHaveBeenCalledTimes(0);
  });

});
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter.js");

describe("Test on <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: jest.fn(),
    reset: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading"));
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should show a pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "test name",
        sprites: ["test sprites"],
      },
      isLoading: false,
      error: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("test name"));
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: {
        name: "test name",
        sprites: ["test sprites"],
      },
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});

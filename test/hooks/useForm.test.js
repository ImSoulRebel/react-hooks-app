/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Test on useForm", () => {
  const initialForm = {
    name: "Peter",
    email: "peter@google.com",
  };
  test("should return deafult values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: "Pepe" } });
    });
    expect(result.current.name).toBe("Pepe");
  });

  test("should reset form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: "Pepe" } });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
  });
});

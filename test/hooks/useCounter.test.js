import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

/* eslint-disable no-undef */
describe("Test on useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toBeDefined();
    expect(increment).toBeDefined();
    expect(reset).toBeDefined();
  });

  test("should return counter with 100 value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => increment());
    expect(result.current.counter).toBe(11);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    act(() => decrement());
    expect(result.current.counter).toBe(9);
  });

  test("should reset the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { reset, increment } = result.current;
    act(() => {
      increment();
      increment();
      increment();
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});

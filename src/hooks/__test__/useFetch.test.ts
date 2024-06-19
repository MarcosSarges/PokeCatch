import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../useFetch";
import { HttpClient } from "@config/http";

describe("useFetch", () => {
  it("should return the fetched data", async () => {
    const httpClientMock = {
      get: jest.fn(),
    } as unknown as HttpClient;

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(async () => "test data", httpClientMock)
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual("test data");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle fetch error", async () => {
    const httpClientMock = {
      get: jest.fn().mockRejectedValue(new Error("Fetch error")),
    };

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/data", httpClientMock)
    );

    await waitForNextUpdate();

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual("Fetch error");
  });

  it("should handle loading state", async () => {
    const httpClientMock = {
      get: jest.fn().mockResolvedValue({ data: "test data" }),
    };

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/data", httpClientMock)
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });
});

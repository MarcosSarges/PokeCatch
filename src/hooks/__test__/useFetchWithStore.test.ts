import { act, renderHook } from "@testing-library/react-hooks";
import useFetchWithStore from "../useFetchWithStore";
import IStoreWithFetch from "@domain/IStore";
import { StoreApi, UseBoundStore } from "zustand";

describe("useFetchWithStore", () => {
  test("should fetch data from the store", () => {
    const fetch = jest.fn().mockResolvedValue([]);
    const store = () => ({
      fetch,
      data: [],
      loading: false,
      error: null,
    });

    const { result } = renderHook(() =>
      useFetchWithStore(
        store as unknown as UseBoundStore<StoreApi<IStoreWithFetch>>
      )
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toMatchObject([]);
    expect(fetch).toHaveBeenCalled();
  });
});

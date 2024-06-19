import { HttpClient, HttpRequestConfig, RequestService } from "@config/http";
import { useCallback, useEffect, useState } from "react";

interface PaginationOptions {
  offset?: number;
  limit?: number;
}

interface FetchResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

// paginationOptions?: PaginationOptions,
function useFetch<T = any>(
  service: RequestService<T>,
  httpClient: HttpClient,
  config?: HttpRequestConfig
): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await service(httpClient, config);
      setData(response);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export default useFetch;

import { HttpClient, HttpRequestConfig, RequestService } from "@config/http";

type ResultGetSpecie = {
  egg_groups: {
    name: string;
    url: string;
  }[];
};

const getSpecie: RequestService<ResultGetSpecie> = async (
  http: HttpClient,
  params?: HttpRequestConfig
) => {
  const res = await http.get<ResultGetSpecie>(
    `/pokemon-species/${params?.resource}`
  );
  return res.data;
};

export default getSpecie;

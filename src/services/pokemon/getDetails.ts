import { HttpClient, HttpRequestConfig, RequestService } from "@config/http";
import IPokemon from "@domain/IPokemon";

type ResultGetDetails = IPokemon;

const getDetails: RequestService<ResultGetDetails> = async (
  http: HttpClient,
  params: HttpRequestConfig
) => {
  const res = await http.get<ResultGetDetails>(`/pokemon/${params.resource}`);
  return res.data;
};

export default getDetails;

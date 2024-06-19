import { HttpClient, HttpRequestConfig, RequestService } from "@config/http";
import IPokemon from "@domain/IPokemon";

type ResultGetEggGroup = {
  id: number;
  name: string;
  pokemon_species: {
    name: string;
    url: string;
  }[];
};

const getEggGroup: RequestService<ResultGetEggGroup> = async (
  http: HttpClient,
  params: HttpRequestConfig
) => {
  const res = await http.get<ResultGetEggGroup>(
    `/egg-group/${params.resource}`
  );
  return res.data;
};

export default getEggGroup;

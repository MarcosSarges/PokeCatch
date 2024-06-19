import { HttpClient, HttpRequestConfig, RequestService } from "@config/http";

interface ResultGetPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

const getPokemons: RequestService<ResultGetPokemon> = async (
  http: HttpClient,
  params: HttpRequestConfig
) => {
  const res = await http.get<ResultGetPokemon>("/pokemon", params);
  return res.data;
};

export default getPokemons;

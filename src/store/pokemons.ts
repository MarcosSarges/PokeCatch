import IPokemon from "@domain/IPokemon";
import { createStore } from "zustand";

interface IPokemonStore {
  pokemons: IPokemon[];
  setPokemons: (pokemons: IPokemon[]) => void;
}

const pokemonStore = createStore<IPokemonStore>((set) => ({
  pokemons: [],
  setPokemons: (pokemons: IPokemon[]) => set({ pokemons }),
}));

export default pokemonStore;

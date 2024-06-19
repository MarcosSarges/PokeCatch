import IPokemon from "@domain/IPokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IPokemonStore {
  pokemons: IPokemon[];
  catchPokemon: (pokemon: IPokemon) => void;
  releasePokemon: (pokemon: IPokemon) => void;
}

const useMyPokeStore = create(
  persist<IPokemonStore>(
    (set) => ({
      pokemons: [],
      catchPokemon: (pokemon: IPokemon) =>
        set((state) => ({ pokemons: [...state.pokemons, pokemon] })),
      releasePokemon: (pokemon: IPokemon) =>
        set((state) => ({
          pokemons: [...state.pokemons.filter((pk) => pk.id !== pokemon.id)],
        })),
    }),
    {
      name: "my-pokemons",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useMyPokeStore;

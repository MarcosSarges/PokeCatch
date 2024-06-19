import React from "react";
import * as S from "./styles";
import useMyPokeStore from "@store/myPokemons";
import IPokemon from "@domain/IPokemon";

const Catch: React.FC<IPokemon> = (pokemon) => {
  const { pokemons, catchPokemon, releasePokemon } = useMyPokeStore();

  const hasPokemon = !!pokemons.find((pk) => pk.id === pokemon.id);

  const handleCatch = () => {
    if (hasPokemon) {
      releasePokemon(pokemon);
    } else {
      catchPokemon(pokemon);
    }
  };

  return (
    <S.Container onPress={handleCatch} toRelease={hasPokemon}>
      <S.Text>{hasPokemon ? "Soltar" : "Pegar"}</S.Text>
    </S.Container>
  );
};

export default Catch;

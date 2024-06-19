import React from "react";
import * as S from "./styles";
import Header from "@components/Header";
import useMyPokeStore from "@store/myPokemons";
import PokeCard from "@components/PokeCard";
import { FlatList } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@routes/RootRouter";

const MyListPokemon = () => {
  const { pokemons } = useMyPokeStore();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <S.Container>
      <Header showBack showTitle title="Meus Pokemons" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemons}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <PokeCard
            name={item.name}
            sprite={item.sprites.front_default}
            onPress={() => {
              navigate("Details", { pokemon: item });
            }}
          />
        )}
      />
    </S.Container>
  );
};

export default MyListPokemon;

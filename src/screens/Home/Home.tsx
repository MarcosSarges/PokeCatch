import React, { LegacyRef, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import useFetch from "@hooks/useFetch";
import http from "@config/http";
import { ActivityIndicator, Button, FlatList } from "react-native";
import Header from "@components/Header";
import getPokemons from "@services/pokemon/getPokemons";
import PokeCardWithRequest from "./components/PokeCardWithRequest";
import { unionBy } from "lodash";

const Home = () => {
  const listRef = useRef(null);
  const [pokemons, setPokemons] = useState([] as any[]);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [options, setOption] = useState({
    params: { limit: 1302, offset: 0 },
  });

  const { data, isLoading } = useFetch(getPokemons, http, options);
  useEffect(() => {
    if (data) {
      setPokemons((prev) => unionBy(prev, data.results, "url"));
    }
    if (data?.count && totalPokemons !== data.count) {
      setTotalPokemons(data.count);
    }
  }, [data]);

  return (
    <S.Container>
      <Header showTitle title="PokeCatch" showPokebola />
      {isLoading && !pokemons.length && (
        <S.ContainerLoading>
          <ActivityIndicator size={"large"} color={"red"} />
        </S.ContainerLoading>
      )}
      <FlatList
        ref={listRef}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        numColumns={2}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <PokeCardWithRequest {...item} />}
        ListFooterComponent={() =>
          totalPokemons > pokemons.length && (
            <Button
              title="Ver mais"
              onPress={() => {
                setOption({
                  params: { limit: 10, offset: options.params.offset + 10 },
                });
              }}
            />
          )
        }
      />
      <Button
        title="Voltar ao topo"
        onPress={() => {
          listRef.current.scrollToOffset({ offset: 0 });
        }}
      />
    </S.Container>
  );
};

export default Home;

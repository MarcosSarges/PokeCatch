import React, { useState } from "react";
import * as S from "./styles";
import Header from "@components/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@routes/RootRouter";
import Catch from "@components/Catch";
import useFetch from "@hooks/useFetch";
import getSpecie from "@services/pokemon/getSpecie";
import http from "@config/http";

const Details = () => {
  const { pokemon } =
    useRoute<RouteProp<RootStackParamList, "Details">>().params;
  const [resource] = useState({ resource: pokemon.id });
  const { data, error } = useFetch(getSpecie, http, resource);
  return (
    <S.Container>
      <Header showBack showTitle title={`Detalhes - ${pokemon.name}`} />
      <S.Content>
        <S.Image source={{ uri: pokemon.sprites.front_default }} />
        <S.Name>
          {pokemon.name} #{pokemon.id}
        </S.Name>

        <S.Title>Tipos:</S.Title>
        <S.Type>
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </S.Type>
        {!error && (
          <>
            <S.Divider />
            <S.Title>Especie:</S.Title>
            <S.EggGroup>
              {data?.egg_groups.map((egg) => egg.name).join(", ") ||
                "Carregando..."}
            </S.EggGroup>
          </>
        )}

        <S.Divider />
        <S.Height>
          <S.Title>Altura:</S.Title>
          <S.Value>{pokemon.height / 10}m</S.Value>
        </S.Height>
        <S.Weight>
          <S.Title>Peso:</S.Title>
          <S.Value>{pokemon.weight / 10}kg</S.Value>
        </S.Weight>

        <S.Divider />
        <S.Title>Status</S.Title>
        {pokemon.stats.map((stat) => (
          <S.Height key={stat.stat.name}>
            <S.Title>{stat.stat.name}:</S.Title>
            <S.Value>{stat.base_stat}</S.Value>
          </S.Height>
        ))}
        <S.Divider />
      </S.Content>

      <Catch {...pokemon} />
    </S.Container>
  );
};

export default Details;

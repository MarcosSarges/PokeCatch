import React, { useState } from "react";
import * as S from "./styles";
import useFetch from "@hooks/useFetch";
import getDetails from "@services/pokemon/getDetails";
import http from "@config/http";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@routes/RootRouter";
import PokeCard from "@components/PokeCard";

interface IPokeCardRequestProps {
  name: string;
  url: string;
}

const PokeCardRequest: React.FC<IPokeCardRequestProps> = ({ name, url }) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [resource] = useState({
    resource: url.split("/").reverse()[1] as string,
  });

  const { data, isLoading, error } = useFetch(getDetails, http, resource);

  if (isLoading) {
    return (
      <S.Container>
        <S.Name>Loading...</S.Name>
      </S.Container>
    );
  }

  if (error || !data) return null;
  const sprite = data?.sprites?.front_default;

  return (
    <PokeCard
      onPress={() => {
        navigate("Details", { pokemon: data });
      }}
      name={name}
      sprite={sprite}
    />
  );
};

export default PokeCardRequest;

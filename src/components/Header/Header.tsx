import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import * as S from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@routes/RootRouter";
import useMyPokeStore from "@store/myPokemons";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showTitle?: boolean;
  showPokebola?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showTitle = false,
  showPokebola = false,
}) => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const { pokemons } = useMyPokeStore();

  return (
    <S.Container>
      {showBack && (
        <S.BackContainer testID="back-button" onPress={() => goBack()}>
          <Icon name="arrow-back" size={30} color={"white"} />
        </S.BackContainer>
      )}
      {showTitle && <S.Title>{title}</S.Title>}
      {showPokebola && (
        <S.ButtonPokemonList
          onPress={() => {
            navigate("MyListPokemon");
          }}
        >
          <S.Icon />
          <S.PokeBadge>
            <S.Badge>{pokemons.length}</S.Badge>
          </S.PokeBadge>
        </S.ButtonPokemonList>
      )}
    </S.Container>
  );
};

export default Header;

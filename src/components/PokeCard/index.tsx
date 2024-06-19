import React from "react";
import * as S from "./styles";

const PokeCard: React.FC<{
  onPress(): void;
  name: string;
  sprite: string;
}> = ({ onPress, name, sprite }) => {
  return (
    <S.Container onPress={onPress}>
      {sprite && <S.SpritImage source={{ uri: sprite }} />}
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};

export default PokeCard;

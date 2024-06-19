import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: ${({ theme }) =>
    theme.dimensions.width / 2 - pxOnlyNumber(theme.spacings.sm) * 2}px;

  padding: ${({ theme }) => theme.spacings.sm};
  background-color: ${({ theme }) => theme.colors.commons.gray["300"]};
  border-radius: ${({ theme }) => theme.spacings.sm};
  margin: ${({ theme }) => theme.spacings.sm};
`;

export const SpritImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 150px;
  align-self: center;
`;
export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding-top: ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.sizes.lg};
  text-align: center;
  text-transform: capitalize;
`;

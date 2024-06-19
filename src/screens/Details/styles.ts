import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.insets.bottom}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${({ theme }) => theme.spacings.md};
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 300px;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.sizes.xxl};
  font-weight: ${({ theme }) => theme.fonts.fontWeight[600]};
  text-transform: capitalize;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const Type = styled.Text`
  text-transform: capitalize;
`;

export const EggGroup = styled.Text`
  text-transform: capitalize;
`;

export const Height = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.fonts.fontWeight[600]};
  margin-right: ${({ theme }) => theme.spacings.sm};
  text-transform: capitalize;
`;

export const Value = styled.Text``;

export const Weight = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Divider = styled.View`
  margin: ${({ theme }) => theme.spacings.md} 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.commons.gray[300]};
`;

import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ toRelease: boolean }>`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: ${({ theme, toRelease }) =>
    toRelease ? theme.colors.success.dark : theme.colors.danger.dark};
  align-items: center;
  justify-content: center;
  right: ${({ theme }) => theme.spacings.md};
  bottom: ${({ theme }) =>
    pxOnlyNumber(theme.spacings.md) + theme.insets.bottom}px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.fontWeight[600]};
  color: ${({ theme }) => theme.colors.commons.white};
  text-transform: capitalize;
`;

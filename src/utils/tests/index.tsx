import React from "react";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  render as renderTestLibrary,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import theme from "@styles";

const insets = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
const frame = { x: 0, y: 0, width: 0, height: 0 };

export const getPropValue = (node: any, name: string) =>
  node._fiber.stateNode.props[name];

const render = (children: React.ReactElement) => {
  return renderTestLibrary(
    <SafeAreaProvider initialMetrics={{ insets, frame }}>
      <ThemeProvider theme={{ ...theme, insets }}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
};

export { screen, fireEvent, waitFor };
export default render;

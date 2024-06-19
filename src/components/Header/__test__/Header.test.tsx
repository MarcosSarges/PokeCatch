import React from "react";
import render, { fireEvent } from "@tests";
import Header from "../Header";

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: mockGoBack,
  }),
}));

describe("Unit::Header", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Header title="Test Title" showTitle />);
    const titleElement = getByText("Test Title");
    expect(titleElement).toBeTruthy();
  });

  it("renders the back button when showBack prop is true", () => {
    const { getByTestId } = render(<Header title="Test Title" showBack />);
    const backButton = getByTestId("back-button");
    expect(backButton).toBeTruthy();
  });
  it("calls the onBackPress function when back button is pressed", () => {
    const { getByTestId } = render(<Header title="Test Title" showBack />);
    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});

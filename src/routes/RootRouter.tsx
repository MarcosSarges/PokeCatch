import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IPokemon from "@domain/IPokemon";
import Home from "@screens/Home";
import Details from "@screens/Details";
import MyListPokemon from "@screens/MyListPokemon";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    pokemon: IPokemon;
  };
  MyListPokemon: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyListPokemon" component={MyListPokemon} />
    </Stack.Navigator>
  );
};

export default RootRouter;

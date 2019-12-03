import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Containers/HomeScreen.js";
import MapScreen from "./Containers/MapScreen.js";
import FilterScreen from "./Containers/FilterScreen.js";
import EscapeScreen from "./Containers/EscapeScreen.js";
import FavoriteScreen from "./Containers/FavoriteScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = `ios-home`;
              } else if (route.name === "Favorite") {
                iconName = `ios-add-circle`;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          };
        }}
        tabBarOptions={{
          activeTintColor: "#D9AF62",
          inactiveTintColor: "#A69C94"
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>

      {/* <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Filters" component={FilterScreen} />
        <Stack.Screen name="Escape Game" component={EscapeScreen} /> */}
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});

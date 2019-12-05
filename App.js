import React, { useState, useEffect } from "react";

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
import SplashScreen from "./Containers/SplashScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  // const setToken = async token => {
  //   if (token) {
  //     AsyncStorage.setItem("userToken", token);
  //   } else {
  //     AsyncStorage.removeItem("userToken");
  //   }

  //   setUserToken(token);
  // };

  useEffect(() => {
    const bootstrapAsync = async () => {
      // const userToken = await AsyncStorage.getItem("userToken");

      setIsLoading(false);
      // setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Filters" component={FilterScreen} />
            <Stack.Screen name="Home">
              {() => (
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
                        return (
                          <Ionicons name={iconName} size={size} color={color} />
                        );
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
              )}
            </Stack.Screen>
            <Stack.Screen name="Map" component={MapScreen} />

            <Stack.Screen name="Escape Game" component={EscapeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

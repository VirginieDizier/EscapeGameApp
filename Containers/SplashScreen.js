import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator
} from "react-native";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Escape_Picture.jpg")}
      style={{
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 50, color: "#593A2F" }}>GameScaper</Text>
      <ActivityIndicator
        style={{ margin: 20 }}
        size="large"
        color="#736A62"
      ></ActivityIndicator>
    </ImageBackground>
  );
};

export default SplashScreen;

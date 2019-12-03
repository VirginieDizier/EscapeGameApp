import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  Image
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
      <Image
        source={require("../assets/pentagon.jpg")}
        style={{ height: 100, width: 100, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 50, color: "#593A2F" }}>GameScaper</Text>
      <ActivityIndicator size="large" color="#736A62"></ActivityIndicator>
    </ImageBackground>
  );
};

export default SplashScreen;

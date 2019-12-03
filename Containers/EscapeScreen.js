import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EscapeScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="ios-star-outline" size={30} color={"white"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Escape_Picture.jpg")}
          style={{ height: 205, width: 300 }}
        />
        <View style={{ marginLeft: 5 }}>
          <Image
            source={require("../assets/Escape_Picture.jpg")}
            style={{ height: 100, width: 100, marginBottom: 5 }}
          />
          <Image
            source={require("../assets/Escape_Picture.jpg")}
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "#A69C94", height: 100 }}>
        <Text>Name of Escape Room</Text>
        <Ionicons name="ios-star" size={20} color={"#D9AF62"} />
        <Ionicons name="ios-cog" size={20} color={"green"} />
        <Text>
          <Ionicons name="ios-hourglass" size={20} color={"green"} />
          Réserver
        </Text>
        <Text>0,44 km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#A69C94",
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20
  }
});

export default EscapeScreen;

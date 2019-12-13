import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EscapeCard from "../Components/EscapeCard";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const FavoriteScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            flex: 1,

            justifyContent: "flex-end"
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="ios-arrow-back" size={30} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Favoris</Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Escape Game");
        }}
      >
        <EscapeCard />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#D9AF62",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 20,
    paddingRight: 20
  },
  titleHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 5,
    marginBottom: 5,
    paddingLeft: 140
  }
});

export default FavoriteScreen;

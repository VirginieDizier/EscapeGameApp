import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const [search, setSearch] = useState("A proximité");

  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Happy Escape Room
            <Ionicons
              name="ios-map"
              style={{ fontSize: 30, color: "white" }}
            ></Ionicons>
          </Text>
        </View>
        <TextInput style={styles.searchBar} value={search}></TextInput>
      </View>

      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#D9AF62",
    alignItems: "center"
  },
  searchBar: {
    margin: 20,
    width: "90%",
    height: 40,
    borderColor: "white",
    borderRadius: 8,
    borderWidth: 2
  },
  title: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;

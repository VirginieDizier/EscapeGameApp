import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";
import FilterCard from "../Components/FilterCard";
import EscapeCard from "../Components/EscapeCard";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const [search, setSearch] = useState("A proximité");
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <Image
            source={require("../assets/pentagon.jpg")}
            style={{ height: 30, width: 30, borderRadius: 10 }}
          />
          <Text style={styles.title}>GameScaper</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <Ionicons
              name="ios-map"
              style={{ fontSize: 30, color: "white" }}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.searchBar} value={search}></TextInput>
      </View>
      <FilterCard />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Escape Game");
          }}
        >
          <EscapeCard />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#D9AF62",
    alignItems: "center"
  },
  searchBar: {
    margin: 10,
    width: "90%",
    height: 40,
    borderColor: "white",
    borderRadius: 8,
    borderWidth: 2
  },
  topBar: {
    marginTop: 10,

    width: 400,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;

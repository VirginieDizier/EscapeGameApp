import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";
import FilterCard from "../Components/FilterCard";
import EscapeCard from "../Components/EscapeCard";
import { useNavigation } from "@react-navigation/core";
import ImageLoad from "react-native-image-placeholder";

const HomeScreen = props => {
  const { escapeGames, setEscapeGames } = props;

  const [search, setSearch] = useState("A proximité");

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <ImageLoad
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
        <FlatList
          data={escapeGames}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Escape Game", { escapeGamesId: item._id });
              }}
            >
              <EscapeCard item={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#D9AF62",
    alignItems: "center",
    justifyContent: "flex-end"
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;

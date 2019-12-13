import React, { useState, useEffect, useCallback } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler";
import FilterCard from "../Components/FilterCard";
import EscapeCard from "../Components/EscapeCard";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = props => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { escapeGames } = props;

  const [search, setSearch] = useState("A proximité");

  const navigation = useNavigation();

  const getLocationAsync = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage("Permission refusée");
    } else {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    try {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMessage("La geolocalisation ne fonctionne pas");
      } else {
        getLocationAsync();
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.topBar}>
          <Ionicons name="ios-rocket" size={30} color="white" />
          <Text style={styles.title}>GameScaper</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <Ionicons name="ios-map" size={30} color="white"></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarSection}>
          <TextInput style={styles.searchBar} value={search} />
          <Ionicons name="ios-compass" style={styles.searchBarIcon} />
        </View>
      </View>

      {/* FILTER CARD */}

      <FilterCard />

      {/* ESCAPE CARDS */}

      <FlatList
        data={escapeGames}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Escape Game", { escapeGamesId: item._id });
            }}
          >
            {isLoading === false ? (
              <EscapeCard item={item} location={location} escapeCard={item} />
            ) : null}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 140,
    backgroundColor: "#D9AF62",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5
  },
  searchBarSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    position: "relative",
    paddingHorizontal: 40,
    margin: 10,
    width: "100%",
    height: 40,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: "white"
  },
  searchBarIcon: {
    position: "absolute",
    paddingLeft: 20,
    fontSize: 25,
    color: "#A69C94"
  },
  topBar: {
    marginTop: 10,
    paddingHorizontal: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default HomeScreen;

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const FilterCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.filterBloc}>
      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-cog" size={20} color={"green"} />
        <Text>Pour débuter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-cog" size={20} color={"orange"} />
        <Text>Intermédiaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-cog" size={20} color={"red"} />
        <Text>Difficile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Filters");
        }}
      >
        <Ionicons name="ios-options" size={20} />
        <Text>Filtres</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBloc: {
    flexDirection: "row",
    borderBottomColor: "#A69C94",
    borderBottomWidth: 1
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0D0D0D",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    height: 50,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10
  }
});

export default FilterCard;

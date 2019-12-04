import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapCard from "../Components/MapCard.js";

const EscapeScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="ios-star-outline" size={30} color={"white"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Escape_Picture.jpg")}
          style={{ height: 180, flex: 4 }}
        />
        <View style={{ marginLeft: 1, flex: 1 }}>
          <Image
            source={require("../assets/Escape_Picture.jpg")}
            style={{ flex: 1, width: "100%", marginBottom: 1 }}
          />
          <Image
            source={require("../assets/Escape_Picture.jpg")}
            style={{ flex: 1, width: "100%" }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "#A69C94", height: 100, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 20 }}>Name of Escape Room</Text>
          <View style={styles.ringItem}>
            <Ionicons name="ios-cog" size={50} color={"green"} />
          </View>
        </View>

        <Ionicons name="ios-star" size={20} color={"#D9AF62"} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>
            <Ionicons name="ios-hourglass" size={20} color={"green"} />
            Réserver
          </Text>
          <Text>0,44 km</Text>
        </View>
      </View>
      <View style={styles.fonctionBar}>
        <View style={styles.items}>
          <Ionicons name="ios-create" size={30} color={"#736A62"} />
          <Text style={styles.item}>Ajouter un avis</Text>
        </View>
        <View style={styles.items}>
          <Ionicons name="ios-camera" size={30} color={"#736A62"} />
          <Text style={styles.item}>Ajouter une photo</Text>
        </View>
        <View style={styles.items}>
          <Ionicons name="ios-call" size={30} color={"#736A62"} />
          <Text style={styles.item}>Appeler</Text>
        </View>
      </View>
      <View>
        <Text style={{ margin: 10 }}>Desciption of Escape Room</Text>
        <Text style={{ margin: 10 }}>Access information, etc </Text>
      </View>
      <View>
        <MapCard />
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
  },
  ringItem: {
    marginRight: 10,
    marginTop: -40,
    backgroundColor: "#A69C94",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  fonctionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomColor: "#A69C94",
    borderBottomWidth: 2
  },
  item: {
    fontSize: 15,
    color: "#736A62",
    fontWeight: "bold"
  },
  items: {
    alignItems: "center",
    flex: 1,
    marginBottom: 20
  }
});

export default EscapeScreen;

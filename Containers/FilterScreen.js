import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Slider } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Switch } from "react-native-gesture-handler";

const FilterScreen = () => {
  const [radius, setRadius] = useState(5);
  const [isForBeginner, setIsForBeginner] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="ios-close" size={40} color={"white"} />
          <Text style={styles.titleHeaderLeft}>Filtres</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.titleHeaderRight}>Effacer</Text>
        </View>
      </View>

      {/* SEARCHBAR */}
      <ScrollView>
        <Text style={styles.titleFilter}>Recherche par nom ou par mot clé</Text>
        <TextInput style={styles.searchBar} />

        {/* DISTANCE */}

        <Text style={styles.titleFilter}>Rayon</Text>
        <View style={styles.distance}>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View style={styles.distanceIcon}>
              <Ionicons name="ios-walk" size={40} color={"#736A62"} />
            </View>
            <Slider
              style={styles.slide}
              thumbTintColor={"#D9AF62"}
              minimumTrackTintColor={"#D9AF62"}
              maximumValue={100}
              minimumValue={10}
              onValueChange={value => {
                setRadius(Math.floor(value));
              }}
            />
            <View style={styles.distanceIcon}>
              <Ionicons name="ios-car" size={40} color={"#736A62"} />
            </View>
          </View>
          <Text style={styles.radius}>{radius} km</Text>
        </View>

        {/* ESCAPE GAME */}

        <Text style={styles.titleFilter}>Escapes Games</Text>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-cog" size={40} color={"green"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Pour débutant</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-cog" size={40} color={"orange"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Intermédiaire</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-cog" size={40} color={"red"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Difficile</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        {/* ANOTHER FILTER */}

        <Text style={styles.titleFilter}>Types de logique</Text>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-hand" size={40} color={"#B3844F"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Fouille</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-build" size={40} color={"#FFC88A"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Manipulation</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        <View style={styles.itemsLevel}>
          <View style={styles.itemLevel}>
            <Ionicons name="ios-bulb" size={40} color={"#3D90B3"} />
          </View>
          <View style={styles.itemLevelRight}>
            <Text style={{ fontSize: 20 }}>Réfléxion</Text>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>

        {/* PARAMETERS */}

        <Text style={styles.titleFilter}>Paramètres</Text>
        <View style={{ margin: 20, flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 5 }}>
            <Ionicons name="ios-lock" size={30} color={"#A69C94"} />
            <Text style={{ fontSize: 20 }}>Se souvenir des filtres</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              thumbColor={"#D9AF62"}
              value={isForBeginner}
              onValueChange={value => {
                setIsForBeginner(value);
              }}
            />
          </View>
        </View>
        <Text style={{ margin: 20 }}>
          Lorsque cette option est activée, les filtres sélectionnés ci-dessus
          seront appliqués chaque fois que vous ouvrirez GameScaper
        </Text>
      </ScrollView>

      {/* FOOTER */}

      <View style={styles.footer}>
        <Text style={styles.titleFooter}>Filtrer les résultats</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#D9AF62",
    flexDirection: "row"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  titleHeaderLeft: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
  headerRight: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
    flex: 2
  },
  titleHeaderRight: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  titleFilter: {
    fontSize: 20,
    margin: 20
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: "#736A62",
    borderWidth: 2,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20
  },
  distanceIcon: {
    flex: 1,
    alignItems: "center"
  },
  slide: {
    flex: 4
  },
  itemsLevel: {
    flexDirection: "row",
    margin: 20
  },
  itemLevel: {
    flex: 1,
    alignItems: "center"
  },
  itemLevelRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 4,
    borderBottomColor: "#A69C94",
    borderBottomWidth: 2
  },
  distance: {
    flexDirection: "column",
    alignItems: "center"
  },
  radius: {
    fontSize: 20,
    color: "#736A62"
  },
  footer: {
    height: 80,
    backgroundColor: "#D9AF62",
    alignItems: "center"
  },
  titleFooter: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FilterScreen;

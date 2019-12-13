import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapCard from "../Components/MapCard.js";
import ImageLoad from "react-native-image-placeholder";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/core";
import Axios from "axios";
import RatingStar from "../Components/RatingStar.js";
import LevelColor from "../Components/LevelColor.js";

const EscapeScreen = props => {
  const navigation = useNavigation();
  const [isScenarioDisplayed, setIsScenarioDisplayed] = useState(false);
  const [isExperienceDisplayed, setIsExperienceDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [escapeRoom, setEscapeRoom] = useState({});

  const obj = useRoute();
  const params = obj.params;
  const escapeId = params.escapeGamesId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://game-scapper-app.herokuapp.com/" + escapeId
        );

        setEscapeRoom(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {isLoading === true ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ paddingTop: 100 }}
        />
      ) : (
        <ScrollView>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Ionicons name="ios-arrow-back" size={30} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Favorite");
              }}
            >
              <Ionicons name="ios-share-alt" size={30} color={"white"} />
            </TouchableOpacity>
          </View>
          {/* PICTURES */}
          <ImageLoad
            style={{ height: 180, flex: 1 }}
            source={{ uri: escapeRoom.thumbnail }}
          />
          {/* CAPTION */}
          <View style={styles.bottomBar}>
            <View style={styles.bottomBarTitle}>
              <Text style={{ fontSize: 20 }}>{escapeRoom.name}</Text>
              <View style={styles.ringItem}>
                <View style={styles.boxRingItem}>
                  <LevelColor item={escapeRoom} size={50} />
                </View>
              </View>
            </View>
            <View style={{ margin: 5 }}>
              <RatingStar item={escapeRoom} />
            </View>

            <View style={styles.bottomBarText}>
              <Text>
                <Ionicons name="ios-globe" size={20} color={"green"} />
                {escapeRoom.company}
              </Text>
              <Text>{escapeRoom.price}</Text>
            </View>
          </View>
          {/* FONCTION BAR */}
          <View style={styles.fonctionBar}>
            <TouchableOpacity style={styles.items}>
              <Ionicons name="ios-create" size={30} color={"#736A62"} />
              <Text style={styles.item}>Ajouter un avis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <Ionicons name="ios-star-outline" size={30} color={"#736A62"} />
              <Text style={styles.item}>Ajouter en favoris</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <Ionicons name="ios-call" size={30} color={"#736A62"} />
              <Text style={styles.item}>Appeler</Text>
            </TouchableOpacity>
          </View>
          {/* DESCRIPTION */}
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, margin: 5 }}>Le scénario</Text>
            <Text
              onPress={() => {
                setIsScenarioDisplayed(!isScenarioDisplayed);
              }}
              numberOfLines={isScenarioDisplayed === false ? 3 : 0}
            >
              {escapeRoom.summury}
            </Text>
            <Text style={{ fontSize: 20, margin: 5 }}>L'expérience</Text>
            <Text
              onPress={() => {
                setIsExperienceDisplayed(!isExperienceDisplayed);
              }}
              numberOfLines={isExperienceDisplayed === false ? 3 : 0}
            >
              {escapeRoom.content}
            </Text>
          </View>
          {/* MAP */}
          <View>
            <MapCard />
          </View>
          {/* ADDRESS */}

          {/* <Text> {escapeRoom.location[0].address} </Text> */}

          <FlatList
            data={escapeRoom.location}
            keyExtractor={item => String(item.address)}
            renderItem={({ item }) => <Text>{item.address}</Text>}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#A69C94",
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 10
  },
  bottomBar: {
    backgroundColor: "#A69C94",
    height: 100,
    padding: 10
  },
  bottomBarTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomBarText: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  boxRingItem: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  fonctionBar: {
    flexDirection: "row",
    justifyContent: "space-around",
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

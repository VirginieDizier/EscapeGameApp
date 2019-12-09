import React, { useState, useCallback, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const MapScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Ask to permission for geolocation
  const getLocationAsync = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage("Permission refusée");
    } else {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
  });

  // Geolocation for Android
  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMessage("La geolocalisation ne fonctionne pas");
    } else {
      getLocationAsync();
    }
  }, []);

  // Model of marker
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "Escape Le Reacteur",
      description: "Pour débutant",
      color: "green"
    },
    {
      id: 2,
      latitude: 48.8718,
      longitude: 2.3399,
      title: "Escape Opera de Paris",
      description: "Intermédiaire",
      color: "orange"
    },
    {
      id: 3,
      latitude: 48.866667,
      longitude: 2.333333,
      title: "Escape Notre Dame de Paris",
      description: "Difficile",
      color: "red"
    }
  ];

  return (
    <View>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Favorite");
          }}
        >
          <Ionicons name="ios-add-circle-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Map</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="ios-menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* MAP */}

      <MapView
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 48.8524,
          longitude: 2.3488,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15
        }}
        showsUserLocation={true}
      >
        {markers.map(marker => {
          return (
            <MapView.Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
            >
              <Ionicons name="ios-pin" size={40} color={marker.color} />
            </MapView.Marker>
          );
        })}
      </MapView>

      {/* FOOTER */}

      <View style={{ position: "absolute", marginTop: 100, marginLeft: 20 }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            borderRadius: 8,
            shadowColor: "black",
            shadowOffset: { height: 10 },
            shadowOpacity: 0.5,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Ionicons name="ios-options" size={30} color={"#736A62"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#D9AF62",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  titleHeader: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

export default MapScreen;

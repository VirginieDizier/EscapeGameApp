import React, { useState, useEffect, useCallback } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageLoad from "react-native-image-placeholder";
import getDistance from "geolib/es/getDistance";
import { convertDistance } from "geolib";

const EscapeCard = props => {
  const { item } = props;
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // LEVEL COLOR
  const getLevel = level => {
    if (level === "Pour débuter") {
      return "green";
    } else if (level === "Intermédiaire") {
      return "orange";
    } else if (level === "Difficile") {
      return "red";
    } else {
      return "grey";
    }
  };

  // STARS RATING
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < item.rating) {
      stars.push(
        <Ionicons key={i} name="ios-star" size={20} color={"#D9AF62"} />
      );
    } else {
      stars.push(
        <Ionicons key={i} name="ios-star" size={20} color={"#A69C94"} />
      );
    }
  }

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
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <ImageLoad
          source={{ uri: item.pictures }}
          style={{ flex: 1, height: 110 }}
        />
        <View style={{ marginLeft: 10, flex: 3 }}>
          <View style={styles.rightCard}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Ionicons name="ios-cog" size={30} color={getLevel(item.level)} />
          </View>
          <View style={styles.rightCard}>
            <View style={{ flexDirection: "row" }}>{stars}</View>

            {isLoading ? (
              <Text>Get Position...</Text>
            ) : (
              <Text>
                {convertDistance(
                  getDistance(
                    {
                      latitude: location.coords.latitude,
                      longitude: location.coords.longitude
                    },
                    {
                      latitude: item.location.lat,
                      longitude: item.location.lng
                    },
                    (accuracy = 10)
                  ),
                  "km"
                )}
                km
              </Text>
            )}
          </View>
          <View style={styles.rightCard}>
            <Text>
              <Ionicons name="ios-hourglass" size={20} color={"green"} />
              {item.name}
            </Text>
            <Ionicons name="ios-pricetag" size={20} color={"#D9AF62"} />
          </View>

          <Text numberOfLines={2}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightCard: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default EscapeCard;

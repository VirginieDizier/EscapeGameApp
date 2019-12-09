import React, { useCallback, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Constants from "expo-constants";

const MapCard = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Model of marker
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "EscapeGame Le Reacteur",
      description: "Il faut s'échapper de la formation !"
    }
  ];

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

  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{ height: 200, width: "100%" }}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08
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
              <Ionicons name="ios-pin" size={40} color={"green"} />
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapCard;

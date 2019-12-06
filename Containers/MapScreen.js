import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MapScreen = () => {
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "Escape Le Reacteur"
    },
    {
      id: 2,
      latitude: 48.8718,
      longitude: 2.3399,
      title: "Escape Opera de Paris"
    },
    {
      id: 3,
      latitude: 48.866667,
      longitude: 2.333333,
      title: "Escape Notre Dame de Paris"
    }
  ];

  return (
    <View>
      <MapView
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 48.8524,
          longitude: 2.3488,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2
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
            >
              <Ionicons name="ios-pin" size={40} color={"green"} />
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

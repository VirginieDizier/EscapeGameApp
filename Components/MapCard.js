import React from "react";
import MapView from "react-native-maps";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MapCard = () => {
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "EscapeGame Le Reacteur",
      description: "Il faut s'échapper de la formation !"
    }
  ];

  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{ height: 200, width: "100%" }}
        initialRegion={{
          latitude: 48.8534,
          longitude: 2.3488,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
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

import React from "react";
import getDistance from "geolib/es/getDistance";
import { Text, View } from "react-native";

const DistanceValue = props => {
  const { item } = props;
  const { location } = props;

  return (
    <View>
      <Text>
        {item.location.length
          ? (
              getDistance(
                {
                  latitude: location.location.coords.latitude,
                  longitude: location.location.coords.longitude
                },
                {
                  latitude: item.location[0].coords.lat,
                  longitude: item.location[0].coords.lon
                },
                (accuracy = 10)
              ) / 1000
            ).toFixed(2)
          : "N/A"}
        km
      </Text>
    </View>
  );
};

export default DistanceValue;

import React from "react";
import getDistance from "geolib/es/getDistance";
import { Text, View } from "react-native";

const DistanceValue = props => {
  const { escapeCard } = props;
  const { location } = props;

  return (
    <View>
      {escapeCard.location[0] ? (
        <Text>
          {(
            getDistance(
              {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              },
              {
                latitude: escapeCard.location[0].coords.lat,
                longitude: escapeCard.location[0].coords.lon
              },
              (accuracy = 10)
            ) / 1000
          ).toFixed(2)}
          km
        </Text>
      ) : (
        <Text>N/A</Text>
      )}
    </View>
  );
};

export default DistanceValue;

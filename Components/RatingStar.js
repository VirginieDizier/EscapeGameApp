import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RatingStar = props => {
  const { item } = props;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < item.userRating) {
      stars.push(
        <Ionicons key={i} name="ios-star" size={15} color={"#D9AF62"} />
      );
    } else {
      stars.push(
        <Ionicons key={i} name="ios-star" size={15} color={"#736A62"} />
      );
    }
  }
  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default RatingStar;

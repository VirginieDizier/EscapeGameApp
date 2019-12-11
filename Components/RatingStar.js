import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RatingStar = props => {
  const { item } = props;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < item.rating) {
      stars.push(
        <Ionicons key={i} name="ios-star" size={15} color={"#D9AF62"} />
      );
    } else {
      stars.push(
        <Ionicons key={i} name="ios-star" size={15} color={"#A69C94"} />
      );
    }
  }
  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default RatingStar;

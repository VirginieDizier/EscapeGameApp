import React from "react";
import { Ionicons } from "@expo/vector-icons";

const getLevel = levels => {
  if (levels === "easy") {
    return "green";
  } else if (levels === "medium") {
    return "orange";
  } else if (levels === "hard") {
    return "red";
  } else if (levels === "expert") {
    return "black";
  } else {
    return "grey";
  }
};

const LevelColor = props => {
  const { item } = props;
  const { size } = props;

  return (
    <Ionicons name="ios-cog" size={props.size} color={getLevel(item.levels)} />
  );
};

export default LevelColor;

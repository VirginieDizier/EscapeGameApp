import React from "react";
import { Ionicons } from "@expo/vector-icons";

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

const LevelColor = props => {
  const { item } = props;
  return <Ionicons name="ios-cog" size={30} color={getLevel(item.level)} />;
};

export default LevelColor;

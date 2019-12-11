import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageLoad from "react-native-image-placeholder";
import RatingStar from "./RatingStar.js";
import LevelColor from "./LevelColor.js";
import DistanceValue from "./DistanceValue.js";

const EscapeCard = props => {
  const { item } = props;
  const { location } = props;

  return (
    <View style={{ margin: 5 }}>
      <View style={{ flexDirection: "row" }}>
        <ImageLoad
          source={{ uri: item.thumbnail }}
          style={{ height: 105, width: 105, resizeMode: "cover" }}
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <View style={styles.rightCard}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <LevelColor item={item} />
          </View>
          <View style={styles.rightCard}>
            <RatingStar item={item} />
            {/* <DistanceValue item={item} location={location} /> */}
          </View>
          <View style={styles.rightCard}>
            <Text>
              <Ionicons name="ios-hourglass" size={20} color={"green"} />
              {item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="ios-people" size={20} color={"green"} />
              <Text>{item.players} </Text>
            </View>
          </View>

          <Text numberOfLines={2}>{item.summury}</Text>
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

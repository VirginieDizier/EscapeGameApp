import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageLoad from "react-native-image-placeholder";

const EscapeCard = props => {
  const { item } = props;

  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <ImageLoad
          source={{ uri: item.pictures }}
          style={{ flex: 1, height: 110 }}
        />
        <View style={{ marginLeft: 10, flex: 3 }}>
          <View style={styles.rightCard}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Ionicons name="ios-cog" size={30} color={"green"} />
          </View>
          <View style={styles.rightCard}>
            <Ionicons name="ios-star" size={20} color={"#D9AF62"} />
            <Text>0.47 km</Text>
          </View>
          <View style={styles.rightCard}>
            <Text>
              <Ionicons name="ios-hourglass" size={20} color={"green"} />
              {item.name}
            </Text>
            <Ionicons name="ios-pricetag" size={20} color={"#D9AF62"} />
          </View>

          <Text numberOfLines={2}>{item.description}</Text>
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

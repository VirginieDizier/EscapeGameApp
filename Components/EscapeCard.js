import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageLoad from "react-native-image-placeholder";

const EscapeCard = () => {
  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <ImageLoad
          source={require("../assets/Escape_Picture.jpg")}
          style={{ flex: 1, height: 110 }}
        />
        <View style={{ marginLeft: 10, flex: 3 }}>
          <View style={styles.rightCard}>
            <Text style={{ fontSize: 20 }}>Best Escape Room Ever</Text>
            <Ionicons name="ios-cog" size={30} color={"green"} />
          </View>
          <View style={styles.rightCard}>
            <Ionicons name="ios-star" size={20} color={"#D9AF62"} />
            <Text>0.47 km</Text>
          </View>
          <View style={styles.rightCard}>
            <Text>
              <Ionicons name="ios-hourglass" size={20} color={"green"} />
              Horaires
            </Text>
            <Ionicons name="ios-pricetag" size={20} color={"#D9AF62"} />
          </View>

          <Text>Description of escape room</Text>
          <Text>Description of escape room</Text>
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

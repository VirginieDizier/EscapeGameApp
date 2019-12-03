import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EscapeCard = () => {
  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Escape_Picture.jpg")}
          style={{ flex: 1, height: 130 }}
        />
        <View style={{ marginLeft: 10, flex: 2 }}>
          <View style={styles.rightCard}>
            <Text style={{ fontSize: 20 }}>Name of Escape Room</Text>
            <Ionicons name="ios-cog" size={30} color={"green"} />
          </View>
          <View style={styles.rightCard}>
            <Ionicons name="ios-star" size={20} color={"#D9AF62"} />
            <Text>0.44 km</Text>
          </View>
          <View style={styles.rightCard}>
            <Text>
              <Ionicons name="ios-hourglass" size={20} color={"green"} />
              Horaires
            </Text>
            <Ionicons name="ios-pricetag" size={20} color={"#D9AF62"} />
          </View>

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

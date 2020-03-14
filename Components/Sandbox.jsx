import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxone}>box one</Text>
      <Text style={styles.boxtwo}>box two</Text>
      <Text style={styles.boxthree}>box three</Text>
      <Text style={styles.boxfour}>box four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#ddd"
  },
  boxone: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10
  },
  boxtwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 20
  },
  boxthree: {
    flex: 3,
    backgroundColor: "coral",
    padding: 30
  },
  boxfour: {
    flex: 4,
    backgroundColor: "skyblue",
    padding: 40
  }
});

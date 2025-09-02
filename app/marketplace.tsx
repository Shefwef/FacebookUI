import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Marketplace() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Marketplace Page</Text>
      <Text style={styles.subText}>Coming Soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 8,
  },
});

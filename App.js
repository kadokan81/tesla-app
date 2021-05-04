import React from "react";
import { StyleSheet, View } from "react-native";
import CartItem from "./components/CartItem/CartItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

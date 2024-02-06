import { View, Text, StyleSheet, Switch, Pressable } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../theme/AppContext";

export default function Header({ title = "D", navigation }) {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#9C27B0",
          fontSize: 26,
          fontWeight: "bold",
          backgroundColor: "white",
          height: 40,
          width: 40,
          borderRadius: 50,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: "700",
            color: "white",
          }}
        >
          Second Page
        </Text>
      </Pressable>
      <Switch
        value={isDarkTheme}
        onChange={() => {
          setIsDarkTheme((prev) => !prev);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#9C27B0",
    height: 200,
  },
  second: {
    fontSize: 20,
    textTransform: "uppercase",
  },
});

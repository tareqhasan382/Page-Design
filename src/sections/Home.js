import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import { useTheme } from "@react-navigation/native";
import Text from "../utils/text/Text";

import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  //   console.log(colors.text);
  return (
    <SafeAreaView style={{ backgroundColor: "#9C27B0" }}>
      <Header navigation={navigation} />
      <View
        style={{
          alignItems: "center",
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: colors.background,
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.icon}>
          <Feather style={{ padding: 5 }} name="box" size={40} color="black" />
        </View>
        <View style={styles.body}>
          <Text
            style={{
              color: colors.text,
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Non-Contact Deliveries
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
              fontWeight: "600",
              lineHeight: 25,
              marginTop: 20,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
            quia debitis labore. Aliquid ad quia debitis labore.
          </Text>
        </View>
        {/* <View style={styles.btnBox}>
          <Button style={styles.btn} color={"#008000"} title="ORDER NOW" />
        </View> */}
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>Order Now</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: "normal",
            color: colors.text,
          }}
        >
          DISMISS
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
  icon: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  body: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnBox: {
    width: "90%",
    height: "auto",
    marginTop: 30,
  },
  btnStyle: {
    backgroundColor: "#008000",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
/*
<Button
              title="Profile"
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />

*/

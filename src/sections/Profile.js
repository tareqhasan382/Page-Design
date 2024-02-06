import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Header from "./Header";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imgBox}>
        <Image
          source={{
            uri: "https://tse1.mm.bing.net/th?id=OIP.kLOE70SnceRBpMBHTAlaWQAAAA&pid=Api&P=0&h=220",
          }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.body, { backgroundColor: colors.background }]}>
        <View style={styles.wrapper}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  // textTransform: "uppercase",
                  color: "gray",
                }}
              >
                Go Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigation.navigate("Covid");
                }}
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  // textTransform: "uppercase",
                  color: "gray",
                }}
              >
                Next Page
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ color: colors.text, fontSize: 24, fontWeight: "bold" }}
          >
            Boston Lettuce
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: colors.text }}
            >
              1.10
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>
              $/pice
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#0ca654",
              marginVertical: 5,
            }}
          >
            -150 gr / piece
          </Text>
          <View style={{ marginVertical: 5 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginVertical: 5,
                color: colors.text,
              }}
            >
              Spain
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "justify",
                lineHeight: 24,
                color: colors.text,
              }}
            >
              Minus perferendis veritatis aliquid. Laborum ratione odio
              voluptate exercitationem eius cupiditate nostrum nam quod
              recusandae dolor iusto, error distinctio, maxime repudiandae
              voluptatum amet suscipit reiciendis saepe provident earum
              dignissimos architecto. Fugit nam excepturi veniam minus ea ut
              quasi, vero mollitia labore quod explicabo in voluptatibus dolorum
              quaerat at dolorem.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#858c87",
                  borderRadius: 5,
                  borderColor: "black",
                  width: "20%",
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="hearto" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0ca654",
                  borderRadius: 5,
                  borderColor: "black",
                  width: "70%",
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,
                  }}
                >
                  <Feather name="shopping-cart" size={24} color="white" />
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Add To Cart
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
    position: "relative",
  },
  imgBox: {
    width: "100%",
    height: "40%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  body: {
    // backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "30%",
  },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  priceTag: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginVertical: 5,
  },
});

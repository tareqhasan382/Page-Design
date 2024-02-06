import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export default function Covid({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Text style={styles.headerTitle}>Covid-19</Text>
          <Text
            style={[
              styles.headerTitle,
              {
                backgroundColor: "white",
                color: "black",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
              },
            ]}
          >
            USA
          </Text>
          {/* <View
            style={{ width: 60, height: 30, backgroundColor: "white" }}
          ></View> */}
        </View>
        <Text style={styles.headerSubTitle}>Are you feeling sick?</Text>
        <Text style={styles.headerText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quo aut
          ipsa, officiis architecto delectus atque maxime illum maiores.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "48%",
              height: 50,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Ionicons name="call" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              Call Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#3961ff",
              width: "48%",
              height: 50,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Ionicons name="chatbubble" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              Send SMS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.body, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Prevention</Text>

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
        <View style={styles.svgBox}>
          <View style={styles.svgCard}>
            <View
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fa87f6",
                borderRadius: 50,
              }}
            >
              <Image
                source={{
                  uri: "https://evan-cse.github.io/Covid-19/img/social-distance.png",
                }}
                style={{ width: 90, height: 90 }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                width: "80%",
                color: colors.text,
              }}
            >
              Avoid close contact
            </Text>
          </View>
          <View style={styles.svgCard}>
            <View
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fa87f6",
                borderRadius: 50,
              }}
            >
              <Image
                source={{
                  uri: "https://www.pngmart.com/files/12/Hand-Washing-PNG-Transparent-Image.png",
                }}
                style={{ width: 90, height: 90 }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                width: "80%",
                color: colors.text,
              }}
            >
              Clean your hands often
            </Text>
          </View>
          <View style={styles.svgCard}>
            <View
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fa87f6",
                borderRadius: 50,
              }}
            >
              <Image
                source={{
                  uri: "https://irp-cdn.multiscreensite.com/2ca25d7b/dms3rep/multi/image_processing20200426-20424-ronhyt.png",
                }}
                style={{
                  width: 90,
                  height: 90,
                  objectFit: "cover",
                  borderRadius: 50,
                }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                width: "80%",
                color: colors.text,
              }}
            >
              Wear a facemask
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 110,
            width: "100%",
            backgroundColor: "#a22ad1",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            // paddingHorizontal: 5,
            gap: 10,
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              marginTop: -5,
              // backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: "https://cdn-www.infobip.com/wp-content/uploads/2020/04/03141615/covid-header-768x768.png",
              }}
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: 50,
              }}
              resizeMode="contain"
            />
            {/*  */}
          </View>
          <View style={{ paddingVertical: 10, width: "60%", paddingRight: 15 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Do your own test!
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                lineHeight: 24,
                marginTop: 5,
              }}
            >
              Follow the instructions to do your own test
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "45%",
    backgroundColor: "#22126b",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingVertical: 40,
    // marginLeft: 15,
    // paddingLeft: 15,
    paddingHorizontal: 15,
  },
  headerTitle: {
    marginTop: 20,

    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerSubTitle: {
    color: "white",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  headerText: {
    color: "white",
    lineHeight: 20,
    fontSize: 17,
    marginTop: 10,
  },
  body: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  svgBox: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "90%",
    height: 150,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    gap: 10,

    // opacity: 10,
    // flexWrap: "wrap",
  },
  svgCard: {
    width: 115,
    height: "100%",
    // backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: "50",
    height: "50",
    objectFit: "cover",
  },
});

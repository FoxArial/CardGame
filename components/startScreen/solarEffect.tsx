import { stylesConst } from "@/constants/constant";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SolarEffect() {
  const solarWidth = 20;
  const borderRadiusSolar = 20;
  return (
    <View style={stylesConst.fullScreenCentralElement}>
      <Image
        source={require("../../assets/images/mask-group.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <Image
        source={require("../../assets/images/Ellipse_lightBlue.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <Image
        source={require("../../assets/images/Ellipse_white.png")}
        resizeMode="contain"
        style={styles.img}
      />

      <Image
        source={require("../../assets/images/Ellipse_darkBlue.png")}
        resizeMode="contain"
        style={styles.img}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
});

import Button from "@/components/startScreen/button";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  colors,
  fontsSize,
  height,
  hexToRgba,
  stylesConst,
} from "../constants/constant";

import Background from "@/components/background";
import SolarEffect from "../components/startScreen/solarEffect";

export default function StartScreen() {
  return (
    <Background>
      <View style={styles.bg}>
        <View style={styles.title}>
          <LinearGradient
            colors={[
              hexToRgba(colors.violetDark, 0),
              hexToRgba(colors.violetDark, 1),
              hexToRgba(colors.violetDark, 0),
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientStyle}
          />
          <View style={styles.solarContainer}>
            <SolarEffect />
          </View>
          <View style={{ height: "100%", width: "100%", position: "relative" }}>
            <Text
              style={[
                stylesConst.textStyles,
                styles.text,
                { top: "10%", left: "37%" },
              ]}
            >
              Magic
            </Text>
            <Text
              style={[
                stylesConst.textStyles,
                styles.text,
                { top: "45%", left: "32%" },
              ]}
            >
              Memory
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "60%",
            justifyContent: "center",
          }}
        >
          <Button nav="../mainScreen" playButtonSize={100} />
        </View>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  bg: {
    height: height,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: fontsSize.title,
    position: "absolute",
  },
  title: {
    height: "30%",
    width: "60%",
    position: "relative",
    alignItems: "center",
  },
  gradientStyle: {
    height: "65%",
    width: "85%",
    position: "absolute",
    top: "15%",
  },
  solarContainer: {
    height: "120%",
    width: "100%",
    position: "absolute",
    top: "-10%",
    alignItems: "center",
  },
});

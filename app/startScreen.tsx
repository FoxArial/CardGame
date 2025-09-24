import Button from "@/components/startScreen/button";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  colors,
  fontsSize,
  hexToRgba,
  stylesConst,
} from "../constants/constant";

import Background from "@/constants/background";
import SolarEffect from "../components/startScreen/solarEffect";

export default function StartScreen() {
  return (
    <Background>
      <View style={stylesConst.bg}>
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
          <View style={[stylesConst.fullScreen, { position: "absolute" }]}>
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
          <Button nav="../levelSelectionScreen" playButtonSize={100} />
        </View>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: fontsSize.title,
    position: "absolute",
  },
  title: {
    height: "30%",
    width: "60%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientStyle: {
    height: "60%",
    width: "85%",
  },
  solarContainer: {
    height: "120%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
  },
});

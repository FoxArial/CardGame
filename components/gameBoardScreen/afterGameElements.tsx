import {
  colors,
  fontsSize,
  hexToRgba,
  stylesConst,
} from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import SolarEffect from "../startScreen/solarEffect";
import AfterGameButton from "./afterGameButton";
export default function AfterGameElements() {
  const opacityAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: false,
      delay: 100,
      duration: 500,
    }).start();
  }, []);
  return (
    <View style={[styles.fullScreen, , styles.mainContainer]}>
      <Animated.View></Animated.View>
      <Animated.View style={{ opacity: opacityAnim }}>
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
          <View style={styles.textContainer}>
            <Text style={[stylesConst.textStyles, styles.text, {}]}>
              Congratulations!
            </Text>
          </View>
        </View>
        <AfterGameButton />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  fullScreen: {
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    height: "40%",
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
  textContainer: {
    height: "90%",
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: fontsSize.title,
  },
});

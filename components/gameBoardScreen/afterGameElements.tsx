import Confetti from "@/constants/confetti";
import {
  colors,
  fontsSize,
  height,
  hexToRgba,
  stylesConst,
} from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import SolarEffect from "../../constants/solarEffect";
import StartAgainButton from "./afterGameButton";
export default function AfterGameElements() {
  const opacityAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: true,
      delay: 100,
      duration: 500,
    }).start();
  }, []);
  const confetti = opacityAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, -height / 4],
  });
  return (
    <View
      style={[
        stylesConst.fullScreenCentralElement,
        { position: "relative", overflow: "hidden" },
      ]}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          transform: [{ translateY: confetti }],
        }}
      >
        <Confetti />
      </Animated.View>
      <Animated.View
        style={[
          styles.mainElementsContainer,
          {
            opacity: opacityAnim,
          },
        ]}
      >
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
            <Text
              style={[stylesConst.textStyles, { fontSize: fontsSize.title }]}
            >
              Congratulations!
            </Text>
          </View>
        </View>
        <StartAgainButton />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  mainElementsContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "15%",
  },
});

import { colors, fontsSize, stylesConst } from "@/constants/constant";
import LoadingContainer from "@/constants/loadingContainer";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import Background from "./background";

const LoadingScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.random() * 40;
        return Math.min(prev + step, 100);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const progressWidth = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <Background>
      <View style={styles.screenContainer}>
        <View style={styles.barContainer}>
          <View style={styles.barBg}>
            <LoadingContainer />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/images/Hourglass.png")}
            />
          </View>

          <Text
            style={[
              stylesConst.textStyles,
              { fontSize: fontsSize.mediumSmall, zIndex: 1 },
            ]}
          >
            Loading ...
          </Text>

          <View style={styles.track}>
            <AnimatedLinearGradient
              colors={[colors.violetDark, colors.violetLight]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={[styles.progress, { width: progressWidth }]}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    width: "60%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    backgroundColor: "red",
  },
  barBg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: -50,
    backgroundColor: "green",
  },
  imgContainer: {
    height: 50,
    width: 50,
    zIndex: 1,
  },
  track: {
    width: "60%",
    height: "100%",
    position: "absolute",
  },
  progress: {
    height: "100%",
  },
});

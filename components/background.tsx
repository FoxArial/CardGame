import React, { ReactNode, useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type BackgroundProps = {
  children: ReactNode;
};
export default function Background({ children }: BackgroundProps) {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <View>
      <Animated.Image
        source={require("../assets/images/Section.png")}
        resizeMode="contain"
        style={{ position: "absolute", opacity: fadeAnim }}
      />
      <View style={styles.content}> {children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

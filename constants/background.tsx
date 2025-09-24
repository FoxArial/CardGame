import { colors, height } from "@/constants/constant";
import StarSky from "@/constants/StarSky";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type BackgroundProps = {
  children: ReactNode;
};
export default function Background({ children }: BackgroundProps) {
  return (
    <View
      style={{
        height: height,
        width: "100%",
        backgroundColor: colors.background,
      }}
    >
      <View style={styles.stars}>
        <StarSky />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  content: {
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

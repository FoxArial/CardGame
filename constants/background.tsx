import { colors, height, stylesConst } from "@/constants/constant";
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
        position: "relative",
      }}
    >
      <View style={[styles.stars, stylesConst.fullScreen]}>
        <StarSky />
      </View>
      <View style={[styles.content, stylesConst.fullScreen]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    position: "absolute",
  },
  content: {
    zIndex: 1,
    width: "100%",
  },
});

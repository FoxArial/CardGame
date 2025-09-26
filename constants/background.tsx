import { colors, stylesConst, width } from "@/constants/constant";
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
        height: "100%",
        width: width,
        backgroundColor: colors.background,
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
    top: 0,
    left: 0,
  },
  content: {
    width: "100%",
  },
});

import Button from "@/components/startScreen/button";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, height, stylesConst, width } from "../constants/constant";
export default function StartScreen() {
  return (
    <View style={styles.background}>
      <View>
        <Text style={[stylesConst.textStyles, { fontSize: width * 0.1 }]}>
          Magic{"\n"}Memory
        </Text>
      </View>
      <Button
        nav="../mainScreen"
        playButtonWidth={width * 0.4}
        playButtonHeight={height * 0.3}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    height: height,
    backgroundColor: colors.background,
  },
});

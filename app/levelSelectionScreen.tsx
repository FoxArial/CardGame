import Background from "@/components/background";
import Card from "@/components/levelSelectionScreen/card";
import Wave from "@/components/levelSelectionScreen/wave";
import { fontsSize, stylesConst } from "@/constants/constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LevelSelectionScreen() {
  return (
    <Background>
      <View
        style={[
          stylesConst.bg,
          {
            position: "relative",
          },
        ]}
      >
        <View style={{ height: "100%", width: "100%", position: "absolute" }}>
          <Wave />
        </View>
        <View style={styles.titleText}>
          <Text
            style={[
              stylesConst.textStyles,
              { fontSize: fontsSize.mediumSmall },
            ]}
          >
            CHOOSE LEVEL
          </Text>
        </View>
        <View style={styles.cardHolder}>
          <Card level={4} text="Very Easy" />
          <Card level={8} text="Normal" />
          <Card level={10} text="Hard" />
          <Card level={12} text="Very Hard" />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  titleText: {
    height: "25%",
    justifyContent: "flex-end",
  },
  cardHolder: {
    height: "65%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

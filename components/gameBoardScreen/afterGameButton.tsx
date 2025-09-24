import { GameStateContext } from "@/app/gameBoardScreen";
import { colors, fontsSize, stylesConst } from "@/constants/constant";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PlayButton from "../startScreen/playButton";

export default function StartAgainButton() {
  const gameState = useContext(GameStateContext);
  const { reset } = gameState;
  return (
    <Pressable onPress={reset} style={styles.container}>
      <Text
        style={[
          stylesConst.textStyles,
          { fontSize: fontsSize.small, color: colors.Amethyst },
        ]}
      >
        Start again
      </Text>
      <PlayButton size={25} stroke={colors.Amethyst} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.yellow,
    padding: 16,
    borderRadius: 28,
    borderColor: colors.Amethyst,
    borderWidth: 1,
    gap: 6,
    alignItems: "center",
  },
});

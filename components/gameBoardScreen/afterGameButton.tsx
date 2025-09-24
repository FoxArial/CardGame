import { GameStateContext } from "@/app/gameBoardScreen";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function AfterGameButton() {
  const gameState = useContext(GameStateContext);
  const { reset } = gameState;
  return (
    <Pressable onPress={reset}>
      <Text>Start Again</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

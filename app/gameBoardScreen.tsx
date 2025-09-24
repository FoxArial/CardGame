import AfterGameElements from "@/components/gameBoardScreen/afterGameElements";
import CardBoard from "@/components/gameBoardScreen/cardBoard";
import LoadingScreen from "@/constants/loadingScreen";
import StarSky from "@/constants/StarSky";
import { useLocalSearchParams } from "expo-router";
import React, { createContext, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
export const LevelContext = createContext(0);
type GameStateContextType = {
  reset: () => void;
};
export const GameStateContext = createContext<GameStateContextType>(
  {} as GameStateContextType
);
export default function GameBoardScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGameDone, setIsGameDone] = useState(false);
  const { level } = useLocalSearchParams<{ level: string }>();
  const levelNumber = parseInt(level, 10);

  const resetBoard = () => {
    setIsLoaded(false);
    setIsGameDone(false);
  };
  return (
    <ImageBackground
      source={require("@/assets/images/cardBoardBg.png")}
      resizeMode="cover"
      style={[styles.fullScreen, { position: "relative" }]}
    >
      <View style={[styles.fullScreen, { position: "absolute", top: 0 }]}>
        <StarSky />
      </View>
      <GameStateContext.Provider value={{ reset: resetBoard }}>
        <View style={[styles.fullScreen, { position: "absolute", top: 0 }]}>
          {!isLoaded ? (
            <LoadingScreen isLoaded={() => setIsLoaded(true)} />
          ) : (
            <LevelContext.Provider value={levelNumber}>
              {isGameDone ? (
                <AfterGameElements />
              ) : (
                <CardBoard isDone={setIsGameDone} />
              )}
            </LevelContext.Provider>
          )}
        </View>
      </GameStateContext.Provider>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  fullScreen: {
    height: "100%",
    width: "100%",
  },
});

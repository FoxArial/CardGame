import AfterGameElements from "@/components/gameBoardScreen/afterGameElements";
import CardBoard from "@/components/gameBoardScreen/cardBoard";
import { stylesConst } from "@/constants/constant";
import LoadingScreen from "@/constants/loadingScreen";
import { useLocalSearchParams } from "expo-router";
import React, { createContext, useState } from "react";
import { ImageBackground, View } from "react-native";
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
      style={[stylesConst.fullScreen, { position: "relative" }]}
    >
      <GameStateContext.Provider value={{ reset: resetBoard }}>
        <View
          style={[stylesConst.fullScreen, { position: "absolute", top: 0 }]}
        >
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

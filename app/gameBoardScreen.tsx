import CardBoard from "@/components/gameBoardScreen/cardBoard";
import LoadingScreen from "@/components/loadingScreen";
import { useLocalSearchParams } from "expo-router";
import React, { createContext, useState } from "react";
import { View } from "react-native";
export const LevelContext = createContext(0);
export default function GameBoardScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { level } = useLocalSearchParams<{ level: string }>();
  const levelNumber = parseInt(level, 10);
  return (
    <View>
      {!isLoaded ? (
        <LoadingScreen isLoaded={() => setIsLoaded(true)} />
      ) : (
        <LevelContext.Provider value={levelNumber}>
          <CardBoard />
        </LevelContext.Provider>
      )}
    </View>
  );
}

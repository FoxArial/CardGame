import CardBoard from "@/components/gameBoardScreen/cardBoard";
import LoadingScreen from "@/components/loadingScreen";
import React, { useState } from "react";
import { View } from "react-native";

export default function GameBoardScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loading = isLoaded;
  return (
    <View>
      {loading ? (
        <CardBoard />
      ) : (
        <LoadingScreen isLoaded={() => setIsLoaded(true)} />
      )}
    </View>
  );
}

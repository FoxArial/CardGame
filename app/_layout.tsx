import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import LoadingScreen from "../components/loadingScreen";

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    "Fredoka-Medium": require("../assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-SemiBold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });
  const cacheResourses = async () => {
    const images = [
      require("../assets/images/card-off.png"),
      require("../assets/images/girl-1.png"),
      require("../assets/images/girl-2.png"),
      require("../assets/images/girl-3.png"),
      require("../assets/images/girl-4.png"),
      require("../assets/images/girl-5.png"),
      require("../assets/images/girl-6.png"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    await Promise.all(cacheImages);
    setIsLoaded(true);
  };
  useEffect(() => {
    cacheResourses();
  }, []);
  if (!fontsLoaded || !isLoaded) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaProvider>
      <StackWrapper />
    </SafeAreaProvider>
  );
}

function StackWrapper() {
  const insents = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: insents.top,
          paddingBottom: insents.bottom,
        },
        animation: "fade",
      }}
    />
  );
}

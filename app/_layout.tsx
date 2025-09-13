import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import LoadingScreen from "./loadingScreen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Fredoka-Medium": require("../assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-SemiBold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
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

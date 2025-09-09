import { Stack } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
export default function RootLayout() {
  const insents = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: insents.top,
            paddingBottom: insents.bottom,
            justifyContent: "center",
            alignItems: "center",
          },
          animation: "fade",
        }}
      >
        <Stack.Screen />
      </Stack>
    </SafeAreaProvider>
  );
}

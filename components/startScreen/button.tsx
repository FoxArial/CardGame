import { RelativePathString, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import PlayButton from "./playButton";

type ButtonProps = {
  nav: RelativePathString;
  playButtonWidth: number;
  playButtonHeight: number;
};
export default function Button({
  nav,
  playButtonWidth,
  playButtonHeight,
}: ButtonProps) {
  const router = useRouter();
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => router.push(nav)}>
        <View>
          <PlayButton width={playButtonWidth} height={playButtonHeight} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

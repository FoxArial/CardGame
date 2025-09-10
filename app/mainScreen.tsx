import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function MainScreen() {
  return (
    <View>
      <Link href="/">Select level</Link>
      <Text>mainScreen</Text>
    </View>
  );
}

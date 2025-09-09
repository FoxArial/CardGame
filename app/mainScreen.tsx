import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function mainScreen() {
  return (
    <View>
      <Link href="/levelSelection">Select level</Link>
      <Text>mainScreen</Text>
    </View>
  );
}

import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function StartPlay() {
  return (
    <View>
      <Link href="/mainScreen">
        <Text>Start Play</Text>
      </Link>
    </View>
  );
}

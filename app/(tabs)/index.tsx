import { Image, StyleSheet, Platform } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "tomato" }}
      ></View>
      <View style={{ width: 200, height: 200, backgroundColor: "teal" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "orange" }}
      ></View>
    </View>
  );
}

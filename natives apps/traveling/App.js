import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoader] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    light: require("./assets/fonts/light.otf"),
    bold: require("./assets/fonts/bold.otf"),
    medium: require("./assets/fonts/medium.otf"),
    extrabold: require("./assets/fonts/xtrabold.otf"),
    // semibold: require("./assets/fonts/"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoader]);

  if (!fontsLoader) {
    return null;
  }
  console.log("fontsLoader:", fontsLoader);

  return (
    <View>
      <Text> HELLO hortone</Text>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Cart,
  CountryDetails,
  Home,
  HotelDetails,
  HotelsList,
  OnBoarding,
  PlaceDetails,
  Recommended,
  Search,
} from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoader] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    light: require("./assets/fonts/light.otf"),
    bold: require("./assets/fonts/bold.otf"),
    medium: require("./assets/fonts/medium.otf"),
    extrabold: require("./assets/fonts/xtrabold.otf"),
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelsList"
          component={HotelsList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 20,
  },
});

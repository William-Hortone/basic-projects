import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Cart,
  CountryDetails,
  Home,
  HotelDetails,
  HotelSearch,
  HotelsList,
  OnBoarding,
  Payments,
  PlaceDetails,
  Recommended,
  Search,
  SelectRoom,
  SelectedRoom,
  Settings,
  TopInfos,
} from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import axios from "axios";
import fetchCountries from "./hook/fetchCountries";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoader] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    light: require("./assets/fonts/light.otf"),
    bold: require("./assets/fonts/bold.otf"),
    medium: require("./assets/fonts/medium.otf"),
    extrabold: require("./assets/fonts/xtrabold.otf"),
  });

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = () => {
  //     setIsLoading(true);

  //     axios
  //       .get("http://localhost:5003/api/getCountries")
  //       .then((res) => {
  //         console.log("the data is", res.data);
  //       })
  //       .catch((err) => {
  //         console.log("the err is", err);
  //       });

  //     // setData(response.data);

  //     // setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!data) {
  //   return null;
  // }

  // const { countries, isLoading, error, refetchData } = fetchCountries();
  // console.log("lets see", countries);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoader]);

  // const fetchNewData = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5003/api/getCountries");
  //     console.log("The data are here", res.data);
  //     // toast.success("Updated successfully");
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchNewData();
  // }, []);

  if (!fontsLoader) {
    return null;
  }

  console.log("fontsLoader:", fontsLoader);
  // console.log("fontsLoader:", fontsLoader);

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
        <Stack.Screen
          name="HotelSearch"
          component={HotelSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRoom"
          component={SelectRoom}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectedRoom"
          component={SelectedRoom}
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

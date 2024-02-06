import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home, Profile, Search, Location, Chat } from "../screens";
import { COLORS } from "../constants";

const BottomTabNavigation = () => {
  return (
    <View>
      <Text>BottomTabNavigation</Text>
    </View>
  );
};

export default BottomTabNavigation;

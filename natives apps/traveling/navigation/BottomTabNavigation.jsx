import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home, Profile, Search, Location, Chat } from "../screens";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  position: "absolute",
  bottom: 20,
  right: 20,
  left: 20,
  borderRadius: 20,
  padding: 20,
  height: 70,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      inactiveColor="#3e2465"
      tabBarHideKeyBoard={true}
      barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="location"
        component={Location}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "location" : "location-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={
                  focused
                    ? "chatbubble-ellipses"
                    : "chatbubble-ellipses-outline"
                }
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

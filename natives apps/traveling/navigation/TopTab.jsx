import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBooking, TopTrips } from "../screens";
import { COLORS } from "../constants";
import { HeightSpacer, NetworkImage } from "../components";

// const Tab = createMaterialTopTabNavigator(); // Uncommented this line

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <HeightSpacer height={20} />
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg"
            }
            width={"100%"}
            height={300}
            radius={30}
          />
        </View>
      </View>

      {/* <Tab.Navigator>
        <Tab.Screen name="Bookings" component={<TopBooking />} />
        <Tab.Screen name="Trips" component={<TopTrips />} />
        <Tab.Screen name="Infos" component={<TopInfos />} />
      </Tab.Navigator> */}
    </View>
  );
};

export default TopTab;

// const styles = StyleSheet.create({});

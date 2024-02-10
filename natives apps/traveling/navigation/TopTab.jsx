import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBooking, TopInfos, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          {/* <HeightSpacer height={20} /> */}
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />
          <AppBar
            color={COLORS.white}
            color1={COLORS.white}
            icon={"logout"}
            top={40}
            left={20}
            right={20}
            onPress1={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
              }}
              style={styles.image}
            />
            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"William Hortone"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"willhortone@gmail.com"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBooking} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Infos" component={TopInfos} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

// const styles = StyleSheet.create({});

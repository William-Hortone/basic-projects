import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TopBooking, TopInfos, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";
import { useNavigation } from "@react-navigation/native";

const TopTab = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Bookings");

  const renderTab = (tabName) => (
    <TouchableOpacity
      key={tabName}
      style={[
        styles.tab,
        {
          backgroundColor:
            activeTab === tabName ? COLORS.green : COLORS.lightWhite,
        },
      ]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text
        style={[
          styles.title,
          { color: activeTab === tabName ? COLORS.white : COLORS.black },
        ]}
      >
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
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
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
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

      {/* The top bar navigation */}
      <View style={styles.tabContainer}>
        <View style={styles.tabContent}>{renderTab("Bookings")}</View>
        <View style={styles.tabContent}>{renderTab("Trips")}</View>
        <View style={styles.tabContent}>{renderTab("Infos")}</View>
      </View>
      {/* Render content based on activeTab */}
      {activeTab === "Bookings" && <TopBooking navigation={navigation} />}
      {activeTab === "Trips" && <TopTrips navigation={navigation} />}
      {activeTab === "Infos" && <TopInfos navigation={navigation} />}
    </View>
  );
};

export default TopTab;

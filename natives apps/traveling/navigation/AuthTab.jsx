import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { Registration, SignIn } from "../screens";
import { NetworkImage } from "../components";

const AuthTab = () => {
  const [activeTab, setActiveTab] = useState("Registration");

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
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View>
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />
        </View>
        <View style={{ height: 600 }}>
          {/* The top bar navigation */}
          <View style={styles.tabContainer}>
            <View style={styles.tabContent}>{renderTab("Registration")}</View>
            <View style={styles.tabContent}>{renderTab("SignIn")}</View>
          </View>
          {/* Render content based on activeTab */}

          {activeTab === "Registration" && <Registration />}
          {activeTab === "SignIn" && <SignIn />}
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "bold",
    textAlign: "center",
  },
});

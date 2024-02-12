import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import {
  AppBar,
  HeightSpacer,
  ReusableText,
  SettingsTile,
} from "../../components";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          top={40}
          left={20}
          right={20}
          color={COLORS.white}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
        />

        <HeightSpacer height={80} />

        <View style={{ marginHorizontal: 20 }}>
          <ReusableText
            text={"Account Settings"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <SettingsTile title={"Language"} />

          <HeightSpacer height={3} />

          <SettingsTile title={"Country"} title1={"USA"} />

          <HeightSpacer height={3} />

          <SettingsTile title={"Currency"} title1={"USD"} />

          <HeightSpacer height={40} />

          <ReusableText
            text={"Support"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />

          <SettingsTile title={"Get Help"} title1={""} />

          <HeightSpacer height={3} />

          <SettingsTile title={"Give a Feedback"} title1={""} />

          <HeightSpacer height={40} />
          <HeightSpacer height={10} />

          <ReusableText
            text={"Legal"}
            family={"regular"}
            size={SIZES.xLarge - 5}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <SettingsTile title={"Terms of Services"} title1={""} />
          <HeightSpacer height={3} />
          <SettingsTile title={"Privacy Policy"} title1={""} />

          <HeightSpacer height={40} />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

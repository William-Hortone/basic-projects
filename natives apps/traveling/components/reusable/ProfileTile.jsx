import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import ReusableText from "./ReusableText";
import WidthSpacer from "./WidthSpacer";
import { COLORS, SIZES } from "../../constants";
import { AntDesign } from "@expo/vector-icons";

const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.title} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("space-between")}>
          <AntDesign name={icon} size={20} />
          <WidthSpacer width={15} />
          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <View>
          <AntDesign name="right" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  title: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    marginTop: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

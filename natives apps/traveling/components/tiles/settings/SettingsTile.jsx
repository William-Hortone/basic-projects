import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../reusable/reusable.style";
import ReusableText from "../../reusable/ReusableText";
import { COLORS, SIZES } from "../../../constants";
import WidthSpacer from "../../reusable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";

const SettingsTile = ({ onPress, title, title1 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText
        text={title}
        family={"regular"}
        size={SIZES.large}
        color={COLORS.black}
      />

      {title === "Language" ? (
        <View style={reusable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../assets/images/USA.png")}
            style={styles.image}
          />

          <WidthSpacer width={5} />

          <ReusableText
            text={"English"}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.black} />
        </View>
      ) : (
        <View style={reusable.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.black} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray2,
    paddingVertical: 15,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
});

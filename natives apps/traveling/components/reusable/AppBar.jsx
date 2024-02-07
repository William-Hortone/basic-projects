import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { COLORS, SIZES } from "../../constants";

const AppBar = ({ color, title, color1, icon, onPress, onPress1 }) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>

        <ReusableText
          text={title}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.black}
        />

        <TouchableOpacity style={styles.box(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  box: (color) => ({
    backgroundColor: color,
    height: 30,
    width: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    height: 30,
    width: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});

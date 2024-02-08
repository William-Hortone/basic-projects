import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants";

const ReusableBtn = ({
  onPress,
  btnText,
  textColor,
  width,
  bgColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, bgColor, borderWidth, borderColor)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (width, bgColor, borderWidth, borderColor) => ({
    width: width,
    backgroundColor: bgColor,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderColor: borderColor,
    borderWidth: borderWidth,
  }),
});

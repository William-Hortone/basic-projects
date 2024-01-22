import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants";

const ReusableBtn = ({
  onPress,
  btnText,
  width,
  bgColor,
  borderWidth,
  borderColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyler(
        width,
        bgColor,
        borderWidth,
        borderColor,
        textColor
      )}
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
  btnStyler: (width, bgColor, borderWidth, borderColor) => ({
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

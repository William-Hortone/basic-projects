import { StyleSheet, View, Text } from "react-native";
import React from "react";

const truncateText = (text, maxLength) => {
  if (typeof text !== "string") {
    return "";
  }
  if (text.length <= 20) {
    return text;
  }
  return text.substring(0, 20) + "...";
};

const ReusableText = ({
  lines,
  text,
  color,
  family,
  size,
  align,
  maxLength,
}) => {
  return (
    <Text
      numberOfLines={lines}
      style={styles.textStyle(color, family, size, align)}
    >
      {truncateText(text, maxLength)}
    </Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (color, family, size, align) => ({
    color: color,
    fontFamily: family,
    fontSize: size,
    textAlign: align,
  }),
});

import { StyleSheet, View, Text } from "react-native";
import React from "react";

const ReusableText = ({ text, color, family, size, align }) => {
  return (
    <Text style={styles.textStyle(color, family, size, align)}>{text}</Text>
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

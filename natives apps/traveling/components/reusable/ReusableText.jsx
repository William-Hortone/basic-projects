import { StyleSheet, View, Text } from "react-native";
import React from "react";

const ReusableText = ({ text, color, family, size }) => {
  return <Text style={styles.textStyle(color, family, size)}>{text}</Text>;
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (color, family, size) => ({
    color: color,
    fontFamily: family,
    fontSize: size,
  }),
});

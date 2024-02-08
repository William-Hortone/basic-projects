import React from "react";
import { StyleSheet, Text } from "react-native";
import { SIZES } from "../../constants";

const DescriptionText = ({ lines, text }) => {
  return (
    <Text numberOfLines={lines} style={styles.description}>
      {text}
    </Text>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  description: {
    paddingVertical: 10,
    fontFamily: "regular",
    textAlign: "justify",
    fontSize: SIZES.medium,
  },
});

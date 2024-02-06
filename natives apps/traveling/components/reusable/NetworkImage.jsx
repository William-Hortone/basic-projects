import React from "react";
import { Image, StyleSheet } from "react-native";

const NetworkImage = ({ source, width, height, radius }) => {
  return (
    <Image
      source={{ uri: source }}
      style={styles.image(width, height, radius)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});

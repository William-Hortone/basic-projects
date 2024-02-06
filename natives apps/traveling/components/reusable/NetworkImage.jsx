import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, radius }) => {
  console.log("Image Source:", source);
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

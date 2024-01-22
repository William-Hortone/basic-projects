import { View, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black)}></Text>s
      </View>
      <View style={styles.container}>Welcome</View>
    </View>
  );
};

export default Welcome;

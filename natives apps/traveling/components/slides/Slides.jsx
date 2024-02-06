import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text> Slides</Text>
    </View>
  );
};

export default Slides;

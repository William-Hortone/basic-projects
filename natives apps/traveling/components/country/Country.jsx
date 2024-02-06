import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import ReusableText from "../reusable/ReusableText";
import { COLORS, SIZES } from "../../constants";
import NetworkImage from "../reusable/NetworkImage";
import ReusableText from "../reusable/ReusableText";
// import NetworkImages from "../reusable/NetworkImages";
// import { NetworkImages, ReusableText } from "../../components";

const Country = ({ item }) => {
  return (
    <TouchableOpacity>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />

        <ReusableText
          text={item.country}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Country;

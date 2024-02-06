import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import NetworkImage from "../reusable/NetworkImage";
import ReusableText from "../reusable/ReusableText";
import HeightSpacer from "../reusable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", item)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />
        <HeightSpacer height={5} />

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

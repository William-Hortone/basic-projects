import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { COLORS, SIZES } from "../../constants";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import Rating from "./Rating";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-stat")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
            maxLength={20}
          />
          <WidthSpacer width={8} />

          <ReusableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />
          <WidthSpacer width={8} />

          <View style={reusable.rowWithSpace("flex-stat")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />

            <ReusableText
              text={`${item.review}`}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});

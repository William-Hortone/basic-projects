import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { COLORS, SIZES } from "../../constants";

const Slides = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={item.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          size={SIZES.xxLarge}
          family={"medium"}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => {}}
          btnText={"Get started"}
          width={(SIZES.width - 50) / 2.2}
          bgColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;

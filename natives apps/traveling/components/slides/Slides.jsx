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
      <Image source={item.image} style={styles.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          color={COLORS.white}
          size={SIZES.xxLarge}
          family={"medium"}
        />
        <HeightSpacer height={SIZES.small} />

        <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Get Started"}
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

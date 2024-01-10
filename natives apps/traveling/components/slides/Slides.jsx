import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { ReusableText } from "../../components";
import { COLORS, SIZES } from "../../constants/index";

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
        {/* <Text>ohljkdhfjkhdjlkfdkfhdjfhdjkfhdjkfh</Text> */}
      </View>
    </View>
  );
};

export default Slides;

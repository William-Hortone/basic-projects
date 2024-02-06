import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height,
    resizeMode: "cover",
  },
  stack: {
    position: "absolute",
    bottom: 60,
    marginHorizontal: 20,
  },
});

export default styles;

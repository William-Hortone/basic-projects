import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    top: 20,
    right: 0,
    left: 0,
    alignContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 90,
    borderColor: COLORS.lightWhite,
  },
});
export default styles;

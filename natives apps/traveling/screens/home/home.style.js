import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.xxLarge,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 20,
    width: 15,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;

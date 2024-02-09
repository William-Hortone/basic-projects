import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: SIZES.small,
    borderColor: COLORS.gray,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 1,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 30,
    // backgroundColor: "red",
  },

  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.green,
  },
  searchImage: {
    width: "100%",
    height: SIZES.height / 2.2,
    resizeMode: "contain",
    paddingHorizontal: 20,
  },
  tile: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
});

export default styles;

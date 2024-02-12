import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  inputWrapper: (borderColor) => ({
    backgroundColor: COLORS.lightWhite,
    borderColor: borderColor,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  }),
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: SIZES.small,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
  },
});
export default styles;

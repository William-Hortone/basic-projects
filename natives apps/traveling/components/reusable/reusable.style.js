import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
    // backgroundColor: "red",
  }),
});

export default reusable;

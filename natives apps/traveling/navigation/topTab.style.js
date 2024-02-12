import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
  name: {
    backgroundColor: COLORS.lightWhite,
    padding: 5,
    borderRadius: 12,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "bold",
    textAlign: "center",
  },
});
export default styles;

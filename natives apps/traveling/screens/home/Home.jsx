import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import reusable from "../../components/reusable/reusable.style";
import { ReusableText } from "../../components";
import { SIZES, COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={reusable.container}>
      <View style={reusable.rowWithSpace("space-between")}>
        <ReusableText
          text={"Hello Hortone"}
          size={SIZES.large}
          family={"regular"}
          color={COLORS.black}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("search")}
          style={styles.box}
        >
          <AntDesign name="search1" size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
import {
  BestHotels,
  HeightSpacer,
  PLaces,
  Recommendation,
  ReusableText,
} from "../../components";
import { SIZES, COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hi Hortone !"}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={5} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.black}
        />

        <PLaces />

        {/* <HeightSpacer height={15} /> */}
        <Recommendation />
        <HeightSpacer height={15} />

        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;

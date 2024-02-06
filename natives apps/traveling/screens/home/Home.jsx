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
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

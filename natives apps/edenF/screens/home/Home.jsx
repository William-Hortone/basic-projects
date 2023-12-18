import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text> Xuzhou</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

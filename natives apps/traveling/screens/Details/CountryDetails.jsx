import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  console.log("the item", item);
  return (
    <View>
      <Text>CountryDetails</Text>
    </View>
  );
};

export default CountryDetails;

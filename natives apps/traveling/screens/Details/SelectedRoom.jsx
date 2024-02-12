import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();

  const item = router.params;
  console.log("Selected room item:", item);
  return (
    <View>
      <Text>SelectedRoom</Text>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Slides from "../../components/slides/Slides";

const OnBoarding = () => {
  const slides = [
    {
      id: 1,
      image: require("../../assets/images/1.png"),
      title: "Find the best place to stay",
    },
    {
      id: 2,
      image: require("../../assets/images/2.png"),
      title: "Discover the world",
    },
    {
      id: 3,
      image: require("../../assets/images/3.png"),
      title: "Find the best Hotel ",
    },
  ];
  return (
    <FlatList
      pagingEnabled
      horizontal
      data={slides}
      renderItem={({ item }) => <Slides item={item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});

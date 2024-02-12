import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReusableTile } from "../../components";
import { COLORS } from "../../constants";
import reusable from "../../components/reusable/reusable.style";

const TopBooking = () => {
  const hotels = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "NewYork, U.S.A",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/98/5c/37/hotel-exterior.jpg?w=1200&h=-1&s=1",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      location: "Paris, France",
      title: "Statue of Liberty",
      imageUrl:
        "https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
  ];
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: COLORS.lightWhite,
              marginBottom: 10,
              borderRadius: 16,
            }}
          >
            <ReusableTile item={item} onPress={() => {}} />

            <View style={reusable.rowWithSpace("space-between")}></View>
          </View>
        )}
      />
    </View>
  );
};

export default TopBooking;

const styles = StyleSheet.create({});

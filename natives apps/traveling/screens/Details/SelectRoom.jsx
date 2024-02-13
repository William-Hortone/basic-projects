import { FlatList, StyleSheet, SafeArrayView, View } from "react-native";
import React from "react";
import {
  AppBar,
  HeightSpacer,
  ReusableBtn,
  ReusableTile,
} from "../../components";
import { COLORS, SIZES } from "../../constants";

const SelectRoom = ({ navigation }) => {
  const rooms = [
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
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      location: "Bacelone, Spain",
      title: "Golden Gate Bridge",
      imageUrl:
        "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      location: "NewYork, U.S.A",
      title: "Yellowstone National Park",
      imageUrl:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      location: "Libreville, Gabon",
      imageUrl:
        "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      title: "Yellowstone National Park",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={"Select Room"}
          color={COLORS.white}
          // color1={COLORS.white}
          // icon={"search1"}
          top={50}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
        />
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.titleContainer}>
            <View style={styles.title}>
              <ReusableTile item={item} />
              <HeightSpacer height={10} />

              <View style={styles.btnStyle}>
                <ReusableBtn
                  onPress={() => navigation.navigate("SelectedRoom", item)}
                  btnText={"Select Room"}
                  width={SIZES.width - 50}
                  bgColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
              </View>
            </View>
          </View>
        )}
      />
      {/* <HeightSpacer height={40} /> */}
    </View>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  title: { backgroundColor: COLORS.lightWhite, borderRadius: 12 },
  titleContainer: { marginHorizontal: 20, marginBottom: 10 },
  btnStyle: { margin: 10, alignItems: "center" },
});

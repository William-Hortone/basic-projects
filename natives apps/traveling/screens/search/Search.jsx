import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/reusable/reusable.style";

import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { HeightSpacer, ReusableTile } from "../../components";

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState(["df"]);
  const search = [
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
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to visit ?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {searchResult.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"} />
          <Image
            style={styles.searchImage}
            source={require("../../assets/images/search.png")}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

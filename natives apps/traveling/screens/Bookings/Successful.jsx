import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
  ReusableTile,
} from "../../components";
import { COLORS, SIZES } from "../../constants";
import { useRoute } from "@react-navigation/native";

const Successful = ({ navigation }) => {
  const router = useRoute();

  const item = router.params;
  console.log("success", item);
  // const hotel = {
  //   _id: "64c631650298a05640539adc",
  //   country_id: "64c62bfc65af9f8c969a8d04",
  //   title: "Walt Disney World",
  //   location: "NewYork, U.S.A",
  //   imageUrl:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/98/5c/37/hotel-exterior.jpg?w=1200&h=-1&s=1",
  //   rating: 4.7,
  //   review: "1204 Reviews",
  // };

  return (
    <View>
      <View style={{ marginTop: "50%" }}>
        <HeightSpacer height={40} />
        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successfully !"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={20} />

          <ReusableText
            text={"You can see your booking details below"}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>

        <HeightSpacer height={20} />

        <View style={{ margin: 20 }}>
          <ReusableText
            text={"Rooms Details"}
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={20} />

          <ReusableTile item={item} />

          <HeightSpacer height={20} />

          <ReusableBtn
            onPress={() => navigation.navigate("Bottom")}
            btnText={"Done"}
            width={SIZES.width - 50}
            bgColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

export default Successful;

const styles = StyleSheet.create({});

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  ReusableBtn,
  ReusableText,
} from "../../components";
import { COLORS, SIZES } from "../../constants";
import reusable from "../../components/reusable/reusable.style";
import { Feather } from "@expo/vector-icons";

const PlaceDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  console.log("the yes id is", id);

  // const place = {
  const place = {
    _id: "64d062a3de20d7c932f1f70a",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
    contact_id: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    rating: 4.8,
    review: "1452 Reviews",
    latitude: 40.689247,
    longitude: -74.044502,
    location: "Liberty Island, New York Harbor",
    popular: [
      {
        _id: "64c675be3cfa5e847bcd5439",
        title: "Family-Friendly Resort",
        imageUrl:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
        rating: 4.6,
        review: "12854 Reviews",
        location: "Orlando, FL",
      },
      {
        _id: "64c675793cfa5e847bcd5436",
        title: "Urban Chic Boutique Hotel",
        imageUrl:
          "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        rating: 4.8,
        review: "2312 Reviews",
        location: "San Francisco, CA",
      },
    ],
  };
  // };
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={300}
          radius={30}
        />

        <AppBar
          title={place.title}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          top={30}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={place.location}
          family={"medium"}
          size={SIZES.xLarge}
          color={COLORS.black}
          lines={1}
        />

        <DescriptionText text={place.description} lines={8} />

        <View style={{ alignContent: "center" }}>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Hotels"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <PopularList data={place.popular} />
          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            bgColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={40} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

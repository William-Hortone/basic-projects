import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";
import {
  AppBar,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";
import reusable from "../../components/reusable/reusable.style";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();

  const item = router.params;

  console.log("Selected room item:", item.imageUrl);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={item.title}
          color={COLORS.white}
          // color1={COLORS.white}
          // icon={"search1"}
          top={50}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />
                <WidthSpacer width={10} />
                <ReusableText
                  text={`${item.review}`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />
            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.gray2,
                marginVertical: 10,
              }}
            ></View>

            <ReusableText
              text={"Room REquirements"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={20} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <ReusableText
                text={"$ 300"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
            <HeightSpacer height={10} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <ReusableText
                text={"Visa"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
            <HeightSpacer height={10} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"2 Guest"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>

            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={() => navigation.navigate("Success", item)}
              btnText={"Book Now"}
              width={SIZES.width - 50}
              bgColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});

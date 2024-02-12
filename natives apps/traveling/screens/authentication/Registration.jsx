import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./registration.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeightSpacer, ReusableBtn, WidthSpacer } from "../../components";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("required"),
});

const Registration = () => {
  const [loader, setLoader] = useState();
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <HeightSpacer height={20} />

      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
        }) => (
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Username :</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.username ? COLORS.green : COLORS.gray
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />

                  <TextInput
                    onChangeText={handleChange("username")}
                    placeholder="Enter your username"
                    onFocus={() => setFieldTouched("username")}
                    onBlur={() => setFieldTouched("username", "")}
                    value={values.username}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Email :</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.green : COLORS.gray
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />

                  <TextInput
                    onChangeText={handleChange("email")}
                    placeholder="Enter your Email"
                    onFocus={() => setFieldTouched("email")}
                    onBlur={() => setFieldTouched("email", "")}
                    value={values.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password :</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.green : COLORS.gray
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Enter your Password"
                    onFocus={() => setFieldTouched("password")}
                    onBlur={() => setFieldTouched("password", "")}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                  <TouchableOpacity
                    onPress={() => setObsecureText(!obsecureText)}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                      color={COLORS.gray}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20} />

            <ReusableBtn
              onPress={handleSubmit}
              btnText={"REGISTER"}
              width={SIZES.width - 40}
              bgColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registration;

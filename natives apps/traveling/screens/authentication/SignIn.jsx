import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./signIn.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReusableBtn, WidthSpacer } from "../../components";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .require("required"),
});

const SignIn = () => {
  const [loader, setLoader] = useState();
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {}}
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
                    values={values.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
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
                    name="password-outline"
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
                    values={values.password}
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

                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
              </View>
            </View>

            <WidthSpacer width={20} />

            <ReusableBtn
              onPress={() => {}}
              btnText={"SIGN IN"}
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

export default SignIn;

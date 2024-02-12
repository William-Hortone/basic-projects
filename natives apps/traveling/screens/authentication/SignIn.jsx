import { Text, View } from "react-native";
import React from "react";
import styles from "./signIn.style";
import { Formik } from "formik";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik></Formik>
    </View>
  );
};

export default SignIn;

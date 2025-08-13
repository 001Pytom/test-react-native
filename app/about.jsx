import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      <Link href="/" style={styles.link}>
        back home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1, //default stuff here is in column direction
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  link: {
    marginVertical: 3,
    borderBottomWidth: 1,
  },
});

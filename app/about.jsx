import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About Page</ThemedText>

      <Link href="/" style={styles.link}>
        back home
      </Link>
    </ThemedView>
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

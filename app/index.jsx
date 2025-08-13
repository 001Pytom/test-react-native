import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import myImg from "../assets/img/YUSUF.jpg";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* use uri if you are using online image */}
      {/* <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} /> */}

      <Image source={myImg} style={styles.img} />

      <Text style={styles.title}>The Number one</Text>
      <Text>Reading list App</Text>

      <View style={styles.box}>
        <Text>This is a box</Text>
      </View>

      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact">contact</Link>
    </View>
  );
};

export default Home;

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
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  box: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  link: {
    marginVertical: 3,
    borderBottomWidth: 1,
    fontWeight: "bold",
    marginTop: 20,
  },
});

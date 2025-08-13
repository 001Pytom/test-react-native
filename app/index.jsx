import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* use uri if you are using online image */}
      {/* <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} /> */}

      <ThemedLogo style={styles.img} />

      <ThemedText style={styles.title} title={true}>
        The Number one
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>Reading list App</ThemedText>

      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact">contact</Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
    width: 200,
    height: 200,
    maxWidth: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

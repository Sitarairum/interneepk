import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      navigation.replace("Main");
    }, 5000);

    return () => clearTimeout(fakeLoading);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    marginBottom: 50,
    width: 350,
    height: 252,
  },
});

export default SplashScreen;

// MainScreen.js

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 240,
  },
  button: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
    width: "48%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },

  logo: {
    marginBottom: 60,
    width: 350,
    height: 252,
  },
});

export default MainScreen;

// LoginScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <FontAwesome
            name="envelope"
            size={20}
            color="#008000"
            style={styles.icon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <FontAwesome
            name="lock"
            size={20}
            color="#008000"
            style={styles.icon}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
  subcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#008000",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 5,
    color: "#008000",
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#008000",
    textDecorationLine: "underline",
  },

  logo: {
    width: 350,
    height: 252,
  },
});

export default LoginScreen;

import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TSK = () => {
  const [githubLink, setGithubLink] = useState("");

  const handleSave = () => {
    console.log("GitHub link saved:", githubLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}> Task Details</Text>
      <Text style={styles.heading2}> Description</Text>
      <Text style={styles.textDetail}>
        Welcome to Internee.pk’s virtual internship program! Creating an
        instructional video for your introduction is a great idea to engage with
        your fellow internees visually.
      </Text>

      <Text style={styles.heading2}>Start Date</Text>
      <Text style={styles.textDetail}>2023-10-31</Text>
      <Text style={styles.heading2}>End Date</Text>
      <Text style={styles.textDetail}>2023-10-30</Text>

      <Text style={styles.heading2}> GitHub Link (For Development Task)</Text>

      <TextInput
        style={styles.input}
        placeholder="E.g https://github.com/username/repository"
        value={githubLink}
        onChangeText={setGithubLink}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading2: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textDetail: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TSK;

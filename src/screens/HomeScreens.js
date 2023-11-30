// HomeScreen.js

import React from "react";
import TSK from "./TaskDetails/TSK-01";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const tasks = [
    {
      id: "TSK-01",
      category: "React Native",
      name: "Record Video",
      status: "Pending",
    },
    {
      id: "TSK-02",
      category: "React Native",
      name: "Mobile App",
      status: "Pending",
    },
    {
      id: "TSK-03",
      category: "React Native",
      name: "UI Design",
      status: "Pending",
    },
    {
      id: "TSK-04",
      category: "React Native",
      name: "	State Management",
      status: "Pending",
    },

    {
      id: "TSK-05",
      category: "React Native",
      name: "API Integration",
      status: "Pending",
    },
    {
      id: "TSK-06",
      category: "React Native",
      name: "Testing",
      status: "Pending",
    },
  ];

  const handleViewTask = (taskId) => {
    navigation.navigate("TSK", { taskId });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeMessage}>Welcome !</Text>

        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>ID</Text>
            <Text style={styles.headerText}>Category</Text>
            <Text style={styles.headerText}>Task</Text>
            <Text style={styles.headerText}>Status</Text>
            <Text style={styles.headerText}>Actions</Text>
          </View>

          {tasks.map((task) => (
            <View key={task.id} style={styles.dataRow}>
              <Text style={styles.dataText}>{task.id}</Text>
              <Text style={styles.dataText}>{task.category}</Text>
              <Text style={styles.dataText}>{task.name}</Text>
              <Text style={styles.dataText}>{task.status}</Text>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => handleViewTask(task.id)}
              >
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
  },
  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dataText: {
    flex: 1,
  },
  viewButton: {
    backgroundColor: "#008000",
    padding: 8,
    borderRadius: 5,
  },
  viewButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;

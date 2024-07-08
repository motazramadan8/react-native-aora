import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link
        href="/home"
        style={{ color: "blue", textDecorationLine: "underline" }}
      >
        Go to home
      </Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// app/index.tsx
import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  let userId = 6

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text>Home</Text>
      <Link href={`/users/${userId}`}>Go to user 1</Link>
      <Pressable onPress={() => router.push({
        pathname: "message/[id]",
        params: {id: 2}
      })}>
        <Text>Go to message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eedd22",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

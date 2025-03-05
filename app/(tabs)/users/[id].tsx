import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useUser } from '../../../context/UserContext';


export default function UserPage() {
    const { id } = useLocalSearchParams()
    const { user, setUser } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UserPage - {id}</Text>
      {user ? (
        <Text>Bienvenido, {user.name}!</Text>
      ) : (
        <Text>No has iniciado sesión</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ee1122",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
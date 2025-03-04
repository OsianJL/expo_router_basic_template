// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter();
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Ir a Pantalla 1" onPress={() => router.push('pantalla1')} />
      <Button title="Ir a Pantalla 2" onPress={() => router.push('pantalla2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

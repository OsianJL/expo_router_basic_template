// app/pantalla1.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Pantalla1() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Pantalla 1</Text>
      <Button title="Volver al Home" onPress={() => router.back()} />
    </View>
  );
}

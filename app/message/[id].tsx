import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Message() {
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Message - {id}</Text>
    </View>
  )
}
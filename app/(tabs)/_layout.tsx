import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='users/[id]' options={{
            headerShown:false,
            title: "User",
            tabBarIcon: ({ color, size }) => (
                <Icon name="heart" size={size} color={color} />
            ),
            headerTitleAlign: 'center',
        }}/>
        <Tabs.Screen name='message/[id]' options={{
            headerShown:false,
            title: "Message",
            tabBarIcon: ({ color, size }) => (
                <Icon name="book" size={size} color={color} />
            ),
            headerTitleAlign: 'center',
        }}/>
        <Tabs.Screen name='index' options={{
            headerShown:false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
            ),
            headerTitleAlign: 'center',
        }}/>
    </Tabs>
  )
}
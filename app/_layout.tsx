import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { UserProvider } from '../context/UserContext';

export default function Rootlayout() {
  return (
    <UserProvider>
   <Stack>
    
    <Stack.Screen name='(tabs)' options={{
      headerShown: false
    }}/>
    {/* <Stack.Screen name='index' options={{
      headerShown: false,
      headerTitle: "Home Page",
      headerStyle: {
        backgroundColor: "#eedd22",
      },
      headerTitleAlign: 'center',

    }} />
    <Stack.Screen name='users/[id]' options={{
      headerTitle: "User Page",
      headerStyle: {
        backgroundColor: "#eedd22"
      },
      headerTitleAlign: 'center',
    }}/>
    <Stack.Screen name='message/[id]' options={{
      headerTitle: "Message",
      headerStyle: {
        backgroundColor: "#eedd22"
      },
      headerTitleAlign: 'center',
    }}/> */}
   </Stack>
   </UserProvider>
  )
}
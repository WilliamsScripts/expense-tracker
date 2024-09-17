import React from 'react'
import Wallet from '@/components/Wallet'
import ExpenseList from '@/components/ExpenseList'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const Home = () => {
  const { styles } = useHomePageStyleHook()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hello Williams 👋</Text>
      <Wallet />
      <ExpenseList />
      <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
        <AntDesign name="plus" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const useHomePageStyleHook = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
      gap: 20
    },
    greeting: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#fff' : '#000'
    },
    addButton: {
      position: 'absolute',
      height: 60,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      bottom: 50,
      right: 10,
      backgroundColor: '#686de0',
      color: '#fff'
    }
  })

  return { 
    styles 
  }
}

export default Home
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

const Expense = () => {
  const { styles, colorScheme } = useExpenseStyleHook()
  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>
        <MaterialIcons name="attach-money" size={24} color={colorScheme === 'dark' ? "white" : "black"} />
      </View>
      <View>
        <Text style={styles.amount}>$100</Text>
        <Text style={styles.description}>Groceries</Text>
      </View>
      <Text style={styles.category}>$100</Text>
    </View>
  )
}

const useExpenseStyleHook = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: 10, 
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? "#2f3640" : '#dcdde1',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10
    },
    icon: {
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: colorScheme === 'dark' ? "#718093" : '#f5f6fa'
    },
    amount: {
      fontSize: 16, 
      fontWeight: 'bold', 
      color: colorScheme === 'dark' ? '#fff' : '#000'
    },
    description: {
      fontSize: 14, 
      fontWeight: 'medium', 
      color: colorScheme === 'dark' ? '#eee' : '#666'
    },
    category: {
      padding: 4,
      fontSize: 12, 
      fontWeight: 'bold', 
      backgroundColor: '#686de030',
      color: "#686de0",
      borderRadius: 6,
      marginLeft: 'auto'
    }
  })

  return {
    styles,
    colorScheme
  }
}

export default Expense
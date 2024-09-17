import React from 'react'
import Expense from './Expense'
import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'

const ExpenseList = () => {
  const { styles } = useExpenseListStyleHook()
  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Expenses</Text>
        <Link href='/' style={styles.link}>See All</Link>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[,,,]}
        renderItem={() => (
          <Expense />
        )}
      />
    </>
  )
}

const useExpenseListStyleHook = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#eee' : '#666'
    },
    link: {
      fontSize: 18,
      fontWeight: 'semibold',
      color: "#686de0"
    }
  })

  return {
    styles
  }
}

export default ExpenseList
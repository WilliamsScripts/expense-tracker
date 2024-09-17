import React from 'react'
import CustomButton from './CustomButton'
import { StyleSheet, Text, View } from 'react-native'

const Wallet = () => {
  return (
    <View style={styles.wallet}>
      <Text style={styles.address}>
        Wallet Balance:
      </Text>
      <Text style={styles.amount}>$10,000,000.00</Text>
      <CustomButton label='disconnect' variant='danger' width={110} extraStyles={{ position: 'absolute', top: 20, right: 10 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: '#686de0',
    color: '#fff',
    borderRadius: 20,
    height: 105,
    padding: 12,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15
  },
  address: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#f0f0f0',
    marginVertical: 10
  }
})

export default Wallet
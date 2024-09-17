import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

type Variants = 'primary' | 'white' | 'danger'

type CustomButtonProps = {
  label: string,
  variant: Variants,
  width?: number,
  extraStyles?: ViewStyle
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, variant, width, extraStyles }) => {
  const { styles } = useCustomButtonHooks(variant, width)
  return (
    <TouchableOpacity style={{...styles.customButton, ...extraStyles}} activeOpacity={0.7}>
      <Text style={styles.customButtonText}>{label}</Text>
    </TouchableOpacity>
  )
}
const useCustomButtonHooks = (variant: Variants, width?: number) => {
  const variants = {
    primary: {
      backgroundColor: "#686de0",
      color: "#fff"
    },
    white: {
      color: "#686de0",
      backgroundColor: "#fff"
    },
    danger: {
      color: "#fff",
      backgroundColor: "#eb4d4b"
    }
  }

  const styles = StyleSheet.create({
    customButton: {
      height: 40,
      width: width ?? 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: variants[variant].backgroundColor,
    },
    customButtonText: {
      color: variants[variant].color,
      fontSize: 18,
      fontWeight: 'semibold',
      textTransform: 'capitalize'
    }
  })

  return {
    styles
  }
}

export default CustomButton
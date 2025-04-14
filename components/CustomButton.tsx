import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'

interface CustomButton {
  onPress: (event: GestureResponderEvent) => void
  title: string
  textStyles: string
  containerStyle?: string
}



const CustomButton: React.FC<CustomButton> = ({ onPress, title, containerStyle = '', textStyles = '' }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-[#32BB78] rounded-xl justify-center items-center ${containerStyle}`}
    >
      <Text className={`text-white font-semibold text-base ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton
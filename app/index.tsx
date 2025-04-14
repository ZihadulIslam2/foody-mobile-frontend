import CustomButton from '@/components/CustomButton';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-hi">
      <TouchableOpacity className="flex-row p-3 items-center">
        <AntDesign name="infocirlceo" size={14} color="#2563eb" />
        <Text className="text-blue-600 pl-2">Having any trouble?</Text>
      </TouchableOpacity>

      {/***********location and search***********/}
      <View className="flex justify-center items-center">
        {/***********location***********/}
        <View className="flex flex-row items-center justify-center border border-gray-400 rounded-lg p-3 mb-4">
          <EvilIcons name="location" size={20} color="#6B7280" />
          <Text className="text-gray-400">
            125/A, Beltola, Shewrapara, Dhaka
          </Text>
        </View>

        {/***********Search***********/}
        <View className="border border-gray-400 rounded-lg p-3 mb-4 flex-row items-center">
          <EvilIcons name="search" size={20} color="#6B7280" />
          <TextInput
            placeholder="Search"
            className="ml-2 flex-1 text-gray-700"
          />
        </View>
      </View>

      {/***********Hero Images***********/}
      <View className='flex justify-center items-center'>
        <Image
         source={require('../assets/images/Frame 76584.png')}
         className='cover h-[200] w-[330]'
         
         />
         
         </View>

      {/***********Features***********/}
      <View>
        <View></View>
      </View>

      {/***********Favourite Cuisines***********/}
      <View>
        <Text>Favorite Cuisines</Text>
        <View></View>
      </View>

      {/***********Popular foods***********/}
      <View>
        <View></View>
      </View>
    </View>
  );
}

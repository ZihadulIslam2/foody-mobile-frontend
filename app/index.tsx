import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';

// Fixed the invalid dynamic require call by replacing it with a static import for each image.
const cuisineImages: Record<number, any> = {
  168: require('@/assets/images/Cuisines/Ellipse 168.png'),
  177: require('@/assets/images/Cuisines/Ellipse 177.png'),
  178: require('@/assets/images/Cuisines/Ellipse 178.png'),
  179: require('@/assets/images/Cuisines/Ellipse 179.png'),
  180: require('@/assets/images/Cuisines/Ellipse 180.png'),
};

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">
        {/* Top Help Section */}
        <TouchableOpacity className="flex-row items-center mt-4 mb-2">
          <AntDesign name="infocirlceo" size={16} color="#2563eb" />
          <Text className="text-blue-600 pl-2 text-sm font-medium">
            Having any trouble?
          </Text>
        </TouchableOpacity>

        {/* Location & Search */}
        <View className="mt-4 mb-6">
          {/* Location */}
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-3">
            <EvilIcons name="location" size={24} color="#6B7280" />
            <Text className="text-gray-600 text-sm ml-2">
              125/A, Beltola, Shewrapara, Dhaka
            </Text>
          </View>

          {/* Search */}
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2">
            <EvilIcons name="search" size={24} color="#6B7280" />
            <TextInput
              placeholder="Search"
              className="ml-3 flex-1 text-gray-700 text-base"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Hero Image */}
        <View className="items-center mb-6">
          <Image
            source={require('../assets/images/Frame 76584.png')}
            className="w-full h-52 rounded-xl"
            resizeMode="cover"
          />
        </View>

        {/* Feature Card */}
        <View className="mb-8">
          <View className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold">Food Delivery</Text>
              <Image
                source={require('../assets/images/features/room_service_24dp_E8EAED.png')}
                className="w-6 h-6"
              />
            </View>
            <Text className="text-gray-500 text-sm mb-2">
              Order your favorite items
            </Text>
            <View className="flex-row items-center space-x-2">
              <Image
                source={require('../assets/images/features/flash.png')}
                className="w-4 h-4"
              />
              <Text className="text-sm text-green-600 font-semibold">
                Up to 30% off
              </Text>
            </View>
          </View>
        </View>

        {/* Favorite Cuisines */}
        <View className="mb-6">
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg font-semibold">Favorite Cuisines</Text>
            <Text className="text-sm text-gray-400">See All</Text>
          </View>
          <View className="flex-row justify-between">
            {[168, 177, 178, 179, 180].map((id, index) => (
              <Image
                key={index}
                source={cuisineImages[id]}
                className="w-14 h-14 rounded-full"
              />
            ))}
          </View>
        </View>

        {/* Popular Cuisines */}
        <Section title="Popular Cuisines" />
        <Section title="Fast Delivery" />
        <Section title="Budget Offers" />
      </ScrollView>
    </SafeAreaView>
  );
}

// Section Component to reduce repetition
const Section = ({ title }: { title: string }) => (
  <View className="mb-8">
    <View className="flex-row justify-between mb-4">
      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-sm text-gray-400">See All</Text>
    </View>

    <View className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 w-44">
      <Image
        source={require('@/assets/images/Popular Cuisines/Icon.png')}
        className="w-full h-24 rounded-md mb-2"
        resizeMode="cover"
      />
      <Text className="text-base font-semibold">CP Five Star</Text>
      <Text className="text-xs text-gray-500 mb-2">
        Fast food · Fried Chicken
      </Text>
      <View className="flex-row items-center space-x-1">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image
            key={index}
            source={require('@/assets/images/Popular Cuisines/Star 11.png')}
            className="w-3 h-3"
          />
        ))}
        <Text className="text-sm text-gray-600 ml-1">4.3 | $45</Text>
      </View>
    </View>
  </View>
);

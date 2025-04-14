import type React from "react"
import { useState } from "react"
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from "react-native"
import { MapPin, Search,  Truck,   Heart, ChevronRight } from "react-native-feather"
import { StatusBar } from "expo-status-bar"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define types for our data
type CuisineItem = {
  id: string
  image: string
  name: string
}

type FoodItem = {
  id: string
  image: string
  name: string
  restaurant: string
  description: string
  rating: number
  price: string
  isFavorite?: boolean
}

const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [orderType, setOrderType] = useState("delivery")

  // Sample data for cuisines
  const favouriteCuisines: CuisineItem[] = [
    {
      id: "1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Pizza",
    },
    {
      id: "2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Italian",
    },
    {
      id: "4",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Chinese",
    },
    {
      id: "5",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Indian",
    },
  ]

  // Sample data for popular cuisines
  const popularCuisines: FoodItem[] = [
    {
      id: "1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Fried Chicken",
      restaurant: "CP Five star",
      description: "Fast food-Fried Chicken",
      rating: 4.3,
      price: "$43",
    },
    {
      id: "2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Burger",
      restaurant: "CP Five star",
      description: "Fast food-Fried Chicken",
      rating: 4.3,
      price: "$43",
    },
    {
      id: "3",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Curry",
      restaurant: "CP Five star",
      description: "Fast food-Fried Chicken",
      rating: 4.3,
      price: "$43",
    },
    {
      id: "4",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
      name: "Biryani",
      restaurant: "CP Five star",
      description: "Fast food-Fried Chicken",
      rating: 4.3,
      price: "$43",
    },
  ]

  // Sample data for fast delivery
  const fastDelivery = [...popularCuisines]

  // Sample data for budget offers
  const budgetOffers = [...popularCuisines]

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="pt-12 px-4">
        <TouchableOpacity className="flex-row items-center mb-2">
          <Text className="text-blue-500 text-sm">Having any trouble?</Text>
        </TouchableOpacity>

        <View className="flex-row items-center border border-gray-300 rounded-lg p-3 mb-4">
          <MapPin width={20} height={20} color="#6B7280" />
          <Text className="ml-2 text-gray-700">125/A, Bettola, Shewrapara, Dhaka</Text>
        </View>

        <View className="border border-gray-300 rounded-lg p-3 mb-4 flex-row items-center">
          <Search width={20} height={20} color="#6B7280" />
          <TextInput placeholder="Search" className="ml-2 flex-1 text-gray-700" />
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View className="px-4 mb-6">
          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Flow%20-%2001-rJEXjIxDoQ6FckzhDPjZi477O3BrMe.png",
            }}
            className="w-full h-48 rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-row justify-center mt-2">
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${activeSlide === index ? "bg-gray-800" : "bg-gray-300"}`}
              />
            ))}
          </View>
        </View>

        {/* Order Options */}
        <View className="flex-row justify-between px-4 mb-8">
          <OrderOption
            icon={<Truck width={20} height={20} color="#6B7280" />}
            title="Food delivery"
            isActive={orderType === "delivery"}
            onPress={() => setOrderType("delivery")}
          />
          <OrderOption
            icon={<
              // Store width={20} height={20} color="#6B7280"
              FontAwesome5 name="store" size={24} color="black"

            />}
            title="Pickup"
            isActive={orderType === "pickup"}
            onPress={() => setOrderType("pickup")}
          />
          <OrderOption
            icon={
            // <Utensils width={20} height={20} color="#6B7280" />

          <FontAwesome5 name="utensils" size={24} color="black" />
          }
            title="Dine-in"
            isActive={orderType === "dine-in"}
            onPress={() => setOrderType("dine-in")}
          />
          <OrderOption
            icon={

            // <Sparkles width={20} height={20} color="#6B7280" />
            <Ionicons name="sparkles" size={24} color="black" />

          }
            title="New"
            isActive={orderType === "new"}
            onPress={() => setOrderType("new")}
          />
        </View>

        {/* Favourite Cuisines */}
        <SectionHeader title="Favourite Cuisines" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 mb-8">
          {favouriteCuisines.map((item) => (
            <TouchableOpacity key={item.id} className="mr-4 items-center">
              <Image source={{ uri: item.image }} className="w-16 h-16 rounded-full" />
              <Text className="mt-1 text-center text-xs">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Cuisines */}
        <SectionHeader title="Popular Cuisines" />
        <View className="px-4 mb-8">
          <FoodGrid items={popularCuisines} />
        </View>

        {/* Fast Delivery */}
        <SectionHeader title="Fast Delivery" />
        <View className="px-4 mb-8">
          <FoodGrid items={fastDelivery} />
        </View>

        {/* Budget Offers */}
        <SectionHeader title="Budget Offers" />
        <View className="px-4 mb-8">
          <FoodGrid items={budgetOffers} />
        </View>

        {/* Bottom padding */}
        <View className="h-20" />
      </ScrollView>
    </View>
  )
}

// Component for order options (Food delivery, Pickup, etc.)
const OrderOption = ({
  icon,
  title,
  isActive,
  onPress,
}: {
  icon: React.ReactNode
  title: string
  isActive: boolean
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      className={`border border-gray-300 rounded-lg p-3 w-[23%] items-center ${isActive ? 'bg-gray-100' : 'bg-white'}`}
      onPress={onPress}
    >
      {icon}
      <Text className="text-gray-800 text-xs mt-1 text-center">{title}</Text>
      <Text className="text-gray-600 text-[10px] mt-1">
        Order Your loved Item
      </Text>
      <View className="flex-row items-center mt-1">
        {/* <Sparkles width={12} height={12} color="#6B7280" /> */}

        <Ionicons name="sparkles" size={24} color="black" />

        <Text className="text-gray-600 text-[10px] ml-1">Upto 30% off</Text>
      </View>
    </TouchableOpacity>
  );
}

// Component for section headers (Favourite Cuisines, Popular Cuisines, etc.)
const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View className="flex-row justify-between items-center px-4 mb-4">
      <Text className="text-gray-800 font-semibold text-lg">{title}</Text>
      <TouchableOpacity className="flex-row items-center">
        <Text className="text-gray-500 text-xs mr-1">See All</Text>
        <ChevronRight width={16} height={16} color="#6B7280" />
      </TouchableOpacity>
    </View>
  )
}

// Component for food item grid (Popular Cuisines, Fast Delivery, Budget Offers)
const FoodGrid = ({ items }: { items: FoodItem[] }) => {
  return (
    <View className="flex-row flex-wrap justify-between">
      {items.slice(0, 4).map((item, index) => (
        <TouchableOpacity key={item.id + index} className="w-[48%] mb-4 bg-white rounded-lg overflow-hidden">
          <View className="relative">
            <Image source={{ uri: item.image }} className="w-full h-24" resizeMode="cover" />
            <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
              <Heart width={16} height={16} color="#6B7280" />
            </TouchableOpacity>
          </View>
          <View className="p-2">
            <Text className="text-gray-800 font-medium">{item.restaurant}</Text>
            <Text className="text-gray-500 text-xs">{item.description}</Text>
            <View className="flex-row items-center mt-1">
              <View className="flex-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Text key={star} className="text-yellow-500 text-xs">
                    ★
                  </Text>
                ))}
              </View>
              <Text className="text-gray-700 text-xs ml-1">{item.rating}</Text>
              <Text className="text-gray-700 text-xs ml-2">{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default HomeScreen

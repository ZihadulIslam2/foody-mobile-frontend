import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  return(
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  )
}
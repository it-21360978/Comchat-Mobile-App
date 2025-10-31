import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const router = useRouter();
  const user = useSelector((state: any) => state.user?.user);

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Back Button */}
      <TouchableOpacity
        className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center"
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={22} color="#0891b2" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-5xl font-bold text-black mt-16 mb-10 text-center">
        Profile
      </Text>

      {/* Profile Image */}
      <View className="items-center mb-10">
        <Image
          source={require("@/assets/images/profile.png")}
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>

      {/* Username  */}
      <View className="mb-12">
        <Text className="text-lg text-gray-600 mb-2">Username</Text>
        <View className="border border-cyan-300 rounded-lg p-4 bg-gray-50">
          <Text className="text-xl text-gray-800">
            {user?.name || "No username"}
          </Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        className="bg-cyan-600 py-4 rounded-full items-center mt-5 shadow-md"
        onPress={() => console.log("Profile view")}
      >
        <Text className="text-white font-semibold text-2xl">View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  // login navgate
  const handleStart = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-white justify-center items-center px-5">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {/* image */}
      <Image
        source={require("../assets/images/welcome.png")}
        className="w-auto h-64 mb-10"
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text className="text-5xl font-bold text-center text-black">
        Connect. Chat. Collaborate.
      </Text>

      {/* Privacy Policy */}
      <Text className="text-sm text-gray-500 mb-6 mt-36 text-start">
        Terms & Privacy Policy
      </Text>

      {/* Start Button */}
      <TouchableOpacity
        className="bg-cyan-600 px-10 py-4 rounded-full shadow-md active:opacity-80"
        onPress={handleStart}
      >
        <Text className="text-white font-semibold text-2xl">
          Start Messaging
        </Text>
      </TouchableOpacity>
    </View>
  );
}

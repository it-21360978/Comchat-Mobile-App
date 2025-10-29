import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatHeader({ username, onBack }) {
  return (
    <View className="flex-row items-center px-4 pt-14 pb-4 bg-white border-b border-gray-100 mt-2">
      <TouchableOpacity
        onPress={onBack}
        className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center"
      >
        <Ionicons name="chevron-back" size={22} color="#0891b2" />
      </TouchableOpacity>
      <Text className="text-xl font-semibold text-gray-900 ml-6">{username}</Text>
    </View>
  );
}

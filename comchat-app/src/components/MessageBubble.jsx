import React from "react";
import { View, Text } from "react-native";

export default function MessageBubble({ text, isSender }) {
  return (
    <View
      className={`max-w-[75%] p-3 mb-3 rounded-2xl ${
        isSender
          ? "bg-cyan-600 self-end rounded-tr-none"
          : "bg-cyan-200 self-start rounded-tl-none"
      }`}
    >
      <Text className={`text-base ${isSender ? "text-white" : "text-gray-800"}`}>
        {text}
      </Text>
    </View>
  );
}

import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim().length > 0) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="bg-transparent border-t border-gray-100 px-4 py-3"
    >
      <View className="flex-row items-center">
        <View className="flex-1 bg-gray-100 rounded-2xl px-4 py-6 mr-3">
          <TextInput
            className="text-gray-800"
            placeholder="Text here……"
            placeholderTextColor="#aaa"
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={46} color="#0891b2" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

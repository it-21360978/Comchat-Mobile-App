import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MessageInput({
  value,
  onChangeText,
  onSend,
  loading = false,
  disabled = false,
}) {
  return (
    <View className="bg-gray-200 border-t border-gray-100 px-5 py-6 pb-20 ">
      <View className="flex-row items-center">
        <View className="flex-1 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-200 mb-4">
          {/* Text input field */}
          <TextInput
            className="text-gray-800"
            placeholder="Type a message…"
            placeholderTextColor="#aaa"
            value={value}
            onChangeText={onChangeText}
            editable={!loading && !disabled}
          />
        </View>

        {/* Send button */}
        <TouchableOpacity
          onPress={onSend}
          disabled={loading || disabled}
          className="ml-3 mb-3"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#0891b2" />
          ) : (
            <Ionicons
              name="send"
              size={40}
              color={disabled ? "#94a3b8" : "#0891b2"}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from "react";
import { View, TouchableOpacity, ActivityIndicator, Text } from "react-native";

export default function Button({ onPress, loading }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        padding: 12,
        backgroundColor: "#0891b2",
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Send</Text>
      )}
    </TouchableOpacity>
  );
}

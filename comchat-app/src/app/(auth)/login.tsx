import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
    router.push("/(tabs)/chat");
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
    // Navigate to forgot password screen
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      {/* Back Button */}
      <TouchableOpacity className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center">
        <Ionicons name="chevron-back" size={22} color="#0891b2" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-6xl font-bold text-black mt-16 mb-12">Sign in</Text>

      {/* Username Field */}
      <Text className="text-gray-700 mb-2 text-xl">Username</Text>
      <TextInput
        className="border border-cyan-300 rounded-lg p-4 mb-5"
        placeholder="Enter your username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Field */}
      <Text className="text-gray-700 mb-2 text-xl">Password</Text>
      <View className="flex-row items-center border border-cyan-300 rounded-lg p-4 mb-6">
        <TextInput
          className="flex-1"
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={20}
            color="#0891b2"
          />
        </TouchableOpacity>
        
      </View>
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text className="text-right font-medium" style={{ color: "#0891b2" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity className="bg-cyan-600 py-4 rounded-full items-center mb-4 shadow-md mt-10" onPress={handleLogin}>
        <Text className="text-white font-semibold text-2xl">Sign in</Text>
      </TouchableOpacity>

      
    </View>
  );
}

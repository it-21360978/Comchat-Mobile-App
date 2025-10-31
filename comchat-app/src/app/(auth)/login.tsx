import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { setUser } from "@/store/userSlice";
import { loginUser } from "@/api/authApi";
import { loginValidationSchema } from "@/validations/loginValidation";

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      await loginValidationSchema.validate({ username }); // validate username

      setLoading(true);
      const user = await loginUser(username); // call API
      dispatch(setUser(user));

      Toast.show({
        type: "success",
        text1: `Welcome to ComChat :  ${user.name}!`,
      });
      router.push("/(tabs)/chat");
    } catch (error: any) {
      Toast.show({ type: "error", text1: error.message || "Login failed" });
    } finally {
      setLoading(false);
    }
  };

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
      <Text className="text-6xl font-bold text-black mt-16 mb-12">Sign in</Text>

      {/* Image */}
      <View className="items-center mb-10">
        <Image
          source={require("@/assets/images/chat.png")}
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>
      {/* Username Field */}
      <TextInput
        className="border border-cyan-300 rounded-lg p-4 mb-5 py-6 text-2xl"
        placeholder="Enter your username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Field */}
      {/* <Text className="text-gray-700 mb-2 text-xl">Password</Text>
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
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="#0891b2" />
        </TouchableOpacity>
      </View> */}

      {/* Forgot Password */}
      {/* <TouchableOpacity>
        <Text className="text-right font-medium" style={{ color: "#0891b2" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity> */}

      {/* SignIn Button */}
      <TouchableOpacity
        className="bg-cyan-600 py-4 rounded-full items-center mb-4 shadow-md mt-10"
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-semibold text-2xl">Sign in</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

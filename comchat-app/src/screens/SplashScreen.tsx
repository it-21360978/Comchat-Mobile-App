import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/welcome");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("@/assets/logo.png")}
        className=" w-44 h-44 mb-5"
        resizeMode="contain"
      />
      <Text className="text-4xl font-extrabold text-black tracking-widest">
        COMCHAT
      </Text>
    </View>
  );
}

// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function ChatHeader({ username, onBack }) {
//   return (
//     <View className="flex-row items-center px-4 pt-14 pb-4 bg-white border-b border-gray-100 mt-2">
//       <TouchableOpacity
//         onPress={onBack}
//         className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center"
//       >
//         <Ionicons name="chevron-back" size={22} color="#0891b2" />
//       </TouchableOpacity>
//       <Text className="text-xl font-semibold text-gray-900 ml-6">{username}</Text>
//     </View>
//   );
// }



import React from "react";
import { View, Text, TouchableOpacity ,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector ,useDispatch } from "react-redux";
import { clearRoom } from "@/store/messageSlice";

export default function ChatHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // get user

  // profile nav
  const goToProfile = () => {
    router.push("/(tabs)/profile"); // navgate profile
  };


  // clean chat
  const handleClearChat = () => {
    Alert.alert(
      "Clear Chat",
      "Are you sure you want to clear all messages?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => dispatch(clearRoom({ room: "public" })),
        },
      ]
    );
  };

  return (
    <View className="flex-row items-center justify-between px-4 pt-14 pb-4 bg-white border-b border-gray-100">
      {/* Back button */}
      <View className="flex-row items-center flex-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center"
        >
          <Ionicons name="chevron-back" size={22} color="#0891b2" />
        </TouchableOpacity>

        <View className="ml-4 flex-1">
          <Text
            className="text-xl font-semibold text-gray-900"
            numberOfLines={1}
          >
            Chat Room: {user?.name}
          </Text>
          <Text className="text-sm text-green-500">Online</Text>
        </View>
      </View>

      {/* Clear Chat icon */}
      <TouchableOpacity
        onPress={handleClearChat}
        className="w-10 h-10 items-center justify-center ml-2"
      >
        <Ionicons name="trash" size={22} color="red" />
      </TouchableOpacity>

      {/* profile icon */}
      <TouchableOpacity
        onPress={goToProfile}
        className="w-10 h-10 items-center justify-center ml-2"
      >
        <Ionicons name="person" size={24} color="#0891b2" />
      </TouchableOpacity>
    </View>
  );
}

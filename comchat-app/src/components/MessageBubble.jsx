import React from "react";
import { View, Text } from "react-native";

const MessageBubble = ({ message, isSender }) => (
  <View
    key={message.id}
    className={`mb-3 max-w-[75%] p-3 rounded-2xl ${
      isSender
        ? "bg-cyan-600 self-end rounded-tr-none"
        : "bg-gray-200 self-start rounded-tl-none"
    }`}
  >
    {!isSender && (
      <Text className="text-sm font-semibold text-gray-700 mb-1">
        {message.user_name}
      </Text>
    )}
    <Text className={`${isSender ? "text-white" : "text-black"} text-base`}>
      {message.text}
    </Text>
    <Text
      className={`text-[10px] mt-1 ${
        isSender ? "text-gray-200" : "text-gray-500"
      } text-right`}
    >
      {new Date(message.created_at).toLocaleTimeString([], {
        // format time
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Text>
  </View>
);

export default MessageBubble;

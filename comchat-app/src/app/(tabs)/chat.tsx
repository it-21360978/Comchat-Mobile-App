// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";

// export default function Chat() {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Good morning, hello?", sender: "other" },
//     { id: 2, text: "hello....", sender: "me" },
//     { id: 3, text: "Good morning, hello?", sender: "other" },
//     { id: 4, text: "hello....", sender: "me" },
//   ]);
//   const [input, setInput] = useState("");
//   const scrollViewRef = useRef(null);

//   const sendMessage = () => {
//     if (input.trim().length === 0) return;
//     setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
//     setInput("");
//   };

//   useEffect(() => {
//     scrollViewRef.current?.scrollToEnd({ animated: true });
//   }, [messages]);

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <KeyboardAvoidingView
//         className="flex-1"
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={90}
//       >
//         {/* Header */}
//         <View className="flex-row items-center px-4 pt-4 pb-3 border-b border-gray-100">
//           <TouchableOpacity className="w-10 h-10 bg-cyan-100 rounded-full items-center justify-center">
//             <Ionicons name="chevron-back" size={22} color="#0891b2" />
//           </TouchableOpacity>
//           <Text className="text-xl font-semibold text-gray-900 ml-3">
//             Gihan Sera
//           </Text>
//         </View>

//         {/* Chat Body */}
//         <ScrollView
//           ref={scrollViewRef}
//           className="flex-1 bg-cyan-50 px-4 py-3"
//           contentContainerStyle={{ paddingBottom: 100 }}
//         >
//           {messages.map((msg) => (
//             <View
//               key={msg.id}
//               className={`max-w-[75%] p-3 mb-3 rounded-2xl ${
//                 msg.sender === "me"
//                   ? "bg-cyan-600 self-end rounded-tr-none"
//                   : "bg-cyan-200 self-start rounded-tl-none"
//               }`}
//             >
//               <Text
//                 className={`text-base ${
//                   msg.sender === "me" ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 {msg.text}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>

//         {/* Message Input */}
//         <View className="flex-row items-center bg-white px-4 py-3 border-t border-gray-100">
//           <View className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-3">
//             <TextInput
//               className="text-gray-800"
//               placeholder="Text here……"
//               placeholderTextColor="#aaa"
//               value={input}
//               onChangeText={setInput}
//             />
//           </View>
//           <TouchableOpacity onPress={sendMessage}>
//             <Ionicons name="send" size={30} color="#0891b2" />
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }




import React, { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";

export default function Chat({ navigation }) {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([
    { id: 1, text: "Good morning, hello?", isSender: false },
    { id: 2, text: "hello....", isSender: true },
    { id: 3, text: "Good morning, hello?", isSender: false },
    { id: 4, text: "hello....", isSender: true },
  ]);

  const handleSend = (msg) => {
    setMessages([...messages, { id: Date.now(), text: msg, isSender: true }]);
  };

  return (
    <View className="flex-1 bg-cyan-50" >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Header */}
        <ChatHeader username="Gihan Sera" onBack={() => navigation.goBack()} />

        {/* Messages */}
        <ScrollView
          className="flex-1 px-4"
          contentContainerStyle={{ 
            paddingBottom: 90, // Adequate space for input
            paddingTop: 8 
          }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((m) => (
            <MessageBubble key={m.id} text={m.text} isSender={m.isSender} />
          ))}
        </ScrollView>

        {/* Message Input */}
        <View 
          className=" bg-transparent border-t border-gray-200"
          style={{ paddingBottom:30 }}
        >
          <MessageInput onSend={handleSend} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}






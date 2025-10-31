
// import React, { useState } from "react";
// import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import ChatHeader from "@/components/ChatHeader";
// import MessageBubble from "@/components/MessageBubble";
// import MessageInput from "@/components/MessageInput";

// export default function Chat({ navigation }) {
//   const insets = useSafeAreaInsets();
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Good morning, hello?", isSender: false },
//     { id: 2, text: "hello....", isSender: true },
//     { id: 3, text: "Good morning, hello?", isSender: false },
//     { id: 4, text: "hello....", isSender: true },
//   ]);

//   const handleSend = (msg) => {
//     setMessages([...messages, { id: Date.now(), text: msg, isSender: true }]);
//   };

//   return (
//     <View className="flex-1 bg-cyan-50" >
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         className="flex-1"
//       >
//         {/* Header */}
//         <ChatHeader username="Gihan Sera" onBack={() => navigation.goBack()} />

//         {/* Messages */}
//         <ScrollView
//           className="flex-1 px-4"
//           contentContainerStyle={{ 
//             paddingBottom: 90, // Adequate space for input
//             paddingTop: 8 
//           }}
//           showsVerticalScrollIndicator={false}
//         >
//           {messages.map((m) => (
//             <MessageBubble key={m.id} text={m.text} isSender={m.isSender} />
//           ))}
//         </ScrollView>

//         {/* Message Input */}
//         <View 
//           className=" bg-transparent border-t border-gray-200"
//           style={{ paddingBottom:30 }}
//         >
//           <MessageInput onSend={handleSend} />
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }






import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import ChatHeader from "@/components/ChatHeader";
import MessageInput from "@/components/MessageInput";
import MessageBubble from "@/components/MessageBubble";
import { useRealtime } from "@/hooks/useRealtime";
import { useSendPublicMessage } from "@/hooks/useSendPublicMessage";
import { ImageBackground } from "react-native";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import Toast from "react-native-toast-message";

export default function Chat() {
  const scrollRef = useRef<ScrollView>(null);
  const user = useSelector((state: any) => state.user?.user); //log user
  const myUserId = user?.id;
  const myUserName = user?.name;

  useRealtime(myUserId); // real-time updates

  const messages =
    useSelector((state: any) => state.messages.rooms?.["public"]) || []; // msgs

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [queue, setQueue] = useState<any[]>([]); // offline messages queue

  // hook
  const sendMessage = useSendPublicMessage(myUserId, myUserName);
  const isOnline = useNetworkStatus(); // network status

  // Auto-scroll
  useEffect(() => {
    const timeout = setTimeout(
      () => scrollRef.current?.scrollToEnd({ animated: true }),
      100
    );
    return () => clearTimeout(timeout);
  }, [messages]);

  // // Handle sending msg
  // const handleSend = async () => {
  //   if (!text.trim() || loading) return;
  //   setLoading(true);
  //   try {
  //     await sendMessage(text);
  //     setText("");
  //   } catch (err) {
  //     console.error("Failed to send message:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Send  queued msgs for back
  useEffect(() => {
    if (isOnline && queue.length > 0) {
      queue.forEach(async (msg) => {
        try {
          await sendMessage(msg.text);
        } catch (err) {
          console.error("Failed sending queued message:", err);
        }
      });
      setQueue([]); // clear queue
      Toast.show({
        type: "success",
        text1: "Back online",
        text2: "Queued messages sent",
      });
    }
  }, [isOnline]);

  // Handle sending msg
  const handleSend = async () => {
    if (!text.trim() || loading) return;

    const message = { text, id: Date.now() }; // temp id

    if (!isOnline) {
      // offline
      setQueue((prev) => [...prev, message]);
      Toast.show({
        type: "error",
        text1: "You are offline",
        text2: "Message queued and will send when back online",
      });
      setText("");
      return;
    }

    setLoading(true);
    try {
      await sendMessage(text);
      setText("");
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-cyan-50">
      {/* Header */}
      <ChatHeader />

      {/* Chat background & scroll */}
      <ImageBackground
        source={require("@/assets/images/wallpaper.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((m: any) => (
            <MessageBubble
              key={m.id}
              message={m}
              isSender={m.user_id === myUserId}
            />
          ))}
        </ScrollView>
      </ImageBackground>

      {/* Fixed input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
      >
        <MessageInput value={text} onChangeText={setText} onSend={handleSend} />
      </KeyboardAvoidingView>

      {/* spinner  */}
      {queue.length > 0 && (
        <View
          pointerEvents="box-none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
            zIndex: 10,
          }}
        >
          <View className="p-4 bg-yellow-200 rounded-lg flex-row items-center">
            <ActivityIndicator
              size="large"
              color={'#0891b2'}
              style={{ transform: [{ scale: 2 }] }} 
            />
          </View>
        </View>
      )}

      <Toast />
    </View>
  );
}

// Hide tab bar
export const unstable_settings = {
  tabBarStyle: { display: "none" },
};

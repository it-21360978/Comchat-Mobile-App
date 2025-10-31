// import { useDispatch } from "react-redux";
// import { getSocket } from "@/services/socket";
// import { addMessage } from "@/store/messageSlice";
// import { api } from "@/api";

// export const useSendPublicMessage = (myUserId: number, myUserName: string) => {
//   const dispatch = useDispatch(); // Get dispatch
//   const socket = getSocket(); // socket instance

//   const sendMessage = async (text: string) => {
//     const message = {
//       id: Date.now(),
//       user_id: myUserId,
//       user_name: myUserName,
//       text,
//       created_at: new Date().toISOString(),
//     };

//     // add to store
//     dispatch(addMessage({ room: "public", message }));

//     // Send backend
//     try {
//       await api.post("/messages", { user_id: myUserId, text });
//     } catch (err) {
//       console.error("Error saving message to DB:", err);
//     }

//     // emit the message
//     socket.emit("public_message", message);
//   };

//   return sendMessage;
// };


import { getSocket } from "@/services/socket";
import { api } from "@/api";

export const useSendPublicMessageAPI = {
  async sendPublicMessage(message: any) {
    const socket = getSocket(); // socket instance

    // Send to backend
    try {
      await api.post("/messages", {
        user_id: message.user_id,
        text: message.text,
      });
    } catch (err) {
      console.error("Error saving message to DB:", err);
    }

    // Emit via socket
    socket.emit("public_message", message);
  },

  // Create message object
  createMessage(userId: number, userName: string, text: string) {
    return {
      id: Date.now(),
      user_id: userId,
      user_name: userName,
      text,
      created_at: new Date().toISOString(),
    };
  },
};

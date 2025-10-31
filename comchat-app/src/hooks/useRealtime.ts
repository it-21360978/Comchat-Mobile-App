// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getSocket } from "@/services/socket";
// import { addMessage } from "@/store/messageSlice";
// import { Message } from "@/types";

// export const useRealtime = (myUserId: number) => {
//   const dispatch = useDispatch();
//   const socket = getSocket();

//   useEffect(() => {
//     socket.emit("join", "public");

//     const handleReceiveMessage = (message: Message) => {
//       dispatch(addMessage({ room: "public", message }));
//     };

//     socket.on("receive_message", handleReceiveMessage);

//     return () => {
//       socket.off("receive_message", handleReceiveMessage);
//     };
//   }, [dispatch, myUserId]);
// };

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSocket } from "@/services/socket";
import { addMessage } from "@/store/messageSlice";

export const useRealtime = (myUserId: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = getSocket();

    // Listen income msg
    socket.on("receive_message", (message) => {
      // Ignore my message
      if (message.user_id === myUserId) return;
      dispatch(addMessage({ room: "public", message })); // Add to store
    });

    return () => {
      socket.off("receive_message");
    };
  }, [myUserId]);
};
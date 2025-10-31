import { useDispatch } from "react-redux";
import { addMessage } from "@/store/messageSlice";
import { useSendPublicMessageAPI } from "@/api/useSendMessageAPI";

export const useSendPublicMessage = (myUserId: number, myUserName: string) => { // Get dispatch
  const dispatch = useDispatch();

  // 
  const sendMessage = async (text: string) => { 
    if (!text.trim()) return;

    // Creat object
    const message = useSendPublicMessageAPI.createMessage(myUserId, myUserName, text);

    // Add store
    dispatch(addMessage({ room: "public", message }));

    // Send API + socket
    await useSendPublicMessageAPI.sendPublicMessage(message);
  };

  return sendMessage;
};

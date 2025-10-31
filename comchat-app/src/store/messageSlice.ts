import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "@/types";

interface MessagesState {
  rooms: {
    [roomName: string]: Message[];
  };
}

const initialState: MessagesState = {
  // Messages room
  rooms: {
    public: [],
  },
};

const messagesSlice = createSlice({
  // Slice message
  name: "messages",
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<{ room: string; message: Message }>
    ) => {
      // Add msg
      const { room, message } = action.payload;
      if (!state.rooms[room]) state.rooms[room] = [];
      state.rooms[room].push(message);
    },
    clearRoom: (state, action: PayloadAction<{ room: string }>) => {
      state.rooms[action.payload.room] = [];
    },
  },
});

export const { addMessage, clearRoom } = messagesSlice.actions;
export default messagesSlice.reducer;


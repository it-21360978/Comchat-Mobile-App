import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../types';

interface MessageState {
  messages: Message[];
  loading: boolean;
}

const initialState: MessageState = {
  messages: [],
  loading: false,
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setMessages, addMessage, setLoading } = messageSlice.actions;
export default messageSlice.reducer;

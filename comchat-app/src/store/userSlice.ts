import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface UserState {
  user: User | null;
}

const initialState: UserState = { user: null }; // No user log

const userSlice = createSlice({
  // Slice user state
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      // Set user info
      state.user = action.payload; // Assign user data
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

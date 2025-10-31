import { api } from "@/api";

// Login
export const loginUser = async (username: string) => {
  try {
    const res = await api.post("/users", { name: username });
    return res.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Server error" };
  }
};

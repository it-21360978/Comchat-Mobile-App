export interface User {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  user_id: number;
  user_name: string;
  text: string;
  created_at: string;
}
export interface User {
  id: string;
  role: string;
}

 export interface UserState {
  user: User | null;
}

export interface User {
  id: string;
  userName:string;
  email:string;
  role: string;
}

 export interface UserState {
  user: User | null;
}

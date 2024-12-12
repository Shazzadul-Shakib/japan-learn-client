export interface User {
  _id: string;
  userName:string;
  email:string;
  profile:string;
  role: string;
}

 export interface UserState {
  user: User | null;
}

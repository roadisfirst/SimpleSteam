export interface User {
  email: string;
  username: string;
  password?: string;
  age: number;
}

export interface LoginRes {
  password: string;
  jwt_token: string;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string[];
}
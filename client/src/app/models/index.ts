export interface User {
  email: string;
  username: string;
  password?: string;
  age: number;
  games?: string[];
}

export interface LoginResponse {
  password: string;
  jwt_token: string;
}

export interface Game {
  _id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
}

export interface Message {
  message: string;
}
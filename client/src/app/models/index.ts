export interface User {
  _id: string,
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

export interface Tag {
  name: string;
  selected?: boolean;
}

export enum InviteStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}

export interface Invite {
  senderId: string;
  recieverId: string;
  status: InviteStatus;
}
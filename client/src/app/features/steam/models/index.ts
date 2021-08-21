export interface User {
  email: string;
  username: string;
  password: string;
  age: number;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string[];
}
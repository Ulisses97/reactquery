export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  birthdate: string;
  createdAt: string;
}

export interface UserDefaultValue {
  id?: string;
  name?: string;
  avatar?: string
  email?: string;
  birthdate?: string;
  createdAt?: string;
}
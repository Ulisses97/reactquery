import axios from "axios";
import { User } from '../models/UserModel'
const baseURL = "https://650a2adbf6553137159c797d.mockapi.io/";

async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${baseURL}users`);

  return response.data;
}
async function updateUserName(userId: string, name: string): Promise<User> {
  const response = await axios.put<User>(`${baseURL}users/${userId}`, { name });

  return response.data;
}

export const api = {
  getUsers,
  updateUserName,
};
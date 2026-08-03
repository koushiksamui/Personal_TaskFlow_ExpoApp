import * as SecureStore from "expo-secure-store";
import { user } from "../types/auth";

const TOKEN_KEY = "access_token";
const USER_KEY = "user";

export async function saveToken(token: string) {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function saveUser(user: user) {
  await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
}

export async function getToken() {
  return await SecureStore.getItemAsync(TOKEN_KEY);
}

export async function getUser() {
  return await SecureStore.getItemAsync(USER_KEY);
}

export async function deleteToken() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function deleteUser() {
  await SecureStore.deleteItemAsync(USER_KEY);
}

export async function clearStorage() {
  await deleteToken();
  await deleteUser();
}
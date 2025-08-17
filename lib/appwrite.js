import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform("dev.faatiha.test-react-native");

export const account = new Account(client);
export const avatars = new Avatars(client);

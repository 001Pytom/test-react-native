import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
// 68a35852003793883169
// books id 68a35880002d252554c4
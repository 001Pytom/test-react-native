import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="auto" />
      {/* so it wont show (auth)/the page name , 
      if u remove {headerShown: false} it will show just page name without auth ,
       thats after  doing this in main layout         
       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
       */}
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
}

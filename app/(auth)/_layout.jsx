import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useUser } from "../../hooks/useUser";

export default function AuthLayout() {
  const { user } = useUser();
  console.log(user, "user");
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

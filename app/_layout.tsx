import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home Screen" }}/>
    </Stack>
    );
}

export default RootLayout;
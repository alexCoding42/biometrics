import BiometricProvider from "../components/BiometricsProvider";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <BiometricProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Biometrics" }} />
          <Stack.Screen
            name="protected"
            options={{ title: "Protected Screen" }}
          />
        </Stack>
      </GestureHandlerRootView>
    </BiometricProvider>
  );
}

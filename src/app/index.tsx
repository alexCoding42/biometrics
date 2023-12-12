import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen options={{ title: "Biometrics" }} />

      <Text style={styles.title}>Biometrics</Text>
      <Text style={styles.description}>
        Use FaceID and Fingerprint to unlock the next screen.
      </Text>

      <Link href="/protected" asChild>
        <Button title="Go to Protected Screen" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
  },
});

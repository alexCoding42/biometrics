import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const ProtectedScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}>
        You have now access to protected information.
      </Text>

      <FontAwesome5 name="lock" size={75} color="gray" />
    </View>
  );
};

export default ProtectedScreen;

// simple splash screen
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📋</Text>

      <Text style={styles.title}>
        TaskFlow
      </Text>

      <ActivityIndicator
        size="large"
        color={Colors.primary}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 20,
    color: Colors.text,
  },
});
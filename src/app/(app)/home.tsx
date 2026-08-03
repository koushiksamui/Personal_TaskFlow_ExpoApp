import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/hooks/useAuth";

import Button from "../../components/ui/Button";
import { Colors } from "../../constants/colors";
import { router } from "expo-router";

export default function Home() {
  const { user, logout } = useAuth();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>📋</Text>

        <Text style={styles.title}>
          Welcome, {user?.name || "User"}!
        </Text>

        <Text style={styles.subtitle}>
          {user?.email || "Organize your work effortlessly."}
        </Text>

      </View>

      <Button
        title="Logout"
        onPress={logout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    padding: 24,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 70,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.text,
    marginTop: 20,
  },

  subtitle: {
    marginTop: 10,
    color: Colors.subText,
    textAlign: "center",
    fontSize: 16,
  },

});
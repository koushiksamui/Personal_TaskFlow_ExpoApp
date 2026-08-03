import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/hooks/useAuth";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();



  return (
    <SafeAreaView style={styles.container}>

      <View>

        <Text style={styles.title}>
          Welcome Back 👋
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue.
        </Text>

        <Input
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

      <Button
        title="Login"
        onPress={() => {
          login({
            id: "1",
            name: "John Doe",
            email
          });
        }}
      />
      <View style={styles.or}>
        <View style={styles.line}/>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}/>
        
      </View>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 40,
  },

  subtitle: {
    marginBottom: 40,
    color: "#6B7280",
    fontSize: 16,
  },
  or:{
    marginVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
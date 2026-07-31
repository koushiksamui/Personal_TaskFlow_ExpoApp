import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";
import { Colors } from "../constants/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>📋</Text>

        <Text style={styles.title}>
          TaskFlow
        </Text>

        <Text style={styles.subtitle}>
          Organize your work effortlessly.
        </Text>

      </View>

      <Button
        title="Get Started"
        onPress={() => {}}
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
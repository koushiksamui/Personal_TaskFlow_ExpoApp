import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";

type Props={
 label: string;
 placeholder: string;
 value: string;
 onChangeText: (value: string) => void;
 secureTextEntry?: boolean;
}

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  label: {
    marginBottom: 8,
    fontWeight: "600",
    color: Colors.text,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
  },
});
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  text: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 16,
  },
});
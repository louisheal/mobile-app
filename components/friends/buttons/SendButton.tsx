import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SendButton = ({ onSend }: { onSend: () => void }) => {
  return (
    <View style={styles.container}>
      <Pressable style={{...styles.button, backgroundColor: "white", flex: 1}} onPress={onSend}>
        <Text style={styles.text}>Send</Text>
        <MaterialIcons name="person-add-alt-1" size={25} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 180,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  text :{
    fontSize: 20,
  },
});

export default SendButton;
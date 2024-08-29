import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AcceptButton = ({ onAccept, onReject }: { onAccept: () => void, onReject: () => void }) => {
  return (
    <View style={styles.container}>
      <Pressable style={{...styles.button, backgroundColor: "white", flex: 1}} onPress={onAccept}>
        <Text style={styles.text}>Accept</Text>
        <MaterialIcons name="person-add-alt-1" size={25} color="black" />
      </Pressable>
      <Pressable style={{...styles.button, backgroundColor: "red"}} onPress={onReject}>
        <FontAwesome6 name="user-xmark" size={20} color="white" />
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

export default AcceptButton;
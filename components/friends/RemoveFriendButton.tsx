import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const RemoveFriendButton = ({ onRemove }: { onRemove: () => void }) => {

  return (
    <View style={styles.container}>
      <View style={{...styles.button, backgroundColor: "grey", flex: 1}}>
        <Text style={{...styles.text, color: "white"}}>Accepted</Text>
        <FontAwesome5 name="user-check" size={18} color="white" />
      </View>
      <Pressable style={{...styles.button, backgroundColor: "red"}} onPress={onRemove}>
        <MaterialIcons name="delete-forever" size={20} color="white" />
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

export default RemoveFriendButton;
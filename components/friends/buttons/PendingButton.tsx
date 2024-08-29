import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, Text, View } from "react-native";

const PendingButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Pending</Text>
        <FontAwesome5 name="user-clock" size={18} color="white" />
      </View>
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

export default PendingButton;
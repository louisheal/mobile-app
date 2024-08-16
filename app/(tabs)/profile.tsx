import { TicketContext } from "@/contexts/TicketContext";
import { useContext } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const Profile = () => {

  const {setUserId} = useContext(TicketContext);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setUserId("000000000000000000000000")}>
        <Text style={styles.text}>User 1</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setUserId("000000000000000000000001")}>
        <Text style={styles.text}>User 2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: 16,
  },
  button: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Profile;
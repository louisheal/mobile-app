import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import AcceptedButton from "./buttons/AcceptedButton";

const Friend = ({ friend, onRemove }: { friend: UserProps, onRemove: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      <AcceptedButton onRemove={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Friend;
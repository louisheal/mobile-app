import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import AcceptedButton from "./buttons/AcceptedButton";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const Friend = ({ friend }: { friend: UserProps }) => {
  const { onRemove } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      <AcceptedButton onRemove={() => onRemove(friend.id)} />
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
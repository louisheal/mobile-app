import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import AcceptButton from "@/components/friends/buttons/AcceptButton";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const FriendRequest = ({ friend }: { friend: UserProps }) => {
  const { onAccept, onReject } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      <AcceptButton onAccept={() => onAccept(friend.id)} onReject={() => onReject(friend.id)} />
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

export default FriendRequest;
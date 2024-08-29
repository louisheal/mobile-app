import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import AcceptButton from "@/components/friends/buttons/AcceptButton";

const FriendRequest = ({ friend, onAccept, onReject }: { friend: UserProps, onAccept: () => void, onReject: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      <AcceptButton onAccept={onAccept} onReject={onReject} />
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
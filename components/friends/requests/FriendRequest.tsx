import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import useFriendStatus from "@/hooks/useFriendStatus";
import AcceptButton from "@/components/friends/buttons/AcceptButton";

const FriendRequest = ({ friend, onAction }: { friend: UserProps, onAction: () => void }) => {

  const { sendRequest, removeFriend } = useFriendStatus(friend.id);

  const onAccept = () => {
    sendRequest();
    onAction();
  }

  const onReject = () => {
    removeFriend();
    onAction();
  }

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
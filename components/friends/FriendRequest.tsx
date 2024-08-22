import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import FriendRequestButton from "./FriendRequestButton";
import useFetchFriendStatus from "@/hooks/useFetchFriendStatus";

const FriendRequest = ({ friend, onAction }: { friend: UserProps, onAction: () => void }) => {

  const { sendRequest, removeFriend } = useFetchFriendStatus(friend.id);

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
      <FriendRequestButton onAccept={onAccept} onReject={onReject} />
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
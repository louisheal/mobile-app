import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import RemoveFriendButton from "./RemoveFriendButton";
import useFriendStatus from "@/hooks/useFriendStatus";

const Friend = ({ friend, onAction }: { friend: UserProps, onAction: () => void }) => {
  const { removeFriend } = useFriendStatus(friend.id);

  const onRemove = () => {
    removeFriend();
    onAction();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      <RemoveFriendButton onRemove={onRemove} />
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
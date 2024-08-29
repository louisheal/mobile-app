import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import useFriendStatus from "@/hooks/useFriendStatus";
import AcceptedButton from "./buttons/AcceptedButton";

const Friend = ({ friend, onAction }: { friend: UserProps, onAction: () => void }) => {
  const { removeFriend } = useFriendStatus(friend.id);

  const onRemove = () => {
    removeFriend();
    onAction();
  }

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
import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import Status from "@/types/status";
import AcceptButton from "../buttons/AcceptButton";
import AcceptedButton from "../buttons/AcceptedButton";
import PendingButton from "../buttons/PendingButton";
import SendButton from "../buttons/SendButton";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";
import useFriendStatus from "@/hooks/useFriendStatus";

const SearchResult = ({ friend }: { friend: UserProps }) => {

  const { status } = useFriendStatus(friend.id);
  const { onAccept, onReject, onSend, onRemove } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{friend.username}</Text>
      {status === Status.Accept && <AcceptButton onAccept={() => onAccept(friend.id)} onReject={() => onReject(friend.id)} />}
      {status === Status.Accepted && <AcceptedButton onRemove={() => onRemove(friend.id)} />}
      {status === Status.Pending && <PendingButton />}
      {status === Status.Send && <SendButton onSend={() => onSend(friend.id)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    // width: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default SearchResult;
import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import useFriendStatus from "@/hooks/useFriendStatus";
import Status from "@/types/status";
import AcceptButton from "../buttons/AcceptButton";
import AcceptedButton from "../buttons/AcceptedButton";
import PendingButton from "../buttons/PendingButton";
import SendButton from "../buttons/SendButton";

const SearchResult = ({ user }: { user: UserProps }) => {
  const { status, sendRequest, removeFriend } = useFriendStatus(user.id);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.username}</Text>
      {status === Status.Accept && <AcceptButton onAccept={sendRequest} onReject={removeFriend} />}
      {status === Status.Accepted && <AcceptedButton onRemove={removeFriend} />}
      {status === Status.Pending && <PendingButton />}
      {status === Status.Send && <SendButton onSend={sendRequest} />}
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

export default SearchResult;
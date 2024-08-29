import useFetchFriendStatus from "@/hooks/useFriendStatus";
import Status from "@/types/status";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const RequestButton = ({ friendID }: { friendID: string }) => {
  const { status, sendRequest, removeFriend } = useFetchFriendStatus(friendID);

  const icons = {
    accepted: <FontAwesome5 name="user-check" size={18} color="white" />,
    accept: <MaterialIcons name="person-add-alt-1" size={25} color="black" />,
    pending: <FontAwesome5 name="user-clock" size={18} color="white" />,
    send: <MaterialIcons name="person-add-alt-1" size={25} color="black" />,
    delete: <MaterialIcons name="delete-forever" size={20} color="white" />,
    reject: <FontAwesome6 name="user-xmark" size={20} color="white" />,
    none: <></>,
  }

  const messages = {
    accepted: "Accepted",
    accept: "Accept",
    pending: "Pending",
    send: "Send",
    none: "",
  }

  const backgroundColor =
    status === Status.Accepted || status === Status.Pending ? "grey" :
    status === Status.Accept || status === Status.Send ? "white" : "black";
  const textColor = status === Status.Accepted || status === Status.Pending ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable style={{...styles.button, backgroundColor: backgroundColor, flex: 1}} onPress={sendRequest}>
        <Text style={{...styles.text, color: textColor}}>{messages[status]}</Text>
        {icons[status]}
      </Pressable>
      {(status === Status.Accepted || status === Status.Accept) &&
        <Pressable style={{...styles.button, backgroundColor: "red"}} onPress={removeFriend}>
          {status === Status.Accepted ? icons.delete : icons.reject}
        </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 180,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  text :{
    fontSize: 20,
  },
});

export default RequestButton;
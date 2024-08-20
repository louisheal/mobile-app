import { TicketContext } from "@/contexts/TicketContext";
import useFetchFriendStatus from "@/hooks/useFetchFriendStatus";
import Status from "@/types/status";
import UserProps from "@/types/userProps";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const RequestButton = ({ user }: { user: UserProps }) => {

  const { userId } = useContext(TicketContext);
  const { status, sendRequest } = useFetchFriendStatus(userId, user.id);

  const icons = {
    accepted: <FontAwesome5 name="user-check" size={18} color="white" />,
    accept: <MaterialIcons name="person-add-alt-1" size={25} color="black" />,
    pending: <FontAwesome5 name="user-clock" size={18} color="white" />,
    send: <MaterialIcons name="person-add-alt-1" size={25} color="black" />,
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
    <Pressable style={{...styles.button, backgroundColor: backgroundColor}} onPress={sendRequest}>
      <Text style={{...styles.text, color: textColor}}>{messages[status]}</Text>
      {icons[status]}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: 140,
    justifyContent: "space-between",
  },
  text :{
    fontSize: 20,
  },
});

export default RequestButton;
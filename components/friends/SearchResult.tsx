import { TicketContext } from "@/contexts/TicketContext";
import useFetchFriendStatus from "@/hooks/useFetchFriendStatus";
import UserProps from "@/types/userProps";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SearchResult = ({ user }: {user: UserProps}) => {

  const { userId } = useContext(TicketContext);
  const { status, sendRequest } = useFetchFriendStatus(userId, user.id)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.username}</Text>
      {status == 'accepted' &&
        <Pressable style={styles.button2}>
          <Text style={styles.textWhite}>Accepted</Text>
          <FontAwesome5 name="user-check" size={20} color="white" />
        </Pressable>
      }
      {status == 'accept' &&
        <Pressable style={styles.button} onPress={sendRequest}>
          <Text style={styles.buttonText}>Accept</Text>
          <MaterialIcons name="person-add-alt-1" size={20} color="black" />
        </Pressable>
      }
      {status == 'pending' &&
        <Pressable style={styles.button2}>
          <Text style={styles.textWhite}>Pending</Text>
          <FontAwesome5 name="user-clock" size={20} color="white" />
        </Pressable>
      }
      {status == 'none' &&
        <Pressable style={styles.button} onPress={sendRequest}>
          <Text style={styles.buttonText}>Send</Text>
          <MaterialIcons name="person-add-alt-1" size={24} color="black" />
        </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button2 :{
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
  textWhite: {
    color: "white",
    fontSize: 20,
  },
});

export default SearchResult;
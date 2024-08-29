import { FlatList, StyleSheet, Text, View } from "react-native";
import FriendRequest from "./FriendRequest";
import UserProps from "@/types/userProps";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const RequestList = () => {
  const { requests, onAccept, onReject } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friend Requests</Text>
      <FlatList
        data={requests}
        renderItem={({item}) => <FriendRequest friend={item} onAccept={() => onAccept(item.id)} onReject={() => onReject(item.id)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RequestList;
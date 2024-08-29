import { FlatList, StyleSheet, Text, View } from "react-native";
import FriendRequest from "./FriendRequest";
import useFetchRequests from "@/hooks/useFetchRequests";

const RequestList = () => {
  const { requests, onAction } = useFetchRequests();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friend Requests</Text>
      <FlatList
        data={requests}
        renderItem={({item}) => <FriendRequest friend={item} onAction={() => onAction(item.id)} />}
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
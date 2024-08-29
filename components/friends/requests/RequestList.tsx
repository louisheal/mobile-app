import { FlatList, StyleSheet, Text, View } from "react-native";
import FriendRequest from "./FriendRequest";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const RequestList = () => {
  const { requests } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friend Requests</Text>
      <FlatList
        data={requests}
        renderItem={({item}) => <FriendRequest friend={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RequestList;
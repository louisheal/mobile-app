import { FlatList, StyleSheet, Text, View } from "react-native";
import Friend from "./Friend";
import { useContext } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const FriendList = () => {
  const { friends } = useContext(FriendContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends</Text>
      <FlatList
        data={friends}
        renderItem={({item}) => <Friend friend={item} />}
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

export default FriendList;
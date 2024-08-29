import { getFriends } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import UserProps from "@/types/userProps";
import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Friend from "./Friend";
import { FriendContext } from "@/contexts/FriendContext";

const FriendList = () => {
  const [friends, setFriends] = useState<UserProps[]>([]);
  const { userID } = useContext(TicketContext);
  const { states } = useContext(FriendContext)

  useEffect(() => {
    const loadFriends = async () => {
      const friends = await getFriends(userID);
      setFriends(friends);
    }

    loadFriends();
  }, [states]);

  const onAction = (friendID: string) => {
    setFriends(friends.filter(friend => friend.id != friendID))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends</Text>
      <FlatList
        data={friends}
        renderItem={({item}) => <Friend friend={item} onAction={() => onAction(item.id)} />}
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
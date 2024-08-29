import FriendList from "@/components/friends/FriendList";
import FriendSearch from "@/components/friends/FriendSearch";
import RequestList from "@/components/friends/RequestList";
import { FriendProvider } from "@/contexts/FriendContext";
import { View, StyleSheet } from "react-native";

const Friends = () => {
  return (
    <FriendProvider>
      <View style={styles.container}>
        <FriendSearch />
        <View style={styles.divider} />
        <RequestList />
        <View style={styles.divider} />
        <FriendList />
      </View>
    </FriendProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-between",
    gap: 8,
  },
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "grey",
  },
});

export default Friends;
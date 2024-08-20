import FriendSearch from "@/components/friends/FriendSearch";
import { View, StyleSheet } from "react-native";

const Friends = () => {
  return (
    <View style={styles.container}>
      <FriendSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Friends;
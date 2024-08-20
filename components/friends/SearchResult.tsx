import UserProps from "@/types/userProps";
import { StyleSheet, Text, View } from "react-native";
import RequestButton from "./RequestButton";

const SearchResult = ({ user }: {user: UserProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.username}</Text>
      <RequestButton user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default SearchResult;
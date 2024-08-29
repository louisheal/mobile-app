import { useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import useSearchUsers from "@/hooks/useSearchFriends";
import SearchResult from "./SearchResult";

const FriendSearch = () => {
  const [text, setText] = useState('');
  const [users] = useSearchUsers(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search..."
      />
      <FlatList
        data={users}
        renderItem={({item}) => <SearchResult friend={item} />}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    width: "95%",
    borderRadius: 8,
    padding: 8,
    marginBottom: 14,
  },
});

export default FriendSearch;
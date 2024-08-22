import { useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import SearchResult from "./SearchResult";
import useSearchUsers from "@/hooks/useSearchUsers";

const FriendSearch = () => {

  const [text, setText] = useState('');
  const [users] = useSearchUsers(text);

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search..."
      />
      <FlatList
        data={users}
        renderItem={({item}) => <SearchResult user={item}/>}
        keyboardShouldPersistTaps="always"
      />
    </>
  );
}

const styles = StyleSheet.create({
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
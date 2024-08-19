import { searchUsers } from "@/api/api";
import UserProps from "@/types/userProps";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput } from "react-native";

const FriendSearch = () => {

  const [text, setText] = useState('');
  const [users, setUsers] = useState<UserProps[]>([]);

  const changeText = async (newText: string) => {
    setText(newText);
    if (newText === '') {
      setUsers([]);
    } else {
      const users = await searchUsers(newText);
      setUsers(users);
    }
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={changeText}
        value={text}
        placeholder="Search..."
      />
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={{color: "white"}}>{item.username}</Text>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "white",
    width: "95%",
    borderRadius: 12,
  },
});

export default FriendSearch;
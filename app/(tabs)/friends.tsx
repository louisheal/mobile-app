import { searchUsers } from "@/api/api";
import UserProps from "@/types/userProps";
import { useState } from "react";
import { View, StyleSheet, TextInput, FlatList, Text } from "react-native";

const Friends = () => {
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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "white",
    width: "95%",
    borderRadius: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default Friends;
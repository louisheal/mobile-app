import { StyleSheet, Text, View } from "react-native"
import ClubProps from "@/types/clubProps";

const Club = ({ item }: { item: ClubProps }) => {
  return (
    <View style={styles.clubContainer}>
      <Text style={styles.club} >{item.name}</Text>
    </View>
  );
}

// TODO: Add style to clubContainer
const styles = StyleSheet.create({
  clubContainer: {},
  club: {
    padding: 12,
    margin: 12,
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 12,
    textAlign: "center",
  },
});

export default Club;
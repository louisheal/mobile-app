import { StyleSheet, Text, View } from "react-native"
import ClubProps from "@/types/clubProps";

const Club = ({ club }: { club: ClubProps }) => {
  return <Text style={styles.club} >{club.name}</Text>;
}

const styles = StyleSheet.create({
  club: {
    padding: 24,
    margin: 12,
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 12,
    textAlign: "center",
  },
});

export default Club;
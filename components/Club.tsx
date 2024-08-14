import { Text, Image, Dimensions, StyleSheet, View } from "react-native"
import ClubProps from "@/types/clubProps";

const imageWidth = Dimensions.get("window").width

const Club = ({ club }: { club: ClubProps }) => {
  return (
    <>
      <Text style={styles.text}>{club.name}</Text>
      <Image style={styles.image} source={{uri: club.img}} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageWidth,
    objectFit: "cover",
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});

export default Club;
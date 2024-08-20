import { Text, Image, Dimensions, StyleSheet, View } from "react-native"
import ClubProps from "@/types/clubProps";
import BuyTicketsButton from "../tickets/BuyTicketsButton";

const imageWidth = Dimensions.get("window").width

const Club = ({ club }: { club: ClubProps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Text style={styles.text}>{club.name}</Text>
        <BuyTicketsButton clubId={club.id} />
      </View>
      <Image style={styles.image} source={{uri: club.img}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 8,
  },
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
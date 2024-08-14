import { StyleSheet, Text, Modal, View, Pressable, Image, Dimensions } from "react-native"
import { useState } from "react";
import ClubProps from "@/types/clubProps";
import Rating from "@/components/Rating";
import { putRating } from "@/api/api";

const Club = ({ club }: { club: ClubProps }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(club.rating);

  const onSubmit = (value: number) => {
    setRating(value)
    setModalVisible(false)
    putRating({"clubId": club.id, "userId": "", value: value})
  }

  const imageWidth = Dimensions.get("window").width

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>This is a popup for {club.name}</Text>
            <Rating onSubmit={onSubmit} close={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 12}}>
        <View style={{flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
          <Text style={{color: "white", fontSize: 20}}>{club.name}</Text>
        </View>
        <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "white", fontSize: 20}}>{rating}</Text>
        </View>
        <View style={{flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
          <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={{color: "black", fontSize: 20}}>Rate</Text>
          </Pressable>
        </View>
      </View>
      <View style={{width: "100%", height: 0, paddingBottom: "100%", backgroundColor: "white"}}>
        {club.img && <Image style={{width: imageWidth, height: imageWidth, objectFit: "cover"}} source={{uri: club.img}} />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  club: {
    padding: 24,
    margin: 12,
    fontSize: 18,
    borderRadius: 12,
    textAlign: "center",
    borderColor: "white",
    borderWidth: 1,
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: "white",
  },
});

export default Club;
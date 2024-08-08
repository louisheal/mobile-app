import { StyleSheet, Text, Modal, View } from "react-native"
import { useState } from "react";
import ClubProps from "@/types/clubProps";
import Rating from "@/components/Rating";
import { putRating } from "@/api/api";

const Club = ({ club }: { club: ClubProps }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const onSubmit = (value: number) => {
    setRating(value)
    setModalVisible(false)
    putRating({"clubId": club.id, "userId": "", value: value})
  }

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
            <Text>This is a popup for {club.name}</Text>
            <Rating onSubmit={onSubmit}/>
          </View>
        </View>
      </Modal>
      <Text style={styles.club} onPress={() => setModalVisible(true)} >{club.name}: {rating}</Text>
    </>
  );
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 64,
    backgroundColor: 'white',
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
  }
});

export default Club;
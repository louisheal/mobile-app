import { createTicket } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import { useContext, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const BuyTicketsButton = ({ clubId }: { clubId : string }) => {

  const [showModal, setShowModal] = useState(false);
  const {addTicket, userId} = useContext(TicketContext);

  const onSubmit = async () => {
    const id = await createTicket({"clubId": clubId, "userId": userId});
    addTicket({"id": id, "clubId": clubId, "userId": userId});
    setShowModal(false);
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={{borderColor: "white", borderWidth: 1, borderRadius: 8, padding: 8}} onPress={() => setShowModal(false)}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable style={{borderColor: "white", borderWidth: 1, borderRadius: 8, padding: 8}} onPress={async () => await onSubmit()}>
              <Text style={styles.text}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setShowModal(true)}>
        <Text style={styles.text}>Buy Tickets</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});

export default BuyTicketsButton;
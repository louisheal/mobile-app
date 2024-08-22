import { createTicket } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import { useContext, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const BuyTicketsButton = ({ clubID }: { clubID : string }) => {

  const [showModal, setShowModal] = useState(false);
  const { addTicket, userID } = useContext(TicketContext);

  const onSubmit = async () => {
    const id = await createTicket({"clubID": clubID, "userID": userID});
    addTicket({"id": id, "clubID": clubID, "userID": userID});
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
            <Pressable style={styles.button} onPress={() => setShowModal(false)}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={async () => await onSubmit()}>
              <Text style={styles.text}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button2} onPress={() => setShowModal(true)}>
        <Text style={styles.textBlack}>Buy Tickets</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 20,
    color: "black",
  },
  button2: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8
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
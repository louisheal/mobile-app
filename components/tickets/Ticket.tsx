import TicketProps from "@/types/ticketProps";
import { StyleSheet, Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

const Ticket = ({ ticket }: { ticket: TicketProps }) => {
  return (
    <View style={styles.container}>
      <QRCode backgroundColor="white" value={ticket.id} size={200}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Ticket;
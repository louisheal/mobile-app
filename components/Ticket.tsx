import TicketProps from "@/types/ticketProps";
import { Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

const Ticket = ({ ticket }: { ticket: TicketProps }) => {
  return (
    <View>
      <QRCode value={ticket.id} size={200}/>
      <Text>{ticket.id}</Text>
    </View>
  );
}

export default Ticket;
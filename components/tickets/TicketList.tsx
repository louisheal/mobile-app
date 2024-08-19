import { FlatList } from "react-native";
import Ticket from "@/components/tickets/Ticket";
import { useContext } from "react";
import { TicketContext } from "@/contexts/TicketContext";

const TicketList = () => {

  const {tickets} = useContext(TicketContext);

  return (
    <FlatList 
      data={tickets}
      renderItem={({item}) => <Ticket ticket={item}/>}
      keyExtractor={(ticket) => ticket.id}
      style={{width: "100%"}}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default TicketList;
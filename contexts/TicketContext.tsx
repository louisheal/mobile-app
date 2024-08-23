import useFetchTickets from "@/hooks/useFetchTickets";
import TicketProps from "@/types/ticketProps";
import { createContext, useState } from "react"

interface TicketContextType {
  tickets: TicketProps[]
  userID: string
  addTicket: (ticket: TicketProps) => void
  setUserID: (userID: string) => void
}

const TicketContext = createContext<TicketContextType>({
  tickets: [],
  userID: "",
  addTicket: () => {},
  setUserID: () => {},
});

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [userID, setUserID] = useState("000000000000000000000000");
  const {tickets, addTicket} = useFetchTickets(userID);
  
  return (
    <TicketContext.Provider value={{tickets, userID, addTicket, setUserID}}>
      {children}
    </TicketContext.Provider>
  );
}

export { TicketContext, TicketProvider };
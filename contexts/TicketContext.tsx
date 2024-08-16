import useFetchTickets from "@/hooks/useFetchTickets";
import TicketProps from "@/types/ticketProps";
import { createContext, useState } from "react"

interface TicketContextType {
  tickets: TicketProps[]
  userId: string
  addTicket: (ticket: TicketProps) => void
  setUserId: (userId: string) => void
}

const TicketContext = createContext<TicketContextType>({
  tickets: [],
  userId: "",
  addTicket: () => {},
  setUserId: () => {},
});

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState("000000000000000000000000");
  const {tickets, addTicket} = useFetchTickets(userId);
  
  return (
    <TicketContext.Provider value={{tickets, userId, addTicket, setUserId}}>
      {children}
    </TicketContext.Provider>
  );
}

export { TicketContext, TicketProvider };
import useFetchTickets from "@/hooks/useFetchTickets";
import TicketProps from "@/types/ticketProps";
import { createContext } from "react"

interface TicketContextType {
  tickets: TicketProps[]
  addTicket: (ticket: TicketProps) => void
}

const TicketContext = createContext<TicketContextType>({
  tickets: [],
  addTicket: () => {},
});

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const { tickets, addTicket } = useFetchTickets();
  
  return (
    <TicketContext.Provider value={{tickets, addTicket}}>
      {children}
    </TicketContext.Provider>
  );
}

export { TicketContext, TicketProvider };
import { fetchTickets } from "@/api/api";
import TicketProps from "@/types/ticketProps";
import { useEffect, useState } from "react";

const useFetchTickets = (userID: string) => {
  const [tickets, setTickets] = useState<TicketProps[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchTickets(userID);
        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTickets();
  }, [userID]);

  const addTicket = (ticket: TicketProps) => {
    setTickets(prevTickets => [...prevTickets, ticket]);
  }

  return { tickets, addTicket };
}

export default useFetchTickets;
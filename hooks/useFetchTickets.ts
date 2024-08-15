import { fetchTickets } from "@/api/api";
import TicketProps from "@/types/ticketProps";
import { useEffect, useState } from "react";

const useFetchTickets = () => {
  const [tickets, setTickets] = useState<TicketProps[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTickets();
  }, []);

  const addTicket = (ticket: TicketProps) => {
    setTickets(prevTickets => [...prevTickets, ticket]);
  }

  return { tickets, addTicket };
}

export default useFetchTickets;
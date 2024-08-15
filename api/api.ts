import axios from "axios";
import ClubProps from "@/types/clubProps";
import TicketProps from "@/types/ticketProps";
import NewTicketProps from "@/types/newTicketProps";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

const fetchTickets = async () => {
  const { data: tickets } = await api.get<TicketProps[]>('/tickets');
  return tickets;
}

const createTicket = async (newTicket : NewTicketProps) => {
  const { data: id } = await api.post('/ticket', newTicket);
  return id;
}

export {fetchClubs, fetchTickets, createTicket};
import axios from "axios";
import ClubProps from "@/types/clubProps";
import TicketProps from "@/types/ticketProps";
import NewTicketProps from "@/types/newTicketProps";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

export const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

export const fetchTickets = async () => {
  const { data: tickets } = await api.get<TicketProps[]>('/tickets');
  return tickets;
}

export const createTicket = async (newTicket: NewTicketProps) => {
  const { data: id } = await api.post('/ticket', newTicket);
  return id;
}

export const useTicket = async (ticketId: string) => {
  const { data: msg } = await api.put(`/ticket?ticketId=${ticketId}`);
  return msg;
}

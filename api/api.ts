import axios from "axios";
import ClubProps from "@/types/clubProps";
import TicketProps from "@/types/ticketProps";
import NewTicketProps from "@/types/newTicketProps";
import UserProps from "@/types/userProps";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

export const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

export const fetchTickets = async (userId: string) => {
  const { data: tickets } = await api.get<TicketProps[]>(`/tickets/${userId}`);
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

export const searchUsers = async (username: string) => {
  const { data: users } = await api.get<UserProps[]>(`/users/${username}`);
  return users;
}

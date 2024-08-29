import axios from "axios";
import ClubProps from "@/types/clubProps";
import TicketProps from "@/types/ticketProps";
import NewTicketProps from "@/types/newTicketProps";
import UserProps from "@/types/userProps";
import Status from "@/types/status";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

export const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

export const fetchTickets = async (userID: string) => {
  const { data: tickets } = await api.get<TicketProps[]>(`/tickets?userID=${userID}`);
  return tickets;
}

export const createTicket = async (newTicket: NewTicketProps) => {
  const { data: id } = await api.post('/tickets', newTicket);
  return id;
}

export const useTicket = async (ticketId: string) => {
  const { data: msg } = await api.put(`/tickets?ticketId=${ticketId}`);
  return msg;
}

export const searchUsers = async (username: string) => {
  const { data: users } = await api.get<UserProps[]>(`/users?username=${username}`);
  return users;
}

export const sendFriendRequest = async (sender: string, recipient: string) => {
  await api.post('/friends', {sender: sender, recipient: recipient});
}

export const getFriendRequestStatus = async (fstUser: string, sndUser: string) => {
  const { data: status } = await api.get<Status>(`/friends/${fstUser}/${sndUser}`);
  return status;
}

export const deleteFriend = async (fstUser: string, sndUser: string) => {
  await api.delete(`/friends/${fstUser}/${sndUser}`);
}

export const getFriendRequests = async (userID: string) => {
  const { data: requests } = await api.get<UserProps[]>(`/friends/requests?userID=${userID}`);
  return requests;
}

export const getFriends = async (userID: string) => {
  const { data: friends } = await api.get<UserProps[]>(`/friends?userID=${userID}`);
  return friends;
}

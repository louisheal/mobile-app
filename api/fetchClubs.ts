import axios from "axios";
import ClubProps from "@/types/clubProps";

const api = axios.create({
  baseURL: process.env.BACKEND_API_URL
});

const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

export default fetchClubs;
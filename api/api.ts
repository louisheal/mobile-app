import axios from "axios";
import ClubProps from "@/types/clubProps";
import RatingProps from "@/types/ratingProps";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

const fetchClubs = async () => {
  const { data: clubs } = await api.get<ClubProps[]>('/clubs');
  return clubs;
}

const putRating = async (rating: RatingProps) => {
  await api.put('/rating', rating);
}

export {fetchClubs, putRating};
import fetchClubs from "@/api/fetchClubs";
import { useEffect, useState } from "react";
import ClubProps from "@/types/clubProps";

const useFetchClubs = () => {
  const [clubs, setClubs] = useState<ClubProps[]>([]);

  useEffect(() => {
    const loadClubs = async () => {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadClubs();
  }, []);

  return [clubs];
}

export default useFetchClubs;
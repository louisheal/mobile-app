import fetchClubs from "@/api/fetchClubs";
import { useEffect, useState } from "react";
import ClubProps from "@/types/clubProps";

const useFetchClubs = () => {
  const [clubs, setClubs] = useState<ClubProps[]>([]);

  useEffect(() => {
    const loadClubs = async () => {
      const data = await fetchClubs();
      setClubs(data);
    };

    loadClubs();
  }, []);

  return [clubs];
}

export default useFetchClubs;
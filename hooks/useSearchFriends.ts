import { searchUsers } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import UserProps from "@/types/userProps";
import { useContext, useEffect, useState } from "react";

const useSearchFriends = (text: string) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const { userID } = useContext(TicketContext);

  useEffect(() => {
    const loadUsers = async () => {
      if (text === '') {
        setUsers([]);
      } else {
        const users = (await searchUsers(text))
          .filter((user) => user.id != userID);
        setUsers(users);
      }
    }

    loadUsers();
  }, [text, userID]);

  return [users];
}

export default useSearchFriends;
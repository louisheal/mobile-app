import { searchUsers } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import UserProps from "@/types/userProps";
import { useContext, useEffect, useState } from "react";

const useSearchUsers = (text: string) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const { userId } = useContext(TicketContext);

  useEffect(() => {
    const loadUsers = async () => {
      if (text === '') {
        setUsers([]);
      } else {
        const users = (await searchUsers(text))
          .filter((user) => user.id != userId);
        setUsers(users);
      }
    }

    loadUsers();
  }, [text, userId]);

  return [users];
}

export default useSearchUsers;
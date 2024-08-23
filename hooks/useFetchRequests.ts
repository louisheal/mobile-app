import { getFriendRequests } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import UserProps from "@/types/userProps";
import { useContext, useEffect, useState } from "react";
import { FriendContext } from "@/contexts/FriendContext";

const useFriendRequests = () => {
  const { userID } = useContext(TicketContext);
  const [requests, setRequests] = useState<UserProps[]>([]);
  const { states } = useContext(FriendContext);
 
  useEffect(() => {
    const loadRequests = async () => {
      const requests = await getFriendRequests(userID);
      setRequests(requests);
    }

    loadRequests();
  }, [userID, states]);

  const onAction = (friendID: string) => {
    setRequests(requests.filter(friend => friend.id != friendID));
  }

  return { requests, onAction };
}

export default useFriendRequests;
import { useContext, useEffect } from "react";
import { getFriendRequestStatus } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import { FriendContext } from "@/contexts/FriendContext";

const useFriendStatus = (friendID: string) => {
  const { userID } = useContext(TicketContext);
  const { states, setState } = useContext(FriendContext);

  useEffect(() => {
    const loadStatus = async () => {
      const status = await getFriendRequestStatus(userID, friendID);
      setState(friendID, status);
    };

    loadStatus();
  }, [userID]);

  return { status: states[friendID] };
}

export default useFriendStatus;
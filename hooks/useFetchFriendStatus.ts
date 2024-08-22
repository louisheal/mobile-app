import { useContext, useEffect, useState } from "react";
import { deleteFriend, getFriendRequestStatus, sendFriendRequest } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import Status from "@/types/status";

const useFetchFriendStatus = (sender: string, recipient: string) => {
  const [status, setStatus] = useState(Status.None);
  const { userId } = useContext(TicketContext);

  const loadStatus = async () => {
    const status = await getFriendRequestStatus(sender, recipient);
    setStatus(status);
  };

  useEffect(() => {
    loadStatus();
  }, [userId]);

  const sendRequest = async () => {
    await sendFriendRequest(sender, recipient);
    loadStatus();
  }

  const removeFriend = async () => {
    await deleteFriend(sender, recipient);
    loadStatus();
  }

  return { status, sendRequest, removeFriend };
}

export default useFetchFriendStatus;
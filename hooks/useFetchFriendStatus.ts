import { useContext, useEffect, useState } from "react";
import { getFriendRequestStatus, sendFriendRequest } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";

const useFetchFriendStatus = (sender: string, recipient: string) => {
  const [status, setStatus] = useState('');
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

  return { status, sendRequest };
}

export default useFetchFriendStatus;
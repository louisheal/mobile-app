import { useContext, useEffect } from "react";
import { deleteFriend, getFriendRequestStatus, sendFriendRequest } from "@/api/api";
import { TicketContext } from "@/contexts/TicketContext";
import { FriendContext } from "@/contexts/FriendContext";

const useFriendStatus = (friendID: string) => {

  const { userID } = useContext(TicketContext);
  const { states, updateState } = useContext(FriendContext);

  const loadStatus = async () => {
    const status = await getFriendRequestStatus(userID, friendID);
    updateState(friendID, status);
  };

  useEffect(() => {
    loadStatus();
  }, [userID]);

  const sendRequest = async () => {
    await sendFriendRequest(userID, friendID);
    loadStatus();
  }

  const removeFriend = async () => {
    await deleteFriend(userID, friendID);
    loadStatus();
  }

  return {
    status: states[friendID],
    sendRequest,
    removeFriend
  };
}

export default useFriendStatus;
import { deleteFriend, getFriendRequests, getFriends, sendFriendRequest } from "@/api/api";
import { createContext, useContext, useEffect, useState } from "react"
import { TicketContext } from "./TicketContext";
import UserProps from "@/types/userProps";
import Status from "@/types/status";

interface FriendContextType {
  friends: UserProps[];
  requests: UserProps[];
  onSend: (id: string) => void;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onRemove: (id: string) => void;
  states: {[id: string]: Status};
  setState: (id: string, status: Status) => void;
}

const FriendContext = createContext<FriendContextType>({
  friends: [],
  requests: [],
  onSend: () => {},
  onAccept: () => {},
  onReject: () => {},
  onRemove: () => {},
  states: {},
  setState: () => {},
});

const FriendProvider = ({ children }: { children: React.ReactNode }) => {
  const { userID } = useContext(TicketContext);
  const [friends, setFriends] = useState<UserProps[]>([]);
  const [requests, setRequests] = useState<UserProps[]>([]);
  const [states, setStates] = useState({});

  useEffect(() => {
    const loadFriends = async () => {
      const friends = await getFriends(userID);
      setFriends(friends);
    };

    const loadRequests = async () => {
      const requests = await getFriendRequests(userID);
      setRequests(requests);
    };

    loadFriends();
    loadRequests();
    setStates([]);
  }, [userID]);

  const onSend = (friendID: string) => {
    setStates(prev => ({...prev, [friendID]: Status.Pending}));
    sendFriendRequest(userID, friendID);
  }

  const onAccept = (friendID: string) => {
    setStates(prev => ({...prev, [friendID]: Status.Accepted}));
    const friend = requests.find(item => item.id === friendID);
    if (friend) {
      setRequests(prev => prev.filter(item => item.id !== friendID));
      setFriends(prev => [...prev, friend]);
      sendFriendRequest(userID, friendID);
    }
  }
  
  const onReject = (friendID: string) => {
    setStates(prev => ({...prev, [friendID]: Status.Send}));
    setRequests(prev => prev.filter(item => item.id !== friendID));
    deleteFriend(userID, friendID);
  }

  const onRemove = (friendID: string) => {
    setStates(prev => ({...prev, [friendID]: Status.Send}));
    setFriends(prev => prev.filter(item => item.id !== friendID));
    deleteFriend(userID, friendID);
  }

  const setState = (friendID: string, status: Status) => {
    setStates(prev => ({...prev, [friendID]: status}));
  }

  return (
    <FriendContext.Provider value={{friends, requests, onSend, onAccept, onReject, onRemove, states, setState}}>
      {children}
    </FriendContext.Provider>
  );
}

export { FriendContext, FriendProvider };
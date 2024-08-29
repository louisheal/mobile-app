import Status from "@/types/status";
import { createContext, useState } from "react"

interface FriendContextType {
  states: {[id: string]: Status};
  updateState: (id: string, status: Status) => void;
}

const FriendContext = createContext<FriendContextType>({
  states: {},
  updateState: () => {},
});

const FriendProvider = ({ children }: { children: React.ReactNode }) => {
  const [states, setStates] = useState<{ [id: string]: Status }>({});

  const updateState = (id: string, status: Status) => {
    setStates(prev => ({...prev, [id]: status}))
  }

  return (
    <FriendContext.Provider value={{states, updateState}}>
      {children}
    </FriendContext.Provider>
  );
}

export { FriendContext, FriendProvider };
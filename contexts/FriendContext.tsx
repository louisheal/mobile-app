import Status from "@/types/status";
import { createContext, useState } from "react"

interface FriendContextType {
  states: {[id: string]: Status};
  setStates: React.Dispatch<React.SetStateAction<{ [id: string]: Status }>>;
}

const FriendContext = createContext<FriendContextType>({
  states: {},
  setStates: () => {},
});

const FriendProvider = ({ children }: { children: React.ReactNode }) => {
  const [states, setStates] = useState<{ [id: string]: Status }>({});

  return (
    <FriendContext.Provider value={{states, setStates}}>
      {children}
    </FriendContext.Provider>
  );
}

export { FriendContext, FriendProvider };
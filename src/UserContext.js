import { createContext, useContext, useState } from "react";
import { storageRead } from "./utils/storage";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(storageRead("user"));

  const updateUserContext = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <UserContext.Provider value={{ user, updateUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

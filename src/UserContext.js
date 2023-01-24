import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

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

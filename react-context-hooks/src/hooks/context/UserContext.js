import React, { createContext, useState, useMemo } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;

import React, { createContext, useState, useContext } from 'react';
import { getLoggedInUser, logout as logoutUser } from '../api/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    const loggedInUser = await getLoggedInUser();
    setUser(loggedInUser);
    setLoading(false);
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, logout, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

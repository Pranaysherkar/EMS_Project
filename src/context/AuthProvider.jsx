import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [UserData, setUserData] = useState([]);
  
  useEffect(() => {
    setLocalStorage();
    const {employees} = getLocalStorage();
   setUserData(employees)
  }, [])
  
  
  return (
    <div>
      <AuthContext.Provider value={[UserData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

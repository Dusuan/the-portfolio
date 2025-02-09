"use client"

import { createContext, useContext, useState } from "react";

interface AppContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Create the context
const AppContext = createContext<AppContextType>({
    isOpen: false,
    setIsOpen: () => {},
});

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
    children: React.ReactNode;
}
// Provider component
export const AppProvider = ({ children } : AppProviderProps) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};
